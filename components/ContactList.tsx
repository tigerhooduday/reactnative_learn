import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function ContactList() {
    const Contacts=[
        {
            uid: 1,
            name: 'Ram Chandra Suryavanshi',
            status:'Main King Of Ayodhya',
            imageUrl:"https://w0.peakpx.com/wallpaper/752/488/HD-wallpaper-lord-ram-lord-ram-shree-ram-riligious-god-hindu-bhakti-devotional.jpg"
        },
       
        {
            uid: 3,
            name: 'Sita Suryavanshi',
            status:'Queen oF ayodhya',
            imageUrl:"https://w0.peakpx.com/wallpaper/336/471/HD-wallpaper-all-god-lord-rama-and-sita-maa-lord-rama-sita-maa-god.jpg"
        },
        {
            uid: 2,
            name: 'Laxman Suryavanshi',
            status:'Second brother Of Ayodhya',
            imageUrl:"https://w0.peakpx.com/wallpaper/517/74/HD-wallpaper-shree-ram-god-hindu-india-lord.jpg"
        },
        {
            uid: 4,
            name: 'AnajaniPutram Hanuman',
            status:'Follower oF King Ram',
            imageUrl:"https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.containers}
      scrollEnabled={false}
      >
        {Contacts.map(({uid,name, status,imageUrl} )=> (
            <View key={uid} style={styles.usercard}>
                <Image
                source={{
                    uri:imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                    <Text  style={styles.username}> {name}</Text>
                    <Text  style={styles.userstatus}> {status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        marginLeft:8,
        fontWeight:'bold',
        fontSize:22,
        marginBottom:10,
    },
    containers:{

        paddingHorizontal:16,
        marginBottom:6,

    },
    usercard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:12,
        backgroundColor:'#000000',
        borderTopLeftRadius:60/2,
        borderBottomLeftRadius:60/2,
    
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        borderColor:'#ffffff',
        borderWidth:1,
        marginRight:14,


    },
    username:{
        fontSize:15,
        fontWeight:'600',
        color:'#ffffff'


    },
    userstatus:{
        fontStyle:'italic',
        fontSize:12,

    }

})