import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonDetailResponden = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => navigate("/dashboard/detail-responden", {
                state: {
                    props
                }
            })} type='primary' className='mr-2'>Detail</Button>
        </div>
    );
};

export default ButtonDetailResponden;