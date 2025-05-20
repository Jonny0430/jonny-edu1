/* eslint-disable @typescript-eslint/no-unused-vars */
import { JSX, useState } from "react"
import styles from './reivew-form.module.css';
import { ReivewFormProps } from "./reivew-form.props";
import Rating from "../rating/rating";
import { Button, TextArea } from "..";
import Input from '../input/input';
import cn from 'classnames'
import React from 'react'; 


const ReivewForm = ({ productid, className, ...props }: ReivewFormProps): JSX.Element => {
    const [rating, setRating] = useState<number>(0);


    return (
        <div className={cn(styles.reviewForm, className)} {...props} >
            <Input placeholder='Name' className={styles.name} />
            <Input placeholder='Title' className={styles.title} />
            <div className={styles.rating}>
                <span>Rating: </span>
                <Rating isEditabled rating={rating} setRating={setRating} />
            </div>
            <TextArea placeholder="Description" className={styles.description} />
            <div className={styles.submit} >
                <Button appearance='primary'>Submit</Button>
                <span className={styles.info}>* Your review will be moderated and reviewed before being published</span>
            </div>
         </div>
    );
};


export default ReivewForm;