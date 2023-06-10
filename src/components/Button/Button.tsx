import React from "react";

const Button = ({children}:{children:React.ReactNode}) => {
    return (
        <button className={"bg-black text-white px-4 py-2 text-sm rounded"}>{children}</button>
    )
}

export default Button
