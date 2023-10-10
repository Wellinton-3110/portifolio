import { useRef, createContext } from "react";
import { NavBar } from "./components/NavBar.jsx";
import { SobreMim } from "./components/SobreMim.jsx";
import { Projetos } from "./components/Projetos.jsx";
import { Contatos } from "./components/Contatos.jsx";
import { Habilidades } from "./components/Habilidades.jsx";
import { CardHabilidades } from "./components/habilidades/CardHabilidades.jsx";
import "./index.css";

export const UserRefScroll = createContext({});

function App() {
  const sobreMimRef = useRef(null);
  const peojetosRef = useRef(null);
  const habilidadesRef = useRef(null);
  const contatosRef = useRef(null);

  const scrollToProjetos = () => {
    sobreMimRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scroll2ToProjetos = () => {
    peojetosRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scroll2ToHabilidades = () => {
    habilidadesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scroll3ToProjetos = () => {
    contatosRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const meuObj = {
    sobreMimRef,
    peojetosRef,
    contatosRef,
    habilidadesRef,
    scroll: scrollToProjetos,
    scroll2: scroll2ToProjetos,
    scroll3: scroll3ToProjetos,
    scroll4: scroll2ToHabilidades,
  };

  return (
    <div>
      <UserRefScroll.Provider value={meuObj}>
        <NavBar />
        <SobreMim />
        <Habilidades />
        <Projetos />
        <Contatos />
      </UserRefScroll.Provider>
    </div>
  );
}

export default App;
