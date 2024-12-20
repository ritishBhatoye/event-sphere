'use client'

import { View, Text, Pressable, Image,StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { useState, useEffect } from 'react'
import Animated, { 
    FadeIn,
    SlideInDown,
  useAnimatedStyle, 
  withRepeat, 
  withSequence, 
  withTiming,
  withSpring,
  withDelay 
} from 'react-native-reanimated'
import { Asset } from 'expo-asset'
import { LinearGradient } from 'expo-linear-gradient'
import { SignUpScreen } from '../SignUpScreen'

const screens = [
    {
      image: require('../../../../assets/images/onBoardingScreen/screen1.jpg'),
      heading: 'Welcome to Our App',
      text: 'Discover amazing features and possibilities that will transform your experience. Join us on this exciting journey of innovation and creativity.',
    },
    {
      image: require('../../../../assets/images/onBoardingScreen/screen2.jpg'),
      heading: 'Explore More',
      text: `Find what you're looking for easily with our intuitive interface. Browse through curated content tailored just for you.`,
    },
    {
      image: require('../../../../assets/images/onBoardingScreen/screen3.jpg'),
      heading: 'Get Started',
      text: 'Join our community today and connect with like-minded individuals. Start your journey towards success with us.',
    },
  ]

export function OnboardingScreens() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function preloadImages() {
      try {
        const imageAssets = [
          ...screens.map(screen => screen.image),
          require('../../../../assets/images/onBoardingScreen/screen4.jpg')
        ]
        
        await Promise.all(
          imageAssets.map(image => Asset.fromModule(image).downloadAsync())
        )
      } catch (error) {
        console.error('Error preloading images:', error)
      } finally {
        setIsLoading(false)
      }
    }

    preloadImages()
  }, [])

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
    backgroundColor: 'rgba(139, 69, 19, 0.4)',
  }))

  const handleNext = () => {
    if (currentScreen < 3) {
      setCurrentScreen(prev => prev + 1)
    }
  }

  if (currentScreen === 3) {
    return (
      <View className="relative h-full w-full">
        <Image
          source={require('../../../../assets/images/onBoardingScreen/screen4.jpg')}
          className="absolute h-full w-full"
          resizeMode="cover"
        />
        <View className="absolute inset-0">
          <View className="w-full h-full bg-gradient-to-t from-[#8B4513]/90 via-[#8B4513]/40 to-transparent" />
        </View>
        <View className="absolute inset-0 flex-col items-center justify-center p-6 space-y-4">
          <Pressable 
            className="w-full max-w-[320px] bg-primary p-4 rounded-lg"
            onPress={() => router.push('/(auth)/signup' as any)}
          >
            <Text className="text-white text-center font-semibold">Sign Up</Text>
          </Pressable>
          <Pressable 
            className="w-full max-w-[320px] bg-[#8B4513]/80 border border-white p-4 rounded-lg"
            onPress={() => router.push('/(auth)/signin' as any)}
          >
            <Text className="text-white text-center font-semibold">Sign In</Text>
          </Pressable>
        </View>
      </View>
    )
  }

  return (
    <View className="relative h-full w-full">
      <Image
        source={screens[currentScreen].image}
        className="absolute h-full w-full z-0"
        resizeMode="cover"
      />
      
      <View className="flex flex-row absolute inset-x-0 bottom-0 bg-gradient-to-tr from-black from-100% via-black/90 via-30% to-transparent p-6 pb-16 z-10">
        <Animated.View 
          entering={FadeIn.duration(1000)}
          className="mb-8 w-11/12"
        >
          <Animated.Text 
            entering={SlideInDown.duration(800)}
            className="mb-2 text-3xl font-bold text-white"
          >
            {screens[currentScreen].heading}
          </Animated.Text>
          <View className='flex flex-row flex-wrap'>


          {screens[currentScreen].text.split(' ').map((word, index) => (
            <Animated.Text
              key={index}
              entering={FadeIn.delay(index * 100).duration(900)}
              className="text-gray-200 text-lg"
            >
              {word + ' '}
            </Animated.Text>
          ))}
          </View>
        </Animated.View>
        <View>
        <Pressable
          className="absolute bottom-6 left-0 "
          onPress={handleNext}
        >
          <Animated.View 
            className="h-12 w-12 flex-shrink rounded-full border-2 border-white  items-center justify-center z-20"
            style={animatedBorder}
          >
            <Text className="text-white text-2xl ">→</Text>
          </Animated.View>
        </Pressable>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '66.6%', // Equivalent to 2/3 of the height
  },
  gradient: {
    flex: 1,
  },
});