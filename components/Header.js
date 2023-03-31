import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Pressable,
    ScrollView
  } from "react-native";
  import React from "react";
  
  const Header = () => {
      const types = [
          {
            id: "0",
            name: "IMAX",
          },
          {
            id: "1",
            name: "4DX",
          },
          {
            id: "2",
            name: "PXL",
          },
          {
            id: "3",
            name: "GOLD",
          },
          {
            id: "4",
            name: "PLAYHOUSE",
          },
        ];
      
    return (
      <View>
        <ImageBackground
          style={{ aspectRatio: 5 / 2,width:420, height: 268,marginTop:37}}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Vcz6xTwzvqvoF9OM6_Vm38zhYFMZildeP69kAUH-56u-L5ihCgziz8F1C1JnCQ3BoIo&usqp=CAU",
          }}
        >
          <Pressable
            style={{
              position: "absolute",
              height: 130,
              backgroundColor: "white",
              padding: 10,
              borderRadius: 6,
              top: 140,
              left: 20,
              width: "52%",
              marginTop:100
            }}
          >
            <Text style={{fontSize:14,fontWeight:"500",color:"gray",}}>Releasing in 1 days</Text>
  
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <View>
                <Text style={{fontSize:16,fontWeight:"bold"}}>PATHU THALA</Text>
                <Text style={{fontSize:16,fontWeight:"400",color:"gray",marginTop:4,}}>U/A • TAMIL</Text>
              </View>
  
              <Pressable style={{backgroundColor:"#ffc40c",padding:10,borderRadius:6,marginRight:10}}>
                <Text style={{fontSize:14,fontWeight:"500",textAlign:"center"}}>BOOK</Text>
              </Pressable>
  
  
            </View>
            <Text style={{marginTop:8,fontSize:15,fontWeight:"500"}}> Thriller, action</Text>
          </Pressable>
        </ImageBackground>
  
        <View style={{marginTop:110,}}/>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {types.map((item,index) => (
                  <View style={{margin:10,borderColor:"C0C0C0",borderWidth:0.4,borderRadius:4,padding:10}} key={index}>
                      <Text style={{textAlign:"center",fontSize:14,fontWeight:"500"}}>{item.name}</Text>
                  </View>
              ))}
        </ScrollView>
      </View>
    );
  };
  
  export default Header;
  
  const styles = StyleSheet.create({});