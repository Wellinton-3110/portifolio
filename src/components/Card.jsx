import axios from "axios";
import "../styles/card.css";

export function Card(props) {
  return (
    <div className="Card flex h-[350px] w-[300px] hover:w-[309px] transition-all m-auto justify-center bg-[#1A202C] relative  rounded-lg border-[1px] border-[#1A202C] overflow-hidden">
      <h1 className="text-white mt-5">{props.name.toUpperCase()}</h1>
      <div className="Dialog flex justify-center text-white absolute h-[220px] w-[320px] bottom-0 bg-black/50 ">
        <h2 className="Break w-[290px] h-[150px] mt-3 ml-2 overflow-auto">
          {props.text}
        </h2>
      </div>
    </div>
  );
}
