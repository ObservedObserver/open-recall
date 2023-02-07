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
import { IImageKey } from "@/constants";
import { randImageSrc } from "@/utils";
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const periodOptions: IRadioCardOption[] = [
    { label: "30 s", value: 30 },
    { label: "60 s", value: 60 },
    { label: "90 s", value: 90 },
    { label: "120 s", value: 120 },
    { label: "150 s", value: 150 },
    { label: "180 s", value: 180 },
];

const imageSetList: IImageKey[] = [IImageKey.animalFace, IImageKey.food, IImageKey.sport, IImageKey.lang];

export default function PlayPanel() {
    const [choosenPeriod, setChoosenPeriod] = useState<number>(periodOptions[0].value);
    const [choosenImageSetIndex, setChoosenImageSetIndex] = useState<number>(0);
    const difficultyOptions: IRadioCardOption[] = useMemo(() => {
        return new Array(6).fill(0).map((_, i) => {
            return {
                label: `${i + 1}`,
                value: i + 1,
            };
        });
    }, []);
    const [choosenDifficulty, setChoosenDifficulty] = useState<number>(difficultyOptions[1].value);

    return (
        <>
            <Head>
                <title>Open Recall</title>
                <meta
                    name="description"
                    content="Open Recall is an open-source memory training game that is designed to improve working memory and cognitive abilities."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,  user-scalable=no" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="text-gray-50 mx-auto container px-4 lg:px-28">
                <div className="relative text-center py-1 my-2">
                    <Link className="absolute left-0" href="/">
                        <ArrowLeftIcon className="w-8" />
                    </Link>
                    <h1 className="text-xl font-bold">Play</h1>
                    {/* <div>image set</div> */}
                    <div className="bg-gray-600 rounded-lg p-2 font-light my-6">
                        <h5 className="text-xs">Image Set</h5>
                        <div className="flex">
                            <ChevronLeftIcon
                                className="w-32"
                                onClick={() => {
                                    setChoosenImageSetIndex(
                                        (choosenImageSetIndex - 1 + imageSetList.length) % imageSetList.length
                                    );
                                }}
                            />
                            <div
                                className="relative h-64 w-full bg-contain bg-no-repeat bg-center"
                                style={{
                                    backgroundImage: `url(${randImageSrc(imageSetList[choosenImageSetIndex], 0)})`,
                                }}
                            ></div>
                            <ChevronRightIcon
                                className="w-32"
                                onClick={() => {
                                    setChoosenImageSetIndex((choosenImageSetIndex + 1) % imageSetList.length);
                                }}
                            />
                        </div>
                    </div>
                    <div className="bg-gray-600 rounded-lg p-2 font-light my-6">
                        <h5 className="text-xs">Time limit in seconds</h5>
                        <RadioCardGroup
                            options={periodOptions}
                            value={choosenPeriod}
                            onChange={(v, op) => {
                                setChoosenPeriod(op.value);
                            }}
                        />
                    </div>
                    <div className="bg-gray-600 rounded-lg p-2 font-light my-6">
                        <h5 className="text-xs">Difficulty</h5>
                        <RadioCardGroup
                            options={difficultyOptions}
                            value={choosenDifficulty}
                            onChange={(v, op) => {
                                setChoosenDifficulty(op.value);
                            }}
                        />
                    </div>
                    <div>
                        <Link
                            href={{
                                pathname: "/game/guide",
                                query: {
                                    time: choosenPeriod,
                                    level: choosenDifficulty,
                                    imageSet: imageSetList[choosenImageSetIndex],
                                },
                            }}
                        >
                            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-2 font-medium my-6">
                                Play
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
