import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: FieldError;
}

