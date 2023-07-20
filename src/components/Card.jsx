import { VscVmRunning, VscGithubInverted } from "react-icons/vsc";
import axios from "axios";

import "../styles/card.css";

export function Card(props) {
  return (
    <div className="Card absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex h-[44vh] w-[280px] hover:w-[290px] transition-all m-auto justify-center bg-[#1A202C]  rounded-lg border-[1px] border-[#1A202C] overflow-hidden">
      <h1 className="text-white mt-5">{props.name.toUpperCase()}</h1>
      <div className="Dialog flex flex-col justify-center items-center text-white absolute h-[220px] w-[320px] bottom-0 bg-black/50 ">
        <h2 className="Break w-[290px] h-[150px] mt-3 pl-3 overflow-auto">
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
