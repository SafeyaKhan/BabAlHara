import React, { useState, useMemo } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions} from 'react-native'
import { colors, parameters, heading, text } from "../global/styles"
import HomeHeader from '../components/HomeHeader'
import AuthTabNavigators from '../navigation/AuthTabNavigators';
import RootNavigator from '../navigation/RootNavigator';
import { Icon } from 'react-native-elements';
import { FlatList, ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import categories from '../../const/categories';
import foods from '../../const/foods';
import DetailsScreen from './DetailsScreen';

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 30;

const HomeScreen = ({ navigation }) => {
    const [selectCategory, setSelectCategory] = useState(0)

    const ListCategories = () => {
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryContainer}
            >
                {categories.map((category, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectCategory(index)} >
                        <View style={{ backgroundColor: selectCategory == index ? colors.primarydark : colors.secondary, ...styles.categoryBtn }}>
                            <View style={styles.categoryBtnImg}>
                                <Image source={category.image} style={{ width: 35, height: 35, resizeMode: "contain" }} />
                            </View>
                            <Text style={{ color: selectCategory == index ? '#ffffff' : colors.primarydark, fontWeight: 'bold', marginLeft: 5 }}>{category.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        )
    };

   
    const Card = ({ food }) => {
        return (
            <TouchableHighlight underlayColor="#ffffff" activeOpacity={0.9} onPress={()=>navigation.navigate('DetailsScreen',food)}>
                 <View style={styles.card}>
            <View style={{ alignItems: 'center', top: -40 }}>
                <Image source={food.image} style={{ width: 120, height: 120 }} />
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>{food.name}</Text>
                <Text style={{ fontSize: 12, color: colors.grey2 }}>{food.ingredients}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>${food.price}</Text>
                <View style={styles.plusBtn}>
                    <Icon name="add" color={'white'} size={15} />
                </View>
            </View>
        </View></TouchableHighlight>
           );
    };
    return (
        <View style={styles.container}>
            <HomeHeader title="Hello" type="menu" navigation={navigation} />
            <Text style={styles.text}>What do you want to order Today?</Text>
            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                <View style={styles.textinput}>
                    <Icon name="search" size={24} />
                    <TextInput
                        style={{ flex: 2, fontSize: 14, marginLeft: 5 }}
                        placeholder="Search for Food" />
                </View>
                <View style={[styles.sortbtn, { flex: 3 }]}>
                    <Icon name="tune" size={24} color={'white'} />
                </View>
            </View>
            <View><ListCategories /></View>
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={foods}
                contentContainerStyle={{ alignItems: 'center' }}
                renderItem={({ item }) => <Card food={item} />}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    },
    text: {
        color: colors.grey2,
        marginLeft: 52
    },
    textinput: {
        borderWidth: 1,
        borderColor: "#86939e",
        borderRadius: 12,
        marginLeft: 30,
        marginVertical: 5,
        height: 50,
        width: '65%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    sortbtn: {
        borderWidth: 1,
        borderColor: colors.primarydark,
        backgroundColor: colors.primarydark,
        borderRadius: 12,
        height: 50,
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginRight: 35,
        marginVertical: 5,
        marginLeft: 5

    },
    categoryContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginLeft: 10
    },
    categoryBtn: {
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row'
    },
    categoryBtnImg: {
        height: 35,
        width: 35,
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        height: 220,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        shadowColor: "black",
        shadowOpacity: 0.2,
        backgroundColor: 'white',
    },
    plusBtn: {
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor: colors.primarydark,
        justifyContent: 'center',
        alignItems: 'center'
    }

})
