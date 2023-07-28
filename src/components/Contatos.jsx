import { BsGithub, BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";

import "../styles/contatos.css";

export function Contatos() {
  return (
    <div className="relative h-[85vh] w-full bg-gradient-to-b from-black to-[#181C28] text-white text-center">
      <h1 className="absolute left-[50%] top-10 translate-x-[-37%] font-bold text-[27px]">
        Contatos
      </h1>
      <div className="absolute ulContatos before:content-[widt:1px height:10px] flex justify-center top-[50%] lef-[50%] w-full">
        <ul className=" flex justify-center gap-12 w-[65%] p-10 border-b-[1px] border-t-">
          <BsGithub className="w-12 h-12 hover:w-10 hover:h-10 sm:w-7 sm:h-7 sm:hover:w-5 sm:hover:h-5  transition-all cursor-pointer " />
          <BsLinkedin className="w-12 h-12 hover:w-10 hover:h-10 sm:w-7 sm:h-7 sm:hover:w-5 sm:hover:h-5  transition-all cursor-pointer " />
          <BsInstagram className="w-12 h-12 hover:w-10 hover:h-10 sm:w-7 sm:h-7 sm:hover:w-5 sm:hover:h-5  transition-all cursor-pointer  bg-pink-600 rounded-[30%]" />
          <BsWhatsapp className="w-12 h-12 hover:w-10 hover:h-10 sm:w-7 sm:h-7 sm:hover:w-5 sm:hover:h-5  transition-all cursor-pointer  bg-green-400 rounded-[450%]" />
        </ul>
      </div>
    </div>
  );
}
