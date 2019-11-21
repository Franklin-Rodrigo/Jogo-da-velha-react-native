import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'

import styles from './Styles'
import stylesNavbar from '../navbar/Styles'

export default List = (props) => {

    deleteI = async id => {
        console.log(id)
        props.delete(id)
    }
    
    return (
        <View>
             <FlatList 
                data={props.payments}
                keyExtractor={payment => payment._id}
                renderItem={({ item }) => (
                    <View style={[styles.card, stylesNavbar.shadow]}>
                        <View style={[stylesNavbar.navbar, {marginTop: 0, paddingStart: 10}]}>
                            <Text style={[stylesNavbar.nickname, {fontSize: 16, fontWeight: 'bold'}]}> {item.description} </Text>
                            <TouchableOpacity style={{position: 'absolute', marginTop: 12, marginLeft: 288}} onPress={() => deleteI(item._id)}> 
                                <Text style={{color: '#fff', fontSize: 16}}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.nomenclatura}> tipo do Pagamento: <Text style={styles.content}>{item.payment_type.description} </Text></Text>
                        <Text style={styles.nomenclatura}> tipo de Despesa:   <Text style={styles.content}>{item.expense_type.description} </Text></Text>
                        <Text style={styles.nomenclatura}> Data do pagamento: <Text style={styles.content}>{item.dt_payment} </Text></Text>
                        <Text style={styles.nomenclatura}> Data de Vencimento: <Text style={styles.content}>{item.dt_expire} </Text></Text>
                        <Text style={styles.nomenclatura}> Valor da Multa: <Text style={styles.content}>{item.fine_amount.$numberDecimal} </Text></Text>
                        <Text style={styles.nomenclatura}> Valor do Juros: <Text style={styles.content}>{item.interest_amount.$numberDecimal} </Text></Text>
                        <Text style={styles.nomenclatura}> Valor Pago: <Text style={styles.content}>{item.value.$numberDecimal} </Text></Text>
                    </View>
                )}
            />
        </View>
    )
}

