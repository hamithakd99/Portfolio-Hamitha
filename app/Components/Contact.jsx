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
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input type="text" placeholder='Enter Your name' required className=''/>
          <input type="email" placeholder='Enter Your email' required/>
        </div>
        <textarea rows='6' name="" id="" placeholder='Enter Your message' required className='resize-none'></textarea>
        <button type="submit">Submit Now</button>
      </form>
    </div>
  )
}

export default Contact
