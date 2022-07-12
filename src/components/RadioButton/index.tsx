import React from "react";
import './styles.scss'

type RadioButtonProps = {
    label: string,
} & React.InputHTMLAttributes<HTMLInputElement>

export const RadioButton: React.FC<RadioButtonProps> = ({ label, value, checked, onChange, ...props }) => {
    return (
        <label className="radioButton">
            <input
                type="radio"
                value={value}
                onChange={onChange}
                checked={checked}
                data-checked={checked}
                {...props}
            />
            {label}
        </label>
    );
}