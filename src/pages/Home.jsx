import React from 'react';
import carImg from "../assets/carHome.png";
import bikeImg from "../assets/bikeHome.png";
import roadImg from "../assets/roadImg.png";
import Search from '../components/Search';
import Working from '../components/Working'
import Marquee from 'react-fast-marquee';
import { FaStar } from "react-icons/fa";

import img1 from "../assets/brezza-exterior-right-front-three-quarter-9.webp"
import img2 from "../assets/creta-exterior-right-front-three-quarter-5.webp"
import img3 from "../assets/curvv-exterior-right-front-three-quarter-15.webp"
import img4 from "../assets/dzire-exterior-right-front-three-quarter-27.webp"
import img5 from "../assets/hyryder-exterior-right-front-three-quarter-73.webp"
import img6 from "../assets/thar-roxx-exterior-right-front-three-quarter-25.webp"
import img7 from "../assets/syros-exterior-right-front-three-quarter.webp"
import img8 from "../assets/scorpio-n-exterior-right-front-three-quarter-76.webp"
import img9 from "../assets/punch-exterior-right-front-three-quarter-57.webp"
import FaqList from '../components/Faq/FaqList';
import deliver from "../assets/deliver.webp"

const data = [
  {
    img : img1,
    name : "Vitara Brezza",
    owner : "Prakash",
    rating : 4.8
  },
  {
    img : img2,
    name : "Creta",
    owner : "Prakash",
    rating : 4.8
  },
  {
    img : img3,
    name: "Curvv" ,
    owner : "Prakash",
    rating : 4.8
  },
  {
    img : img4,
    name : "Swift Dzire",
    owner : "Prakash",
    rating : 4.8
  },
  {
    img : img5,
    name : "hyryder",
    owner : "Prakash",
    rating : 4.8
  },
  {
    img : img6,
    name : "Mahindra Thar",
    owner : "Prakash",
    rating : 4.8
  },
  {
    img : img7,
    name : "KIA",
    owner : "Prakash",
    rating : 4.8
  },
  {
    img : img8,
    name : "Scorpio-N",
    owner : "Prakash",
    rating : 4.8
  },
  {
    img : img9,
    name : "Punch",
    owner : "Prakash",
    rating : 4.8
  }
  
]

