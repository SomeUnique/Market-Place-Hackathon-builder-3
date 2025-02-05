import { strict } from "node:assert";

export interface Food{
    
    _id: string;
    name: string;
    _type:" food";
    image?:{
        asset:{
            _ref:string;
            _type:"image";
        }
    }
    price: number;
    description:string;
    available: number;
}