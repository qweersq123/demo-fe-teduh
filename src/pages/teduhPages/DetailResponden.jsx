import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import DataDiri from './DataDiri';
import RiwayatKuisioner from './RiwayatKuisioner';
import { useLocation } from 'react-router-dom';
import { fetchData } from '../../helpers/api';

const DetailResponden = () => {
  const location = useLocation();
  const [respondenData, setRespondenData] = useState();

  useEffect(() => {
    console.log("Detail Responden", location.state.props?.props);
    if (location.state?.props) {
      console.log("Props", location.state?.props?.props?.id);
      const propsData = location.state?.props?.props;
      const fetchDataResponden = async () => {
        await fetchData(`/users/${propsData.user_id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        ).then((res) => {
          console.log("fetch data responden", res.data.data);
          setRespondenData(res.data.data);
        })
      };


      fetchDataResponden();
    }
  }, []);

  const items = [
    {
      key: '1',
      label: <p style={{ fontFamily: 'Poppins' }}>Data Diri</p>,
      children: <DataDiri respondenData={respondenData} />,
    },
    {
      key: '2',
      label: <p style={{ fontFamily: 'Poppins' }}>Riwayat Kuisioner</p>,
      children: <RiwayatKuisioner respondenData={respondenData} />,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  useEffect(() => {
    console.log("responden data", respondenData);
  }, [respondenData]);

  return (
    <div className='w-full'>
      <p className='text-2xl mb-5'>Detail Responden</p>

      <div>
        {respondenData && (
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        )}
      </div>
    </div>
  );
};

export default DetailResponden;