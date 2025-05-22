/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import { ForwardedRef, useEffect } from "react";
import { useState } from "react";
import { forwardRef } from "react";
import StarIcon from './star.svg';
import cn from 'classnames';
import styles from './rating.module.css';
import { RatingProps } from "./rating.props";
import React from 'react'; 

const Rating = forwardRef(
  ({ rating, isEditabled = false, setRating, error, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
      renderRating(rating);
    }, [rating]);

    const renderRating = (currentRating: number) => {
      const updateArray = ratingArray.map((r: JSX.Element, idx: number) => (
        <span
          className={cn(styles.star, {
            [styles.filled]: idx < currentRating,
            [styles.editable]: isEditabled,
          })}
          onMouseEnter={() => changeRatingDisplay(idx + 1)} // To'g'ri nomlangan funksiya
          onMouseLeave={() => changeRatingDisplay(rating)} // To'g'ri nomlangan funksiya
          onClick={() => clickRatingHandler(idx + 1)} // `idx + 1`ni to'g'ri yuboring
        >
          <StarIcon />
        </span>
      ));
      setRatingArray(updateArray);
    };

    const changeRatingDisplay = (index: number) => {
      if (!isEditabled || !setRating) {
        return;
      }
      setRating(index); // Ratingni yangilash
    };

    const clickRatingHandler = (index: number) => {
      if (isEditabled && setRating) {
        setRating(index); // Ratingni yangilash
      }
    };

    return (
      <div
        className={cn(styles.rating, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      >
        {ratingArray.map((rating, idx) => (
          <span key={idx}>{rating}</span> // `key={idx}` o'rniga, `ratingArray` dan foydalaning
        ))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

export default Rating;
