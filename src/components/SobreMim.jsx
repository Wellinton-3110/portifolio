import "../styles/sobremim.css";

import eu from "../assets/perfil/eu.jpg";

export function SobreMim() {
  return (
    <div className="BgStyle relative h-[100vh] w-full z-[-1] top-[9.7vh] flex items-center bg-black">
      <div className="w-[55vw] h-full text-white/50">
        <h1>Olá, me chamo Wellinton!</h1>
        <h3>
          Atualmente, estou iniciando uma nova jornada de conhecimentos no
          back-end, aprendendo algumas técnologias em node como por exemplo,
          express para criação de rotas e prisma orm com a interface SQLite
          utilizando banco de dados relacionais, pois meu sonho é ser um dev
          full stack, porém meu foco principal é o front-end, onde pretendo
          iniciar minha carreira.
        </h3>
      </div>

      <div className="w-[45vw] h-full text-white">
        <div className="absolute flex h-[235px] w-[230px] z-0 right-5 top-5 items-center justify-center bg-black rounded-[55%] overflow-hidden">
          <div className="AnimateImage absolute h-[230px] w-[225px] bg-black/50 rounded-[50%]">
            <img
              src={eu}
              alt=""
              className="h-[230px] w-[225px] bg-black/30 rounded-[50%]"
            />
          </div>
        </div>

        <ul>dsdsds</ul>
      </div>
    </div>
  );
}
