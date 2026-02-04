import { View, Text, ScrollView,StyleSheet,Image } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Call() {
  return (
    <ScrollView style={{flex:1,backgroundColor:"white"}}>
      <View style={{height: "auto",flexDirection:"row",justifyContent:"center",gap:33,alignItems:"center",paddingVertical:20}}>
        <View style={{alignItems:"center"}}>
<MaterialIcons  name="call" size={24} color="black" style={styles.icon} />
<Text style={{fontSize:12,marginTop:5}}>Calls</Text>
        </View>
          <View style={{alignItems:"center"}}>
<EvilIcons name="calendar" size={24} color="black" style={styles.icon} />
            <Text style={{fontSize:12,marginTop:5}}>Schedule</Text>
          </View>
          <View style={{alignItems:"center"}}>
<Ionicons name="keypad" size={24} color="black" style={styles.icon} />
<Text style={{fontSize:12,marginTop:5}}>Keypad</Text>
</View>
          <View style={{alignItems:"center"}}>
<EvilIcons name="heart" size={24} color="black" style={styles.icon} />
<Text style={{fontSize:12,marginTop:5}}>Favourite</Text>
</View>
      </View>
      <View style={{marginBottom:10}}>
      <Text style={{fontSize:18,fontWeight:"600",paddingStart:18}}>Recent</Text>
      </View>

      <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500"}}>Adil</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                  <MaterialIcons name="call-made" size={10} color="#14d21e" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
      <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500",color:"#ee1f1f"}}>Deoxy</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                 <MaterialIcons name="call-received" size={12} color="#ee1f1f" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
        <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500"}}>sameer</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                  <MaterialIcons name="call-made" size={10} color="#14d21e" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
      <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500",color:"#ee1f1f"}}>+91 7550332927</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                 <MaterialIcons name="call-received" size={12} color="#ee1f1f" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
  <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500"}}>Rohit</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                  <MaterialIcons name="call-made" size={10} color="#14d21e" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
      <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500",color:"#ee1f1f"}}>+91 9350332927</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                 <MaterialIcons name="call-received" size={12} color="#ee1f1f" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
  <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500"}}>Adil</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                  <MaterialIcons name="call-made" size={10} color="#14d21e" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
      <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500",color:"#ee1f1f"}}>Adil</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                 <MaterialIcons name="call-received" size={12} color="#ee1f1f" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
        <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500"}}>Adil</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                  <MaterialIcons name="call-made" size={10} color="#14d21e" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
      <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500",color:"#ee1f1f"}}>Adil</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                 <MaterialIcons name="call-received" size={12} color="#ee1f1f" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
  <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500"}}>Adil</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                  <MaterialIcons name="call-made" size={10} color="#14d21e" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
      <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500",color:"#ee1f1f"}}>Adil</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                 <MaterialIcons name="call-received" size={12} color="#ee1f1f" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
  <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500"}}>Adil</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                  <MaterialIcons name="call-made" size={10} color="#14d21e" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
      <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500",color:"#ee1f1f"}}>Adil</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                 <MaterialIcons name="call-received" size={12} color="#ee1f1f" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
  <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500"}}>Adil</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                  <MaterialIcons name="call-made" size={10} color="#14d21e" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
      <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500",color:"#ee1f1f"}}>Adil</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                 <MaterialIcons name="call-received" size={12} color="#ee1f1f" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
  <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500"}}>Adil</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                  <MaterialIcons name="call-made" size={10} color="#14d21e" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
      <View style={{paddingHorizontal:20,flexDirection:"row",marginBottom:20}}>
        <View>
          <Image  source={require("../../assets/images/abhisheksir.jpeg")} style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}/>
        </View>
       <View style={{paddingStart:7,justifyContent:"center"}}>
                <Text style={{fontWeight:"500",color:"#ee1f1f"}}>Adil</Text>
                <Text style={{gap:9,paddingVertical:4,fontSize:10,paddingStart:2,justifyContent:"center",alignItems:"center",}}>
                 <MaterialIcons name="call-received" size={12} color="#ee1f1f" /> Today, 7:47 AM
                </Text>
              </View>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><AntDesign name="videocamera" size={24} color="black" /></View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  icon:{
    paddingVertical:14,
    fontSize:26,
    backgroundColor:"#c7bdbd43",
    paddingHorizontal:14,
    borderRadius:100
  }
})