function Home() {
  return (
    <>
      {/* Landing Section : Contains Welcome Text , images and a search bar */}
      <section className='bg-[#eeeff1] h-screen relative'>
        {/* Text Content (Positioned at the top) */}
        <div className='absolute top-[15vh] left-0 w-full h-1/2 flex flex-col justify-center items-center text-center'>
          <h1 className='text-4xl font-[primary] text-gray-800 mb-4'>Drive Your Dream  <span className='font-[highlighted] text-6xl'>car/bike</span>  Today</h1>
          {["Rent the perfect car for any trip with RentXpress." , "Enjoy flexible options, great prices, and a hassle-free experience." , " Get started in a few clicks!"].map((text , index) => 
            <p key={index} className='text-lg text-gray-800 font-[secondary]'>{text}</p>
          )}

          <Search />
        </div>

        {/* Image Container (Positioned at the bottom) */}
        <div className='absolute bottom-0 left-0 w-full flex justify-center items-end'>
          <img src={bikeImg} alt="Bike" className='z-[10] w-[45vw] object-contain' />
          <img src={carImg} alt="Car" className='w-[55vw] object-contain' />
        </div>

        {/* Road Image as Background */}
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
          <img
            src={roadImg}
            alt=""
            className='w-full h-full object-scale-down opacity-30' // Adjust opacity as needed
            style={{ transform: 'rotate(20deg)' }} // Removed rotation for background
          />
        </div>
      </section>

      {/* Steps to book your ride*/}
      <section className='px-28 py-12'>
        <div className='text-center p-8'>
          <h3 className='text-[20px] font-[secondary] text-gray-600'>How it Works</h3>
          <h1 className='text-[28px] font-[primary] text-black'>Book your <span className='text-[#034367]'>Next Dream Ride</span> in 3 easy steps </h1>
        </div>

        <div>
          <Working />
        </div>
      </section>

      {/* Service Section : All the services provided is defined here along with description */}
      <section className=''>
        {/* Road Image as Background */}
        <div className='absolute w-full h-full overflow-hidden'>
          <img
            src={roadImg}
            alt=""
            className='w-full h-full  opacity-10' // Adjust opacity as needed
            style={{ transform: 'rotate(0deg)' }} // Removed rotation for background
          />
        </div>

        <h1 className='font-[highlighted] text-[#034367] text-[44px] text-center'>Our Services</h1>
        <div className="flex flex-col p-8 gap-1 mt-8 md:mt-20">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-1">
                    <div className="w-full md:w-1/2 text-white pr-4 -mt-12 -pl-8">
                      <p className="font-[primary] text-black text-[4vw] md:text-[3vh] leading-[3vh]">Fueled by a <span className="font-[highlighted] text-[#28534f] text-[6vw] md:text-[5vh]">passion</span> for crafting seamless digital experiences , 
                      I&apos;ve embarked on a journey to build innovative and impactful solutions and it has been a <span className="font-[highlighted] text-[#28534f] text-[6vw] md:text-[4vh]">continuous process of learning and growth.</span></p>
                      <p className="hidden md:block text-[2vh] mt-20 font-[secondary] text-white">Discovering the Possibilities ...</p>
                      <p className="hidden md:block text-[2vh] font-[secondary] text-white">Eager to contribute my skills and enthusiasm to a team that values innovation, continuous learning, and a collaborative spirit.😊</p>
                      <p className="hidden md:block text-[2vh] mb-20 font-[secondary] text-white">Driven to learn more from experienced and grow through mentorships.</p>
                    </div>
        
                    <div className="w-full md:w-1/2 bg-gradient-to-b from-[#034367] via-[#0b0a0f] to-[#034367] p-[1.5rem]">
                      <h1 className="text-white font-[primary] text-[4vh]">MERN-Stack</h1>
                      <img src="" alt="" className="" />
                      <p className="text-[2vh] text-white font-[secondary] mt-4 mb-4 md:hidden">I have successfully deployed 3-4 MERN-Based website and continuouslly working on more projects to hone my development skills.</p>
                      <p className="hidden md:block text-[2vh] text-white font-[secondary] mt-8 ">Web development is a constant pursuit of improvement. My ⭐MERN stack projects, including functional applications like QuickBuy and a doctor appointment system, alongside creative portfolio websites, serve as my ongoing training ground. </p>
                      <p className="hidden md:block text-[2vh] text-white font-[secondary]  mb-8">This hands-on approach allows me to refine back-end logic and craft engaging front-end experiences, pushing the boundaries of what I can build.</p>
                    </div>
                  </div>
        
                  <div className="flex flex-col md:flex-row gap-1">
                  <div className="w-full md:w-1/2 bg-gradient-to-r from-[#034367] via-[#0b0a0f] to-[#034367] p-[1.5rem]">
                      <h1 className="hidden md:block text-white font-[primary] text-[4vh]">DSA</h1>
                      <img src="" alt="" className="w-full h-[15vh] object-scale-down" />
                      <p className="text-[2vh] text-white font-[secondary] mt-4 mb-4 md:hidden">I have solved over 600 DSA problems across platforms like LeetCode, GeeksforGeeks and cultivated a structured approach to algorithmic thinking.</p>
                      <p className="hidden md:block text-[2vh] text-white font-[secondary] mt-8">Sharpening problem-solving abilities is a daily endeavor. </p>
                      <p className="hidden md:block text-[2vh] text-white font-[secondary]">With over 600 DSA problems solved across platforms like LeetCode and GeeksforGeeks, I've cultivated a structured approach to algorithmic thinking.</p>
                      <p className="hidden md:block text-[2vh] text-white font-[secondary] mb-8">This dedication to practice translates to efficient and logical solutions, enhancing my ability to tackle complex technical challenges.</p>
                    </div>
        
                    <div className="w-full md:w-1/2 bg-gradient-to-br from-[#034367] via-[#0b0a0f] to-[#034367] p-[1.5rem]">
                      <h1 className="hidden md:block text-white font-[primary] text-[4vh]">Native-Android</h1>
                      <img src="" alt="" className="w-full h-[15vh] object-scale-down" />
                      <p className="text-[2vh] text-white font-[secondary] mt-4 mb-4 md:hidden">I have also delve into native Android development with Kotlin, where I've gained valuable insights into mobile app development.</p>
                      <p className="hidden md:block text-[2vh] text-white font-[secondary] mt-8">While I've gained some experience with the MERN stack and DSA, I'm a firm believer in continuous exploration. My journey has led me to delve into native Android development with Kotlin, where I've gained valuable insights into mobile app development. </p>
                      <p className="hidden md:block text-[2vh] text-white font-[secondary] mt-2 mb-8"> I'm also actively exploring cutting-edge technologies like Next.js . These explorations, are essential steps in broadening my technical horizon and staying adaptable in a dynamic field.</p>
                    </div>
                  </div>
                  </div>



      </section>
      
      {/* */}
      <section>
        <div className='text-center font-[primary] text-[32px]'>Select From Our Featured Cars</div>
        <Marquee speed={50} >
        <div className='flex gap-4 py-12'>
        {data.map((car , index) =>
          (<div key={index}>
            <div className='flex flex-col rounded-lg shadow shadow-2xl p-2'>
              <img src={car.img} alt="" />
              <div className='flex justify-between font-semibold'>
                <h1>{car.name}</h1>
                <div className='flex gap-2 items-center'>
                  <FaStar size={20} color='#ffd700'/>
                  <h1>{car.rating}</h1>
                </div>
              </div>
              <p>Owner : {car.owner}</p>
            </div>
          </div>)
        )}
        </div>
        </Marquee>
      </section>

      <section>
      <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={deliver} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-[primary] text-gray-500">Most asked questions by our Customers</h2>
              <FaqList/>
            </div>
          </div>
        </div>
      </section>


  </>
  );
}

export default Home;