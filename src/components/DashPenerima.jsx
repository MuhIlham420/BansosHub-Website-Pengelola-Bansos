import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../s.png";
import { LogOut, Box, Timer, Info, X, Truck, Plus } from "lucide-react";
import profile from "../propil.jpeg";

export default function DashPenerima() {
  const [isRiwayat, setIsRiwayat] = useState(false);
  const [isDetail, setIsDetail] = useState(false);

  return (
    <div className="h-[100vh] bg-linear-to-t from-indigo-100 to-indigo-300">
      <nav>
        <div className="bg-white w-[100vw] h-auto flex justify-between items-center rounded-b-4xl shadow-xl">
          <div className="px-3 py-2">
            <img
              src={logo}
              alt="Gambar Logo"
              className="w-[100px] lg:w-[200px]"
            />
          </div>
          <div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <div
                  className="bg-cover rounded-full h-[40px] w-[40px] "
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
                <div className="font-semibold">Username Penerima</div>
              </div>

              <div className="mr-10">
                <Link to="/">
                  <LogOut className="text-black hover:scale-95" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="mx-10 ">
        <div className="h-[20vh] flex mt-3 gap-10">
          <div className="flex flex-1 gap-6 ">
            <div className="bg-linear-to-t from-white via-white to-indigo-100 flex-1 py-10 rounded-xl shadow flex justify-center items-center gap-4 hover:scale-95 hover:shadow-xl transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-4 p-5">
                <Box
                  size={32}
                  className="w-[32px] h-[32px] p-1 bg-green-500 rounded-full "
                />
                <div>
                  <h1 className="text-2xl font-bold">27 </h1>
                  <h3 className="text-sm text-gray-700 text-nowrap">
                    Tipe Bansos Tersedia
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-t from-white via-white to-indigo-100 flex-1 py-10 rounded-xl shadow flex justify-center items-center gap-4 hover:scale-95 hover:shadow-xl transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-4 p-5">
                <Truck size={32} className="w-[32px] h-[32px] p-1 bg-yellow-300 rounded-full "/> 
                <div>
                    
                  <h1 className="text-xl font-bold">Pending</h1>
                  <h3 className="text-sm text-gray-700 text-nowrap">
                    Status Bansos
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-2 gap-2">
            <div className="bg-linear-to-t from-white via-white to-indigo-100 flex-1  rounded-xl shadow flex justify-center items-center gap-4 hover:scale-95 hover:shadow-xl transition-all duration-300 ease-in-out">
              <Timer
                size={32}
                className="w-[50px] h-[50px] p-1 bg-yellow-500 rounded-full "
              />
              <div>
                <div className="text-2xl font-bold">
                  10 juni 2025 : 22 hari lagi
                </div>
                <div className="text-sm text-gray-700">
                  Perkiraan bantuan selanjutnya
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-3 mb-10 h-[10vh] bg-indigo-700 text-white mx-10 rounded-xl shadow">
        <div className="flex justify-around items-center p-4 text-sm font-semibold">
          <div
            className={
              isRiwayat ? "" : "border-b-4 border-indigo-100 pb-2 rounded-md"
            }
          >
            <button type="button" onClick={() => setIsRiwayat(false)}>
              Daftar Bansos
            </button>
          </div>
          <div
            className={
              isRiwayat ? "border-b-4 border-indigo-100 pb-2 rounded-md" : ""
            }
          >
            <button type="button" onClick={() => setIsRiwayat(true)}>
              Riwayat Bansos
            </button>
          </div>
        </div>

        <div className={`mt-5 h-[5vh] bg-white shadow rounded-t-xl p-5`}></div>

        {isRiwayat == false && (
          <div className=" h-[38.5vh] bg-white shadow px-10 py-2 overflow-x-auto ">
            <div className="">
              <table className="w-full text-xs text-gray-500 border-collapse">
                <thead className="rounded-t-xl">
                  <tr className="bg-gray-100 text-left mx-5 border-b-2 border-gray-300">
                    <th className="w-1/6 py-3 px-3">ID Paket</th>
                    <th className="w-1/6 py-3 px-3">Nama Paket</th>
                    <th className="w-1/6 py-3 px-3">Maksimum Penghasilan</th>
                    <th className="w-1/6 py-3 px-3">Stok</th>
                    <th className="w-1/6 py-3 px-3">Detail</th>
                    <th className="w-1/6 py-3 px-3">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">2.000.000</td>
                    <td className="py-3 px-3">3</td>
                    <td className="py-3 px-3 ">
                      <button
                        type="button"
                        className="flex items-center gap-2 text-md text-indigo-700"
                        onClick={() => setIsDetail(!isDetail)}
                      >
                        <Info size={20} />
                        <h1 className="text-indigo-700">Detail</h1>
                      </button>
                    </td>
                    <td className="py-3 px-3 "><Plus size={16} className="w-[30px] h-[30px] bg-green-600 text-white p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-green-400 ease-in-out"/></td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">2.000.000</td>
                    <td className="py-3 px-3">3</td>
                    <td className="py-3 px-3 ">
                      <button
                        type="button"
                        className="flex items-center gap-2 text-md text-indigo-700"
                        onClick={() => setIsDetail(!isDetail)}
                      >
                        <Info size={20} />
                        <h1 className="text-indigo-700">Detail</h1>
                      </button>
                    </td>
                    <td className="py-3 px-3 "><Plus size={16} className="w-[30px] h-[30px] bg-green-600 text-white p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-green-400 ease-in-out"/></td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">2.000.000</td>
                    <td className="py-3 px-3">3</td>
                    <td className="py-3 px-3 ">
                      <button
                        type="button"
                        className="flex items-center gap-2 text-md text-indigo-700"
                        onClick={() => setIsDetail(!isDetail)}
                      >
                        <Info size={20} />
                        <h1 className="text-indigo-700">Detail</h1>
                      </button>
                    </td>
                    <td className="py-3 px-3 "><Plus size={16} className="w-[30px] h-[30px] bg-green-600 text-white p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-green-400 ease-in-out"/></td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">2.000.000</td>
                    <td className="py-3 px-3">3</td>
                    <td className="py-3 px-3 ">
                      <button
                        type="button"
                        className="flex items-center gap-2 text-md text-indigo-700"
                        onClick={() => setIsDetail(!isDetail)}
                      >
                        <Info size={20} />
                        <h1 className="text-indigo-700">Detail</h1>
                      </button>
                    </td>
                    <td className="py-3 px-3 "><Plus size={16} className="w-[30px] h-[30px] bg-green-600 text-white p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-green-400 ease-in-out"/></td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">2.000.000</td>
                    <td className="py-3 px-3">3</td>
                    <td className="py-3 px-3 ">
                      <button
                        type="button"
                        className="flex items-center gap-2 text-md text-indigo-700"
                        onClick={() => setIsDetail(!isDetail)}
                      >
                        <Info size={20} />
                        <h1 className="text-indigo-700">Detail</h1>
                      </button>
                    </td>
                    <td className="py-3 px-3 "><Plus size={16} className="w-[30px] h-[30px] bg-green-600 text-white p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-green-400 ease-in-out"/></td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">2.000.000</td>
                    <td className="py-3 px-3">3</td>
                    <td className="py-3 px-3 ">
                      <button
                        type="button"
                        className="flex items-center gap-2 text-md text-indigo-700"
                        onClick={() => setIsDetail(!isDetail)}
                      >
                        <Info size={20} />
                        <h1 className="text-indigo-700">Detail</h1>
                      </button>
                    </td>
                    <td className="py-3 px-3 "><Plus size={16} className="w-[30px] h-[30px] bg-green-600 text-white p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-green-400 ease-in-out"/></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {isDetail && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center text-black"
            onClick={() => setIsDetail(false)}
          >
            <div className="text-center" onClick={(e) => e.stopPropagation()}>
              <div className="bg-white w-[25vw] h-[65vh] rounded-2xl p-5">
                <div className="flex justify-end">
                  <X
                    onClick={() => setIsDetail(false)}
                    className="hover:scale-95"
                  />
                </div>
                <h1 className="text-xl font-bold ">Deskripsi Paket</h1>
                <div className="flex mt-1 mb-3 bg-indigo-700 w-[22vw] h-[5px] rounded-2xl"></div>
                <div className="text-left">
                  <div className="bg-blue-100">
                    <label className="font-semibold">ID Paket : </label>123
                  </div>
                  <div>
                    <label className="font-semibold">Nama Paket : </label>ayam
                  </div>
                  <div className="bg-blue-100 mt-3">
                    <label className="font-semibold">ID Penyedia : </label>456
                  </div>
                  <div>
                    <label className="font-semibold">Nama Penyedia : </label>
                    anto
                  </div>
                  <div className="bg-blue-100 mt-3">
                    <label className="font-semibold">Deskripsi : </label>Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Ut id
                    pretium est, eget lobortis urna. Pellentesque eget consequat
                    metus, id varius purus. Donec sed nisi pretium, venenatis
                    ipsum sit amet, lacinia justo.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isRiwayat && (
          <div className=" h-[38.5vh] bg-white shadow px-10 py-2 overflow-x-auto ">
            <div className="">
              <table className="w-full text-xs text-gray-500 border-collapse">
                <thead className="rounded-t-xl">
                  <tr className="bg-gray-100 text-left mx-5 border-b-2 border-gray-300">
                    <th className="w-1/4 py-3 px-3">ID Transaksi</th>
                    <th className="w-1/4 py-3 px-3">ID Paket</th>
                    <th className="w-1/4 py-3 px-3">Nama Paket</th>
                    <th className="w-1/4 py-3 px-3">Tanggal Penyaluran</th>
                    <th className="w-1/4 py-3 px-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex ">
                      <div className="bg-yellow-300 p-1 rounded-xl text-black font-semibold">
                        Pending
                      </div>
                    </td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex ">
                      <div className="bg-green-500 p-1 rounded-xl text-black font-semibold">
                        Diterima
                      </div>
                    </td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex ">
                      <div className="bg-green-500 p-1 rounded-xl text-black font-semibold">
                        Diterima
                      </div>
                    </td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex ">
                      <div className="bg-green-500 p-1 rounded-xl text-black font-semibold">
                        Diterima
                      </div>
                    </td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex ">
                      <div className="bg-green-500 p-1 rounded-xl text-black font-semibold">
                        Diterima
                      </div>
                    </td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex ">
                      <div className="bg-green-500 p-1 rounded-xl text-black font-semibold">
                        Diterima
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="h-[5vh] bg-white shadow rounded-b-xl"></div>
      </div>
    </div>
  );
}
