import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../s.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isPenerima, setIsPenerima] = useState(null);

  const navigate = useNavigate();

  function handleClick(penerima) {
    setIsPenerima(penerima);
    localStorage.setItem("isPenerima", penerima);
    navigate("/register");
  }

  useEffect(() => {
    const value = localStorage.getItem("isPenerima");
    setIsPenerima(value === "true");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isPenerima) {
      navigate("/dashboard_penerima");
    } else {
      navigate("/dashboard_penyedia");
    }
  };

  return (
    <div
      className={`h-[100vh] flex flex-col lg:flex-row hide-scrollbar ${
        isPenerima ? "translate-x-0" : "translate-x-[45vw]"
      } transition-all duration-700 ease-in-out`}
    >
      <div className="bg-white w-[55vw] h-full p-5">
        <div className="flex flex-col items-center">
          <div className="mt-10 text-5xl font-extrabold">Masuk</div>
          <div className="mt-3 mb-7 text-xl text-gray-500 font-semibold">
            Sebagai{" "}
            <span className="text-indigo-700 font-bold">
              {isPenerima ? "Penerima" : "Penyedia"}
            </span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faGoogle}
              className="mr-5 border-2 border-gray-200 p-2 rounded-full hover:scale-120 transition-scale duration-300 ease-in-out"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              size
              className="mr-5 border-2 border-gray-200 p-2 rounded-full hover:scale-120 transition-scale duration-300 ease-in-out"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className=" border-2 border-gray-200 p-2 rounded-full hover:scale-120 transition-scale duration-300 ease-in-out"
            />
          </div>
          <div className="mt-5 text-sm">
            Atau{" "}
            <a className="text-indigo-300 hover:text-indigo-500" onClick={isPenerima ? ()=>handleClick(true) : ()=>handleClick(false)}>
              <Link to="/register">membuat akun baru</Link>
            </a>
          </div>
          <div>
            <form className="flex flex-col m-8" onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="role"
                value={isPenerima ? "penerima" : "penyedia"}
                readOnly
              ></input>
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                className="mb-5 pr-40 pl-3 py-4 shadow-inset focus:border-2 border-black rounded-2xl "
                style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.18)" }}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="pr-40 pl-3 py-4  focus:border-2 border-black rounded-2xl "
                style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.18)" }}
              />
              <button
                type="submit"
                className="mt-10 bg-indigo-700 py-4 rounded-xl text-xl text-white font-bold hover:scale-97 hover:bg-indigo-900 transition-all duration-300 ease-in-out"
              >
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className={` ${
          isPenerima
            ? "bg-linear-to-r from-indigo-300 to-indigo-500"
            : "bg-linear-to-r from-indigo-500 to-indigo-300"
        } w-[45vw] h-full flex flex-col items-center ${
          isPenerima ? "translate-x-0 " : "-translate-x-[100vw]"
        } transition-all duration-700 ease-in-out`}
      >
        <div
          className="bg-white px-2 py-2 rounded-3xl mt-15"
          style={{ boxShadow: "2px 4px 4px rgba(0,0,0,0.18)" }}
        >
          <img src={logo} alt="Gambar Logo" className="w-[80px] lg:w-[160px]" />
        </div>
        <div className="mt-25 text-3xl font-extrabold text-white">
          Anda {isPenerima ? "Penyedia" : "Penerima"} Bantuan?
        </div>
        <div
          className="mt-6 w-[80px] h-[8px] bg-white rounded-xl"
          style={{ boxShadow: "inset 2px 3px 4px rgba(0,0,0,0.1)" }}
        ></div>
        <div className="mt-8 text-center w-[30vw] text-gray-100">
          {" "}
          {isPenerima
            ? "Login khusus bagi lembaga atau organisasi yang ingin menyalurkan bantuan sosial."
            : "Jika kamu terdampak secara ekonomi dan membutuhkan bantuan, kamu bisa masuk sebagai Penerima Bansos. Kami hadir untuk mendukungmu."}
        </div>
        <button
          type="button"
          onClick={() => setIsPenerima(!isPenerima)}
          className="mt-12 bg-white text-indigo-400 text-xl font-semibold px-10 py-3 rounded-2xl hover:bg-gray-100 hover:scale-97 transition-all duration-300 ease-in-out"
        >
          Masuk Sebagai {isPenerima ? "Penyedia" : "Penerima"}
        </button>
      </div>
    </div>
  );
}
