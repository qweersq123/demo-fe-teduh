import React from 'react';
import ThanksImg from '../../assets/images/PersonThanks.png';
import { useNavigate } from 'react-router-dom';

const TerimaKasih = () => {
    const navigate = useNavigate();

    return (
        <div className='w-full'>
            <div className='w-full flex flex-col items-center justify-center gap-10'>

                <img src={ThanksImg} alt="Thanks" className="w-[200px] object-cover" />
                <p className=' md:w-[500px] text-center'>Terima kasih telah menyelesaikan proses pengisian kuesioner dan menjalani terapi melalui aplikasi Teduh.</p>
                <button className='mt-6 bg-[#3B3486] w-[300px] text-white hover:bg-[#564CC1] rounded-lg py-2 focus:outline-none' type='button' onClick={() => navigate('/dashboard')} >
                    Kembali ke Dashboard
                </button>
            </div>
        </div>
    );
};

export default TerimaKasih;