import AsyncStorage from "@react-native-async-storage/async-storage";

export const setLocakStorage=async(KeyboardEvent,value)=>{
    await AsyncStorage.setItem(KeyboardEvent,JSON.stringify(value));
}

export const getLocalStorage=async(key)=>{
    const result =await AsyncStorage.getItem(key);
    return JSON.parse(result);
}

export const removeLocalStorage=async(key)=>{
    await AsyncStorage.clear(key);
} 