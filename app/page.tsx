// app\page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-2">
        <div className="flex flex-row justify-between items-center w-full max-w-6xl p-4 sm:px-6 lg:px-8 bg-[#F8F8F8] my-20">
          <div className="w-full md:w-1/2 pr-8">
            <h1 className="text-4xl font-bold mb-4 text-[#3A408C]">PROVIDING SERVICES AT YOUR DOOR</h1>
            <p className="mb-8 text-[#707070]"><span className="font-bold">MACC Essentials</span> has an important role in making supplies and services available to customers and their patients during this critical time. This includes services from various domains. Our aim is to aid you. As much we can.</p>
            <button className="bg-[#E2342D] hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-[#FFFFFF]">
              Learn More
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <Image src="/99e70ae539504e38b1af4ebaebe8e9f2.png" alt="hero image" width={500} height={500} />
          </div>
        </div>
      </div>
    </>
  );
}
