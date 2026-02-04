import { View, Text,ScrollView } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Tools() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor:"white" }}>
      <View style={{paddingVertical:16,marginBottom:10,paddingLeft:19}}>
        <Text style={{fontSize:15,fontWeight:"600"}}>Last 7 days performance <Feather name="info" size={18} color="black" /> </Text>
      </View>
      <View style={{flex:1,flexDirection:"row",justifyContent:"center",gap:10}}>
        <View style={{borderWidth:0.1,padding:20,borderRadius:18}}>
          <MaterialIcons name="chat" size={24} color="black" />
          <Text style={{fontWeight:"600",marginVertical:8}}>8</Text>
          <Text style={{fontSize:12}}>Conversational</Text>
          <Text style={{fontSize:12}}>started</Text>
        </View>
         <View style={{borderWidth:0.1,padding:20,borderRadius:18}}>
         <MaterialIcons name="grid-on" size={24} color="black" />
          <Text style={{fontSize:18,fontWeight:"600",marginBottom:10}}>_ _</Text>
          <Text style={{fontSize:12}}>Catalog views</Text>
        </View>
         <View style={{borderWidth:0.1,padding:20,borderRadius:18}}>
         <MaterialCommunityIcons name="circle-double" size={24} color="black" />
          <Text style={{marginVertical:8,fontWeight:"600"}}>137 <MaterialCommunityIcons name="call-made" size={14} color="green" /> </Text>
          <Text style={{fontSize:11}}>Status views</Text>
        </View>
        
      </View>
       <View style={{paddingVertical:16,marginBottom:10,paddingLeft:25}}>
        <Text style={{fontSize:14,fontWeight:"600",letterSpacing:1}}>Grow your business</Text>
      </View>
      <View style={{flexDirection:"row",paddingHorizontal:30,alignItems:"center",paddingVertical:10,marginBottom:10}}>
<Octicons name="verified" size={24} color="black" />
<View style={{paddingLeft:20}}>
  <Text>Meta Verified</Text>
  <Text style={{fontSize:12,top:2}}>Get a verified badge and other benefits</Text>

</View>
      </View>
      <View style={{flexDirection:"row",paddingHorizontal:30,alignItems:"center",paddingVertical:10,marginBottom:10}}>
<MaterialIcons name="grid-on" size={24} color="black" />
<View style={{paddingLeft:20}}>
  <Text>Catalog</Text>
  <Text style={{fontSize:12,top:2}}>Show products and services</Text>

</View>
      </View>
      <View style={{flexDirection:"row",paddingHorizontal:35,alignItems:"center",paddingVertical:10,marginBottom:10}}>
<FontAwesome name="microphone" size={24} color="black" />
<View style={{paddingLeft:24}}>
  <Text>Advertise</Text>
  <Text style={{fontSize:12,top:2}}>Create ads that lead to Whatsapp</Text>

</View>
      </View><View style={{flexDirection:"row",paddingHorizontal:30,alignItems:"center",paddingVertical:10,marginBottom:10}}>
<MaterialCommunityIcons name="message-badge-outline" size={24} color="black" />
<View style={{paddingLeft:20}}>
  <Text>Bussiness broadcasts</Text>
  <Text style={{fontSize:12,top:2}}>Message multiple contacts at once</Text>

</View>
      </View>
      <View style={{flexDirection:"row",paddingHorizontal:35,alignItems:"center",paddingVertical:10,marginBottom:10}}>
<View>
  <Text><FontAwesome name="rupee" size={24} color="black" /></Text>
</View>
<View style={{paddingLeft:28}}>
  <Text>Payments</Text>
  <Text style={{fontSize:12,top:2}}>View history and manage info</Text>

</View>
      </View>
       <View style={{paddingVertical:16,marginBottom:10,paddingLeft:25}}>
        <Text style={{fontSize:14,fontWeight:"600",letterSpacing:1}}>Manage your account</Text>
      </View>
       <View style={{flexDirection:"row",paddingHorizontal:28,alignItems:"center",paddingVertical:10,marginBottom:10}}>
<View>
  <Text><Feather name="home" size={24} color="black" /></Text>
</View>
<View style={{paddingLeft:22}}>
  <Text>Profile</Text>
  <Text style={{fontSize:12,top:2}}>Manage address, hours, and websites</Text>

</View>
      </View>
       <View style={{flexDirection:"row",paddingHorizontal:27,alignItems:"center",marginBottom:10,borderBottomWidth:1,borderBottomColor:"#8080804d",paddingBottom:20}}>
<View>
  <Text><AntDesign name="link" size={24} color="black" /></Text>
</View>
<View style={{paddingLeft:23}}>
  <Text>Facebook & Instagram</Text>
  <Text style={{fontSize:12,top:2}}>Add WhatsApp to your profiles</Text>

</View>
      </View>
       <View style={{flexDirection:"row",paddingHorizontal:26,alignItems:"center",paddingVertical:10,marginBottom:10}}>
<View>
  <Text><Feather name="help-circle" size={24} color="black" /></Text>
</View>
<View style={{paddingLeft:24}}>
  <Text>Help Center</Text>
  <Text style={{fontSize:12,top:2}}>Get help, contact us</Text>

</View>
      </View>
    </ScrollView>
  );
}
