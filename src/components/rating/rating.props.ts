import { DetailedHTMLProps } from "react";
import { FieldError } from "react-hook-form";
import React from 'react'; 




export interface RatingProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    rating: number;
    isEditabled?: boolean;
    error?: FieldError;
    setRating?: (rating: number) => void;
}