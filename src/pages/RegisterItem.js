import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text,
    TextInput, 
    Picker, 
    TouchableOpacity, 
    AsyncStorage,
    StyleSheet,
    Image
} from 'react-native'

import stylesList from '../components/list/Styles'
import stylesNavbar from '../components/navbar/Styles'

import Api from '../services/Api'

export default CreateItem = (props) => {
    const [email, setEmail ]            = useState('') 
    const [user_id, setUser_Id]         = useState('')
    const [genericTypeExpense, setGetyEx] = useState('')
    const [genericTypePaymenty, setGetyPy] = useState('')
    const [description, setDescrption] = useState('')    
    const [dt_payment, setDt_payment] = useState('')
    const [dt_expire, setDt_expire] = useState('')
    const [value, setValue] = useState('')    
    const [fine_amount, setFine_amount] = useState('')
    const [interest_amount, setInterest_amount] = useState('')
    
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
        })
    }, [])

    createItemList = async () => {
        try{
            const item = {
                description,
                dt_payment,
                dt_expire,
                value,
                fine_amount,
                interest_amount,
                user_id: user_id,
                payment_type: genericTypePaymenty._id,
                expense_type: genericTypeExpense._id,
            } 
            const res = await Api.post('/dashboadpayment', item)
        } catch(error) {
        console.log(error)
        }
    }


    return (
        <View>
            <Navbar email={email} />
            <TouchableOpacity style={styles.buttonBack} onPress={() => nav.navigate('Home')}>
                <Image  source={require('../../assets/icons/arrow_back-white-18dp/2x/baseline_arrow_back_white_18dp.png')}/>
            </TouchableOpacity>
            <View  style={[stylesList.card, styles.cardCreat, stylesNavbar.shadow]}>
                <View style={[stylesNavbar.navbar, {marginTop: 0, paddingStart: 10}]}>
                    <Text style={[stylesNavbar.nickname, {fontSize: 16, fontWeight: 'bold'}]}>Descrição </Text>
                    <TextInput 
                    placeholder='descrição' 
                    style={[styles.input, styles.description, {borderColor: '#fff'}]}
                    value={description}
                    onChangeText={setDescrption}
                    />
                </View>
                
                <Text style={[styles.nomenclatura, {marginTop: 10}]}>tipo do Pagamento:</Text> 
                <Picker
                    selectedValue={genericTypePaymenty._id}
                    style={[{height: 20, width: 80}, styles.input, {position: 'absolute', marginTop: 80}]}
                    onValueChange={(itemValue, itemIndex) =>
                        setGetyPy({_id: itemValue})
                    }
                >  
                    <Picker.Item  label='choose' value='' />
                    <Picker.Item  label='Credito' value='5dcd550410cf97682b4e15c7' />
                    <Picker.Item  label='Debito' value='5dcd550a10cf97682b4e15c8' />
                    <Picker.Item  label='Dinheiro' value='5dcd551110cf97682b4e15c9' />    
                    <Picker.Item  label='Outros' value='5dd099bcd21b756ccf23d621' />    
                    
                </Picker> 
                <Text style={styles.nomenclatura}>tipo Despesa:</Text>
                <Picker
                    selectedValue={genericTypeExpense._id}
                    style={[{height: 20, width: 80}, styles.input, {position: 'absolute', marginTop: 120}]}
                    onValueChange={(itemValue, itemIndex) =>
                        setGetyEx({_id: itemValue})
                    }
                >   
                    <Picker.Item  label='choose' value='' />
                    <Picker.Item  label='Combustível' value='5dcd592fbe244469cdfbfbba' />
                    <Picker.Item  label='Telefone' value='5dcd5928be244469cdfbfbb9' />
                    <Picker.Item  label='Saúde' value='5dcd583abe244469cdfbfbb6' />    
                    <Picker.Item  label='Outros' value='5dcd5934be244469cdfbfbbb' />    

                        
                </Picker>
                <Text style={[styles.nomenclatura, {marginTop: 5}]}>Data do pagamento:</Text>
                <TextInput 
                    placeholder='data de pagamento' 
                    multiline={true} 
                    dataDetectorTypes='calendarEvent' 
                    style={[styles.input, {position: 'absolute', marginTop: 150}]}
                    keyboardType='numeric'
                    value={dt_payment}
                    onChangeText={setDt_payment}
                />
                <Text style={[styles.nomenclatura, {marginTop: 0}]}>Data de Vencimento:</Text>
                <TextInput 
                    placeholder='data de vencimento' 
                    multiline={true} 
                    
                    dataDetectorTypes='calendarEvent' 
                    style={[styles.input, {position: 'absolute', marginTop: 195}]}
                    keyboardType='numeric'
                    value={dt_expire}
                    onChangeText={setDt_expire}
                    />
                <Text style={styles.nomenclatura}>Valor da Multa:</Text>
                <TextInput 
                    placeholder='multa' 
                    style={[styles.input, {position: 'absolute', marginTop: 230}]}
                    keyboardType='numeric'
                    value={fine_amount}
                    onChangeText={setFine_amount}
                />
                <Text style={styles.nomenclatura}>Valor do Juros:</Text>
                <TextInput 
                    placeholder='juros' 
                    style={[styles.input, {position: 'absolute', marginTop: 270}]}
                    keyboardType='numeric'
                    value={interest_amount}
                    onChangeText={setInterest_amount}
                />
                <Text style={styles.nomenclatura}>Valor Pago:</Text>
                <TextInput 
                    placeholder='valor pago' 
                    style={[styles.input, {position: 'absolute', marginTop: 310}]}
                    keyboardType='numeric'
                    value={value}
                    onChangeText={setValue}
                />
            </View>
            <TouchableOpacity  style={[styles.buttonfluter, stylesNavbar.shadow]} onPress={() => createItemList()}>
                <Text style={styles.buttonText}>$</Text>
            </TouchableOpacity>
        </View>
    )

}   


const styles =  StyleSheet.create({
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

    nomenclatura: {
        marginBottom: 10,
        marginLeft: 16,
    },

    buttonBack: {
        position: 'absolute',
        marginLeft: 360,
        marginTop: 12,
        elevation: 21,
    }
})
