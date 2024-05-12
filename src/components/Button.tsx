import React, { FC } from 'react';
import Link from 'next/link';

interface ButtonProps {
    text: string;
    link: string;
    newTab?: boolean;
    className?: string;
}

const Button: FC<ButtonProps> = ({text, link, newTab = false, className}) => {
    return (
        <Link href={link} passHref legacyBehavior>
            <a target={newTab ? "_blank" : "_self"} 
               rel={newTab ? "noopener noreferrer" : undefined} 
               className={`border border-white transition duration-200 cursor-pointer ease-in-out transition duration-500 hover:bg-blue-600 hover:border-blue-600 rounded-xl h-10 px-8 py-2 ${className}`}>
                <p className="text-sm font-graebenbach-mono-regular">{text}</p>
            </a>
        </Link>
    )
}

export default Button;