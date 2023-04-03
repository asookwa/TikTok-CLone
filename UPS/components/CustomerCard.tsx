//import liraries
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import useCustomerOrders from '../hooks/useCustomerOrders';
import { useTailwind } from 'tailwind-rn/dist';
import { useNavigation } from '@react-navigation/native';
import { CustomerScreenNavigationProp } from '../screens/CustomersScreen';
import { Card } from '@rneui/themed';

// create a component
type Props = {
    userId: string;
    name: string
    email: string
}


const CustomerCard = ({email, name, userId}: Props) => {
    const {loading, error, orders} = useCustomerOrders(userId)
    const tw= useTailwind()
    const navigation = useNavigation<CustomerScreenNavigationProp>()

    return (
        <TouchableOpacity>
            <Card containerStyle={tw("p-5 rounded-lg")} >
            </Card>
        </TouchableOpacity>
    );
};



//make this component available to the app
export default CustomerCard;
