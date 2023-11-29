import React from 'react'
import work from '../assets/project.png'
import Gif from '../assets/gif.gif'

const Project = () => {
    return (
        <div name="project" className='project w-full md:h-screen text-[#c4e3e4] bg-gradient-to-r from-[#03001C] to-[#301E67] to-[#3432a3]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#4ef9ff]'>PROGRAM UNGGULAN</p>
                    <p className='py-6'>// IRIS adalah sebuah mega project yang akan berlangsung secara keberlanjutan <br/> demi menciptakan mahasiswa berprestasi yang kompeten di bidang IT.</p>
                </div>

                {/* Container */}
                <div className='grid md:grid-cols3 gap-4'>

                    {/* Card-1 */}
                    <div className='content-div w-[600px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto' style={{ width: '100%' }}>
                        <img src={Gif} alt="Project Image" className='w-[600px] h-full object-cover rounded-md max-w-full' />
                        <div className='opacity-0 group-hover:opacity-100 duration-500'>
                            {/* Konten hover, seperti teks atau tombol, bisa ditambahkan di sini */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;