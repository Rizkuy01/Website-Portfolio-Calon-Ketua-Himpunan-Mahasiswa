import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='contact w-full md:h-screen bg-gradient-to-r from-[#03001C] to-[#301E67] to-[#3432a3] text-[#c4e3e4]'>
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <form action="https://getform.io/f/b540d27c-dbbe-4cde-899e-e33ee2895074" method="POST" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#4ef9ff]'>Message</p>
            <p className='py-6'>// Silahkan ketik harapan untuk HIMSIKA kedepannya!</p>
          </div>
          <textarea name="message" placeholder='ketikkan sesuatu...' id="text" rows="6" className=' text-black p-2'></textarea>
          <div className='max-w-[600px]'>
            <button type='submit' className='text-white border-2 px-48 py-3 my-8 mx-auto flex items-center rounded-xl hover: bg-[#30c9ce] hover: border-[#30c9ce]'>Kirim</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact