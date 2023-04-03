import { StringValueNode } from "graphql";

type Customer = {
    email: string;
    name: string;
}

type Customerlist = {
    name: ID;
    value: customer;
};


type TrackingItem = {
    customer_id: ID;
    customer: Customer;
    items: Items[]
}

type Items = {
    item_id:ID ;
    name: string;
    price: number;
    quantity:number;
}

type OrderResponse = { 
    value: Order;
}
type OrderResponse = {
    value: Order;
}

type CustomerResponse = {
    name: ID;
    value: Customer;
}

type Order = {
    carrier: string
    createdAt: string
    shippingCost: number   
    trackingId: string
    trackingItems: TrackingItem
    Lat: number
    Lng: number
    Adress: string
    City: string
}



