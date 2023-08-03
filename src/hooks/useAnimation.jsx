import { useState, useEffect } from "react";

export function useAnimation(elementoBaseAltura) {
  useEffect(() => {
    const animacao = () => {
      // const [showAnimation, setShowAnimation] = useState(false);
      // const elementoBaseAltura = document.getElementById(
      //   `${props.elementoBaseAltura}`
      // );
      // const elementoAnimado = document.getElementById(`${props.elementoAnimado}`);
      const alturaTop = elementoBaseAltura.getBoundingClientRect().top;
      // const viewAltura = window.innerHeight;
      // console.log(alturaTop);
      // if (alturaTop < viewAltura && !showAnimation) {
      //   ulContatos.classList.add("ulContatos");
      //   setShowAnimation(true);
      // } else {
      //   ulContatos.classList.remove("ulContatos");
      // }
      console.log(alturaTop);
    };
    window.addEventListener("scroll", animacao);

    return () => {
      window.removeEventListener("scroll", animacao);
    };
  }, []);
}
