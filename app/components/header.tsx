import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed left-0 top-0 py-2 px-6 w-screen h-[10vh]">
            <div className="flex items-center justify-between h-full">
                <div className="flex items-center h-full"></div>
                <div className="flex items-center h-full">
                    <nav>
                        <ul className="flex space-x-4">
                            <li><Link className="mx-6 my-3" href="/">Accueil</Link></li>
                            <li><Link className="mx-6 my-3" href="/project">Projets</Link></li>
                            <li><Link className="mx-6 my-3" href="/blog">Blog</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}