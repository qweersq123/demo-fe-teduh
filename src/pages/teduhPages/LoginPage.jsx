import React, { useEffect, useState } from "react";
import LogoTeduh from "../../assets/images/LogoTeduh.svg";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import "./mobile.css";
import { LazyMotion, m, domAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchData, postData } from "../../helpers/api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "xxx@gmail.com",
      password: "12345",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email tidak valid")
        .required("Email harus diisi."),
      password: Yup.string().required("Password harus diisi."),
    }),

    onSubmit: (values) => {
      navigate("/dashboard");
      // postData("/login", values).then(async (res) => {
      //   if (res.status === 200) {
      //     toast.success("Login Berhasil");
      //     console.log(res.data);
      //     localStorage.setItem("token", res.data.data.token);
      //     localStorage.setItem('user', JSON.stringify(res.data.data.user));
      //     const token = res.data.data.token;
      //     if (res.data.data.user.role === 'admin') {
      //       navigate("/dashboard/admin", { state: { token } });
      //     } else {
      //       if (!res.data.data.user.allowAgreement || res.data.data.user.isNewUser) {
      //         navigate("/dashboard/persetujuan", { state: { token } });
      //       } else {
      //         navigate("/dashboard", { state: { token } });
      //       }
      //     }
      //   }
      // })
      //   .catch((err) => {
      //     console.log(err);
      //     alert("Silahkan cek kembali email dan password Anda!");
      //   });
    },
  });

  useEffect(() => {
    const tokent = localStorage.getItem("token");
    // buat demo
    formik.values.email = "xxx@gmail.com";
    formik.values.password = "12345";


    if (tokent) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="w-screen bg-[#3B3486] h-screen">

      <div className="container mx-auto py-[20px] px-[20px] font-sans text-white">
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
              <div className=" relative">
                <input
                  type="email"
                  placeholder="Masukan Email"
                  className="w-full pl-10 border border-gray-300 rounded-[25px] px-4 py-2 focus:outline-none focus:border-[#3B3486] bg-white text-black"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <MdAlternateEmail className="text-gray-400" />
                </div>
              </div>
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 mb-4 mt-2 ml-2">{formik.errors.email}</p>
              ) : <br />}

              <div className=" relative">
                <input
                  type="password"
                  placeholder="Masukan Password"
                  className="w-full pl-10 border border-gray-300 rounded-[25px] px-4 py-2 focus:outline-none focus:border-[#3B3486] bg-white text-black"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <RiLockPasswordLine className="text-gray-400" />
                </div>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500 mb-4 mt-2 ml-2">{formik.errors.password}</p>
              ) : <br />}

              <div className="flex flex-col gap-4 mt-4">
                <LazyMotion features={domAnimation}>
                  <m.button
                    className="box rounded-[25px] px-4 py-2 bg-[#3B3486] hover:bg-[#564CC1] focus:outline-none"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ stiffness: 400, damping: 17 }}
                    type="button" // Tambahkan properti type="button"
                    onClick={() => formik.handleSubmit()}
                  >
                    Masuk
                  </m.button>
                </LazyMotion>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <LazyMotion features={domAnimation}>
                  <m.button
                    className="box rounded-[25px] px-4 py-2 bg-[#3B3486] hover:bg-[#564CC1] focus:outline-none"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ stiffness: 400, damping: 17 }}
                    type="button" // Tambahkan properti type="button"
                    onClick={() => navigate("/dashboard/admin")}
                  >
                    Masuk Admin Dashboard
                  </m.button>
                </LazyMotion>
              </div>
              <p className="text-black mt-4 underline">
                Belum punya akun?{" "}
                <a onClick={() => navigate("/register")} className="text-black cursor-pointer font-bold hover:text-[#564CC1]">
                  Buat Akun
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
