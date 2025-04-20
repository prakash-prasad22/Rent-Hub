import Marquee from 'react-fast-marquee';
import { FaStar } from "react-icons/fa";
import img1 from "../../assets/images/brezza-exterior-right-front-three-quarter-9.webp"
import img2 from "../../assets/images/creta-exterior-right-front-three-quarter-5.webp"
import img3 from "../../assets/images/curvv-exterior-right-front-three-quarter-15.webp"
import img4 from "../../assets/images/dzire-exterior-right-front-three-quarter-27.webp"
import img5 from "../../assets/images/hyryder-exterior-right-front-three-quarter-73.webp"
import img6 from "../../assets/images/thar-roxx-exterior-right-front-three-quarter-25.webp"
import img7 from "../../assets/images/syros-exterior-right-front-three-quarter.webp"
import img8 from "../../assets/images/scorpio-n-exterior-right-front-three-quarter-76.webp"
import img9 from "../../assets/images/punch-exterior-right-front-three-quarter-57.webp"


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

function FeaturedCars() {
  return (
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
  )
}

export default FeaturedCars