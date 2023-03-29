import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import {useTailwind} from "tailwind-rn"
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamlist } from '../Navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigator/RootNavigator';
import { Image, Input } from '@rneui/themed';


export type CustomerScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamlist, 'Customers'>,
NativeStackNavigationProp<RootStackParamList>
>


const CustomersScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation();
    const [input, setInput] = useState<string>('')

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown:false,
      })
    }, [])

  return (
    <ScrollView style={{
      backgroundColor: '#53c1cc'

    }} >
      <Image 
      source={{uri: 'https://links.papareact.com/3jc'}}
      style= {tw("w-full h-64")}
      />
    <Input placeholder='Search by Customer' value={input} onChangeText= {text => setInput}
      containerStyle= {tw('bg-white pt-5 pb-0 px-10')}
      />



    </ScrollView>
  )
}

export default CustomersScreen