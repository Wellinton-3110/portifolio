import { BsGithub, BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useScroll } from "../hooks/useScroll";

import "../styles/contatos.css";

export function Contatos() {
  const { contatosRef } = useScroll();
  const [showAnimation, setShowAnimation] = useState(false);

  function getAnimation() {
    const ulContatos = document.getElementById("ulContatos");
    const divContatos = document.getElementById("divContatos");
    const alturaTop = divContatos.getBoundingClientRect().top;
    const viewAltura = window.innerHeight;

    if (alturaTop < viewAltura && !showAnimation) {
      ulContatos.classList.add("ulContatos");
      setShowAnimation(true);
    } else {
      ulContatos.classList.remove("ulContatos");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", getAnimation);
    return () => {
      window.removeEventListener("scroll", getAnimation);
    };
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
          className="flex justify-center items-center gap-12 w-[55%] sm:w-[87%] md:w-[77%] p-10 border-b-[1px]"
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
            <BsInstagram className="w-12 h-12 hover:w-10 hover:h-10 sm:w-10 sm:h-10 sm:hover:w-8 sm:hover:h-8  transition-all cursor-pointer  " />
          </a>
          <a href="">
            <BsWhatsapp
              className="w-12 h-12 hover:w-10 hover:h-10 sm:w-10 sm:h-10 sm:hover:w-8 sm:hover:h-8  transition-all cursor-pointer"
              onClick={redirecionarParaWhatsApp}
            />
          </a>
        </ul>
      </div>
    </div>
  );
}
