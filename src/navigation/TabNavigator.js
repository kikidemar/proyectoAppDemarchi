import ShopStack from './ShopStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CartStack from './CartStack'
import { StyleSheet } from 'react-native'
import { colors } from '../global/colors'
import OrdersStack from './OrderStack'
import TabIcon from '../components/TabIcon'
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar
        }}
      >
        <Tab.Screen
          name='ShopStack'
          component={ShopStack}
          options={{
            tabBarIcon: ({focused}) => <TabIcon icon='shop' label="Productos" focused={focused}/>
          }}
        />
        <Tab.Screen
          name='CartStack'
          component={CartStack}
          options={{
            tabBarIcon: ({focused}) => <TabIcon icon='shopping-cart' label="Carrito" focused={focused}/>
          }}
        />
        <Tab.Screen 
            name="OrdersStack" 
            component={OrdersStack}
            options={{
              tabBarIcon:({focused}) => <TabIcon icon="list" size={40} label="Ordenes" focused={focused}/> 
             }}
        />
        <Tab.Screen 
            name="ProfileStack" 
            component={ProfileStack}
            options={{
              tabBarIcon:({focused}) => <TabIcon icon="user" label="Perfil" focused={focused}/> 
            }}
        />
      </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primaryBackground,
    elevation: 4,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 0,
    height: 60
  }
})