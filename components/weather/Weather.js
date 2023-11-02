"use client";
import React, { useState } from "react";

export default function Weather() {
  const [cityName, setCityName] = useState("");
  async function fetchData(cityName) {
    try {
      let apiUrl = "";
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="h-screen grid place-content-center">
      <div className="bg-sky-300 px-[15vw] min-px-[100vw] pt-12 pb-[10vw] rounded-md shadow-lg">
        <form className="flex gap-2 translate-x-8">
          <input
            type="text"
            className="rounded-full shadow-lg h-12 bg-slate-200 p-6 outline-none text-black"
            placeholder="Enter your location"
          ></input>
          <button
            type="submit"
            className="bg-sky-500 rounded-full p-2.5 hover:bg-sky-600 shadow-lg text-black ease-in duration-100"
          >
            Search
          </button>
        </form>
        <div className="pt-3">
          {/* <h2 className="bg-red-300 rounded-md p-2 shadow-md flex justify-center">
            Temp error message
          </h2> */}
        </div>
        <div className="grid place-items-center pt-4">
          <h1>tempImg</h1>
          <h1 className="text-[2vw] flex justify-center">Hamilton</h1>
          <h1 className="text-[2vw] flex justify-center">New York</h1>
        </div>
      </div>
    </div>
  );
}
