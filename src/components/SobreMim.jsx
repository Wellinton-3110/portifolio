import { useEffect, useState } from "react";
import "../styles/sobremim.css";
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoNodejs,
} from "react-icons/bi";
import { DiSqllite } from "react-icons/di";

import myP from "../assets/perfil/myP.jpg";

export function SobreMim() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const write = document.getElementById("header");
    const newElement = write.textContent.trim().split("");
    write.innerHTML = "";
    newElement.forEach((element, index) => {
      setTimeout(() => {
        write.innerHTML += element;
      }, 91 * index);
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [screenWidth]);

  return (
    <div className="BgStyle relative h-[100vh] w-full z-[-1] top-[9.7vh] flex items-center bg-black">
      <div className="w-[57vw] h-full bg text-white flex justify-end">
        <article className="h-[60vh] max-w-[950px] flex flex-col items-center justify-center md:h-[70vh] sm:absolute sm:top-[27vh] sm:left-[50%] sm:translate-x-[-50%]">
          <h1
            id="header"
            className="font-DM font-bold text-[21px] sm:text-[15px] md:mt-5"
          >
            Olá, me chamo Wellinton
          </h1>
          <h2 className="font-mono font-bold text-[17px] p-5  w-[57vw] sm:text-[14px] sm:h-[60vh] sm:w-[60vw]">
            Desenvolvedor web front-end apaixonado por tecnologia, possuo
            experiência em desenvolvimento utilizando Javascript, React e
            tailwind css. Atualmente, estou iniciando uma nova jornada de
            conhecimentos no back-end, aprendendo algumas tecnologias em node
            como por exemplo, express para criação de rotas e prisma orm com a
            interface SQLite utilizando banco de dados relacionais, pois meu
            sonho é ser um dev full stack, porém meu foco principal é o
            front-end, onde pretendo iniciar minha carreira.
          </h2>
        </article>
      </div>

      <div
        className={`${
          screenWidth < 480
            ? " w-[43vw] h-full text-white"
            : " relative w-[43vw] h-full text-white"
        }`}
      >
        <div className="absolute flex h-[233px] w-[233px] z-0 right-[15vw] md:right-[10vw] top-[10vh] items-center justify-center bg-black shadow-md shadow-red-800 border-[2px] border-red-600 rounded-[50%] overflow-hidden sm:h-[155px] sm:w-[155px] sm:top-3 sm:left-[50%] sm:translate-x-[-50%] md:h-[200px] md:w-[200px] md:top-7">
          <div className="AnimateImage absolute h-[225px] w-[225px] bg-black/50 rounded-[50%] sm:h-[150px] sm:w-[150px] md:h-[195px] md:w-[195px]">
            <img
              src={myP}
              alt=""
              className="h-[225px] w-[225px] bg-black/30 rounded-[50%] sm:h-[150px] sm:w-[150px] md:h-[195px] md:w-[195px]"
            />
          </div>
        </div>

        <ul className="absolute flex items-center justify-center gap-3 p-3 h-10 w-[331px] top-[45vh] left-[50%] translate-x-[-50%] border-l-[2px] border-white/10 sm:gap-1 sm:top-[11.3rem] sm:right-[50%] md:gap-1 md:w-[290px]">
          <l1>
            <BiLogoReact className="reactRotate h-7 w-9 text-blue-400 sm:h-5 sm:w-7" />
          </l1>
          <l1>
            <BiLogoJavascript className="h-7 w-9 text-yellow-600 sm:h-5 sm:w-7" />
          </l1>
          <l1>
            <BiLogoHtml5 className="h-7 w-9 text-[#FF4500] sm:h-5 sm:w-7" />
          </l1>
          <l1>
            <BiLogoCss3 className="h-7 w-9 text-blue-600 sm:h-5 sm:w-7" />
          </l1>
          <l1>
            <BiLogoTailwindCss className="h-7 w-9 text-blue-500 sm:h-5 sm:w-7" />
          </l1>
          <l1>
            <BiLogoNodejs className="h-7 w-9 text-green-500 sm:h-5 sm:w-7" />
          </l1>
          <l1>
            <DiSqllite className="h-7 w-9 text-blue-700 sm:h-5 sm:w-7" />
          </l1>
        </ul>
      </div>
    </div>
  );
}
