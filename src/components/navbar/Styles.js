import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    navbar: {
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        backgroundColor: '#FF0601',
        
        height: 60
    },

    nickname: {
        // fontFamily: 'Lemonada-Regular',
        color: '#fff',
        marginVertical: 20,
        marginLeft:10,
        fontSize: 20,
    },

    shadow: {
        shadowColor: "#FF0601",
        shadowOffset: 
        {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 15,
    },
})