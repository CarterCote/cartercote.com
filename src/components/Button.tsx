import React, { FC } from 'react';

interface ButtonProps {
    text: string;
}

const Button: FC<ButtonProps> = ({text}) => {
    return (
        <div className="border border-white transition duration-200 cursor-pointer ease-in-out hover:bg-blue-600 hover:border-blue-600 rounded-xl h-10 px-8 py-2">
            <p className="text-sm font-aeonik-regular">{text}</p>
        </div>
    )
}

export default Button;