import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../s.png";
import { LogOut, Layers, Handshake, Clock, Pencil, Trash2 } from "lucide-react";
import profile from "../propil.jpeg";

export default function DashPenyedia() {
  const [isRiwayat, setIsRiwayat] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

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
                <div className="font-semibold">Username Penyedia</div>
              </div>

              <div className="mr-10">
                <Link to="/"><LogOut className="text-black hover:scale-95" size={20} /></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="mx-10 ">
        <div className="h-[10vh] flex mt-10 gap-10">
          <div className="bg-linear-to-t from-white via-white to-indigo-100 flex-1 py-10 rounded-xl shadow flex justify-center items-center gap-4 hover:scale-95 hover:shadow-xl transition-all duration-300 ease-in-out">
            <Layers
              size={32}
              className="w-[40px] h-[40px] p-2 bg-green-500 rounded-full "
            />
            <div className="flex flex-col ">
              <h1 className="text-2xl font-bold">10</h1>
              <h3 className="text-sm text-gray-700">Jumlah Stok</h3>
            </div>
          </div>
          <div className="bg-linear-to-t from-white via-white to-indigo-100 flex-1 py-10 rounded-xl shadow flex justify-center items-center gap-4 hover:scale-95 hover:shadow-xl transition-all duration-300 ease-in-out">
            <Handshake
              size={32}
              className="w-[40px] h-[40px] p-2 bg-indigo-500 rounded-full "
            />
            <div className="flex flex-col ">
              <h1 className="text-2xl font-bold">10</h1>
              <h3 className="text-sm text-gray-700">Telah Terdistribusi</h3>
            </div>
          </div>
          <div className="bg-linear-to-t from-white via-white to-indigo-100 flex-1 py-10 rounded-xl shadow flex justify-center items-center gap-4 hover:scale-95 hover:shadow-xl transition-all duration-300 ease-in-out">
            <Clock
              size={32}
              className="w-[40px] h-[40px] p-2 bg-yellow-400 rounded-full"
            />
            <div className="flex flex-col ">
              <h1 className="text-2xl font-bold">10</h1>
              <h3 className="text-sm text-gray-700">Menunggu Konfirmasi</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-10 mb-10 h-[10vh] bg-indigo-700 text-white mx-10 rounded-xl shadow">
        <div className="flex justify-around items-center p-4 text-sm font-semibold">
          <div
            className={
              isRiwayat ? "" : "border-b-4 border-indigo-100 pb-2 rounded-md"
            }
          >
            <button type="button" onClick={() => setIsRiwayat(false)}>
              Database Bansos
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
        {isRiwayat == false && (
          <div className={`mt-5 h-[10vh] bg-white rounded-t-xl shadow p-5`}>
            <div>
              <button
                type="button"
                className="py-2 px-3 bg-indigo-700 text-xs text-white font-semibold rounded-xl mb-5 hover:scale-95 hover:bg-indigo-900 transition-all duration-300 ease-in-out"
              >
                + Tambah Paket Baru
              </button>
            </div>
          </div>
        )}

        {isRiwayat && (
          <div
            className={`mt-5 h-[5vh] bg-white shadow rounded-t-xl p-5`}
          ></div>
        )}

        {isRiwayat == false && (
          <div className="h-[35vh] bg-white shadow px-10 py-2 overflow-x-auto ">
            <div className="">
              <table className="w-full text-xs text-gray-500 border-collapse">
                <thead className="rounded-t-xl">
                  <tr className="bg-gray-100 text-left mx-5 border-b-2 border-gray-300">
                    <th className="w-1/5 py-3 px-3">ID Paket</th>
                    <th className="w-1/5 py-3 px-3">Nama Paket</th>
                    <th className="w-1/5 py-3 px-3">Stok</th>
                    <th className="w-1/5 py-3 px-3">Terakhir Diperbaharui</th>
                    <th className="w-1/5 py-3 px-3">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex gap-2">
                      <button type="button" onClick={() => setIsEdit(!isEdit)}>
                        <Pencil
                          size={16}
                          className="w-[30px] h-[30px] bg-yellow-300 text-black p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-yellow-500 ease-in-out"
                        />
                      </button>
                      <button>
                        <Trash2
                          size={16}
                          className="w-[30px] h-[30px] bg-red-500 text-black p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-red-700 ease-in-out"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex gap-2">
                      <button type="button" onClick={() => setIsEdit(!isEdit)}>
                        <Pencil
                          size={16}
                          className="w-[30px] h-[30px] bg-yellow-300 text-black p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-yellow-500 ease-in-out"
                        />
                      </button>
                      <button>
                        <Trash2
                          size={16}
                          className="w-[30px] h-[30px] bg-red-500 text-black p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-red-700 ease-in-out"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex gap-2">
                      <button type="button" onClick={() => setIsEdit(!isEdit)}>
                        <Pencil
                          size={16}
                          className="w-[30px] h-[30px] bg-yellow-300 text-black p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-yellow-500 ease-in-out"
                        />
                      </button>
                      <button>
                        <Trash2
                          size={16}
                          className="w-[30px] h-[30px] bg-red-500 text-black p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-red-700 ease-in-out"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex gap-2">
                      <button type="button" onClick={() => setIsEdit(!isEdit)}>
                        <Pencil
                          size={16}
                          className="w-[30px] h-[30px] bg-yellow-300 text-black p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-yellow-500 ease-in-out"
                        />
                      </button>
                      <button>
                        <Trash2
                          size={16}
                          className="w-[30px] h-[30px] bg-red-500 text-black p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-red-700 ease-in-out"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex gap-2">
                      <button type="button" onClick={() => setIsEdit(!isEdit)}>
                        <Pencil
                          size={16}
                          className="w-[30px] h-[30px] bg-yellow-300 text-black p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-yellow-500 ease-in-out"
                        />
                      </button>
                      <button>
                        <Trash2
                          size={16}
                          className="w-[30px] h-[30px] bg-red-500 text-black p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-red-700 ease-in-out"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex gap-2">
                      <button type="button" onClick={() => setIsEdit(!isEdit)}>
                        <Pencil
                          size={16}
                          className="w-[30px] h-[30px] bg-yellow-300 text-black p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-yellow-500 ease-in-out"
                        />
                      </button>
                      <button>
                        <Trash2
                          size={16}
                          className="w-[30px] h-[30px] bg-red-500 text-black p-1 rounded-md hover:scale-95 transition-scale duration-300 hover:bg-red-700 ease-in-out"
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {isEdit && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center"
            onClick={() => setIsEdit(false)}
          >
            <div className="text-center" onClick={(e) => e.stopPropagation()}>
              <div className="bg-white w-[25vw] h-[65vh] rounded-2xl p-5">
                <h1 className="text-xl font-bold text-black">Edit Paket</h1>
                <div className="flex mt-1 bg-indigo-700 w-[22vw] h-[5px] rounded-2xl"></div>
                <form className="flex flex-col flex-wrap">
                  <input
                    type="text"
                    name="nama_paket"
                    placeholder="Nama Paket"
                    required
                    className="mt-8 pr-5 pl-3 py-2 rounded-xl"
                    style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.18)" }}
                  ></input>
                  <input
                    type="number"
                    name="stok"
                    placeholder="Stok"
                    required
                    className="mt-2 pr-5 pl-3 py-2 rounded-xl"
                    style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.18)" }}
                  ></input>
                  <textarea
                    type="text"
                    name="deskripsi"
                    placeholder="Deskripsi"
                    required
                    className="mt-2 pr-5 pl-3 pt-2 pb-20 text-wrap rounded-xl resize-none"
                    style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.18)" }}
                  ></textarea>
                  <button
                    type="submit"
                    className=" bg-indigo-700 mx-20 my-6 py-2 rounded-2xl text-white font-bold"
                  >
                    Submit
                  </button>
                </form>
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
                    <th className="w-1/5 py-3 px-3">ID Transaksi</th>
                    <th className="w-1/5 py-3 px-3">ID Penerima</th>
                    <th className="w-1/5 py-3 px-3">ID Paket</th>
                    <th className="w-1/5 py-3 px-3">Tanggal Penyaluran</th>
                    <th className="w-1/5 py-3 px-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex ">
                      <div className="bg-yellow-300 p-1 rounded-xl text-black font-semibold">
                        Pending
                      </div>
                    </td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex ">
                      <div className="bg-green-500 p-1 rounded-xl text-black font-semibold">
                        Diterima
                      </div>
                    </td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex ">
                      <div className="bg-green-500 p-1 rounded-xl text-black font-semibold">
                        Diterima
                      </div>
                    </td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">12</td>
                    <td className="py-3 px-3">kemaren</td>
                    <td className="py-3 px-3 flex ">
                      <div className="bg-green-500 p-1 rounded-xl text-black font-semibold">
                        Diterima
                      </div>
                    </td>
                  </tr>
                  <tr className="text-left  border-b-2 border-gray-300">
                    <td className="py-3 px-3">123</td>
                    <td className="py-3 px-3">Ayam</td>
                    <td className="py-3 px-3">12</td>
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
