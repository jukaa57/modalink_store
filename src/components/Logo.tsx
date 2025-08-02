import Image from "next/image";
import logoImg from "../../public/logo.png";

export function Logo() {
    return (
        <Image 
          src={logoImg}
          alt="Logo of app"
          width={60}
          height={60}
          className="hover:shadow-sm shadow-primary"
        />
    );
};