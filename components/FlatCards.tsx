import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>

      <View style={styles.container}>
        <View style={[styles.card,styles.cardone]}>
          <Text>
          red
          </Text>
        </View>
        
        <View style={[styles.card,styles.cardtwo]}>
          <Text>
          Green
          </Text>
        </View>

        <View style={[styles.card,styles.cardthree]}>
          <Text>
          blue
          </Text>
        </View>
        
      </View>


    
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight:'bold',
    paddingHorizontal: 10,
  

  },
  container:{
    flex:1,
    flexDirection:'row',
    padding:8
  },
  card:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

    height:100,
    borderRadius:4,
    margin:8,
  },
  cardone:{
    backgroundColor: 'red',
  },
  cardtwo:{
    backgroundColor: 'green',
  },
  cardthree:{
    backgroundColor: 'blue',
  }
})