import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex justify-center h-[25vh] w-screen text-white">
            <section className="grid grid-cols-3 h-full w-[96%] bg-[var(--blue)] rounded-t-2xl">
                <div className="flex justify-start items-end h-full">
                    <div className="flex flex-col items-center justify-center h-full">
                        <img className="h-20" src="/crealab-logo.webp" alt="" />
                        <h1 className="text-2xl font-bold flex flex-col justify-center"><p className="text-lg">Activité</p><span className="text-[var(--orange)]">créalab</span></h1>
                    </div>
                </div>
                <div></div>
                <div>
                    <Link href="/logo">Logo</Link>
                </div>
            </section>
        </footer>
    );
}