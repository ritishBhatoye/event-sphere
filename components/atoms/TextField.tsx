import React from 'react';
import { TextInput, View, Text } from 'react-native';

interface TextFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  inputClassName?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  error?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export const TextField = ({
  value,
  onChangeText,
  placeholder,
  label,
  className = '',
  inputClassName = '',
  secureTextEntry = false,
  keyboardType = 'default',
  error,
  autoCapitalize = 'none',
}: TextFieldProps) => {
  return (
    <View className={`w-full ${className}`}>
      {label && (
        <Text className="text-gray-700 text-sm font-medium mb-2">
          {label}
        </Text>
      )}
      
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        className={`
          w-full
          px-4
          py-3
          rounded-lg
          bg-white
          border-[1px]
          border-solid
          border-gray-200
          text-gray-900
          text-base
          ${error ? 'border-red-500' : ''}
          ${inputClassName}
        `}
      />
      
      {error && (
        <Text className="text-red-500 text-sm mt-1">
          {error}
        </Text>
      )}
    </View>
  );
};