
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateStudentInput {
    exampleField?: Nullable<number>;
}

export interface UpdateStudentInput {
    id: number;
}

export interface Student {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    students(): Nullable<Student>[] | Promise<Nullable<Student>[]>;
    student(id: number): Nullable<Student> | Promise<Nullable<Student>>;
}

export interface IMutation {
    createStudent(createStudentInput: CreateStudentInput): Student | Promise<Student>;
    updateStudent(updateStudentInput: UpdateStudentInput): Student | Promise<Student>;
    removeStudent(id: number): Nullable<Student> | Promise<Nullable<Student>>;
}

type Nullable<T> = T | null;
