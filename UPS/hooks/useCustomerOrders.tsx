//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../graphql/queries';
import { Order, OrderResponse } from '../typings';


// create a component
const useCustomerOrders = (userId: string) => {
    const {loading,error, data } = useQuery(GET_ORDERS)
    const [orders, setOrders] = useState<Order[]>([])

    useEffect (() =>{
        if(!data) return;

        const orders: Order[] = data.getOrders.map(({value}: OrderResponse) => ({
            carrier: value.carrier,
            createdAt: value.createdAt,
            shippingCost: value.shippingCost,
            trackingId: value.trackingId,
            trackingItems: value.trackingItems,
            Adress:value.Adress,
            City: value.City,
            Lng: value.Lat,
            Lat: value.Lat,

        }));

    const customerOrders = orders.filter(
        (order) => order.trackingItems.customer_id === userId
        );

    setOrders(customerOrders)
}, [data, userId])

    return {loading, error, orders}
};


//make this component available to the app
export default useCustomerOrders;
