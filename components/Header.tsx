
import Image from "next/image";
import Link from "next/link";



const Header = ({children}: HeaderProps) => {
    return (
        <div className="header">
            <Link href={`/`} className="md:flex-1">
                <Image src="/logo1.png" alt="Document" width={140} height={35} className="hidden md:block"/>
                <Image src="/favicon.png" alt="Document" width={32} height={32} className="mr-2 md:hidden"/>
            </Link>
            {children}
        </div>
    );
};

export default Header;