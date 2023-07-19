import Slider from "react-slick";
import { useContext, useEffect } from "react";
import { UserRefScroll } from "../App";
import { Card } from "./Card";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const { componentRef } = useContext(UserRefScroll);

  var settings = {
    autoplay: true,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: (dots) => (
      <div
        style={{
          background: "#040507",
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
          background: "#9B21E4",
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
    <div
      ref={componentRef}
      className="relative scroll-smooth z-0 projetos w-full h-[100vh] bg-black"
    >
      <div className="">
        <h1 className="w-full text-center p-[20px] text-[white] text-[27px]">
          PROJETOS
        </h1>
        <Slider
          {...settings}
          className="absolute top-[20%] left-[50vw] translate-x-[-50%] w-[90vw] h-[59vh]"
        >
          {userData.map((items, index) => {
            if (items) {
              return (
                <div className="flex items-centerh-[600px] p-10 w-[80vw] bg-[#040507]">
                  <Card name={items.name} text={items.description} />;
                </div>
              );
            }
          })}
        </Slider>
      </div>
    </div>
  );
}
