/* eslint-disable @typescript-eslint/no-unused-vars */
import { Heading, HhData, Tag, Text, Sort } from "../../components"
import styles from './course-page-component.module.css'
import { CoursePageComponentProps, sortReducer } from "./course-page-component.props";
import Advantages from "../../components/advantages/advantages";
import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi
import Product from "../../components/product/product";
import { useReducer } from "react";
import { SortEnum } from "../../components/sort/sort.props";
import { useEffect } from "react";
import {  AnimatePresence } from "framer-motion";




// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CoursePageComponent = ({ page, products }: CoursePageComponentProps): JSX.Element => {
    const [state, dispatch] = useReducer(sortReducer, { sort: SortEnum.Rating, products: products });

    const setSort = (sort: SortEnum) => {
        dispatch({ type: sort });
    };

    useEffect(() => {
        dispatch({ type: 'reset', initialState: products });
    }, [products]);

        const spring = {
            type: 'spring',
            stiffness: 500,
            damping: 10,
        };

        const animations = {
            initial: { scale: 0 },
            animate: { scale: 1 },
            exit: { scale: 1 },
        };

    return (
        <div className={styles.wrapper}>
            {/* {TITLE} */}
            <div className={styles.title}>
                <Heading tag='h1'>{page.title}</Heading>
                <Sort sort={state.sort} setSort={setSort} />
            </div>


            {/* {PRODUCTS} */}

           <AnimatePresence>
                {state.products && state.products.map((c, idx) => <Product key={idx} layout transition={spring} {...animations} product={c} />)}
           </AnimatePresence>

            {/* {VACATIONS} */}
            <div className={styles.hhTitle}>
                <Heading tag='h2'>Vacations - {page.category}</Heading>
                <Tag color='red' size='m'>
                    hh.uz
                </Tag>
            </div>

            {/* {HHDATA} */}
            {page.hh && <HhData {...page.hh} />}

            {/* {ADVANTAGES} */}

            {page.advantages && page.advantages.length && (
                <>
                    <Heading tag='h2'>Advantages</Heading>
                    <Advantages advantages={page.advantages} />
                </>
            )}

            {/* {DESCRIPTION} */}
            <Text>{page.description}</Text>

            {/* {SKILLS} */}

            <Heading tag='h2'>Skills</Heading>
            {page.tags.length && 
                page.tags.map(t => (
                    <Tag color='primary' key={t}>
                        {t}
                    </Tag>
                ))}
        </div>
    );
};

export default CoursePageComponent;