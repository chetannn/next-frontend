import * as React from 'react'

const Input: React.FC<any> = ({ className, disabled = false, ...props }) => {
    return (
        <input disabled={disabled} className={`${className} focus:border-primary focus:outline-none h-10 rounded-md shadow-sm border`} {...props} />
    );
}

export default Input