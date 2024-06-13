import React from "react";

import WalletsList from "./buttons/WalletsList";

import { IoCloseSharp } from "react-icons/io5";

export default function WalletSideBar({ isOpen, onClose }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-200 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "w-1/4 m-3 rounded-xl max-w-lg right-0 absolute bg-gray-900 h-5/6 shadow-xl delay-400 duration-300 ease-in-out transition-all transform  "
        }
      >
        <article className="relative w-full max-w-lg pb-10 flex flex-col">
          <div className="flex flex-row items-center">
            <button
              className="p-2 m-4 rounded-lg bg-gray-800 hover:bg-gray-800 cursor-pointer hover:bg-indigo-900"
              onClick={onClose}
            >
              <IoCloseSharp className="text-white text-3xl" />
            </button>
            <header className="p-4 font-bold text-white text-lg">
              Connect a Wallet
            </header>
          </div>
          <WalletsList />
          {/*  */}
        </article>
      </section>

      <section className="w-screen h-full cursor-pointer "></section>
    </main>
  );
}