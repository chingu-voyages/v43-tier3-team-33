import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
    const dependencies = ['Next.js 13.2', 'NextAuth.js', 'Prisma', 'Supabase' ,'Tailwind CSS', 'TypeScript', 'Discord Auth Provider']
    return (
        <>
            <Head>
                <title>Charity App</title>
                <meta name="description" content="DailyDo App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        Team <span className="text-[hsl(280,100%,70%)]">33</span> Charity App
                    </h1>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
                        <Link
                            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                            href="https://create.t3.gg/en/usage/first-steps"
                            target="_blank"
                        >
                            <h3 className="text-2xl font-bold">First Steps →</h3>
                            <div className="text-lg">
                                Just the basics - Everything you need to know to set up your
                                database and authentication.
                            </div>
                        </Link>
                        <Link
                            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                            href="https://create.t3.gg/en/introduction"
                            target="_blank"
                        >
                            <h3 className="text-2xl font-bold">Documentation →</h3>
                            <div className="text-lg">
                                Learn more about Create T3 App, the libraries it uses, and how
                                to deploy it.
                            </div>
                        </Link>
                    </div>

                    <h3 className="text-4xl text-white text-start font-bold">Configured and ready to use:</h3>


                    <ul className="grid grid-cols-2 justify-between w-full text-center px-20 gap-2">
                        {dependencies.map((dependency) => (
                            <li className="text-white text-xl" key={dependency}>
                                {dependency}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    );
};

export default Home;
