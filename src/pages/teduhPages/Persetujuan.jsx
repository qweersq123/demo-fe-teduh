import React, { useEffect, useRef } from 'react';
import { Radio, Modal, Button } from 'antd';
import SignatureCanvas from 'react-signature-canvas';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify'
import { putData } from '../../helpers/api';
import { useNavigate } from 'react-router-dom';

const Persetujuan = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = React.useState(JSON.parse(localStorage.getItem('user'))); // Menyimpan data user yang didapat dari local storage
    const [value, setValue] = React.useState(userData.allowAgreement === true ? 1 : 0);
    const [editSignature, setEditSignature] = React.useState();
    const [modalOpen, setModalOpen] = React.useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUserData(user);
        console.log('data:image/png;base64,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');
        setValue(user.allowAgreement === true ? 1 : 0);
        setEditSignature(user.signature ? false : true);
    }, []);

    const handleOk = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
    }

    const handleCancel = () => {
        setModalOpen(false);
    }

    const formik = useFormik({
        initialValues: {
            allowAgreement: value === 1 ? true : false,
            signature: userData.signature
        },
        validationSchema: Yup.object({
            allowAgreement: Yup.boolean().required('Pilih salah satu'),
            signature: Yup.string().required('Tanda tangan harus diisi')
        }),
        onSubmit: values => {
            console.log(values);
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            };

            putData(`/users/${userData.id}`, values, config).then(res => {
                if (res.status === 200) {
                    localStorage.setItem('user', JSON.stringify(res.data.data));
                    console.log(res.data.data);
                    if (!values.allowAgreement) {
                        console.log(!values.allowAgreement);
                        Modal.confirm({
                            title: `Anda tidak menyetujui permohonan ini, maka dari itu kami tidak dapat menyetujui untuk menyimpan data Anda pada saat ini, dan Anda tidak dapat melanjutkan untuk melakukan pengisian kuesioner ini. Terima kasih atas pengertian dan kerja sama Anda.`,
                            // footer: null,
                            okText: 'Ya',
                            cancelText: 'Tidak',
                            onOk: () => handleOk(),
                            onCancel: handleCancel,
                            centered: true
                        });
                    } else {
                        toast.success('Data berhasil disimpan');
                        navigate('/dashboard/datadiri', { state: 
                            { 
                                user: res.data.data,
                                isNewUser: userData.isNewUser,
                            }
                        });
                    }
                }
            }).catch(err => {
                console.log(err);
                toast.error('Gagal menyimpan data');
            });


        }
    });

    useEffect(() => {
        if (formik.errors.signature) {
            toast.error('Tanda tangan harus diisi');
        }
    }, [formik.errors.signature]);


    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
        formik.setValues({ ...formik.values, allowAgreement: e.target.value === 1 ? true : false });
        console.log(userData.signature)
    }

    // Membuat referensi ke komponen SignatureCanvas
    const signatureRef = useRef();

    // Fungsi untuk menghapus tanda tangan
    const clearSignature = () => {
        signatureRef.current.clear();
        formik.setValues({ ...formik.values, signature: '' });
    };

    const writeSignature = () => {
        setEditSignature(true);
    };

    const saveSignature = () => {
        const signatureDataURL = signatureRef.current.toDataURL();
        console.log(signatureDataURL);
        setEditSignature(false);
        formik.setFieldValue('signature', signatureDataURL);
    };

    const handleSubmit = () => {
        formik.handleSubmit();
    }

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
            <p className='text-2xl mb-3'>PERMOHONAN DAN PERSETUJUAN MENJADI RESPONDEN</p>
            <div className='w-full'>

                <p className='text-md font-bold'>INFORMED CONSENT xxxxx</p>
                <p className='text-md text-justify'><p> <br />
                    Kepada: <br />
                    Yth.Bapak/ Ibu/Saudara/Saudari<br />
                    Di Tempat <br /><br />
                    Dengan hormat, <br />
                    <br />
                    Saya ______ Program _______ akan melakukan penelitian tentang program TEDUH untuk mengatasi masalah psikologis pasien TB paru. Penelitian ini akan dilakukan pada pasien dengan penyakit pernafasan untuk mengetahui masalah psikologis yang dialami pasien sebagi bentuk tanda dan gejala yang timbul karena penyakitnya sehingga dapat memberikan edukasi dan tindakan keperawatan untuk mengatasi masalah tersebut. Penelitian ini bermanfaat untuk mengatasi masalah psikologis atau tanda gejala yang dialami pasien TB paru.
                    <br /> <br />
                    Oleh karena itu, Bapak/Ibu/Saudara/Saudari sebagai pasien diharapakan bersedia untuk mengikuti penelitian ini karena penelitian ini bermanfaat untuk responden dalam mengatasi masalah fisik yang dialami sehingga pasien dapat meringankan gejala psikologis yang dirasakan serta meningkatkan kualitas hidup pasien.
                    <br /><br />
                    Peneliti menjamin bahwa penelitian ini tidak akan berdampak negatif atau merugikan responden (pasien). Namun, apabila selama penelitian Bapak/Ibu/Saudara/Saudari merasakan ketidaknyamanan, maka Bapak/Ibu/Saudara/Saudari berhak untuk mengundurkan diri dari penelitian ini.
                    <br /><br />
                    Terima kasih atas kerjasama Bapak/Ibu/Saudara/Saudari.
                    <br /><br />
                    Setelah mendengar dan memahami penjelasan penelitian, dengan ini saya menyatakan
                </p>
                </p>

                <div className='w-full flex justify-center mt-6'>
                    <div className='flex flex-col justify-center items-center'>
                        <Radio.Group
                            className=''
                            onChange={onChange}
                            value={value}
                        // disabled={userData.allowAgreement === 1 ? false : true}
                        >
                            <Radio value={1} className='text-base font-bold' style={{ fontFamily: 'Poppins' }}>Setuju</Radio>
                            <Radio value={0} className='text-base font-bold' style={{ fontFamily: 'Poppins' }}>Tidak Setuju</Radio>
                        </Radio.Group>
                        <p className='mt-2 '>Untuk ikut sebagai sampel penelitian.</p>
                    </div>
                </div>

                <div className='flex mt-5 justify-between max-sm:flex-col max-sm:gap-10 max-sm:items-center'>
                    <div className='w-[300px] h-[250px]'>
                        <br />
                        <p>Peneliti</p>
                        <div className='w-full flex justify-center mt-6'>
                            <img src='https://th.bing.com/th/id/OIP.8_iyr2c16JS0I9S_hXEGTAAAAA?rs=1&pid=ImgDetMain' alt='ttd' className='w-full object-cover' />
                        </div>
                    </div>
                    <div className='w-[300px] h-[250px]'>
                        <p>Semarang, {dayjs().format('DD MMMM YYYY')}</p>
                        <p className='w-full flex justify-center'>Responden</p>
                        <div className='w-full'>
                            {!editSignature && (
                                <img src={
                                    formik.values.signature ? formik.values.signature : 'https://th.bing.com/th/id/OIP.8_iyr2c16JS0I9S_hXEGTAAAAA?rs=1&pid=ImgDetMain'
                                } alt='signature' className='w-full object-cover' />
                            )}
                            {/* {userData.signature ? (
                                <img src={userData.signature} alt='signature' className='w-full object-cover' />
                            ) : ( */}
                            {editSignature && (
                                <SignatureCanvas
                                    ref={signatureRef}
                                    penColor='black'
                                    canvasProps={{ className: 'w-full h-[150px] border-2 rounded-xl border-gray-300 bg-white' }} />
                            )}
                        </div>

                        {editSignature ? (
                            <div className='flex gap-2 mt-2 flex justify-center'>
                                {/* {!formik.values.signature ? ( */}
                                <p className='cursor-pointer bg-[#3B3486] text-white rounded-md p-1 hover:opacity-80' onClick={saveSignature}>Simpan Tanda Tangan</p>
                                {/* ) : null} */}
                                <p className='cursor-pointer bg-red-500 text-white rounded-md p-1 hover:opacity-80' onClick={clearSignature}>Buat Ulang</p>
                            </div>
                        ) : (
                            <div className='flex flex-col w-full justify-center items-center'>
                                <p className='font-bold mt-4 w-full flex justify-center'>{userData.name}</p>
                                <p className='cursor-pointer w-20 bg-red-500 text-white rounded-md px-2 hover:opacity-80 text-center' onClick={writeSignature}>Edit</p>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col justify-center items-center gap-3 mt-20'>
                {formik.errors.signature ? (
                    <p className="text-md text-red-500">{formik.errors.signature}</p>
                ) : <br />}
                <button className=' bg-[#3B3486] w-[300px] text-white hover:bg-[#564CC1] rounded-lg py-2 focus:outline-none' type='button' onClick={() => handleSubmit()}>
                    Simpan & Lanjutkan
                </button>

            </div>

        </div>
    );
};

export default Persetujuan;