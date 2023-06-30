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
  return (
    <div className="BgStyle relative h-[100vh] w-full z-[-1] top-[9.7vh] flex items-center bg-black">
      <div className="w-[57vw] h-full text-white/50 flex justify-end">
        <article className="h-[60vh] max-w-[850px] bg-black/80 flex flex-col items-center justify-center ">
          <h1>Olá, me chamo Wellinton!</h1>
          <h2>
            Desenvolvedor web front-end apaixonado por tecnologia, possuo
            experiência em desenvolvimento utilizando Javascript, React e
            tailwind css.
          </h2>
          <h3>
            Atualmente, estou iniciando uma nova jornada de conhecimentos no
            back-end, aprendendo algumas técnologias em node como por exemplo,
            express para criação de rotas e prisma orm com a interface SQLite
            utilizando banco de dados relacionais, pois meu sonho é ser um dev
            full stack, porém meu foco principal é o front-end, onde pretendo
            iniciar minha carreira.
          </h3>
        </article>
      </div>

      <div className="w-[43vw] h-full text-white">
        <div className="absolute flex h-[233px] w-[233px] z-0 right-[15vw] md:right-[10vw] top-[10vh] items-center justify-center bg-black shadow-md shadow-red-800 border-[2px] border-red-600 rounded-[50%] overflow-hidden">
          <div className="AnimateImage absolute h-[225px] w-[225px] bg-black/50 rounded-[50%]">
            <img
              src={myP}
              alt=""
              className="h-[225px] w-[225px] bg-black/30 rounded-[50%]"
            />
          </div>
        </div>

        <ul className="relative flex items-center justify-center gap-3 h-10 max-w-[350px] top-[45vh] left-[9vw] md:left-0 border-l-[01px] border-white/10">
          <l1>
            <BiLogoReact className="reactRotate h-7 w-9 text-blue-400" />
          </l1>
          <l1>
            <BiLogoJavascript className="h-7 w-9 text-yellow-600" />
          </l1>
          <l1>
            <BiLogoHtml5 className="h-7 w-9 text-[#FF4500]" />
          </l1>
          <l1>
            <BiLogoCss3 className="h-7 w-9 text-blue-600" />
          </l1>
          <l1>
            <BiLogoTailwindCss className="h-7 w-9 text-blue-500" />
          </l1>
          <l1>
            <BiLogoNodejs className="h-7 w-9 text-green-500" />
          </l1>
          <l1>
            <DiSqllite className="h-7 w-9 text-blue-700" />
          </l1>
        </ul>
      </div>
    </div>
  );
}
