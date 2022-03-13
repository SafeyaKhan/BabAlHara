import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors, parameters, heading, text } from "../global/styles"
import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import { isTemplateElement } from '@babel/types'
import { Icon, SocialIcon, Button } from 'react-native-elements'
import cartScreen from './cartScreen'

const DetailsScreen = ({ navigation, route }) => {
    const item = route.params;
    return (
        <View style={styles.container}>
            <Header title="Details" type="arrow-left" navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: 280 }}>
                    <Image source={item.image} style={{ height: 220, width: 220 }} />
                </View>
                <View style={styles.details}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>{item.name}</Text>
                        <View style={styles.iconContainer}>
                            <Icon name='favorite-border' color={colors.primarydark} size={25} />
                        </View>
                    </View>
                    <Text style={styles.detailsText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci neque. Quisque sit amet diam sapien.
                        Aenean ultricies, eros facilisis dictum euismod, nunc justo laoreet ex, a sagittis massa est eu tortor.
                        Praesent sed tellus odio. Quisque lobortis eu risus vitae aliquam. Aenean congue, enim ac ullamcorper tincidunt,
                        libero elit porta justo, ut malesuada lorem nibh sed ipsum. Phasellus ullamcorper urna eu sem auctor porttitor.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc laoreet sit amet tellus eu sagittis.
                    </Text>
                    <View style={{marginTop:40}}>
                    <Button
                title="Add to Cart"
                buttonStyle= {styles.createbutton}
                titleStyle={styles.createbuttontitle}
                onPress={()=>navigation.navigate('cartScreen')}
                />
                </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: colors.grey2,
        marginLeft: 52
    },
    details: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: colors.primarydark,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },

    iconContainer: {
        backgroundColor: '#ffffff',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    detailsText:{
        marginTop:10,
        lineHeight:22,
        fontSize:13,
        color:'#ffffff'
    },
    createbutton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.primarydark,
        fontSize: 13
    },
    createbuttontitle:{
        color: colors.primarydark,
        fontSize:13,
        fontWeight:"bold"
    }
});