import React from 'react';
import { HiChevronDoubleDown } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div name='hero' className='hero w-full h-screen pt-8 bg-gradient-to-r from-[#03001C] to-[#301E67] to-[#3432a3]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto pt-24 px-8 flex flex-col justify-center h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-1 md:grid-cols-2'>
            {/* Use flex-col for mobile and md:flex-row for larger screens */}
            <div className='mb-4 pr-4 md:mb-0 md:mr-4'>
                <img src={me} alt='ellipse image' style={{ width: '100%' }} className='me' />
            </div>
            <div>
                <p className='text-[#cffdff]'>Hello, it's me </p>
                <h1 className='text-5xl font-bold text-[#4ef9ff]'>Muhammad<br /> Rizky Saputra</h1>
                <br />
                <h2 className='text-xl font-bold text-[#c4e3e4]'>Anggota dept. PSDM, Divisi INTERNAL</h2>
                <p className='text-[#c4e3e4] py-4 max-w-[700px]'>Tugas utama saya adalah mengelola internal pengurus serta mengevaluasi dan menilai kinerja demi terciptanya pengurus yang kompeten dalam menjalankan satu tahun kepengurusan kabinet Vardhamma.</p>
                <div>
                <button className='text-white group border-2 px-6 py-3 my-3 flex items-center hover:bg-[#30c9ce] hover:border-[#30c9ce]'>
                    <Link to='goals' smooth={true} duration={500}>Let's Go</Link>
                    <span>
                    <Link to='goals' smooth={true} duration={500}><HiChevronDoubleDown className='ml-3' /></Link>
                    </span>
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Hero;
