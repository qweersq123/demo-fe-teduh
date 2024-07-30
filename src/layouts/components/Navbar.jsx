import { Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { Dropdown } from 'antd';
import TeduhIcon from '../../assets/images/LogoTeduh.svg';
import { useEffect, useState } from "react";

const Navbar = () => {
    const [dataUser, setDataUser] = useState({});

    const items = [
        {
            label: <Link className='text-base'>Logout</Link>,
            key: '0',
            onClick: () => {
                localStorage.removeItem('token');
                window.location.href = '/';
            }
        }
    ];

    const HamburgerDropdown = ({ items }) => {

        return (
            <Dropdown
                menu={{ items }}
                trigger={['click']}
            >
                <div className='md:hidden p-2 hover:opacity-80 rounded-full'>
                    <FiMenu className='text-3xl font-bold text-white cursor-pointer ' />
                </div>
            </Dropdown>
        )
    }

    useEffect(() => {
        if (location.state?.user) {
            setDataUser(location.state.user);
        } else {
            const user = JSON.parse(localStorage.getItem('user'));
            setDataUser(user);
        }
    }, []);

    return (
        <div className='bg-[#3B3486] p-5 w-full z-10 text-white flex justify-center shadow-sm'>
            <div className='max-w-[1280px] w-full'>
                <div className='flex justify-between items-center grid grid-cols-4 max-md:grid-cols-3'>
                    <div className='flex col-span-2 gap-1 items-center cursor-pointer'>
                        <img src={TeduhIcon} alt='iconPOS' className='object-cover h-10' />
                    </div>
                    <div className='flex justify-end'>
                        <HamburgerDropdown items={items} />
                    </div>
                    <div className=' flex justify-end'>
                        <Dropdown
                            className='max-md:hidden min-w-[200px]'
                            menu={{ items }}
                            trigger={['click']}
                        >
                            <div className='flex gap-2 items-center px-3 py-1 shadow rounded-full cursor-pointer'>
                                <IoPersonCircleOutline className='text-4xl' />
                                <div className='text-left'>
                                    <p className='font-bold'>{dataUser.name}</p>
                                    <p className='text-xs'>{dataUser.role}</p>
                                </div>
                            </div>
                        </Dropdown>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Navbar;