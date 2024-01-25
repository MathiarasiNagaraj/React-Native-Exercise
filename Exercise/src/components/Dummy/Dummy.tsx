import React, { useEffect } from 'react';
import {View} from 'react-native';
import {Text} from 'react-native';

export const Dummy = () => {
    console.log('callingtyriyutr');
    useEffect(() => {
        console.log('calling')
    },[])
  return (
    <View style={{flex:1,zIndex:2,height:100,width:400,backgroundColor:'blue',position:'absolute',top:0,right:0}}>
      <Text style={{color:'red',fontSize:23}}>dummy compne</Text>
    </View>
  );
};
