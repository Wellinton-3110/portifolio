import { useState } from "react";
import { IoLogoJavascript } from "react-icons/io";
import "../../styles/flipCard.css";
import { BiSolidCloudDownload } from "react-icons/bi";

export function CardHabilidades(props) {
  return (
    <li className="card p-10 w-[900px] h-[670px] md:w-[600px] md:h-[350px] sm:w-[410px] sm:h-[270px]">
      <div className="flip-card m-auto">
        <img
          className="front object-cover md:object-contain sm:object-contain"
          src={props.img}
          alt=""
          srcset=""
        />
        <div className="back relative">
          <p className="absolute top-[40%] left-[50%] translate-x-[-50%] md:text-[11px] sm:text-[8px]">
            Clique para fazer o download
          </p>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <BiSolidCloudDownload className="w-10 h-10 absolute top-[50%] left-[50%] translate-x-[-50%] animate-pulse" />
          </a>
        </div>
      </div>
    </li>
  );
}
