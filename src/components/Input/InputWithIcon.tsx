import BaseInput from "@/components/Input/BaseInput.tsx";
import React, { InputHTMLAttributes, ReactElement } from "react";
import RenderElement from "@/components/RenderElement";

interface IInputWithIcon extends InputHTMLAttributes<HTMLInputElement> {
    icon: ReactElement;
}

const InputWithIcon: React.FC<IInputWithIcon> = ({ icon, ...rest }) => {
    return (
        <div className={"relative"}>
            <BaseInput className={"pl-9"} {...rest} />
            <RenderElement
                className={
                    "absolute left-2 opacity-90 bottom-0 h-5 w-5  top-0 my-auto"
                }
                element={icon}
            />
        </div>
    );
};
export default InputWithIcon;
