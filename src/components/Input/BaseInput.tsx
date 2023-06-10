import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    outline?: true;
}

const BaseInput: React.FC<IInput> = (props) => {
    const { className, ...rest } = props;
    return (
        <input
            className={twMerge(
                "block w-full shadow-sm placeholder:font-light focus:outline-none rounded-md  py-1.5 px-4  text-gray-900 border-[1px] focus:border-blue-500 border-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-blue-500/50 sm:text-sm sm:leading-6",
                className
            )}
            type="text"
            {...rest}
        />
    );
};
export default BaseInput;
