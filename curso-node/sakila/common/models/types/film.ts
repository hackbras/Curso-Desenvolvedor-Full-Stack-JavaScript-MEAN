import { Language } from "./language";

export class Film{
    filmId?:number
    title?:string
    replacementCost?:number
    rating?:string
    language_id?:number
    language?:Language
}