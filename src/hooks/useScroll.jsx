import { useContext } from "react";
import { UserRefScroll } from "../App";

export function useScroll() {
  const scrollData = useContext(UserRefScroll);

  return scrollData;
}
