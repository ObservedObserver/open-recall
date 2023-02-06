// Copyright (C) 2023 observedobserver
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import GameResult from "./result";

const IMAGE_NUMBER = 6;

function randImageSrc() {
    return `/images/series-0-${Math.round(Math.random() * IMAGE_NUMBER) % IMAGE_NUMBER}.png`;
}

interface IGamePanelProps {
    level: number;
    time: number;
}
export default function GamePanel() {
    const router = useRouter();
    const query = router.query;
    const level = Number(query.level) || 1;
    const time = Number(query.time) || 10;
    const [imageList, setImageList] = useState<string[]>([randImageSrc()]);
    const [timeLeft, setTimeLeft] = useState(time);
    const [stat, setStat] = useState<{ match: number; correct: number; totalMatch: number; total: number }>({
        match: 0,
        correct: 0,
        totalMatch: 0,
        total: 0,
    });
    const started = imageList.length > level;
    const currentImage = imageList[imageList.length - 1];
    const targetImage = imageList[imageList.length - level - 1];
    const checkAnswer = useCallback(
        (match: boolean) => {
            if (!started) {
                return;
            }
            setStat((preStat) => {
                const nextStat = { ...preStat };
                nextStat.total++;
                if (targetImage === currentImage) {
                    nextStat.totalMatch++;
                    if (match) {
                        nextStat.correct++;
                        nextStat.match++;
                    }
                } else {
                    if (!match) {
                        nextStat.correct++;
                    }
                }
                return nextStat;
            });
        },
        [currentImage, targetImage, started]
    );
    useEffect(() => {
        if (started && timeLeft > 0) {
            const timer = setTimeout(() => {
                if (timeLeft - 1 > 0) {
                    setTimeLeft(timeLeft - 1);
                } else {
                    clearTimeout(timer);
                    setTimeLeft(0);
                }
            }, 1000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [started, timeLeft]);
    const goNextFrame = useCallback(() => {
        setImageList((prev) => {
            const next = [...prev];
            next.push(randImageSrc());
            return next;
        });
    }, []);
    if (timeLeft === 0) {
        return <GameResult stat={stat} time={time} level={level} />;
    }
    return (
        <div
            className="container mx-auto"
            onClick={() => {
                if (!started) {
                    goNextFrame();
                }
            }}
        >
            <div className="bg-gray-600 py-4 text-center">
                <div className="text-xs font-light"><span className="text-lg font-bold">{timeLeft}</span> seconds left.</div>
            </div>
            <div className="flex items-center">
                <div
                    className="relative h-96 w-full bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${currentImage})` }}
                ></div>
            </div>
            <p className="text-center">{started ? `Does this symbol match the first of the last ${level} symbols you were shown?` : 'Remeber symbols.'}</p>

            {started && (
                <div className="flex items-center space-around">
                    <button
                        className="w-full bg-blue-400 rounded-lg p-6 font-medium my-6 mx-2"
                        onClick={() => {
                            checkAnswer(true);
                            goNextFrame();
                        }}
                    >
                        Yes
                    </button>
                    <button
                        className="w-full border-2 border-blue-400 rounded-lg p-6 font-medium my-6 mx-2"
                        onClick={() => {
                            checkAnswer(false);
                            goNextFrame();
                        }}
                    >
                        No
                    </button>
                </div>
            )}
        </div>
    );
}
