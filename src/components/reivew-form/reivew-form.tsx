/* eslint-disable @typescript-eslint/no-unused-vars */
import { JSX, useState } from "react"
import styles from './reivew-form.module.css';
import { ReivewFormProps } from "./reivew-form.props";
import Rating from "../rating/rating";
import { Button, TextArea } from "..";
import Input from '../input/input';
import cn from 'classnames'
import React from 'react'; 
import { IReviewForm } from "./review-form.interface";
import { useForm, Controller } from "react-hook-form";


const ReivewForm = ({ productid, className, ...props }: ReivewFormProps): JSX.Element => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log(data)
    }

    return (
       <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn(styles.reviewForm, className)} {...props}>
            <Input 
                placeholder="Name"
                className={styles.name}
                error={errors.name}
                {...register('name', { required: { value: true, message: 'Name is required'} })} />
                <Input 
                    placeholder="Title"
                    className={styles.title}
                    error={errors.title}
                    {...register('title', { required: { value: true, message: 'Title is required'} })} />
                    <div className={styles.rating}>
                        <span>Rating: </span>
                        <Controller 
                            control={control}
                            name={'rating'}
                            rules={{ required: { value: true, message: 'Rating is required'} }}
                            render={({ field }) => (
                                <Rating isEditabled rating={field.value} error={errors.rating} ref={field.ref} setRating={field.onChange} />
                            )} />
                    </div>
                    <TextArea 
                        placeholder="Description"
                        className={styles.description}
                        error={errors.description}
                        {...register('description', { required: { value: true, message: 'Description is required'} })} />
                        <div className={styles.submit}>
                            <Button appearance="primary">Submit</Button>
                            <span className={styles.info}>* Your reivew will be moderated and reviewed before being published</span>
                        </div>
        </div>
       </form>
    );
};


export default ReivewForm;