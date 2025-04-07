import { Genre } from "../constants/genres.constants";

export interface User {
    id: number;
    email: string;
    password: string;
    date: Date;
    address?: string;
    name?: string;
    surname?: string;
    phoneNumber?: string;
    favGenre?: Genre[];
}