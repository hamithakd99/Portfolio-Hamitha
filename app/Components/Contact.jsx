import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "876cc476-d566-41ee-b506-2c35313db4bc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-[length:90%_auto]'>
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments or feedback, please use the form below
      </p>
      <form onSubmit={onSubmit} action="" className='max-w-2xl mx-auto'>
        <div className='flex flex-col items-center md:flex-row gap-6 mt-10 mb-8 justify-between'>
          <input type="text" name='name' placeholder='Enter Your name' required className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white w-full'/>
          <input type="email" name='email' placeholder='Enter Your email' required className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white w-full'/>
        </div>
        <textarea name='message' rows='6' id="" placeholder='Enter Your message' required className='resize-none w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
        <button type="submit" className='border border-gray-400 px-6 py-4 rounded-full w-max bg-black/80 text-white flex items-center mx-auto hover:bg-black duration-500'>Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4 ml-5'/></button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact
