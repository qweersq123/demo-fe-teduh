import React, { useEffect, useState } from 'react';
import { DatePicker, Table } from 'antd';
import { columnRespondens, dataRespondens } from './DashboardAdminHelper';
import { fetchData } from '../../helpers/api';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const DashboardAdmin = () => {
    const [totalResponden, setTotalResponden] = useState(0);
    const [dataHistory, setDataHistory] = useState([]);

    useEffect(() => {
        fetchData('/history', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            const data = res.data.data;
            const dataCycle = data.data;
            console.log(data);
            const dataRespondens = dataCycle.map((data, index) => {
                return {
                    key: index,
                    id: index + 1,
                    user_id: data.data.pre?.user.id,
                    name: data.data.pre?.user.name,
                    email: data.data.pre?.user.email,
                    tanggal: dayjs(data.data.pre?.createdAt).format('DD MMMM YYYY'),
                    jamPraKuisioner: dayjs(data.data.pre?.createdAt).format('HH:mm'),
                    jamPostKuisioner: dayjs(data.data.post?.createdAt).format('HH:mm'),
                }
            });
            setDataHistory(dataRespondens);
            setTotalResponden(data.count);
        });

    }, []);
    return (
        <div className='w-full '>
            <p className='text-2xl mb-5 border-b-2 pb-3'>Dashboard <span className='font-bold text-[#3B3486]'>Admin</span></p>


            <div>
                <p>Total Responden</p>
                <p className='text-5xl'>{totalResponden}</p>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='mt-4 flex items-center justify-between'>
                    <p>Data Responden</p>
                    {/* <RangePicker size='large' className='rounded-full ' /> */}
                </div>
                <div>
                    <Table
                        columns={columnRespondens}
                        dataSource={dataHistory}
                        pagination={
                            {
                                pageSize: 10,
                                showSizeChanger: false
                            }
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;