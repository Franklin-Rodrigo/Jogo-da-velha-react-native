import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    AsyncStorage, 
    StyleSheet,
    TouchableOpacity,
    Picker,
    
} from 'react-native'

import Api from '../services/Api'

import List from '../components/list'
import Navbar from '../components/navbar/'
import CreateItem from '../components/createItem'
import { TextInput, ScrollView } from 'react-native-gesture-handler'

//4e 69 63 68 6f 6c 61 73 

export default  Home = (props) => {
    const [email, setEmail ]            = useState('') 
    const [user_id, setUser_Id]         = useState('')
    const [startDate, setStartDate]     = useState('')
    const [endDate, setEndDate]         = useState('')
    const [genericTypeExpense, setGetyEx] = useState('')
    const [genericTypePaymenty, setGetyPy] = useState('')
    const [genericDtPayment, setDtPay] = useState('')
    const [listPayment, setListPayment] = useState([])
    
    const nav = props.navigation

    useEffect(() => {
        AsyncStorage.multiGet(['email', 'id']).then((user) => {
            const [email, id] = user
            if(email[1]) {
                setEmail(email[1])
            }
            if(id[1]) {
                setUser_Id(id[1])
            }
            refresh()
           
        })
    }, [])

    refresh = async () => {
        try{
            let response = await Api.get('/findPayment', {
                headers: {
                    user_id: user_id
                },
                params: {
                    startDate,
                    endDate,
                    payment_type: genericTypePaymenty,
                    expense_type: genericTypeExpense,
                    dt_payment: genericDtPayment,
                },
                
            })
           // console.log(response.data)
            setListPayment(response.data)
        }catch(error) {
            console.log(error)
        }
    }

   

    deleteItemList = async id => {
       try {
            const response = await Api.delete('/matapagamento', {params:{_id: id } })
            console.log(response)
            refresh()
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <View  style={styles.container}>
            <Navbar email={email} />
                    <View style={[styles.spaceZone, { flexDirection: 'row',justifyContent: 'flex-start', }]}>
                        <ScrollView
                        horizontal
                        >
                        <TextInput
                                placeholder='data Inicial'
                            style={[styles.filter]}
                            value={startDate}
                            onChangeText={setStartDate}
                        />
                        <TextInput
                            placeholder='data Final'
                            style={[styles.filter]}
                            value={endDate}
                            onChangeText={setEndDate}
                        />
                        <Picker
                            selectedValue={genericTypeExpense}
                            style={[styles.filter, { width: 116}]}
                            onValueChange={(itemValue, itemIndex) =>
                                setGetyEx(itemValue)
                            }
                        >   
                            <Picker.Item  label='choose' value='' />
                            <Picker.Item  label='Combustível' value='5dcd592fbe244469cdfbfbba' />
                            <Picker.Item  label='Telefone' value='5dcd5928be244469cdfbfbb9' />
                            <Picker.Item  label='Saúde' value='5dcd583abe244469cdfbfbb6' />    
                            <Picker.Item  label='Outros' value='5dcd5934be244469cdfbfbbb' />    

                                
                        </Picker>
                        <Picker
                            selectedValue={genericTypePaymenty}
                            style={[ styles.filter, { width: 116}]}
                            onValueChange={(itemValue, itemIndex) =>
                                setGetyPy(itemValue)
                            }
                        >  
                            <Picker.Item  label='choose' value='' />
                            <Picker.Item  label='Credito' value='5dcd550410cf97682b4e15c7' />
                            <Picker.Item  label='Debito' value='5dcd550a10cf97682b4e15c8' />
                            <Picker.Item  label='Dinheiro' value='5dcd551110cf97682b4e15c9' />    
                            <Picker.Item  label='Outros' value='5dd099bcd21b756ccf23d621' />    

                            
                        </Picker> 

                        <Picker
                            selectedValue={genericDtPayment}
                            style={[ styles.filter, { width: 116}]}
                            onValueChange={(itemValue, itemIndex) =>
                                setDtPay(itemValue)
                            }
                        >  
                            <Picker.Item  label='choose' value='' />
                            <Picker.Item  label='nullo' value='2' />
                            <Picker.Item  label='not nullo' value='1'/>
                            
                        </Picker> 
                        
                        <TouchableOpacity style={styles.buttonFilter} onPress={() => refresh( )}>
                            <Text style={styles.filterTextButton}>press</Text>
                        </TouchableOpacity>
                        </ScrollView>
                    </View>
        
                    <List payments={listPayment} delete={deleteItemList}/>
                    
                <TouchableOpacity style={[styles.buttonfluter, styles.shadow]} onPress={() => nav.navigate('RegisterItem')}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },

    spaceZone: {
        alignSelf: 'stretch',
        marginBottom: 4,
        marginHorizontal: 4,
        marginTop: 4
    },

    buttonfluter: {
        position: 'absolute',
        height: 74,
        width: 74,
        marginTop: 550,
        marginEnd: 325 ,
        marginLeft: 320,
        backgroundColor:'#FF0601',
        justifyContent: 'center',
       
    },

    buttonText: {
        fontSize: 60,
        textAlign: 'center',
        color: '#fff',
        textAlignVertical: 'center',
        marginBottom: 8,
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: 
        {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 18,
    },

    filter: {
        backgroundColor: '#fff',
        marginHorizontal: 4,
        textAlign: 'center',
        width: 80
    },

    buttonFilter: {
        backgroundColor: '#000',
        marginHorizontal: 4,
        textAlign: 'center',
        width: 80,
        textAlignVertical: 'center'
        
    },

    filterTextButton: {
        fontSize: 10,
        textAlign: 'center',
        color: '#fff',
        textAlignVertical: 'center',
        alignSelf: 'center'
    }


})