import Image from "next/image";
import LogoImg from '/public/logo.svg' 
import Link from "next/link";
import SearchIcon from "public/icon-search.svg"
import IconUser from "/public/icon-user.svg"
import { GridContainer } from "./grid";

const arrayMenu = [
    'Início',
    'Benefícios',
    'Público-alvo',
    'Preços',
    'Sobre Nós'
]

export function Header () {
    const activedStyled = 'bg-green-actived text-opacity-100 rounded-full'
    return (
        <header className="relative w-full h-24 bg-green-primary flex">
            <GridContainer className="flex items-center justify-between">
                <Image
                src={LogoImg}
                alt="Logo"
                />
                <div className="flex items-center gap-20">
                    <nav className="flex gap-2">
                        {
                            arrayMenu.map((item, index ) => (
                                <Link key={index} href="#" className={`px-3 py-1 
                                text-white text-opacity-40 
                                hover:text-opacity-100 
                                transition-all ${index === 0 ? activedStyled: ''}`}>{item}</Link> 
                            ))
                        }

                    </nav>
                    <div className="flex items-center gap-6">
                        <button>
                            <Image
                            src={SearchIcon}
                            alt="Icon Search"
                            />
                        </button>
                        <button className="flex items-center gap-8">
                         <Image src={IconUser} alt="Icon user"  />                     
                            <span className="text-white font-medium">Fazer Login</span>
                        </button>
                    </div>
                </div>
            </GridContainer>
        </header>
    )
}