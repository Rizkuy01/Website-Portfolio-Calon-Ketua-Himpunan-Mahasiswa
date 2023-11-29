import React from 'react'

const Goals = () => {
    return (
    <div name='goals' className='goals w-full md:h-screen bg-gradient-to-r from-[#03001C] to-[#301E67] to-[#3432a3] text-[#c4e3e4]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                {/* Header */}
                <div className='max-w-[1000px] w-full grid gap-8 pt-16'>
                    <div className='sm: text-center py-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#4ef9ff]'>
                            VISI & MISI
                        </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid gap-8 px-4'>
                    <div className='sm: text-center font-bold text-xl'>
                        <p>Untuk terciptanya sebuah Himpunan yang bisa mengayomi dan berdedikasi bagi <br /> Mahasiswa dan Instansi, maka berikut ini adalah Visi serta Misi saya.</p>
                    </div>
                </div>

                {/* Main */}
                <div className='max-w-[1080px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div name='visi'>
                        <p className='text-xl font-bold inline border-b-2 border-[#4ef9ff]'>
                            VISI
                        </p>
                        <p className='py-6'>Menciptakan Himpunan Mahasiswa Sistem Informasi yang Unggul, Profesional, dan Berwawasan Global dalam Mencetak Generasi yang Berkualitas dan Kompetitif Baik di Dalam maupun di Luar Universitas.</p>
                    </div>
                    <div name='misi'>
                        <h4 className='text-xl font-bold inline border-b-2 border-[#4ef9ff]'>
                            MISI
                        </h4>
                        <p className='py-6'> 
                        <li> Menjadi Penyalur Potensi dan Minat Bakat Mahasiswa. </li><br/>
                        <li>Meningkatkan Kualitas Daya Saing Akademik. </li><br />
                        <li>Mendorong Profesionalisme dan Keterlibatan dalam Dunia IT.</li> <br/>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Goals