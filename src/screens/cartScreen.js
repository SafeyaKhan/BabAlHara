import React, {useState} from 'react'
import { View, Text, StyleSheet, Image ,Button, TouchableOpacity} from 'react-native'
import { colors, parameters, heading, text } from "../global/styles"
import Header from '../components/Header'
import { withTheme } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import foods from '../../const/foods'
import Auth from '../services/auth'

const cartScreen = ({ navigation }) => {
    const [count, setCount] = useState(0);

    const CartCard = ({ item }) => {
        return (
            <View style={styles.cartCard}>
                <Image source={item.image} style={{ height: 80, width: 80 }} />
                <View style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{item.name}</Text>
                    <Text style={{ fontSize: 13, color: colors.grey2 }}>{item.ingredients}</Text>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>$ {item.price}</Text>
                </View>
                <View style={{ justifyContent: 'center', marginRight: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 13 ,textAlign:'center'}}>{count}</Text>
                    <View style={styles.cartBtn}> 
                        <Button onPress={() => { setCount(count + 1) }} title="plus"/>
                        <Button onPress={() => { setCount(count - 1) }} title="minus"/>
                    </View>
                   
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Header title="Cart" type="arrow-left" navigation={navigation} />
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                data={foods}
                renderItem={({ item }) => <CartCard item={item} />}
            />
             <View style={styles.view}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#5b0010' }]}
                    onPress={()=> Auth.signOut()}
                >
                    <Text style={{ color: "#ffffff" }}>Sign Out</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default cartScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: colors.grey2,
        marginLeft: 52
    },
    cartCard: {
        height: 100,
        shadowColor: '#470000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cartBtn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        borderRadius: 12,
        marginHorizontal: 45,
        marginVertical: 45,
        padding: 10,
        fontSize: 13,
        alignItems: "center",
        // backgroundColor: colors.primarydark
    }
});