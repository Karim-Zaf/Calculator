"use client";

import Calculatrice from "./Calculatrice";

export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
        <h1 className='text-black font-bold md:text-5xl text-3xl text-center p-4 md-4'>Karim's Calculator</h1>
        <Calculatrice />
        <h1 className='absolute bottom-5 right-5 text-gray-300'>&copy; Made by Karim Zaafrani</h1>
    </div>
  );
}
