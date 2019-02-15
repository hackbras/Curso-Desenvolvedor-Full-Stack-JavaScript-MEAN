import { Film } from "./Film";

export class Language{
    languageId?:number
    name?:string
    lastUpdate?:string
    films?:Film[]

    toJSON?:() => Language
}