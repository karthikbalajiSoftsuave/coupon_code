import React from "react";


type TextBoxProps = {
    label?: string,
    formValue?: any
} & React.InputHTMLAttributes<HTMLInputElement>


export const TextBox: React.FC<TextBoxProps> = ({ label, formValue, ...props }) => {
    return (
        <div className="textBox">
            {label && <label>{label}</label>}
            <input type={"text"} {...props} {...formValue} />
        </div>
    )
}