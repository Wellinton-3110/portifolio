import { useRef, createContext } from "react";
import { NavBar } from "./components/NavBar.jsx";
import { SobreMim } from "./components/SobreMim.jsx";
import { Projetos } from "./components/Projetos.jsx";
import "./index.css";
import { Contatos } from "./components/Contatos.jsx";

export const UserRefScroll = createContext({});

function App() {
  const sobreMimRef = useRef(null);
  const peojetosRef = useRef(null);
  const contatosRef = useRef(null);
  function oii() {
    console.log("oii");
  }

  const scrollToProjetos = () => {
    sobreMimRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scroll2ToProjetos = () => {
    peojetosRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scroll3ToProjetos = () => {
    // const alturaTop = contatosRef.current.getBoundingClientRect().top;
    // window.addEventListener("scroll", oii);
    // console.log(alturaTop);
    contatosRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const meuObj = {
    sobreMimRef,
    peojetosRef,
    contatosRef,
    scroll: scrollToProjetos,
    scroll2: scroll2ToProjetos,
    scroll3: scroll3ToProjetos,
  };

  return (
    <div>
      <UserRefScroll.Provider value={meuObj}>
        <NavBar />
        <SobreMim />
        <Projetos />
        <Contatos />
      </UserRefScroll.Provider>
    </div>
  );
}

export default App;
