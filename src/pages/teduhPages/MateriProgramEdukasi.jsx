import React, { useEffect } from 'react';
import YouTubeEmbed from './components/YoutubeEmbed';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const MateriProgramEdukasi = () => {
    const navigate = useNavigate();

    const dataMateri =
    {
        title: 'Program Edukasi',
        desc: `Psikoedukasi adalah pendekatan terapeutik yang bertujuan untuk memberikan pemahaman yang lebih dalam tentang kondisi kesehatan mental serta strategi untuk mengatasi tantangan yang mungkin dihadapi.

        Melalui serangkaian video Psikoedukasi yang informatif, Anda akan diperkenalkan pada konsep-konsep kunci dalam kesehatan mental, teknik-teknik manajemen stres, dan strategi untuk meningkatkan kesejahteraan secara keseluruhan. 
        
        Anda akan belajar cara mengidentifikasi dan mengelola gejala-gejala yang mungkin Anda alami, serta membangun keterampilan-keterampilan untuk meningkatkan kualitas hidup Anda`,
        source: 'https://www.youtube.com/embed/YK_YfGsvuAo?si=WkcBIpIW5OtfkVYJ'
    }

    return (
        <div className='w-full'>
            <p className='text-2xl mb-3'>Program Edukasi</p>
            <YouTubeEmbed embedId={dataMateri.source} />
            <p className='mt-3 text-justify'>
                {dataMateri.desc}
            </p>
            <div className='flex justify-center items-center'>
                <Button className='mt-3 bg-[#3B3486] w-[300px]' type='primary' onClick={() => navigate(-1)}>Lanjut Belajar</Button>
            </div>
        </div>
    );
};

export default MateriProgramEdukasi;