import Search from '../components/Search';
import Working from '../components/Home/Working'
import Testimonial from "../components/Home/Testimonial"
import FaqList from '../components/Home/Faq/FaqList';
import Blog from '../components/Home/Blog';
import FeaturedCars from '../components/Home/FeaturedCars';
import { gsap } from "gsap";
import { useRef , useEffect } from "react"

import carImg from "../assets/images/carHome.png";
import bikeImg from "../assets/images/bikeHome.png";
import roadImg from "../assets/images/roadImg.png";
import imgRent from "../assets/images/RentYourCar.png"
import deliver from "../assets/images/deliver.webp"



function Home() {


  // Refs for the text section and the image container
  const textRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      textRef.current,
      { scale: 0.3},
      { scale:1, duration: 1.5, ease: "expo.out" }
    );

    gsap.fromTo(
      imageRef1.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );

    gsap.fromTo(
      imageRef2.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  

  
  return (
    <>
      {/* Landing Section : Contains Welcome Text , images and a search bar */}
      <section className='bg-[#eeeff1] h-screen w-full relative'>
        {/* Text Content (Positioned at the top) */}
        <div className='absolute top-[15vh] left-0 w-full h-1/2 flex flex-col justify-center items-center text-center' ref={textRef}>
          <h1 className='text-4xl font-[primary] text-gray-800 mb-4'>Drive Your Dream  <span className='font-[highlighted] text-6xl text-[#034367]'>car/bike</span>  Today</h1>
          {["Rent the perfect car for any trip with RentXpress." , "Enjoy flexible options, great prices, and a hassle-free experience." , " Get started in a few clicks!"].map((text , index) => 
            <p key={index} className='text-lg text-gray-800 font-[secondary]'>{text}</p>
          )}

          <Search />
        </div>

        {/* Image Container (Positioned at the bottom) */}
        <div className='absolute bottom-0 left-0 w-full flex justify-center items-end' >
          <img src={bikeImg} alt="Bike" className='z-[10] w-[45vw] object-contain' ref={imageRef2}/>
          <img src={carImg} alt="Car" className='w-[55vw] object-contain' ref={imageRef1}/>
        </div>

        {/* Road Image as Background */}
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
          <img
            src={roadImg}
            alt=""
            className='w-full h-full object-scale-down opacity-20' // Adjust opacity as needed
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
                      <p className="font-[primary] text-black text-[4vw] md:text-[3vh] leading-[3vh]"> <span className="font-[highlighted] text-[#28534f] text-[6vw] md:text-[5vh]"></span> <span className="font-[highlighted] text-[#28534f] text-[6vw] md:text-[4vh]"></span></p>
                      <p className="hidden md:block text-[2vh] mt-20 font-[secondary] text-white"></p>
                      <p className="hidden md:block text-[2vh] font-[secondary] text-white"></p>
                      <p className="hidden md:block text-[2vh] mb-20 font-[secondary] text-white"></p>
                    </div>
        
                    <div className="w-full md:w-1/2 bg-gradient-to-b from-[#034367] via-[#0b0a0f] to-[#034367] p-[1.5rem]">
                      <h1 className="text-white font-[primary] text-[4vh]"></h1>
                      <img src="" alt="" className="" />
                      <p className="text-[2vh] text-white font-[secondary] mt-4 mb-4 md:hidden"></p>
                      <p className="hidden md:block text-[2vh] text-white font-[secondary] mt-8 "></p>
                      <p className="hidden md:block text-[2vh] text-white font-[secondary]  mb-8"></p>
                    </div>
                  </div>
        
                  <div className="flex flex-col md:flex-row gap-1">
                  <div className="w-full md:w-1/2 bg-gradient-to-r from-[#034367] via-[#0b0a0f] to-[#034367] p-[1.5rem]">
                      <h1 className="hidden md:block text-white font-[primary] text-[4vh]"></h1>
                      <img src="" alt="" className="w-full h-[15vh] object-scale-down" />
                      <p className="text-[2vh] text-white font-[secondary] mt-4 mb-4 md:hidden"></p>
                      <p className="hidden md:block text-[2vh] text-white font-[secondary] mt-8"> </p>
                      <p className="hidden md:block text-[2vh] text-white font-[secondary]"></p>
                      <p className="hidden md:block text-[2vh] text-white font-[secondary] mb-8"></p>
                    </div>
        
                    <div className="w-full md:w-1/2 bg-gradient-to-br from-[#034367] via-[#0b0a0f] to-[#034367] p-[1.5rem]">
                      <h1 className="hidden md:block text-white font-[primary] text-[4vh]"></h1>
                      <img src="" alt="" className="w-full h-[15vh] object-scale-down" />
                      <p className="text-[2vh] text-white font-[secondary] mt-4 mb-4 md:hidden"></p>
                      <p className="hidden md:block text-[2vh] text-white font-[secondary] mt-8"></p>
                      <p className="hidden md:block text-[2vh] text-white font-[secondary] mt-2 mb-8"> </p>
                    </div>
                  </div>
                  </div>



      </section>
      
      {/* */}
      <section>
        <div className='text-center font-[primary] text-[32px]'>Select From Our Featured Cars</div>
        <FeaturedCars />
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

      <div>
            <h1 className='heading text-[16px] lg:text-[30px] text-center mt-6'> What Other Sellers Say About QuickBuy ... </h1>
            <Testimonial/>
      </div>

      <section className='px-12 py-8'>
        <h1 className='text-center text-[32px]'>Travel Blog for Our Travellers</h1>
        <div className='py-12 mb-12'>
          <Blog />
        </div>
        
      </section>

      <section className='py-4 mt-12 mx-16 h-[300px] rounded-lg  bg-gradient-to-bl from-[#034367] via-[#0b0a0f] to-[#034367]'>
        <div className='p-8 flex flex-col'>
          <h1 className='text-white font-bold text-[30px]'>Become a Host</h1>
        </div>
        <div className='flex justify-end'>
          <img src={imgRent} alt="" className='h-[300px] object-scale-down'/>
        </div>
        
        
      </section>


  </>
  );
}

export default Home;