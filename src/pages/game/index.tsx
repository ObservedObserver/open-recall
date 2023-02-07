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
import { useCallback, useEffect, useRef, useState } from "react";
import { IGameStat, IHistory } from "@/interface";
import GameResult from "./result";
import { HISTORY_KEY, IImageKey, IMAGE_PATH } from "@/constants";

function randImageSrc(imgCatKey: string, imgIndex: number) {
    if (!(imgCatKey in IMAGE_PATH)) {
        imgCatKey = IImageKey.sport
    }
    if (!(imgIndex < IMAGE_PATH[imgCatKey as IImageKey].length)) {
        imgIndex = Math.round(Math.random() * IMAGE_PATH[imgCatKey as IImageKey].length) % IMAGE_PATH[imgCatKey as IImageKey].length;
    }
    return IMAGE_PATH[imgCatKey as IImageKey][imgIndex];
}

export default function GamePanel() {
    const router = useRouter();
    const query = router.query;
    const level = Number(query.level) || 1;
    const time = Number(query.time) || 30;
    let imageSet: IImageKey = IImageKey.sport
    if (typeof query.imageSet === 'string' && query.imageSet in IImageKey) {
        imageSet = query.imageSet as IImageKey;
    }
    const imgContainer = useRef<HTMLDivElement>(null);
    const [imageList, setImageList] = useState<string[]>([randImageSrc(imageSet, 0)]);
    const [timeLeft, setTimeLeft] = useState(time);
    const soundRef = useRef<{correct: HTMLAudioElement | null; wrong: HTMLAudioElement | undefined}>();
    const [stat, setStat] = useState<IGameStat>({
        match: 0,
        correct: 0,
        totalMatch: 0,
        total: 0,
    });
    const started = imageList.length > level;
    const currentImage = imageList[imageList.length - 1];
    const targetImage = imageList[imageList.length - level - 1];
    useEffect(() => {
        soundRef.current = {
            correct: new Audio("/correct.wav"),
            wrong: new Audio("/failure.wav"),
        };
    }, [])
    const checkAnswer = useCallback(
        (match: boolean) => {
            if (!started) {
                return;
            }
            const correct = match ? targetImage === currentImage : targetImage !== currentImage;
            if (soundRef.current) {
                if (correct && soundRef.current.correct) {
                    soundRef.current.correct.pause();
                    soundRef.current.correct.currentTime = 0;
                    soundRef.current.correct.play();
                }
                if (!correct && soundRef.current.wrong) {
                    soundRef.current.wrong.pause();
                    soundRef.current.wrong.currentTime = 0;
                    soundRef.current.wrong.play();
                }
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
            next.push(randImageSrc(imageSet, Math.round(Math.random() * IMAGE_PATH[imageSet].length) % IMAGE_PATH[imageSet].length));
            return next;
        });
        if (imgContainer.current) {
            imgContainer.current.animate([
                { transform: "scaleX(0.85)" },
                { transform: "scaleX(1)" }
              ], {
                duration: 100,
                easing: "ease-out",
                iterations: 1
              });
        }
    }, [imageSet]);

    const gameOver = timeLeft === 0;

    useEffect(() => {
        if (gameOver) {
            const history: IHistory = {
                stat,
                time,
                level,
                datetime: new Date().getTime()
            }
            let historyList: IHistory[] = [];
            const rawExistedHistory = localStorage.getItem(HISTORY_KEY);
            if (rawExistedHistory) {
                historyList = JSON.parse(rawExistedHistory);
            }
            historyList.push(history);
            localStorage.setItem(HISTORY_KEY, JSON.stringify(historyList));
        }
    }, [gameOver, stat, level, time])

    if (gameOver) {
        return <GameResult stat={stat} time={time} level={level} />;
    }
    return (
        <div
            className="container mx-auto lg:px-28"
            onClick={() => {
                if (!started) {
                    goNextFrame();
                }
            }}
        >
            <div className="bg-gray-600 py-4 text-center">
                <div className="text-xs font-light"><span className="text-lg font-bold">{timeLeft}</span> seconds left.</div>
            </div>
            <div className="flex items-center p-4">
                <div
                    ref={imgContainer}
                    className="relative h-96 w-full bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${currentImage})` }}
                ></div>
            </div>
            <p className="text-center m-4">{started ? `Does this symbol match the first of the last ${level} symbols you were shown?` : 'Remeber symbols.'}</p>

            {started && (
                <div className="flex items-center space-around px-4">
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
