import React from "react";
import LogoTeduh from "../../assets/images/LogoTeduh.svg";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import "./mobile.css";
import { LazyMotion, m, domAnimation } from "framer-motion";

const LoginPage = () => {
  return (
    <div className="container mx-auto py-[20px] px-[20px] font-sans">
      <img className="fixed w-[200px]" src={LogoTeduh} alt="Logo Teduh" />
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="w-900px w-full md:w-3/4 lg:w-1/2 flex justify-center items-center rounded-xl p-10">
          <div className="w-[400px] bg-white rounded-[40px] p-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-black">
              Masuk akun
              <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-[#3B3486]">
                {" "}
                Teduh
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-black">
                {" "}
                Kamu!
              </span>
            </h1>
            <p className="text-gray-600 mb-4 fontPoppins">
              Silakan mengisi data berikut!
            </p>
            <div className="mb-4 relative">
              <input
                type="email"
                placeholder="Masukan Email"
                className="w-full pl-10 border border-gray-300 rounded-[25px] px-4 py-2 focus:outline-none focus:border-[#3B3486] bg-white text-black"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <MdAlternateEmail className="text-gray-400" />
              </div>
            </div>

            <div className="mb-4. relative">
              <input
                type="password"
                placeholder="Masukan Password"
                className="w-full pl-10 border border-gray-300 rounded-[25px] px-4 py-2 focus:outline-none focus:border-[#3B3486] bg-white text-black"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <RiLockPasswordLine className="text-gray-400" />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <LazyMotion features={domAnimation}>
                <m.button
                  className="box rounded-[25px] px-4 py-2 bg-[#3B3486] hover:bg-[#564CC1] focus:outline-none"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ stiffness: 400, damping: 17 }}
                  type="button" // Tambahkan properti type="button"
                >
                  Masuk
                </m.button>
                <m.button
                  className="box rounded-[25px] px-4 py-2 bg-[#3B3486] hover:bg-[#564CC1] focus:outline-none"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ stiffness: 400, damping: 17 }}
                  type="button" // Tambahkan properti type="button"
                >
                  (Test) Masuk Responden
                </m.button>
              </LazyMotion>
            </div>
            <p className="text-black mt-4 underline">
              Belum punya akun?{" "}
              <a href="#" className="text-black font-bold hover:text-[#564CC1]">
                Buat Akun
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
