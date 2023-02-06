import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { EnvelopeIcon, PlayIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Open Recall</title>
                <meta
                    name="description"
                    content="Open Source Alternative to Simply Recall"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="mx-auto container">
                <div className="flex items-center justify-center mt-12 p-2">
                    <Link href="/play">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Start
                        <PlayIcon
                            className="ml-3 -mr-1 h-5 w-5"
                            aria-hidden="true"
                        />
                    </button>
                    </Link>
                </div>
            </main>
        </>
    );
}
