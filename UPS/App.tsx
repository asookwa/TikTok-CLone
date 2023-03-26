import { TailwindProvider } from 'tailwind-rn/dist';
import CustomersScreen from './screens/CustomersScreen';
import  utilities  from './tailwind.json'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



////////////////    Imports End /////////////////


//////////////////////////////////////////////////////////

export default function App() {
  
  return (
    //@ts-ignore -TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <CustomersScreen />
      </NavigationContainer>
      
    </TailwindProvider>
  )
}
