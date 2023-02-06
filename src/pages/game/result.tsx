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

import { IGameStat } from "@/interface";
import Link from "next/link";

const EMPTY_STAT: IGameStat = {
    match: 0,
    correct: 0,
    totalMatch: 0,
    total: 0,
};

interface GameResultProps {
    stat: IGameStat;
    level: number;
    time: number;
}
// show game result
export default function GameResult(props: GameResultProps) {
    const { level, time, stat = EMPTY_STAT } = props;
    return (
        <div className="mx-auto container px-4 lg:px-28">
            <div className="text-center my-6">
                <h1 className="text-2xl font-bold">Good job!</h1>
            </div>
            <div className="rounded bg-gray-600 p-4 m-4">
                <h3 className="text-xl font-bold">{stat.match}</h3>
                <p>Mathes in a row</p>
            </div>
            <div className="rounded bg-gray-600 p-4 m-4">
                <h3 className="text-xl font-bold">
                    {stat.total === 0 ? 0 : Math.round((stat.correct / stat.total) * 100)} %
                </h3>
                <p>Correct answers</p>
            </div>
            <div className="rounded bg-gray-600 p-4 m-4">
                <h3 className="text-xl font-bold">{time} seconds</h3>
                <p>Time</p>
            </div>
            <div className="rounded bg-gray-600 p-4 m-4">
                <h3 className="text-xl font-bold">{level}</h3>
                <p>Game Level</p>
            </div>
            <div className="py-4 m-4">
                <Link href="/play">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Play again
                    </button>
                </Link>
            </div>
        </div>
    );
}
