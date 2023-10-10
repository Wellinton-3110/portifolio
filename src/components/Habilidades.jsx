import { useEffect } from "react";
import { CardHabilidades } from "./habilidades/CardHabilidades";
import {
  eduEmpregabilidade,
  pensamentoCumputacional,
  desenvolvimentoWebprimeirosPassos,
  logicaDeProgramacao,
  introducaoHtmlCss,
  debuggingErrorHandling,
  javascriptDom,
  jsColecoes,
  jsAssincrono,
  mapFilterReduce,
  orientacaoObjetos,
  desafiosJavascript,
  reactIntroducao,
  introducaoGitGithub,
  gitGithub,
  githubBranches,
  scrum,
  paginaBootstrap,
} from "../assets/functions/imagens";

import { useScroll } from "../hooks/useScroll";

export function Habilidades() {
  const { habilidadesRef } = useScroll();
  return (
    <div
      ref={habilidadesRef}
      className="h-[100vh] w-full bg-black flex items-center flex-col justify-center"
    >
      <h1 className="text-white mb-10 text-[27px] font-bold ">Habilidades</h1>
      <ul className="h-[80%] bg-[rgb(21,21,21)] w-[90%] overflow-scroll overflow-x-hidden">
        <CardHabilidades
          img={eduEmpregabilidade}
          link="https://www.dio.me/certificate/99469767/share"
        />
        <CardHabilidades
          img={pensamentoCumputacional}
          link="https://www.dio.me/certificate/13DEE539/share"
        />
        <CardHabilidades
          img={desenvolvimentoWebprimeirosPassos}
          link="https://www.dio.me/certificate/34064A83/share"
        />
        <CardHabilidades
          img={logicaDeProgramacao}
          link="https://www.dio.me/certificate/94D59BF4/share"
        />
        <CardHabilidades
          img={introducaoHtmlCss}
          link="https://www.dio.me/certificate/AA954A61/share"
        />
        <CardHabilidades
          img={debuggingErrorHandling}
          link="https://www.dio.me/certificate/A216F50F/share"
        />
        <CardHabilidades
          img={javascriptDom}
          link="https://www.dio.me/certificate/DC2C5DC7/share"
        />
        <CardHabilidades
          img={jsColecoes}
          link="https://www.dio.me/certificate/F9EFBD80/share"
        />
        <CardHabilidades
          img={jsAssincrono}
          link="https://www.dio.me/certificate/B1F5AAD8/share"
        />
        <CardHabilidades
          img={mapFilterReduce}
          link="https://www.dio.me/certificate/0AF94C4B/share"
        />
        <CardHabilidades
          img={orientacaoObjetos}
          link="https://www.dio.me/certificate/BB4B5C74/share"
        />
        <CardHabilidades
          img={desafiosJavascript}
          link="https://www.dio.me/certificate/ADCECE03/share"
        />
        <CardHabilidades
          img={reactIntroducao}
          link="https://www.dio.me/certificate/E372094C/share"
        />
        <CardHabilidades
          img={introducaoGitGithub}
          link="https://www.dio.me/certificate/505EE17C/share"
        />
        <CardHabilidades
          img={gitGithub}
          link="https://www.dio.me/certificate/81C19BA5/share"
        />
        <CardHabilidades
          img={githubBranches}
          link="https://www.dio.me/certificate/BE4C65EE/share"
        />
        <CardHabilidades
          img={scrum}
          link="https://www.dio.me/certificate/89722C6A/share"
        />
        <CardHabilidades
          img={paginaBootstrap}
          link="https://www.dio.me/certificate/778B9376/share"
        />
      </ul>
    </div>
  );
}
