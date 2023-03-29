import { View, Text } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import CustomersScreen from '../screens/CustomersScreen'
import OrdersScreen from '../screens/OrdersScreen'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed'

export type TabStackParamlist = {
  Customers: undefined;
  Orders: undefined;

}

const Tab = createBottomTabNavigator<TabStackParamlist>()


const TabNavigator = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  },[])

  return (
    <Tab.Navigator screenOptions={({ route })=> ({
      tabBarActiveTintColor: "#59C1CC",
      tabBarInactiveTintColor: "grey",
      tabBarIcon: ({focused }) => {
        if(route.name === "Customers") {
          return (
            <Icon 
              name='group'
              type="material-icons"
              size={35}
              color={focused ?"#59C1CC": "gray"}
            />
          )
        } else if (route.name === "Orders"){
          return ( 
            <Icon 
            name='box-open'
            type='font-awesome-5'
            color={focused ?"#59C1CC": "gray"}
          />

          )
        }

      }

    })} >
      <Tab.Screen name='Customers' component={CustomersScreen} />
      <Tab.Screen name='Orders' component={OrdersScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator