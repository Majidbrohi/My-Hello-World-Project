import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
 

const Header = () => {
  return (
    <div className='Header'>
     <Image className='image' src="logo.png"  alt="Governor Sindh Logo" />
      <p className='Para'>Tuition free Program in Latest Tachnologies</p>
        <ul className='Header-Buttons'>
            <Link href={"/"} className="link" ><span><li>Home</li></span></Link>
            <Link href={"/AboutUs"} className="link" ><span><li>About Us</li></span></Link>
            <Link href={"/Blogs"} className="link" ><span><li>Blogs</li></span></Link>
            <Link href={"/ContactUs"} className="link" ><span><li>Contact Us</li></span></Link>
            <Link href={"/Jobs"} className="link" ><span><li>Jobs</li></span></Link>
        </ul>
      
    </div>
  )
}

export default Header