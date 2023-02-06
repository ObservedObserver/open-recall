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

import RadioCardGroup, { IRadioCardOption } from "@/components/radioCardGroup";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useMemo, useState } from "react";

const periodOptions: IRadioCardOption[] = [
    { label: "30 s", value: 30, key: "30s" },
    { label: "60 s", value: 60, key: "60s" },
    { label: "90 s", value: 90, key: "90s" },
    { label: "120 s", value: 120, key: "120s" },
    { label: "150 s", value: 150, key: "150s" },
    { label: "180 s", value: 180, key: "180s" },
];

export default function PlayPanel() {
    const [choosenPeriod, setChoosenPeriod] = useState<number>(periodOptions[0].value);
    const difficultyOptions: IRadioCardOption[] = useMemo(() => {
        return new Array(6).fill(0).map((_, i) => {
            return {
                label: `${i + 1}`,
                value: i + 1,
                key: `${i + 1}`,
            };
        });
    }, []);
    const [choosenDifficulty, setChoosenDifficulty] = useState<number>(difficultyOptions[1].value);

    return (
        <div className="text-gray-50 mx-auto container px-8">
            <div className="relative text-center py-1 my-2">
                <Link className="absolute left-0" href="/">
                    <ArrowLeftIcon className="w-8" />
                </Link>
                <h1 className="text-xl">Play</h1>
                {/* <div>image set</div> */}
                <div className="bg-gray-600 rounded-lg p-2 font-light my-6">
                    <h5 className="text-xs">Time limit in seconds</h5>
                    <RadioCardGroup
                        options={periodOptions}
                        value={choosenPeriod}
                        onChange={(key, op) => {
                            setChoosenPeriod(op.value);
                        }}
                    />
                </div>
                <div className="bg-gray-600 rounded-lg p-2 font-light my-6">
                    <h5 className="text-xs">Difficulty</h5>
                    <RadioCardGroup
                        options={difficultyOptions}
                        value={choosenDifficulty}
                        onChange={(key, op) => {
                            setChoosenDifficulty(op.value);
                        }}
                    />
                </div>
                <div>
                    <Link href={{ pathname: "/game/guide", query: { time: choosenPeriod, level: choosenDifficulty } }}>
                        <button className="w-full bg-blue-400 rounded-lg p-2 font-medium my-6">Play</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
