import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Login from '../screens/Login'
import Signup from '../screens/SignUp'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='SignUp'
      screenOptions= {
        ({route})=>{
          return {
            header: ()=> <Header title="Bienvenido" />
          }
        }
      }
    >
      <Stack.Screen name= 'SignUp' component={ Signup } />
      <Stack.Screen name= 'Login' component={ Login } />
    </Stack.Navigator>
  )
}

export default AuthStack