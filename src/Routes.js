import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './pages/Login'
import Home from './pages/Home'
import RegisterItem from './pages/RegisterItem'


const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Home,
        RegisterItem,
    })
)

export default Routes