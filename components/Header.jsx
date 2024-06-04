import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="mx-10 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-5xl font-semibold">Franco<span className="text-accent">.</span></h1>
                </Link>
                {/* dektop navbar */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                </div>

                {/* mobile navbar */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header;