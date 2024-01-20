import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trening places</Text>
    
      <View style={[styles.card,styles.cardElevated]}>
        <Image
            source={{
                uri:'https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardbody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Seven Wonder Of the World</Text>
            <Text style={styles.cardDescription}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.</Text>
            <Text style={styles.cardFooter}>7 km away</Text>
        </View>
    </View>
    

    

    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 8,
        
    
      },
      card:{
        width:380,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,

      },
      cardElevated:{
        backgroundColor: '#e6cbb9',
        elevation:5,
        shadowOffset:{
            height:1,
            width:1
        }
      },
      cardImage:{
        height:180,
        marginBottom:10,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
      },
      cardbody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12

      },
      cardTitle:{
        color: '#000000',
        fontWeight:'bold',
        fontSize:22,
        marginBottom:6,
        textAlign: 'center',
        
      },
      cardLabel:{
        color: '#000000',
        fontSize:15,
        fontStyle:'italic'
      },
      cardDescription:{
        color: '#000000',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      cardFooter:{
        color: '#000000',
        fontSize:12

      },



})