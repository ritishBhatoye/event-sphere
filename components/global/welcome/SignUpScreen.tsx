import { TextField } from '@/components/atoms/TextField';
import React, { useState } from 'react'
import { View } from 'react-native';


import { SafeAreaView } from 'react-native-safe-area-context'


export const SignUpScreen = () => {
  const [email,setEmai]=useState('');
  return (
    <SafeAreaView>
      <View className="p-4">

      
      <TextField
      onChangeText={setEmai}
      placeholder='Enter your email'
      keyboardType='email-address'
      label="Email"
      value={email}
      className='mb-4 '
       />
       </View>
       
    </SafeAreaView>
  )
}


