import { Film } from "./film";

export class Language{
    languageId?:number
    name?:string
    lastUpdate?:string
    films?:Film[]

    toJSON?:() => Language
}