import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { fetchData } from '../helpers/api';
import HalamanUtama from '../pages/teduhPages/HalamanUtama';

const DashboardLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showDashboardResponden, setShowDashboardResponden] = useState(true);

    useEffect(() => {
        // if (!location.state) {
        //     fetchData('/get-profile').then(res => {
        //         if (res.status === 200) {
        //             localStorage.setItem('user', JSON.stringify(res.data.data.user));
        //             if (res.data.data.user.role === 'admin') {
        //                 navigate('/dashboard/admin');
        //             } else {
        //                 if (!res.data.data.user.allowAgreement || res.data.data.user.isNewUser) {
        //                     navigate('/dashboard/persetujuan');
        //                 } else {
        //                 navigate('/dashboard');
        //                 }
        //             }
        //         }
        //     }).catch(err => {
        //         console.log(err);
        //         navigate('/login');
        //     });
        // }
    }, []);

    return (
        <>
            <div>
                <div className='sticky top-0 z-20 w-full '>
                    <Navbar />
                </div>
                <div className='p-5 w-full text-black flex justify-center'>
                    <div className='max-w-[1280px] w-full'>
                        <div className='flex justify-between items-center '>
                            <Outlet />
                        </div>
                    </div>
                </div>
                <div className='sticky bottom-0 z-20 w-full '>
                    {/* <Footer /> */}
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;