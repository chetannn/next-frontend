import * as React from 'react'

const Button: React.FC<any> = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} bg-primary hover:bg-purple-400 block rounded-md px-4 py-2 text-white border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none disabled:opacity-25 transition ease-in-out duration-150`}
        {...props}
    />
)

export default Button