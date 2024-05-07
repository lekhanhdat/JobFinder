import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';

const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{
                        fontSize: 33,
                        fontWeight: 'bold',
                        marginBottom: 12,
                        color: COLORS.black
                    }}>
                        Register Account
                    </Text>

                    <Text style={{
                        fontSize: 25,
                        color: COLORS.black
                    }}>Fill your details or continue with social media!</Text>
                </View>

                <View style={{ marginBottom: 22 }}>
                    
                    <View style={{
                        width: "100%",
                        height: 58,
                        backgroundColor: '#E6E4E6',                    
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22,
                    }}>
                        

                        <TextInput
                            placeholder='Full Name'
                            placeholderTextColor={COLORS.textcolor}
                            keyboardType='email-address'                            
                            style={{
                                width: "80%",
                                fontSize: 20,                                
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 22 }}>
                    

                    <View style={{
                        width: "100%",
                        height: 58,
                        backgroundColor: '#E6E4E6',                        
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Email Address'
                            placeholderTextColor={COLORS.textcolor}
                            keyboardType='email-address'
                            style={{
                                width: "100%",
                                fontSize: 20,
                            }}
                        />
                    </View>
                </View>

                

                <View style={{ marginBottom: 22 }}>
                    

                    <View style={{
                        width: "100%",
                        height: 58,
                        backgroundColor: '#E6E4E6',                        
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Password'
                            placeholderTextColor={COLORS.textcolor}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%",
                                fontSize: 20,
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == false ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.grey} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.grey} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{  }}>
                    

                    <View style={{
                        width: "100%",
                        height: 58,
                        backgroundColor: '#E6E4E6',
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Confirm Password'
                            placeholderTextColor={COLORS.textcolor}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%",
                                fontSize: 20,
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == false ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.grey} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.grey} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    // marginVertical: 6,
                    marginLeft: 10,
                    marginTop: 10,                    
                }}>        
                    <Text>• At least 8 characters</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    // marginVertical: 6,
                    marginLeft: 10,
                                        
                }}>        
                    <Text>• Use a mix of letters, number and special characters (ex: @,#,...)</Text>
                </View>

                

                <Button
                    title="Sign Up"
                    filled
                    style={{
                        backgroundColor: COLORS.maugach,
                        borderColor: 'transparent',
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/facebook.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 12
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>By continuing your confirm that you agree</Text>                    
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>with our</Text>
                    
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Term and Condition</Text>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signup