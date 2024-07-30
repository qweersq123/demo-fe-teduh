import React, { useEffect, useState } from 'react';
import { fetchData, postData } from '../../helpers/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { QuestionData } from '../../constant/question';

const CustomRadioButton = ({ value, isSelected, onChange, indexAtas }) => {
    return (
        <div
            className={`rounded-full w-10 h-10 flex justify-center items-center cursor-pointer ${isSelected ? 'bg-[#A399FF] text-black' : 'bg-[#CEE0DB]'}`}
            onClick={() => onChange(indexAtas, value)}
        >
            {value}
        </div>
    );
};

const PraKuisioner = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [dataKuesioner, setDataKuesioner] = useState(null);
    const [dataAnswerRespondent, setDataAnswerRespondent] = useState({
        history_id: 0,
        jawaban: []
    });
    const [error, setError] = useState('');
    const [isDisabledSelect, setIsDisabledSelect] = useState(false);
    const [userData, setUserData] = useState();


    useEffect(() => {
        if (location.state?.user?.user) {
            setUserData(location.state.user.user);
        } else {
            const userData = JSON.parse(localStorage.getItem('user'));
            setUserData(userData);
        }
    }, []);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        };
        
        // fetchData('/quest-category/1', config)
        //     .then((res) => {
        //         setDataKuesioner(res.data.data);
        //         const questions = res.data.data.questions;
        //         const initialAnswers = questions.map(() => ({
        //             answer: -1,
        //         }));
        //         setDataAnswerRespondent({
        //             history_id: 0,
        //             jawaban: initialAnswers
        //         });

        //         const params = {
        //             user_id: userData?.id
        //         };

        //         console.log("userData.isNewUser", userData?.isNewUser);
        //         if (location?.state?.cycle || userData?.isNewUser) {
        //             const cycle = userData?.isNewUser ? 1 : location?.state?.cycle;
        //             fetchData('/history-cycle', { params, headers: config.headers })
        //                 .then((res2) => {
        //                     const dataJawaban = res2.data.data.find((data) => data.cycle === cycle)?.data?.pre;
        //                     if (dataJawaban) {
        //                         console.log(dataJawaban);
        //                         setIsDisabledSelect(true);
        //                         const initialAnswers = dataJawaban.answer_respondents.map((jawaban) => ({
        //                             answer: jawaban.answer.score,
        //                             data_answer: jawaban.answer
        //                         }));

        //                         setDataAnswerRespondent({
        //                             history_id: dataJawaban?.id,
        //                             jawaban: initialAnswers
        //                         });
        //                     }
        //                 })
        //                 .catch((err) => {
        //                     console.log(err);
        //                 });
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

        setDataKuesioner(QuestionData);
    }, [userData]);

    const handleSelect = (indexAtas, value, data_answer) => {
        if (isDisabledSelect) return;
        const temp = [...dataAnswerRespondent.jawaban];
        temp[indexAtas] = {
            ...temp[indexAtas],
            answer: value,
            data_answer
        };
        setDataAnswerRespondent({ ...dataAnswerRespondent, jawaban: temp });
    };

    const handleSubmit = () => {
        const hasUnanswered = dataAnswerRespondent.jawaban.some(answer => answer.answer === -1);
        if (hasUnanswered) {
            setError(`  
                Terdapat pertanyaan yang belum dijawab pada nomor:
                ${dataAnswerRespondent.jawaban.map((jawaban, index) => jawaban.answer === -1 ? index + 1 : '').filter(String).join(', ')}
            `);
        } else {
            setError('');
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            };

            if (isDisabledSelect) {
                navigate('/dashboard', {
                    state: {
                        isNewUser: userData.isNewUser,
                        is_learning: true
                    }
                });
            } else {
                postData('/history',
                    {
                        user_id: userData.id,
                        quest_category_id: 1,
                        is_done: true,
                        type: 'pre'
                    },
                    config
                )
                    .then((res) => {
                        console.log(res);
                        // Lakukan submit atau lanjut ke proses berikutnya
                        postData('/answer-responden', {
                            history_id: res.data.data.id,
                            jawaban: dataAnswerRespondent.jawaban
                        }, config)
                            .then((res) => {
                                console.log(res);
                                if (res.status === 201 || res.status === 200) {
                                    toast.success('Data berhasil disimpan');
                                    navigate('/dashboard', {
                                        state: {
                                            isNewUser: userData.isNewUser,
                                            is_learning: true
                                        }
                                    });
                                }
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                console.log('Data yang akan dikirim:', dataAnswerRespondent);
                // Lakukan submit atau lanjut ke proses berikutnya
            }
        }
    };

    useEffect(() => {
        console.log('userData', userData);
    }, [userData]);

    return (
        <div className='w-full flex justify-center'>
            <div className='w-[600px]'>
                <p className='text-2xl mb-5'>Pra Kuisioner</p>
                <div className='flex flex-col gap-10'>
                    {dataKuesioner?.questions?.map(({ question, answers }, indexAtas) => (
                        <div key={indexAtas}>
                            <div className='flex gap-5'>
                                <p className='text-5xl w-[60px] font-bold opacity-10 max-sm:opacity-5'>
                                    {indexAtas > 8 ? indexAtas + 1 : `0${indexAtas + 1}`}
                                </p>
                                <div className='flex flex-col gap-8 mt-3 max-sm:ml-[-50px] w-full'>
                                    <p className='w-full text-justify'>{question}</p>
                                    <div className='flex gap-8 items-center max-sm:gap-5 max-sm:justify-start'>
                                        <p className='max-sm:hidden'>Tidak <br /> Pernah</p>
                                        {answers.map((data_answer, index) => (
                                            <CustomRadioButton
                                                key={index}
                                                value={index}
                                                isSelected={dataAnswerRespondent?.jawaban[indexAtas]?.answer === index}
                                                onChange={(indexAtas, value) => handleSelect(indexAtas, value, data_answer)}
                                                indexAtas={indexAtas}
                                            />
                                        ))}
                                        <p className='max-sm:hidden'>Sering <br /> Sekali</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center mt-10 flex-col gap-5 items-center'>
                    {error && <p className='text-red-500 text-center'>{error}</p>}
                    <button
                        className='bg-[#3B3486] w-[300px] text-white hover:bg-[#564CC1] rounded-lg py-2 focus:outline-none'
                        type='button'
                        onClick={() => navigate(-1)}
                    >
                        Simpan & Lanjutkan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PraKuisioner;
