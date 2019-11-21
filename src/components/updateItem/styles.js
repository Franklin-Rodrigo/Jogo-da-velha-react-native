import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    cardCreat: {
        alignSelf: 'center',
        width: 350,
        height: 360 ,
        marginTop: 60,
        justifyContent: 'space-between'
    },
    
    input: {
        position:'relative',
        marginLeft: 160,
        borderBottomWidth: 0.5,
        width: 160,   
        marginTop: 0,
        paddingBottom:0
    },
   
    description: {
        position: 'absolute',
        marginTop: 12,
    },

    buttonfluter: {
        alignSelf: 'stretch',
        position: 'absolute',
        height: 74,
        width: 74,
        borderRadius: 100,
        marginTop: 340,
        marginEnd: 0 ,
        marginLeft: 286,
        backgroundColor:'#D57BE8',
        justifyContent: 'center',
       
    },
    
    buttonText: {
        fontSize: 60,
        textAlign: 'center',
        color: '#fff',
        textAlignVertical: 'center',
        marginBottom: 8,
    },

    nomenclatura: {
        marginBottom: 10,
        marginLeft: 16,
        

    }
})
