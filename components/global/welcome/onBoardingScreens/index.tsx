'use client'

import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import Animated, { 
  useAnimatedStyle, 
  withRepeat, 
  withSequence, 
  withTiming 
} from 'react-native-reanimated'

interface OnboardingScreen {
  image: string
  heading: string
  text: string
}

const screens: OnboardingScreen[] = [
  {
    image: '../../../../assets/images/onBoardingScreen/screen1.jpg',
    heading: 'Welcome to Our App',
    text: 'Discover amazing features and possibilities',
  },
  {
    image: '../../../../assets/images/onBoardingScreen/screen2.jpg',
    heading: 'Explore More',
    text: `Find what you're looking for easily`,
  },
  {
    image: '../../../../assets/images/onBoardingScreen/screen3.jpg',
    heading: 'Get Started',
    text: 'Join our community today',
  },
]

export function OnboardingScreens() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const router = useRouter()

  const animatedBorder = useAnimatedStyle(() => ({
    borderWidth: withRepeat(
      withSequence(
        withTiming(1, { duration: 750 }),
        withTiming(2, { duration: 750 }),
      ),
      -1,
      true
    ),
    opacity: withRepeat(
      withSequence(
        withTiming(0.5, { duration: 750 }),
        withTiming(1, { duration: 750 }),
      ),
      -1,
      true
    ),
  }))

  const handleNext = () => {
    if (currentScreen < 3) {
      setCurrentScreen(prev => prev + 1)
    }
  }

  if (currentScreen === 3) {
    return (
      <View 
        className="relative h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${require('../../../../assets/images/onBoardingScreen/screen4.jpg')})`
        }}
      >
        <View className="absolute inset-0 flex-col items-center justify-center p-6 space-y-4">
          <Pressable 
            className="w-full max-w-[320px] bg-primary p-4 rounded-lg"
            // onPress={() => router.push('/signup')}
          >
            <Text className="text-white text-center font-semibold">Sign Up</Text>
          </Pressable>
          <Pressable 
            className="w-full max-w-[320px] bg-transparent border border-white p-4 rounded-lg"
            // onPress={() => router.push('')}
          >
            <Text className="text-white text-center font-semibold">Sign In</Text>
          </Pressable>
        </View>
      </View>
    )
  }

  return (
    <View 
      className="relative h-full w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${screens[currentScreen].image})`
      }}
    >
      <View className="flex flex-row justify-between absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-6 pb-12">
        <View className="mb-8">
          <Text className="mb-2 text-2xl font-bold text-white">
            {screens[currentScreen].heading}
          </Text>
          <Text className="text-gray-200">
            {screens[currentScreen].text}
          </Text>
        </View>
        <View>
        <Pressable
          className="absolute bottom-6 left-6"
          onPress={handleNext}
        >
          <Animated.View 
            className="h-12 w-12 rounded-full border-2 border-white bg-transparent items-center justify-center"
            style={animatedBorder}
          >
            <Text className="text-white text-2xl">→</Text>
          </Animated.View>
        </Pressable>
        </View>
      </View>
    </View>
  )
}
