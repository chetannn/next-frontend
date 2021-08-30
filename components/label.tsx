import React, { FC } from "react";

type LabelProps = {
    className?: string,
    props: Object
}

const Label: FC<any> = ({ className, children, ...props }) => {
    return (
        <label className={`${className} block font-medium text-sm text-gray-700`} {...props}>
            {children}
        </label>
    );
}

export default Label