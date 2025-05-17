import { JSX } from "react";
import { Heading, Tag } from "../../components"
import styles from './course-page-component.module.css'
import { CoursePageComponentProps } from "./course-page-component.props";




// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CoursePageComponent = ({ firstCategory, page, products }: CoursePageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            {/* {TITLE} */}
            <div className={styles.title}>
                <Heading tag='h1'>{page.title}</Heading>
                <div>Sort...</div>
            </div>


            {/* {PRODUCTS} */}

            <div>Products</div>

            {/* {VACATIONS} */}
            <div className={styles.hhTitle}>
                <Heading tag='h2'>Vacations - {page.category}</Heading>
                <Tag color='red' size='m'>
                    hh.uz
                </Tag>
            </div>

            {/* {HHDATA} */}
            <div>HHDATA</div>
        </div>
    );
};

export default CoursePageComponent;