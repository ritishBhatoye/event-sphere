import { Button } from '@/components/atoms/Button';
import { TextField } from '@/components/atoms/TextField';
import React, { useState } from 'react'
import { View,Text } from 'react-native';


import { SafeAreaView } from 'react-native-safe-area-context'


export const SignUpScreen = () => {

  const[firstName,setFirstName]=useState('');
  const[lastName,setLastName]=useState('');
  const[email,setEmail]=useState('')
  const[phoneNumber,setPhoneNumber]=useState('');
  const [password,setPassword]=useState('');
  const[confirmPassword,setConfirmPassword]=useState('');
  return (
    <SafeAreaView className='w-full h-full'>
<View className='relative mt-[10%]'>
<Text className='text-primary-700 text-5xl font-bold text-center '>
              SIGN UP
        </Text>
</View>
      <View className="gap-6 px-6 relative top-[5%] h-full">
     
        <View className='flex-row gap-4 w-full justify-between '>
          <View className='flex-1'>
      <TextField 
      value={firstName} 
      onChangeText={setFirstName}
      placeholder='Enter your first name'
      label="First Name"
      keyboardType='default'
      // className='mb-4 '
      />
      </View>

      <View className='flex-1'>
      <TextField 
      value={lastName} 
      onChangeText={setLastName}
      placeholder='Enter your last name'
      label="Last Name"
      keyboardType='default'
      // className='mb-4 '
      />
</View>
</View>
     
       <TextField
       onChangeText={setEmail}
       placeholder='Enter your email'
       keyboardType='default'
       label="Email"
       value={email}
       className='mb-4 '
       />
       <TextField
       onChangeText={setPhoneNumber}
       placeholder='Enter your phone number'
       keyboardType='default'
       label="Phone Number"
       value={phoneNumber}
       className='mb-4 '
       />
       <TextField
       onChangeText={setPassword}
       placeholder='Enter your password'
       keyboardType='default'
       label="Password"
       value={password}
       className='mb-4 '
       />
<TextField
       onChangeText={setConfirmPassword}
       placeholder='Enter your password'
       keyboardType='default'
       label="Confirm Password"
       value={confirmPassword}
       className='mb-4 '
       />
           <Button 
           className='mt-[20%] bg-primary-500/80 text-'
  label="Sign Up"
/>
       </View>
   
    </SafeAreaView>
  )
}


