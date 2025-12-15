import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="py-4 px-6 mb-3.5 w-[90vw] border-b-[#eee] bg-[#fafafa] max-[]">
            <nav className="flex items-center gap-3">
                <Link to="/" className="no-underline text-[#333]">
                    <h1 className="text-2xl sm:text-5xl m-0 font-bold transition-all ease-in-out hover:scale-105">Studio Ghibli — Filmes</h1>
                </Link>
            </nav>
        </header>
    );
}
