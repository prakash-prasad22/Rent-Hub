import React from 'react';
import carImg from "../assets/carHome.png";
import bikeImg from "../assets/bikeHome.png";
import roadImg from "../assets/roadImg.png";

function Home() {
  return (
    <section className='bg-[#eeeff1] h-screen relative'>
      {/* Text Content (Positioned at the top) */}
      <div className='absolute top-[15vh] left-0 w-full h-1/2 flex flex-col justify-center items-center text-center'>
        <h1 className='text-4xl font-[primary] text-gray-800 mb-4'>Drive Your Dream  <span className='font-[highlighted] text-6xl'>car/bike</span>  Today</h1>
        {["Rent the perfect car for any trip with RentXpress." , "Enjoy flexible options, great prices, and a hassle-free experience." , " Get started in a few clicks!"].map((text , index) => 
          <p key={index} className='text-lg text-gray-800 font-[secondary]'>{text}</p>
        )}
      </div>

      {/* Image Container (Positioned at the bottom) */}
      <div className='z-[1000] absolute bottom-0 left-0 w-full flex justify-center items-end'>
        <img src={bikeImg} alt="Bike" className='w-[45vw] object-contain' />
        <img src={carImg} alt="Car" className='w-[55vw] object-contain' />
      </div>

      {/* Road Image as Background (Optional - Adjust as needed) */}
      <div className='z-[100] absolute top-0 left-0 w-full h-full overflow-hidden'>
        <img
          src={roadImg}
          alt=""
          className='w-full h-full object-scale-down opacity-30' // Adjust opacity as needed
          style={{ transform: 'rotate(20deg)' }} // Removed rotation for background
        />
      </div>
    </section>
  );
}

export default Home;