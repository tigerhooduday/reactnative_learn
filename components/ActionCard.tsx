import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openwebsite(websitelink :string){
        Linking.openURL(websitelink)
    }
  return (
    <View>
      <Text style={styles.heading}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            Whats New in JavaScript 21- ES12
          </Text>
        </View>
        
        <Image
          source={{
              uri:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={4}>
          As we gear up for the placement season, we are delighted to share promising career opportunities for your students in Salesforce. Through this campus placement, we will provide students with a platform to jumpstart their careers by leveraging their skills and aspirations to excel. We are happy to share the registration link for the hiring category (GenC Pro)  given in the attached student mailer. Kindly share it with your students for them to start the registration. 
          </Text>

        </View>
        <View style={styles.FooterContainer}> 
          <View  style={styles.socialContainer}>
            <TouchableOpacity 
            onPress={()=> openwebsite('https://www.google.com')}
            >
              <Text style={styles.socialText} >READ ME</Text>
            </TouchableOpacity>
          </View>
          <View  style={styles.socialContainer}>
            <TouchableOpacity 
            onPress={()=> openwebsite('https://www.google.com')}
            >
              <Text style={styles.socialText}>FOLLOW ME</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )               
}

const styles = StyleSheet.create({
  heading:{
    marginLeft:8,
    fontWeight:'bold',
    fontSize:22
  },
  card:{
    backgroundColor:'#000000',
    marginHorizontal:12,
    marginVertical:12,
    borderColor:'red',
    borderRadius: 25,
    height:420,
    width:390
  },
  elevatedCard:{
    elevation:8,
    shadowOffset:{
      width:1,
      height:1,
    },
    shadowColor:'black',
  },
  headingContainer:{
    marginVertical:6,
    flex:1,
    alignItems:'center',
    justifyContent:'center'

  },
  headingText:{},
  cardImage:{
    height:220
  },
  bodyContainer:{
    padding:8,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  FooterContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    textAlign:'center',
  },
  socialContainer:{
    
    
  },
  socialText:{
    fontWeight:'bold',
    fontSize:15,
    marginBottom:10,
    color: '#000000',
    backgroundColor:'#ffffff',
    padding:5,
  }
})