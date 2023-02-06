import Head from "next/head";
import { Inter } from "@next/font/google";
import { PlayIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import GithubIcon from "@/components/GithubIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Open Recall</title>
                <meta name="description" content="Open Recall is an open-source memory training game that is designed to improve working memory and cognitive abilities." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="mx-auto container lg:px-28">
                <h1 className="text-center mt-12 text-3xl font-extrabold bg-clip-text">Open <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Recall</span></h1>
                <h2 className="text-center text-xs font-light mt-4">Open Recall(based on N-Back Task) is a memory training game that is designed to improve working memory and cognitive abilities.</h2>
                <div className="flex items-center justify-center mt-12 p-2">
                    <Link href="/play">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 text-base font-medium text-white"
                        >
                            Start
                            <PlayIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
                        </button>
                    </Link>
                </div>
                <div className="flex items-center justify-center mt-6 p-2">
                    <Link href="https://github.com/ObservedObserver/open-recall">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Github
                            {/* <PlayIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" /> */}
                            <GithubIcon className="ml-3 -mr-1 h-6 w-6 fill-white" />
                        </button>
                    </Link>
                </div>
            </main>
        </>
    );
}
