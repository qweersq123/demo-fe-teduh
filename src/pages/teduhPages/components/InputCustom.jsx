import { Input } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const InputCustom = ({ label, inputType, placeholder, id, name, value, onChange, onBlur, touched, error, disabled }) => {
    return (
        <div>
            <div className='grid grid-cols-5 max-sm:grid-cols-1 gap-2 items-center'>
                <p className='col-span-1 max-sm:col-span-1 font-bold text-sm'>{label}</p>
                <div className='w-full max-sm:col-span-1 col-span-4'>
                    <Input
                        size='large'
                        className='w-full'
                        type={inputType}
                        placeholder={placeholder}
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        disabled={disabled}
                    />
                    {touched && error ? (
                        <p className="text-xs text-red-500 mb-2 mt-2 ml-2">{error}</p>
                    ) : <br />}
                </div>

            </div>
        </div>
    );
};

InputCustom.propTypes = {
    label: PropTypes.string,
    inputType: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    touched: PropTypes.string,
    error: PropTypes.string
};

export default InputCustom;