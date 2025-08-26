import Link from "next/link";
import ArtsTicLogo from "./arts+tic-logo";
import CrealabLogo from "./crealab-logo";

export default function Header() {
    return (
        <header className="flex items-center justify-between py-2 px-6 h-[10vh]">
            <div className="flex items-center h-full">
                <CrealabLogo/>
                <div className="h-[70%] w-[2px] bg-[var(--blue)] mx-4 rounded-4xl"></div>
                <ArtsTicLogo/>
            </div>
            <div className="flex items-center h-full">
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link className="px-6 py-3" href="/">Home</Link></li>
                        <li><Link className="px-6 py-3 border-2 border-[var(--orange)] rounded-2xl" href="/horaire">Horaire</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}