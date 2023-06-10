import BaseInput from "@/components/Input/BaseInput.tsx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, {
    ChangeEvent,
    InputHTMLAttributes,
    useEffect,
    useRef,
    useState,
} from "react";
import { twMerge } from "tailwind-merge";

interface IInputWithSelect
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "onSelect"> {
    position?: "left" | "right";
    onSelect?: (event: ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
    defaultSelectValue?: string;
    selectContainerClassName?: string;
    selectClassName?: string;
}

const InputWithSelect: React.FC<IInputWithSelect> = ({
    options = [],
    onSelect: handleSelect,
    position,
    selectClassName,
    selectContainerClassName,
    defaultSelectValue,
    style,
    ...rest
}) => {
    const selectContainerRef = useRef<HTMLDivElement | null>(null);

    const getSelectContainerWidth = () => {
        if (selectContainerRef.current) {
            return (selectContainerRef.current?.offsetWidth as number) ?? 4;
        }
        return 4;
    };
    const [paddingX, setPaddingX] = useState(() => {
        return getSelectContainerWidth();
    });

    useEffect(() => {
        setPaddingX(getSelectContainerWidth());
    }, [selectContainerRef?.current?.offsetWidth]);

    return (
        <div className={"relative"}>
            <BaseInput
                style={{
                    ...style,
                    paddingLeft: position === "right" ? 8 : paddingX,
                    paddingRight: position === "right" ? paddingX : 8,
                }}
                {...rest}
            />
            {/* Todo: Implement add-on feature*/}
            {/* add-on  */}
            {/*<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">*/}
            {/*    <span className="text-gray-500 sm:text-sm">$</span>*/}
            {/*</div>*/}

            {/* select input*/}
            <div
                ref={selectContainerRef}
                className={twMerge(
                    `absolute w-fit inset-y-0 ${
                        position === "right" ? "right-0" : "left-0"
                    } flex items-center`,
                    selectContainerClassName
                )}
            >
                <label htmlFor="currency" className="sr-only">
                    Currency
                </label>
                <div className={"relative h-full"}>
                    <ChevronDownIcon
                        strokeWidth={2}
                        className={
                            "absolute ring-0 right-1 top-0 bottom-0 h-5 w-5 my-auto"
                        }
                    />
                    <select
                        id="currency"
                        name="currency"
                        onChange={handleSelect}
                        defaultValue={defaultSelectValue}
                        className={twMerge(
                            "h-full relative rounded-md focus:border-blue-500 border-transparent appearance-none border-[1px] bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-blue/50 sm:text-sm",
                            selectClassName
                        )}
                    >
                        {options.map((option) => (
                            <option key={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};
export default InputWithSelect;
