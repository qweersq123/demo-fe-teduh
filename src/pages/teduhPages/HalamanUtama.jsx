import React from "react";
import LogoTeduh from "../../assets/images/LogoTeduh.svg";
import LogoTele from "../../assets/images/LogoTele.svg";
import Icon1 from "../../assets/images/Icon1.svg";
import Icon2 from "../../assets/images/Icon2.svg";
import Icon3 from "../../assets/images/Icon3.svg";
import PeopleSit from "../../assets/images/PeopleSit.svg";
import "./mobile.css";
import { LazyMotion, m, domAnimation } from "framer-motion";

const HalamanUtama = () => {
  return (
    <div className="mx-auto py-[20px] px-[20px] w-screen p-10">
      <div className="flex justify-between">
        <div>
          <img
            className="fixed w-32 lg:w-[180px] sm:w-[100px] md:w-[150px]"
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

      <div className="container mx-auto pl-5 sm:pl-10 md:pl-15 lg:pl-20  mt-20 p-10">
        <div>
          <h1 className="text-2xl md:text-2xl lg:text-2xl">
            Selamat datang di Teduh
          </h1>
        </div>

        <div className="w-full flex justify-between">
          <div className="mt-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
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
          </div>

          <div>
            <img className="left-100" src={PeopleSit} alt="People Sit" />
          </div>
        </div>

        <div className="mt-[40px] lg:mt-[-80] md:mt-[100] sm:mt-[-100]">
          <h1 className="text-2xl md:text-2xl lg:text-base">
            Beberapa program yang telah kami rancang dapat membantu anda.
          </h1>
        </div>

        <div class="grid grid-cols-3 gap-0 w-[600px]">
          <img className="width-[200px]" src={Icon1} alt="Icon 1" />
          <img className="width-[200px]" src={Icon2} alt="Icon 2" />
          <img className="width-[200px]" src={Icon3} alt="Icon 3" />
        </div>

        <div className="flex gap-4 mt-4">
          <LazyMotion features={domAnimation}>
            <m.button
              className="box rounded-[25px] px-4 py-2 bg-[#DDFD78] hover:bg-[#DDFD78] focus:outline-none text-black"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ stiffness: 400, damping: 17 }}
              type="button" // Tambahkan properti type="button"
            >
              Mulai Sekarang
            </m.button>
            <m.button
              className="box rounded-[25px] px-4 py-2 hover:bg-[#564CC1] focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ stiffness: 400, damping: 17 }}
              type="button" // Tambahkan properti type="button"
            >
              Buat Akun
            </m.button>
          </LazyMotion>
        </div>
      </div>
    </div>
  );
};

export default HalamanUtama;
