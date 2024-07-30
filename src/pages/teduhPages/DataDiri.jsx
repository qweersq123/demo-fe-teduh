import React, { useEffect, useState } from 'react';
import { Button, Input } from 'antd';
import InputCustom from './components/InputCustom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SelectCustom from './components/SelectCustom';
import DatePickerCustom from './components/DatePickerCustom';
import { fetchData, putData } from '../../helpers/api';
import dayjs from 'dayjs';
import { useLocation, useNavigate } from 'react-router-dom';

const DataDiri = ({respondenData}) => {
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));

    const formik = useFormik({
        initialValues: {
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            address: '',
            identity_number: '',
            gender: '',
            date: '', // Tanggal lahir
            last_education: '',
            working: '',
            disease: '',
            long_suffering: '',
            blood_pressure: '',
            respiratory_rate: '',
            pulse: '',
            temperature: '',
            oxygen_saturation: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Nama harus diisi'),
            email: Yup.string().email('Email tidak valid').required('Email harus diisi'),
            phone: Yup.number().required('No Hp harus diisi'),
            address: Yup.string().required('Alamat harus diisi'),
            identity_number: Yup.number().required('Nomor Identitas harus diisi'),
            gender: Yup.string().required('Jenis Kelamin harus diisi'),
            date: Yup.date().required('Tanggal lahir harus diisi'),
            last_education: Yup.string().required('Pendidikan Terakhir harus diisi'),
            working: Yup.string().required('Pekerjaan harus diisi'),
            disease: Yup.string().required('Penyakit harus diisi'),
            long_suffering: Yup.string().required('Lama menderita harus diisi'),
            blood_pressure: Yup.number().required('Tekanan darah harus diisi'),
            respiratory_rate: Yup.number().required('Respiratory Rate harus diisi'),
            pulse: Yup.number().required('Nadi harus diisi'),
            temperature: Yup.number().required('Suhu harus diisi'),
            oxygen_saturation: Yup.number().required('Saturasi Oksigen harus diisi'),
        }),

        onSubmit: (values) => {
            console.log(values);
            console.log(userData);
            if(respondenData) {
                navigate(-1);
                return;
            }
            const config = {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            };
            // putData(`/users/${userData.id}`, values, config).then(res => {
            //     console.log(res);
            //     if (res.status === 200) {
            //         const userData = res.data.data;
            //         if (userData.isNewUser) {
            //             navigate('/dashboard/pra-kuisioner', {
            //                 state: {
            //                     user: userData,
            //                     isNewUser: userData.isNewUser,
            //                 }
            //             });
            //         } else {
            //             navigate('/dashboard', {
            //                 state: {
            //                     user: userData,
            //                 }
            //             });

            //         }
            //     }
            // }).catch(err => {
            //     console.log(err);
            // });
        },
    });

    useEffect(() => {
        console.log("State ", location.state);
        console.log("props ", respondenData);
        setShow(true); // Menampilkan elemen ketika komponen dimount
        // if (location.state?.user?.user && location.state?.user?.user?.role === 'responden') {
        //     formik.setValues(location.state?.user?.user);
        //     setUserData(location.state?.user?.user);
        // } else if (respondenData) {
        //     console.log("respondenData", respondenData);

        //     fetchData(`/users/${respondenData?.id}`, {
        //         headers: {
        //             authorization: `Bearer ${localStorage.getItem('token')}`
        //         }
        //     }).then(res => {
        //         const respondenData = res.data.data;
        //         console.log("respondenData", respondenData);
        //         formik.setValues(respondenData);
        //         setUserData(respondenData);
        //     }).catch(err => {
        //         console.log(err);
        //     });
        // } else {
        //     const userData = JSON.parse(localStorage.getItem('user'));
        //     formik.setValues(userData);
        //     setUserData(userData);
        // }
        // if(location.state) {
        // console.log(location.state);
        // }
    }, []);


    useEffect(() => {
        console.log("respondenData DATA DIRI", respondenData)
        console.log(formik.errors);
        console.log(formik.values);
    }
        , [formik.errors, formik.values]);

    const optionGender = [
        {
            value: 'male',
            label: 'Laki-laki',
        },
        {
            value: 'female',
            label: 'Perempuan',
        },
    ];

    return (
        <div className={`w-full transition-opacity duration-800 ${show ? 'opacity-100' : 'opacity-0'}`}>
            <p className='text-2xl mb-3'>Data Diri</p>
            <div className='flex flex-col gap-3'>
                <InputCustom
                    label='Nomor Identitas'
                    inputType='number'
                    id='identity_number'
                    name='identity_number'
                    value={formik.values.identity_number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.identity_number}
                    error={formik.errors.identity_number}
                    disabled={respondenData ? true : false}
                />
                <InputCustom
                    label='Nama Lengkap'
                    inputType='text'
                    id='name'
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.name}
                    error={formik.errors.name}
                    disabled={respondenData ? true : false}
                />
                <InputCustom
                    label='Alamat'
                    inputType='text'
                    id='address'
                    name='address'
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.address}
                    error={formik.errors.address}
                    disabled={respondenData ? true : false}
                />
                <InputCustom
                    label='No Hp (62)'
                    inputType='number'
                    id='phone'
                    name='phone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.phone}
                    error={formik.errors.phone}
                    disabled={respondenData ? true : false}
                />
                <SelectCustom
                    label='Jenis Kelamin'
                    option={optionGender}
                    inputType='select'
                    id='gender'
                    name='gender'
                    value={formik.values.gender}
                    onChange={value => formik.setFieldValue('gender', value)}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.gender}
                    error={formik.errors.gender}
                    disabled={respondenData ? true : false}
                />
                <DatePickerCustom
                    placeholder={''}
                    label='Tanggal Lahir'
                    inputType='date'
                    id='date'
                    name='date'
                    value={formik.values.date ? dayjs(formik.values.date) : ''}
                    onChange={value => formik.setFieldValue('date', value)}
                    onBlur={formik.handleBlur}
                    error={formik.errors.date}
                    format='DD MMMM YYYY'
                    disabled={respondenData ? true : false}
                />
                <InputCustom
                    label='Pendidikan Terakhir'
                    inputType='text'
                    id='last_education'
                    name='last_education'
                    value={formik.values.last_education}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.last_education}
                    error={formik.errors.last_education}
                    disabled={respondenData ? true : false}
                />
                <InputCustom
                    label='Pekerjaan'
                    inputType='text'
                    id='working'
                    name='working'
                    value={formik.values.working}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.working}
                    error={formik.errors.working}
                    disabled={respondenData ? true : false}
                />
                <InputCustom
                    label='Penyakit'
                    inputType='text'
                    id='disease'
                    name='disease'
                    value={formik.values.disease}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.disease}
                    error={formik.errors.disease}
                    disabled={respondenData ? true : false}
                />
                <InputCustom
                    label='Lama Menderita'
                    inputType='text'
                    id='long_suffering'
                    name='long_suffering'
                    value={formik.values.long_suffering}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.long_suffering}
                    error={formik.errors.long_suffering}
                    disabled={respondenData ? true : false}
                />
                <InputCustom
                    label='Tekanan Darah (mmHg)'
                    inputType='number'
                    id='blood_pressure'
                    name='blood_pressure'
                    value={formik.values.blood_pressure}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.blood_pressure}
                    error={formik.errors.blood_pressure}
                    disabled={respondenData ? true : false}
                />
                <InputCustom
                    label='Respiratory Rate (x/menit)'
                    inputType='number'
                    id='respiratory_rate'
                    name='respiratory_rate'
                    value={formik.values.respiratory_rate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.respiratory_rate}
                    error={formik.errors.respiratory_rate}
                    disabled={respondenData ? true : false}
                />
                <InputCustom
                    label='Nadi (x/menit)'
                    inputType='number'
                    id='pulse'
                    name='pulse'
                    value={formik.values.pulse}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.pulse}
                    error={formik.errors.pulse}
                    disabled={respondenData ? true : false}
                />
                <InputCustom
                    label='Suhu (c)'
                    inputType='number'
                    id='temperature'
                    name='temperature'
                    value={formik.values.temperature}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.temperature}
                    error={formik.errors.temperature}
                    disabled={respondenData ? true : false}
                />
                <InputCustom
                    label='Saturasi Oksigen'
                    inputType='number'
                    id='oxygen_saturation'
                    name='oxygen_saturation'
                    value={formik.values.oxygen_saturation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.oxygen_saturation}
                    error={formik.errors.oxygen_saturation}
                    disabled={respondenData ? true : false} 
                />
            </div>

            <div>
                <button className='mt-6 bg-[#3B3486] w-[300px] text-white hover:bg-[#564CC1] rounded-lg py-2 focus:outline-none' type='button' onClick={() => navigate(-1)}>
                    {userData?.isNewUser ? 'Simpan & Lanjutkan' : respondenData ? 'Kembali' : 'Simpan'}
                </button>
            </div>
        </div>
    );
};

export default DataDiri;
