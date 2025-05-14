import { DetailedHTMLProps } from "react";




export interface RatingProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    rating: number;
    isEditabled?: boolean;
    setRating?: (rating: number) => void;
}