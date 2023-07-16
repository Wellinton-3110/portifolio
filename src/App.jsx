import { useRef, createContext } from "react";
import { NavBar } from "./components/NavBar.jsx";
import { SobreMim } from "./components/SobreMim.jsx";
import { Projetos } from "./components/Projetos.jsx";
import "./index.css";

export const UserRefScroll = createContext({});

function App() {
  const componentRef = useRef(null);
  const component2Ref = useRef(null);

  const scrollToProjetos = () => {
    componentRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const meuObj = {
    componentRef,
    component2Ref,
    scroll: scrollToProjetos,
  };

  return (
    <div>
      <UserRefScroll.Provider value={meuObj}>
        <NavBar />
        <SobreMim />
        <Projetos />
      </UserRefScroll.Provider>
    </div>
  );
}

export default App;
