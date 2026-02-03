import { View, Text,ScrollView,Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

export default function Updates() {
  return (
    <ScrollView style={{flex :1,backgroundColor:"white"}}>
      <View style={{flex:1,paddingInline:19,paddingBlock:15}}>
        <Text style={{fontSize:20,fontWeight:"600"}}>Status</Text>
      </View>
      <View style={{paddingInline:20,flexDirection:"row"}}>
<Image  source={require("../../assets/images/abhisheksir.jpeg")}style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }} />
<View style={{ backgroundColor: "#057b5a", maxHeight:25,borderRadius:50,top:20,right:18 }}>
  <AntDesign name="plus-circle" size={24} color="white" />
</View>
     <View style={{paddingInline:0}}>
      <Text style={{fontWeight:"500",fontSize:15}}>Add status</Text>
      <Text style={{fontSize:13}}>Disappears after 24 hours</Text>
     </View>
      </View>
      <View style={{padding:15,}}>
        <Text style={{fontWeight:"500"}}>Viewed Updates</Text>
      </View>
      <View style={{paddingInline:20,flexDirection:"row"}}>
        <Image source={require("../../assets/images/abhisheksir.jpeg")}style={{ width: 45, height: 45, borderRadius: 100,borderWidth:3, borderColor:"#28c126",marginBottom:15 }}/>
        <View style={{paddingLeft:12}}>
          <Text style={{fontWeight:"500"}}>Deoxy</Text>
          <Text style={{fontSize:12,paddingTop:2}}>1:46 PM</Text>
        </View>
      </View>
      <View style={{paddingInline:20,flexDirection:"row"}}>
        <Image source={require("../../assets/images/abhisheksir.jpeg")}style={{ width: 45, height: 45, borderRadius: 100,borderWidth:3, borderColor:"#28c126",marginBottom:15 }}/>
      <View style={{paddingLeft:12}}>
          <Text style={{fontWeight:"500"}}>Yousuf</Text>
          <Text style={{fontSize:12,paddingTop:2}}>Yesterday</Text>
        </View>
      </View>
       <View style={{paddingInline:20,flexDirection:"row"}}>
        <Image source={require("../../assets/images/abhisheksir.jpeg")}style={{ width: 45, height: 45, borderRadius: 100,borderWidth:3, borderColor:"#a9b4a8",marginBottom:15 }}/>
      <View style={{paddingLeft:12}}>
          <Text style={{fontWeight:"500"}}>Anas</Text>
          <Text style={{fontSize:12,paddingTop:2}}>1:46 PM</Text>
        </View>
      </View>
      <View style={{paddingInline:20,flexDirection:"row"}}>
        <Image source={require("../../assets/images/abhisheksir.jpeg")}style={{ width: 45, height: 45, borderRadius: 100,borderWidth:3, borderColor:"#a9b4a8",marginBottom:15 }}/>
      <View style={{paddingLeft:12}}>
          <Text style={{fontWeight:"500"}}>Adil</Text>
          <Text style={{fontSize:12,paddingTop:2}}>Yesterday</Text>
        </View>
      </View>
      <View style={{paddingLeft:23,paddingRight:52}}>
        <Text style={{fontSize:20,fontWeight:"500"}}>Channels</Text>
        <Text style={{paddingLeft:1,fontSize:12,marginTop:8}}>Stay updated on topics that matter to you. Find channels to follow below.</Text>
      </View>
      <View>
        <Text style={{padding:25}}>
          Find channels to follow
        </Text>
      </View>
      <View style={{paddingInline:16,marginBottom:10}}>
<View style={{flex:1,alignItems:"center",justifyContent:"center",paddingBlock:12,gap:12,borderWidth:1,borderRadius:30}}>
        <Text style={{color:"green"}}><MaterialCommunityIcons name="view-dashboard-outline" size={14} color="green" />
          Explore more
        </Text>
      </View>
      </View>
         <View style={{paddingInline:16,marginBottom:10}}>
<View style={{flex:1,alignItems:"center",justifyContent:"center",paddingBlock:12,gap:12,borderWidth:1,borderRadius:30}}>
        <Text style={{color:"green"}}><MaterialCommunityIcons name="view-dashboard-outline" size={14} color="green" />
          Explore more
        </Text>
      </View>
      </View>
      <View   style={{
    position: "absolute",
    bottom: 0,
    right: 20,
    gap:13,
    width: 60,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  }}
>
        <Entypo style={{ borderRadius:20,width:50,paddingBlock:12,paddingInline:12,backgroundColor:"#efefef",elevation:9}} name="edit" size={24} color="black" />
        <Entypo style={{borderRadius:20,width:60,paddingLeft:17,paddingTop:16,height:60,backgroundColor:"black",alignItems:"center",justifyContent:"center"}} name="camera" size={24} color="white" />
      </View>
    </ScrollView>
  )
}