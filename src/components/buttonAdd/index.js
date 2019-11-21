import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import styles from './Styles'

export default ButtonAdd = () => {
    return (
       
        <TouchableOpacity style={styles.buttonfluter}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        
    )
}