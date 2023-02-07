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

import { HISTORY_KEY } from "@/constants";
import { IHistory } from "@/interface";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

function dateFormatter(timeStamp: number): string {
    const date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    // const second = date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}`;
}

export default function History() {
    const [historyList, setHistoryList] = useState<IHistory[]>([]);
    useEffect(() => {
        const history = localStorage.getItem(HISTORY_KEY);
        if (!history) {
            return;
        }
        try {
            let hl = JSON.parse(history);
            hl = hl.sort((a: IHistory, b: IHistory) => b.datetime - a.datetime);
            setHistoryList(hl);
        } catch (error) {
            setHistoryList([]);
        }
    }, []);
    return (
        <>
            <Head>
                <title>Open Recall</title>
                <meta
                    name="description"
                    content="Open Recall is an open-source memory training game that is designed to improve working memory and cognitive abilities."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="mx-auto container px-4 lg:px-28 relative">
                <Link className="absolute left-0" href="/">
                    <ArrowLeftIcon className="w-8" />
                </Link>
                <h1 className="text-2xl font-bold text-center mt-6">History</h1>
                {historyList.map((history, index) => (
                    <div
                        className="text-xs lg:text-base bg-gray-600 rounded-lg p-4 m-4 grid grid-cols-4 lg:grid-cols-5 lg:divide-x"
                        key={index}
                    >
                        <div className="pb-2 lg:pb-0 font-bold lg:font-base lg:mb-0 lg:text-center col-span-4 lg:col-span-1">
                            {dateFormatter(history.datetime)}
                        </div>
                        <div className="lg:text-center">Level {history.level}</div>
                        <div className="lg:text-center">{history.time} s</div>
                        <div className="lg:text-center">
                            {Math.round((history.stat.correct / history.stat.total) * 100)} %
                        </div>
                        <div className="lg:text-center">{history.stat.match} Matches</div>
                    </div>
                ))}
            </main>
        </>
    );
}
