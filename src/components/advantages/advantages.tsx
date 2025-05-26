import Divider from "../divider/divider"
import { AdvantagesProps } from "./advantages.props"
import styles from './advantages.module.css';
import CheckIcon from './check.svg';
import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi



const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(c => (
                <div key={c.id} className={styles.advantage}>
                    <CheckIcon />
                    <div className={styles.title}>{c.title}</div>
                    <Divider className={styles.vline} />
                    <div className={styles.description}>{c.description}</div>
                </div>
            ))}
        </>
    )
}

export default Advantages