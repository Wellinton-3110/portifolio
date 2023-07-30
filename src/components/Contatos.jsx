import { BsGithub, BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { useContext, useState, useEffect } from "react";
import { UserRefScroll } from "../App";
import "../styles/contatos.css";

export function Contatos() {
  const { contatosRef } = useContext(UserRefScroll);
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    setShowAnimation(true);
  }, []);
  function redirecionarParaWhatsApp() {
    const numeroTelefone = "5583998871360";

    // link do WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroTelefone}`;

    // Redirecionar para o WhatsApp
    window.open(linkWhatsApp, "_blank");
  }
  return (
    <div className="relative h-[85vh] w-full bg-gradient-to-b from-black to-[#181C28] text-white text-center">
      <h1
        ref={contatosRef}
        className="absolute left-[50%] top-[21vh] translate-x-[-37%] font-bold text-[27px]"
      >
        Contatos
      </h1>
      <div className="absolute divContatos before:content-[widt:1px height:10px] flex justify-center top-[50%] lef-[50%] w-full">
        <ul
          className={`${
            showAnimation ? "ulContatos" : ""
          } animate-pulse flex justify-center items-center gap-12 sm:gap-7 w-[65%] p-10 border-b-[1px]`}
        >
          <a href="https://github.com/Wellinton-3110" target="_blank">
            <BsGithub className="w-12 h-12 hover:w-10 hover:h-10 sm:w-7 sm:h-7 sm:hover:w-5 sm:hover:h-5  transition-all cursor-pointer " />
          </a>
          <a
            href="https://www.linkedin.com/in/wellinton-gerson-b6aab81a9/"
            target="_blank"
          >
            <BsLinkedin className="w-12 h-12 hover:w-10 hover:h-10 sm:w-7 sm:h-7 sm:hover:w-5 sm:hover:h-5  transition-all cursor-pointer " />
          </a>
          
          <a
            href="https://www.instagram.com/wellinton.gsb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="w-12 h-12 hover:w-10 hover:h-10  sm:w-7 sm:h-7 sm:hover:w-5 sm:hover:h-5  transition-all cursor-pointer  " />
          </a>
          <a>
            <BsWhatsapp
            onClick={redirecionarParaWhatsApp}
            className="w-12 h-12 hover:w-10 hover:h-10  sm:w-7 sm:h-7 sm:hover:w-5 sm:hover:h-5  transition-all cursor-pointer"
            />
          </a>
      
        </ul>
      </div>
    </div>
  );
}
