import { useContext } from "react";
import { UserRefScroll } from "../App";

import myLogo from "../assets/logo/myLogo.jpg";

import "../styles/navBar.css";

export function NavBar() {
  const { scroll } = useContext(UserRefScroll);
  return (
    <>
      <nav className="fixed w-full h-[9.7vh] z-10 flex items-center text-white bg-gradient-to-b from-[#171923] to-[#1A202C] overflow-hidden border-b-[1px] border-white/40">
        <div className="lightLogo absolute left-20 border-[2px] border-red-500 rounded-[50%] sm:left-5">
          <img
            src={myLogo}
            className="h-[57px] w-[57px] rounded-[50%] sm:h-[47px] sm:w-[47px]"
            alt="logo marca"
          />
        </div>
        <ul className="absolute w-[35vw] max-w-[35vw] h-[5vh] flex items-center justify-around right-20 gap-5">
          <li className="lightText w-[5vw] text-center hover:cursor-pointer md:text-[11px] md:w-[8vw] sm:text-[10px] sm:w-[12vw] ">
            Sobre mim
          </li>
          <li
            onClick={scroll}
            className="lightText w-[5vw] text-center hover:cursor-pointer md:text-[11px] md:w-[8vw] sm:text-[10px] sm:w-[] "
          >
            projetos
          </li>
          <li className="lightText w-[5vw] text-center hover:cursor-pointer md:text-[11px] md:w-[8vw] sm:text-[10px] sm:w-[] ">
            habilidades
          </li>
          <li className="lightText w-[5vw] text-center hover:cursor-pointer md:text-[11px] md:w-[8vw] sm:text-[10px] sm:w-[] ">
            contato
          </li>
        </ul>
      </nav>
    </>
  );
}
