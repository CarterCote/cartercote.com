"use client";

import React, { FC } from 'react';
import Link from 'next/link';
import posthog from 'posthog-js';

if (typeof window !== "undefined") {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY!, { api_host: 'https://us.i.posthog.com' });
}


interface ButtonProps {
    text: string;
    link: string;
    newTab?: boolean;
    className?: string;
    event?: string;
}

const Button: FC<ButtonProps> = ({text, link, newTab = false, className, event}) => {
    const handleClick = () => {
        if (typeof window !== "undefined" && event) {
            // Assuming event is a string like 'eventName, {json}', you might need to parse it if it's not being handled correctly
            const [eventName, eventProperties] = event.split(',').map(item => item.trim().replace(/(^'|'$)/g, ''));
            posthog.capture(eventName, JSON.parse(eventProperties));
        }
    };

    return (
        <Link href={link} passHref legacyBehavior>
            <a target={newTab ? "_blank" : "_self"} 
               rel={newTab ? "noopener noreferrer" : undefined} 
               className={`border border-white transition duration-500 cursor-pointer ease-in-out hover:bg-blue-600 hover:border-blue-600 rounded-xl h-10 px-8 py-2 ${className}`}
               onClick={handleClick}>
                <p className="text-sm font-graebenbach-mono-regular">{text}</p>
            </a>
        </Link>
    )
}

export default Button;