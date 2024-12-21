import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Text ,View}  from 'react-native';
import {TextField} from '@/components/atoms/TextField';
import { Button } from '@/components/atoms/Button';
export const SignInScreen = () => {
  return (
    <SafeAreaView>
      <View className='relative mt-[20%] '> 
      <Text
      className='text-primary-700 text-5xl font-bold text-center '
      >
        Sign In</Text>
      <View className="flex flex-col gap-6 px-6  relative top-[15%] h-full">
        <View>
<TextField 
label={'Email'} 
value=''
placeholder='@email.com'
onChangeText={function (text: string): void {
          throw new Error('Function not implemented.');
        } } />  
        </View>
        <View className='flex-col gap-4 flex'>
<TextField 
label='Password'
value={''} 
placeholder='Password'
onChangeText={function (text: string): void {
          throw new Error('Function not implemented.');
        } }
/>
<View className='flex-row justify-end'>
  <Text className="underline text-primary-500">Forgot Password?</Text>
</View>
</View>
<View className='flex w-full relative top-[7%]'>
     <Button 
     className='bg-primary-500/80'
     label={'Sign In'}     />
     </View>
     </View>
     </View>

    </SafeAreaView>
  )
}


