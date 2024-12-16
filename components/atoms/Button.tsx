import { cn } from "@/lib/utils";
import { Text, Pressable } from "react-native";



interface ButtonProps {
  label: string;
  onPress?: () => void;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
}

export function Button({
  label,
  onPress,
  className,
  variant = 'default',
  size = 'md',
  isLoading = false,
  disabled = false,
}: ButtonProps) {
  const baseStyles = "flex flex-row items-center justify-center rounded-md";
  
  const variantStyles = {
    default: "bg-slate-900 dark:bg-slate-50",
    primary: "bg-blue-600 dark:bg-blue-600",
    secondary: "bg-slate-100 dark:bg-slate-800",
    danger: "bg-red-600 dark:bg-red-600"
  };

  const textStyles = {
    default: "text-white dark:text-slate-900",
    primary: "text-white dark:text-white",
    secondary: "text-slate-900 dark:text-slate-50",
    danger: "text-white dark:text-white"
  };

  const sizeStyles = {
    sm: "px-3 py-2",
    md: "px-4 py-2.5",
    lg: "px-6 py-3"
  };

  const textSizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <Pressable
      onPress={!disabled && !isLoading ? onPress : undefined}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled && "opacity-50",
        className
      )}
    >
      {isLoading && (
        <Text className="mr-2">
          {/* You might want to use a proper ActivityIndicator here */}
          ⏳
        </Text>
      )}
      <Text 
        className={cn(
          "font-medium",
          textStyles[variant],
          textSizeStyles[size]
        )}
      >
        {label}
      </Text>
    </Pressable>
  );
}
