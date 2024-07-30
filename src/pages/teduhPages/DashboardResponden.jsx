import React, { useEffect, useState } from 'react';
import Icon1 from "../../assets/images/IconL1.png";
import Icon2 from "../../assets/images/IconL2.png";
import Icon3 from "../../assets/images/IconL3.png";
import DataDiri from "../../assets/images/datadiri.png";
import Kuisioner from "../../assets/images/Kuisioner.png";
import KuisionerRiwayat from "../../assets/images/kuisioner-riwayat.png";
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchData } from '../../helpers/api';
import { Modal } from 'antd';

const DashboardResponden = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userData, setUserData] = useState();
    const [fillPostKuesioner, setFillPostKuesioner] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const [isLearning, setIsLearning] = useState(false);

    const dataPilihan = [
        {
            title: 'Data Diri',
            desc: 'Cek kelengkapan data diri anda',
            image: DataDiri,
            navigate: '/dashboard/datadiri'
        },
        {
            title: 'Kuisioner',
            desc: 'Isi kuisioner untuk mengetahui kondisi anda',
            image: Kuisioner,
            navigate: '/dashboard/pra-kuisioner'
        },
        {
            title: 'Riwayat Kuisioner',
            desc: 'Lihat riwayat kuisioner yang sudah anda isi',
            image: KuisionerRiwayat,
            navigate: '/dashboard/riwayat-kuisioner'
        }
    ]

    useEffect(() => {
        // if (location.state?.is_learning) {
        //     setIsLearning(true);
        // }
        // if (!location.state?.isNewUser) {
        //     const config = {
        //         headers: {
        //             Authorization: `Bearer ${localStorage.getItem('token')}`
        //         }
        //     };
        //     fetchData('/get-profile', config).then((res) => {
        //         if (res.data.data) {
        //             if (location.state?.user?.user) {
        //                 setUserData(location.state.user.user);
        //             } else {
        //                 const userData = res.data.data.user;
        //                 setUserData(userData);
        //                 localStorage.setItem('user', JSON.stringify(userData));
        //             }
        //             if (res.data.data.isFillPostKuesioner && !location.state?.is_learning) {
        //                 Modal.warning({
        //                     title: 'Anda belum mengisi post Kuesioner, silahkan isi post Kuesioner terlebih dahulu',
        //                     onOk() {
        //                         navigate('/dashboard/post-kuisioner', {
        //                             state: {
        //                                 user: userData,
        //                                 isNewUser: location.state?.isNewUser,
        //                                 is_learning: true
        //                             }
        //                         });
        //                     },
        //                     okText: 'Ya',
        //                     onCancel: false,
        //                     centered: true
        //                 })
        //             }
        //         }
        //     }).catch((err) => {
        //         console.log(err);
        //     });
        // }
        console.log(userData);
    }, []);

    return (
        <div className='w-full'>
            <Modal
                open={modalOpen}
                title="Title"
                footer={null}
                centered
            // onOk={handleOk}
            // onCancel={handleCancel}
            // footer={false}
            >
            </Modal>
            {isLearning && (
                <>
                    <p className='text-2xl'>Materi Terapi</p>
                    <div className="grid grid-cols-3 gap-5 p-5 max-sm:grid-cols-1 max-w-[700px]">
                        <img onClick={() => navigate("/dashboard/psikoedukasi")} className="max-sm:w-full hover:opacity-80 cursor-pointer" src={Icon1} alt="Icon 1" />
                        <img onClick={() => navigate("/dashboard/program-happy")} className="max-sm:w-full hover:opacity-80 cursor-pointer" src={Icon2} alt="Icon 2" />
                        <img onClick={() => navigate("/dashboard/program-edukasi")} className="max-sm:w-full hover:opacity-80 cursor-pointer" src={Icon3} alt="Icon 3" />
                    </div>
                    <button
                        className='bg-[#3B3486] w-[300px] text-white hover:bg-[#564CC1] rounded-lg py-2 focus:outline-none'
                        type='button'
                        onClick={() => navigate('/dashboard/post-kuisioner')}
                    >
                        Selesai Terapi
                    </button>
                    {/* <div className='border-b-2 w-full mb-5'></div> */}
                </>
            )}

            {!isLearning && (
                <>
                    <div className='grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                        {dataPilihan.map((data, index) => (
                            <div className='bg-[#F2F2F2] rounded-lg p-3 py-8 cursor-pointer hover:opacity-80' key={index} onClick={() => navigate(data.navigate)}>
                                <div className='flex gap-3 items-center'>
                                    <img src={data.image} alt='iconPOS' className='object-cover h-20' />
                                    <div className=''>
                                        <p className='font-bold'>{data.title}</p>
                                        <p>{data.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

        </div>
    );
};

export default DashboardResponden;