import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import { fetchData } from '../../helpers/api';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const RiwayatKuisioner = ({ respondenData }) => {
    const location = useLocation();
    const [historyData, setHistoryData] = useState([]);
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));

    const dataRiwayat = [
        {
            nama: 'Kuisioner 1',
            tanggal: '12 April 2024',
            praKuisioner: 80,
            postKuisioner: 90
        },
        {
            nama: 'Kuisioner 2',
            tanggal: '12 April 2024',
            praKuisioner: 80,
            postKuisioner: 90
        },
        {
            nama: 'Kuisioner 3',
            tanggal: '12 April 2024',
            praKuisioner: 80,
            postKuisioner: 90
        },
        {
            nama: 'Kuisioner 4',
            tanggal: '12 April 2024',
            praKuisioner: 80,
            postKuisioner: 90
        },
    ];

    useEffect(() => {
        // if (location.state?.user?.user) {
        //     setUserData(location.state.user.user);
        // } else if (respondenData) {
        //     setUserData(respondenData);
        // }
        // fetchData('/history-cycle', {
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem('token')}`
        //     },
        //     params: {
        //         user_id: respondenData ? respondenData?.id : userData?.id
        //     }
        // }).then((res) => {
        //     setHistoryData(res.data.data.reverse());
        // });
        
            setHistoryData(dataRiwayat);

    }, []);


    useEffect(() => {
        console.log("history data ", historyData);
    }, [historyData]);

    const RiwayatComponent = (data) => {
        const dataHistory = data?.data?.data;
        return (
            <div>
                <div className='bg-[#F2F2F2] p-5 rounded-xl grid grid-cols-4 max-sm:grid-cols-2 items-center'>
                    <p className='font-bold max-sm:hidden'>{userData?.name}</p>
                    <p className='font-bold max-sm:col-span-2 max-sm:pb-2 max-sm:flex max-sm:justify-center max-sm:border-b-2 max-sm:mb-2'>{dayjs(dataHistory?.pre?.createdAt).format('DD MMMM YYYY')}</p>
                    <div className='flex flex-col gap-2 max-sm:border-r-2 max-sm:mr-2 max-sm:p-2'>
                        <p className='font-bold'>Pra Kuisioner</p>
                        <p>

                            {!respondenData ?
                                `Waktu : ${dayjs(dataHistory?.pre?.createdAt).format('DD/MM/YYYY hh:mm')}` :
                                `Skor: ${dataHistory?.pre?.score || 0}`
                            }
                        </p>
                    </div>
                    <div className='flex flex-col gap-2 max-sm:p-2'>
                        <p className='font-bold'>Post Kuisioner</p>
                        <p> {!respondenData ?
                            `Waktu : ${dayjs(dataHistory?.post?.createdAt).format('DD/MM/YYYY hh:mm')}` :
                            `Skor: ${dataHistory?.post?.score || 0}`
                        }</p>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center mb-5 max-sm:flex-col max-sm:items-start gap-3'>
                <p className='text-2xl mb-3'>Riwayat Kuisioner</p>
                {/* <RangePicker size='large' className='rounded-full max-sm:w-full'/> */}
            </div>
            <div className='flex flex-col gap-5'>
                {historyData.map((data, index) => (
                    <RiwayatComponent key={index} data={data} />
                ))}
            </div>
        </div>
    );
};

export default RiwayatKuisioner;