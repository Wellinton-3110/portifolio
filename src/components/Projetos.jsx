import Slider from "react-slick";
import { useContext, useEffect } from "react";
import { UserRefScroll } from "../App";
import { Card } from "./Card";
import video from "../assets/projetos/pexels_videos_4562 (1080p).mp4";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/projetos.css";
import axios from "axios";
import { useState } from "react";

export function Projetos() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const dataFunc = async () => {
      try {
        const getData = await axios(
          "https://api.github.com/users/wellinton-3110/repos"
        ).then((resp) => {
          return setUserData(resp.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    dataFunc();
  }, []);

  const { peojetosRef } = useContext(UserRefScroll);

  var settings = {
    autoplay: false,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: (dots) => (
      <div
        style={{
          background: "black",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "25px",
          color: "white",
          background: "#0052ff",
          hover: "blue",
          border: "1px black solid",
          borderRadius: "4px",
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="relative scroll-smooth projetos w-full h-[100vh] bg-black">
      <div className="">
        <h1
          id="elementoBaseAltura"
          ref={peojetosRef}
          className="w-full p-[20px] font-bold text-center text-[white] text-[27px]"
        >
          PROJETOS
        </h1>

        <Slider
          {...settings}
          className="absolute top-[15%] left-[50vw] translate-x-[-50%] w-[81vw] h-[77vh]"
        >
          {userData.map((items, index) => {
            if (items) {
              return (
                <div className="Projetos relative flex p-10 w-[77vw] h-[80vh]">
                  <Card
                    name={items.name}
                    text={items.description}
                    url={`https://wellinton-3110.github.io/${items.name}`}
                    githubUrl={items.html_url}
                  />
                  <video
                    src={video}
                    loop
                    autoPlay
                    muted
                    className="absolute z-[-1] rounded-[50%] w-[65vw] h-[55vh] object-cover top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
                  ></video>
                  ;
                </div>
              );
            }
          })}
        </Slider>
      </div>
    </div>
  );
}
