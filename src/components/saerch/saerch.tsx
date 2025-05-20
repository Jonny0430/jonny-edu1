import { useRouter } from "next/router";
import { useState } from "react"
import { SearchProps } from "./saerch.props";
import Input from "../input/input";
import styles from './saerch.module.css';
import Button from "../button/button";
import cn from 'classnames';
import SearchIcon from './search.svg';
import React from 'react';



const Saerch = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const searchHandler = () => {
        if (!search.length) return;
        router.push({ pathname: '/search', query: { q: search } });
    }

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input placeholder='Search...' className={styles.input} value={search} onChange={e => setSearch(e.target.value)} />
            <Button appearance="primary" className={styles.button} onClick={searchHandler}>
                <SearchIcon />
            </Button>
        </div>
    )
}

export default Saerch;