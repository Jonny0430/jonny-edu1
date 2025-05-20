export enum PageCategory {
    Courses,
    Books,
}

export interface HhDataType {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
}

export interface AdvatnageData  {
   title: string;
   description: string;
   id: string 
}

export interface PageModel {
    _id: string;
    alias: string;
    title: string;
    tags: string[];
    description: string;
    hh: HhDataType;
    advantages: AdvatnageData[];
    category: string;
}