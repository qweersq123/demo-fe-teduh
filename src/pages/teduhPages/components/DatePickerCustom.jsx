import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';

const DatePickerCustom = ({ label, id, name, format, value, onChange, onBlur, placeholder, disabled, allowClear, error }) => {
    return (
        <div>
            <div className='grid grid-cols-5 max-sm:grid-cols-1 gap-2 items-center'>
                <p className='col-span-1 max-sm:col-span-1 font-bold text-sm'>{label}</p>
                <div className='w-full max-sm:col-span-1 col-span-4'>
                    <DatePicker
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        format={format}
                        disabled={disabled}
                        allowClear={allowClear}
                        size='large'
                        className='w-full'
                    />
                     {error ? (
                        <p className="text-xs text-red-500 mb-2 mt-2 ml-2">{error}</p>
                    ) : <br />}
                </div>
            </div>
        </div>
    );
};

DatePickerCustom.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    format: PropTypes.string,
    value: PropTypes.object, // Sebaiknya diganti sesuai tipe data yang dipakai untuk nilai tanggal
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    allowClear: PropTypes.bool,
    error: PropTypes.string
};

export default DatePickerCustom;
