import React, { useEffect, useState } from "react";
import LogoTeduh from "../../assets/images/LogoTeduh.svg";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { PiPhoneThin } from "react-icons/pi";
import "./mobile.css";
import { LazyMotion, m, domAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postData } from "../../helpers/api";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [recaptchaToken, setRecaptchaToken] = useState('');

  useEffect(() => {
    const loadReCaptchaScript = () => {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=6Lfh3twpAAAAAH9Lil-e3O93cB2yrN-a7bUkyXQW';
      document.body.appendChild(script);
    };

    loadReCaptchaScript();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
      recaptchaToken: recaptchaToken,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email tidak valid")
        .required("Email harus diisi."),
      password: Yup.string().required("Password harus diisi."),
      name: Yup.string().required("Nama harus diisi."),
      phone: Yup.string().required("Nomor telepon harus diisi."),
      password_confirmation: Yup.string().required("Konfirmasi password harus diisi."),
      recaptchaToken: Yup.string().required("Pastikan anda bukan bot."),
    }),

    onSubmit: (values) => {
      console.log(values);
      // cek password dan konfirmasi password
      if (values.password !== values.password_confirmation) {
        alert("Password dan konfirmasi password tidak sama");
      } else {
        postData("/register", values).then((res) => {
          if (res.status === 201) {
            console.log(res.data);
            const userData = res.data.data.user;
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.data.user));
            toast.success("Registrasi berhasil!");
            navigate("/dashboard/persetujuan", { state: { 
              isNewUser: userData.isNewUser,
             } });
          }
        })

      }
    },
  });

  const onChange = (value) => {
    console.log("Captcha value:", value);
    formik.setValues({ ...formik.values, recaptchaToken: value });
    setRecaptchaToken(value);
  };

  return (
    <div className="w-screen bg-[#3B3486] h-[100vh] min-h-[1000px]">
      <div className="container mx-auto py-[20px]  font-sans text-white ">
        <img className=" w-[200px] pl-4" src={LogoTeduh} alt="Logo Teduh" />
        <div className="flex justify-center items-start ">
          <div className=" w-full md:w-3/4 mb-10  lg:w-1/2 flex justify-center items-center rounded-xl p-10">
            <div className="w-[400px] bg-white rounded-[40px] p-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-black">
                Buat Akun
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
                Silahkan mengisi data berikut untuk menyelesaikan pembuatan akun!
              </p>
              <div className=" relative">
                <input
                  type="email"
                  placeholder="Masukan Nama"
                  className="w-full pl-10 border border-gray-300 rounded-[25px] px-4 py-2 focus:outline-none focus:border-[#3B3486] bg-white text-black"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <GoPerson className="text-gray-400" />
                </div>
              </div>
              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-500 mb-4 mt-2 ml-2">{formik.errors.name}</p>
              ) : <br />}

              <div className="relative">
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

              <div className="relative">
                <input
                  type="phone"
                  placeholder="Masukan No Telepon"
                  className="w-full pl-10 border border-gray-300 rounded-[25px] px-4 py-2 focus:outline-none focus:border-[#3B3486] bg-white text-black"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <PiPhoneThin className="text-gray-400" />
                </div>
              </div>
              {formik.touched.phone && formik.errors.phone ? (
                <p className="text-red-500 mb-4 mt-2 ml-2">{formik.errors.phone}</p>
              ) : <br />}

              <div className="relative">
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

              <div className="mb-4. relative">
                <input
                  type="password"
                  placeholder="Masukan Kembali Password"
                  className="w-full pl-10 border border-gray-300 rounded-[25px] px-4 py-2 focus:outline-none focus:border-[#3B3486] bg-white text-black"
                  id="password_confirmation"
                  name="password_confirmation"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password_confirmation}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <RiLockPasswordLine className="text-gray-400" />
                </div>
              </div>
              {formik.touched.password_confirmation && formik.errors.password_confirmation ? (
                <p className="text-red-500 mb-4 mt-2 ml-2">{formik.errors.password_confirmation}</p>
              ) : <br />}

              {/* Tampilkan reCAPTCHA */}
              <div className="w-full flex justify-center">
                <ReCAPTCHA
                  sitekey="6LdS6OQpAAAAABqvCwCBLEGFZ-yw8ZyvVsxeko2K"
                  onChange={onChange}
                />
              </div>
              {formik.touched.recaptchaToken && formik.errors.recaptchaToken ? (
                <p className="text-red-500 mb-4 mt-2 ml-2">{formik.errors.recaptchaToken}</p>
              ) : <br />}


              <div className="flex flex-col gap-4 mt-4">
                <p className="text-black mt-4 underline w-full flex justify-center">
                  Sudah punya akun? <a onClick={() => navigate("/login")} className="text-black ml-1 font-bold cursor-pointer hover:text-[#564CC1]"> Login</a>
                </p>
                <LazyMotion features={domAnimation}>
                  {/* <m.button
                    className="box rounded-[25px] bg-white px-4 py-2 border-black text-black hover:bg-[#e8e8e8] hover:border-black focus:outline-none"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ stiffness: 400, damping: 17 }}
                    type="button" // Tambahkan properti type="button"
                  >
                    <div className="flex justify-center items-center gap-3 font-light">
                      <FcGoogle className="" />
                      Daftar melalui Gmail
                    </div>
                  </m.button> */}
                  <m.button
                    className="box rounded-[25px] px-4 py-2 bg-[#3B3486] hover:bg-[#564CC1] focus:outline-none"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ stiffness: 400, damping: 17 }}
                    type="button" // Tambahkan properti type="button"
                    onClick={() => formik.handleSubmit()}
                  >
                    Daftar Akun
                  </m.button>
                </LazyMotion>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default RegisterPage;
