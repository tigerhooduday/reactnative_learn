import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
      <View style={[styles.card, styles.cardElevated]}>
            <Text  style={styles.textColor}>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.textColor}>Me to</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.textColor}>Scroll</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.textColor}>▶️▶️</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>🔥</Text>
        </View>
        
        <View style={[styles.card, styles.cardElevated]}>
            <Text>👤</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>🔥</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 10,
    
      },
      container:{},
      card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        
     
      },
      cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
          width:1,
          height:1,
          
        },
        shadowColor:'black',
        shadowOpacity:0.4
      },
      textColor:{
        color:'black',
      }
})