import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";
import { IItem } from "../models/item";

@Injectable()
export class ItemService{
    url: string = 'https://sustaining-screeching-lemonade.glitch.me/products/'
    constructor(private Http: HttpClient){}

    getAll(): Observable<IItem[]>{
        return this.Http.get<IItem[]>(this.url)
    }

    getById(id: string): Observable<IItem>{
        return this.Http.get<IItem>(this.url + id)
    }

    create(item: IItem){
        return this.Http.post(this.url, item)
    }
}