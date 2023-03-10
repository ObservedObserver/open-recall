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
import Head from "next/head";

export default function Guide() {
    const router = useRouter();
    const query = router.query;
    const level = Number(query.level) || 2;
    return (
        <>
            <Head>
                <title>Open Recall</title>
                <meta
                    name="description"
                    content="Open Recall is an open-source memory training game that is designed to improve working memory and cognitive abilities."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,  user-scalable=no,  user-scalable=no" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className="mx-auto container h-screen px-4 lg:px-28 flex flex-col justify-center"
                onClick={() => {
                    router.push({
                        pathname: "/game",
                        query: { ...router.query },
                    });
                }}
            >
                <div className="bg-gray-600 p-4 rounded-lg">
                    <div
                        className={`grid grid-cols-${level > 1 ? 3 : 2} divide-x-2 border-white border-2 border-white`}
                    >
                        <div className="p-4 text-center col-span-1">A(n)</div>
                        {level > 1 && <div className="p-4 text-center col-span-1">...</div>}
                        <div className="p-4 text-center col-span-1">A(n + {level})</div>
                    </div>
                    <p className="my-6 text-center text-sm font-light">
                        Recall and match the <b className="font-bold text-base">N-Back (N = {level}) to last</b> symbol
                        while avoiding mistakes.
                    </p>
                    <h3 className="text-center">Tap to begin.</h3>
                </div>
            </main>
        </>
    );
}
