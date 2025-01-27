import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AdviloIconWithoutText from '../../../assets/AdviloIconWithoutText';
import FavouriteIcon from "../../../assets/Favourite"
const Footer=()=>{
    return (
        <View style={styles.screen}>
            <View style={styles.iconContainer}>
            <AdviloIconWithoutText/>
            </View>
            
            <Text style={styles.text}>
            Building meaningful connections by
            </Text>
            <Text style={styles.text}>
            bridging lives through unwavering trust,
            </Text>
            <Text style={styles.text}>
            expert guidance, and the empowering force
            </Text>
            <Text style={styles.text}>
            of reliable advice.
            </Text>
            <Text style={styles.bottomText}>
                Made with <FavouriteIcon /> in Lucknow, India
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width:'100%',
        paddingHorizontal:16,
        paddingVertical:24,
        backgroundColor:'#F1F6FE',
    },
    iconContainer:{
        marginBottom:16,
    },
    text:{
        color:'#555B61',
        fontSize:16,
    },
    bottomText:{
        color:'#555B61',
        fontSize:16,
        marginTop:16,
        marginBottom:24,
        fontWeight:700,
    }

})

export default Footer;