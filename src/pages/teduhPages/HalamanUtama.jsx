import React from "react";
import LogoTeduh from "../../assets/images/LogoTeduh.svg";
import LogoTele from "../../assets/images/LogoTele.svg";
import Icon1 from "../../assets/images/Icon1.svg";
import Icon2 from "../../assets/images/Icon2.svg";
import Icon3 from "../../assets/images/Icon3.svg";
import PeopleSit from "../../assets/images/PeopleSit.svg";
import "./mobile.css";
import { LazyMotion, m, domAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HalamanUtama = () => {
  const navigate = useNavigate();


  return (
    <div className="w-screen bg-[#3B3486] h-full min-xl:">

    <div className="container mx-auto py-[20px] px-[20px] p-10 text-white">
      <div className="flex justify-between">
        <div>
          <img
            className="w-32 lg:w-[180px] sm:w-[100px] md:w-[150px]"
            src={LogoTeduh}
            alt="Logo Teduh"
          />
        </div>
        <div className="">
          <img
            className="w-32 lg:w-[180px] sm:w-[100px] md:w-[150px]"
            src={LogoTele}
            alt="Logo Tele"
          />
        </div>
      </div>

      <div className="container mx-auto pl-5 sm:pl-10 md:pl-15 lg:pl-20  mt-10 p-10 mb-20">
        <div>
          <h1 className="text-2xl md:text-2xl lg:text-2xl ">
            Selamat datang di Teduh
          </h1>
        </div>

        <div className="w-full flex justify-between max-md:flex-col">
          <div className="mt-5">
            <h1 className="text-2xl md:text-4xl lg:text-5xl lg:leading-[1.4] font-bold ">
              Mari mulai dengan
              <span className="text-[#DCFD78]"> mengenal</span>
              <span className="text-[#DCFD78] block">
                {" "}
                Anda
                <span className="text-white"> lebih baik melalui</span>
                <span className="text-[#DCFD78]"> beberapa</span>
              </span>
              <span className="text-[#DCFD78]"> pertanyaan </span>
              <span className="text-white"> sederhana</span>
            </h1>
            <div>
            <img className="left-100 md:hidden" src={PeopleSit} alt="People Sit" />
          </div>
            <div className="mt-[40px] lg:mt-[-80] md:mt-[100] sm:mt-[-100]">
              <h1 className="text-xl md:text-xl lg:text-xl">
                Beberapa program yang telah kami rancang dapat membantu anda.
              </h1>
            </div>

            <div className="grid grid-cols-3 gap-0 w-[600px] max-sm:grid-cols-2 w-full">
              <img className="width-[200px]" src={Icon1} alt="Icon 1" />
              <img className="width-[200px]" src={Icon2} alt="Icon 2" />
              <img className="width-[200px]" src={Icon3} alt="Icon 3" />
            </div>
          </div>

          <div>
            <img className="left-100 max-md:hidden" src={PeopleSit} alt="People Sit" />
          </div>
        </div>



        <div className="flex gap-4 mt-4">
          <LazyMotion features={domAnimation}>
            <m.button
              className="box rounded-[25px] px-4 py-2 bg-[#DDFD78] hover:bg-[#DDFD78] focus:outline-none text-black"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ stiffness: 400, damping: 17 }}
              type="button" // Tambahkan properti type="button"
              onClick={() => navigate("/login")}
            > 
              Mulai Sekarang
            </m.button>
            <m.button
              className="box rounded-[25px] border-white bg-[#3B3486] px-4 py-2 hover:bg-[#564CC1] focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ stiffness: 400, damping: 17 }}
              type="button" // Tambahkan properti type="button"
              onClick={() => navigate("/register")}
            >
              Buat Akun
            </m.button>
          </LazyMotion>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HalamanUtama;
