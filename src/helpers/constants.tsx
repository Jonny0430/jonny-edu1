import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi
import { PageCategory } from '../interfaces/page.interface';
import { IFirstLevelMenu } from '../interfaces/menu.interface';
import BooksIcon from '../icons/books.svg';
import CoursesIcon from '../icons/courses.svg'

export const firstLevelMenu: IFirstLevelMenu[] = [
	{ route: 'courses', name: 'Courses', icon: <CoursesIcon />, id: PageCategory.Courses },
	{ route: 'books', name: 'Books', icon: <BooksIcon />, id: PageCategory.Books },
];