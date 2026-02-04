import React, { useEffect, useState } from "react";
import { View,Text, TextInput, StyleSheet, ScrollView, Image } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import axios from "axios"
type User = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
};
export default function App() {
 const [user, setuser] = useState<User[]>([]);

  const [search, setSearch] = useState("");

  useEffect(()=>{
axios.get("https://dummyjson.com/users?limit=15")
.then((response)=>{setuser(response.data.users)}).catch((error)=>{console.error("error",error)})
  },[])

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <EvilIcons name="search" size={24} color="black" style={{ marginRight: 10 }} />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>
      <View style={{flex:1,flexDirection:"row", marginBottom:20,paddingLeft:20}}>
        <Text  style={{borderWidth:1,paddingVertical:6,paddingHorizontal:10,borderRadius:20,marginHorizontal:6,fontWeight:"600"}}>All</Text>
        <Text  style={{borderWidth:1,paddingVertical:6,paddingHorizontal:10,borderRadius:20,marginHorizontal:4,fontWeight:"600"}}>Unread</Text>
        <Text  style={{borderWidth:1,paddingVertical:6,paddingHorizontal:10,borderRadius:20,marginHorizontal:4,fontWeight:"600"}}>Favorites</Text>
        <Text  style={{borderWidth:1,paddingVertical:6,paddingHorizontal:10,borderRadius:20,marginHorizontal:4,fontWeight:"600"}}>Groups</Text>
      </View>
{user.map((item) => (
  <View key={item.id} style={{ flex:1,flexDirection:"row",paddingHorizontal:20,paddingVertical:8,marginBottom:15, }}>
    <Image
      source={{ uri: item.image }}
      style={{ width: 45, height: 45, borderRadius: 100,borderWidth:2, }}
    />
    <View style={{paddingLeft:12}}>
       <Text>
      {item.firstName} {item.lastName}
    </Text>
          <Text style={{fontSize:13,paddingStart:2}}><Entypo name="check" size={12} color="black" />Hii</Text>

    </View>
 <View style={{flex:1,alignItems:"flex-end",}}>
          <Text style={{fontSize:10}}>Yesterday</Text>
          </View>
  </View>
))}


    
      
     
      
      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 22,
    height: 50,
    paddingStart: 9,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
