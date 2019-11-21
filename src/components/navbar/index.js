import React from 'react'
import { View, Text} from 'react-native'

import styles from './Styles'

export default Navbar = ({email}) => {
    return( 
    <View style={[styles.navbar, styles.shadow]}>
        <Text style={styles.nickname}>{email}</Text>
    </View>
    )
}