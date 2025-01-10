import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-[length:90%_auto]'>
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments or feedback, please use the form below
      </p>
      <form action="" className='max-w-2xl mx-auto'>
        <div className='flex flex-col items-center md:flex-row gap-6 mt-10 mb-8 justify-between'>
          <input type="text" placeholder='Enter Your name' required className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white w-full'/>
          <input type="email" placeholder='Enter Your email' required className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white w-full'/>
        </div>
        <textarea rows='6' name="" id="" placeholder='Enter Your message' required className='resize-none w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
        <button type="submit" className='border border-gray-400 px-6 py-4 rounded-full w-max bg-black/80 text-white flex items-center mx-auto hover:bg-black duration-500'>Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4 ml-5'/></button>

        <p className='mt-4'>Sending...</p>
      </form>
    </div>
  )
}

export default Contact
