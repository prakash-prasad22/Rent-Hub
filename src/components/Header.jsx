function Header() {
  return (
    <header className='fixed z-[100] w-full flex justify-between items-center px-8 py-4  backdrop-blur-3xl'>
        {["Best Deals" , "Our Fleets" , "About Us" , "Contact Us"].map((item , index) => (
            <p key={index}>{item}</p>
        ))}
    </header>
  )
}

export default Header