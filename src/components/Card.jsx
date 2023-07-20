import { VscVmRunning, VscGithubInverted } from "react-icons/vsc";
import axios from "axios";

import "../styles/card.css";

export function Card(props) {
  return (
    <div className="Card flex h-[370px] w-[300px] hover:w-[325px] transition-all m-auto justify-center bg-[#1A202C] relative  rounded-lg border-[1px] border-[#1A202C] overflow-hidden">
      <h1 className="text-white mt-5">{props.name.toUpperCase()}</h1>
      <div className="Dialog flex flex-col justify-center items-center text-white absolute h-[220px] w-[320px] bottom-0 bg-black/50 ">
        <h2 className="Break w-[290px] h-[150px] mt-3 ml-2 overflow-auto">
          {props.text}
        </h2>
        <div className=" flex p-7 w-[250px] h-10 items-center justify-around ">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            <VscVmRunning className="h-7 w-7 cursor-pointer" />
          </a>
          <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
            <VscGithubInverted className="h-7 w-7 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
