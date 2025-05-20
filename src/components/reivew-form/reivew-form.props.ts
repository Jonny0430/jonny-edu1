import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ReivewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productid: string;
}