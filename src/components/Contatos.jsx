import { BsGithub, BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { useContext, useState, useEffect } from "react";
import { UserRefScroll } from "../App";
import "../styles/contatos.css";

export function Contatos() {
  const { contatosRef } = useContext(UserRefScroll);
  const [showAnimation, setShowAnimation] = useState(false);
  function oii() {
    const ulContatos = document.getElementById("ulContatos");
    const alturaTop = divContatos.getBoundingClientRect().top;
    const viewAltura = window.innerHeight;
    console.log(alturaTop, viewAltura);
    if (alturaTop === viewAltura) {
      ulContatos.classList.add("ulContatos");
    } else {
      ulContatos.classList.remove("ulContatos");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", oii);

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
    <div
      id="divContatos"
      className="relative h-[85vh] w-full bg-gradient-to-b from-black to-[#181C28] text-white text-center"
    >
      <h1
        ref={contatosRef}
        className="absolute left-[50%] top-[21vh] translate-x-[-37%] font-bold text-[27px]"
      >
        Contatos
      </h1>
      <div className="absolute divContatos before:content-[widt:1px height:10px] flex justify-center top-[50%] lef-[50%] w-full">
        <ul
          id="ulContatos"
          className="animate-pulse flex justify-center items-center gap-12 w-[65%] p-10 border-b-[1px]"
        >
          <a href="https://github.com/Wellinton-3110" target="_blank">
            <BsGithub className="w-12 h-12 hover:w-10 hover:h-10 sm:w-10 sm:h-10 sm:hover:w-8 sm:hover:h-8  transition-all cursor-pointer " />
          </a>
          <a
            href="https://www.linkedin.com/in/wellinton-gerson-b6aab81a9/"
            target="_blank"
          >
            <BsLinkedin className="w-12 h-12 hover:w-10 hover:h-10 sm:w-10 sm:h-10 sm:hover:w-8 sm:hover:h-8  transition-all cursor-pointer " />
          </a>
          <a
            href="https://www.instagram.com/wellinton.gsb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="w-12 h-12 hover:w-10 hover:h-10 sm:w-10 sm:h-4 sm:hover:w-8 sm:hover:h-3  transition-all cursor-pointer  " />
          </a>
          <BsWhatsapp
            onClick={redirecionarParaWhatsApp}
            className="w-12 h-12 hover:w-10 hover:h-10 sm:w-10 sm:h-4 sm:hover:w-8 sm:hover:h-3  transition-all cursor-pointer"
          />
        </ul>
      </div>
    </div>
  );
}
