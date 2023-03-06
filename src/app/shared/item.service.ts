import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";
import { IItem } from "../models/item";

@Injectable()
export class ItemService{
    constructor(private Http: HttpClient){}

    getAll(): Observable<IItem[]>{
        return this.Http.get<IItem[]>('https://fakestoreapi.com/products')
    }

    getById(id: string): Observable<IItem>{
        return this.Http.get<IItem>('https://fakestoreapi.com/products/' + id)
    }
}