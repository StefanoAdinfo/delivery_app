import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

interface LabeledInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  placeholder?: string;
  keyboardType?: "default" | "email-address" | "numeric";
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  value,
  onChangeText,
  isPassword = false,
  keyboardType = "default",
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View className="mt-8">
      <Text
        className={`${
          focused ? "text-white" : "text-gray-400"
        } mb-2 font-poppins-medium text-xl`}
      >
        {label}
      </Text>
      <TextInput
        secureTextEntry={isPassword}
        className={`text-white text-lg font-poppins-light border-b ${
          focused ? "border-white" : "border-gray-400"
        }`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default LabeledInput;
