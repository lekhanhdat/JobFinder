import {
	View,
	Text,
	Image,
	Pressable,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import { firebase } from "../configFirebase";

const Login = ({ navigation }) => {
	const [isPasswordShown, setIsPasswordShown] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const validateInputs = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!email) {
			Alert.alert("Validation Error", "Email cannot be empty");
			return false;
		}
		if (!emailRegex.test(email)) {
			Alert.alert("Validation Error", "Invalid email address");
			return false;
		}
		if (!password) {
			Alert.alert("Validation Error", "Password cannot be empty");
			return false;
		}
		if (password.length < 8) {
			Alert.alert(
				"Validation Error",
				"Password must be at least 8 characters long"
			);
			return false;
		}
		return true;
	};

	const handleLogin = async () => {
		if (validateInputs()) {
			try {
				// login success
				await firebase
					.auth()
					.signInWithEmailAndPassword(email, password);
				setEmail("");
				setPassword("");
			} catch (error) {
				Alert.alert("Login Failed", "Email or Password is incorrect");
			}
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
			<View style={{ flex: 1, marginHorizontal: 22 }}>
				<View style={{ marginTop: 10, alignItems: "center" }}>
					<Text
						style={{
							fontSize: 30,
							fontWeight: "bold",
							color: COLORS.black,
						}}
					>
						Sign In 👋
					</Text>

					<Text
						style={{
							fontSize: 16,
							color: COLORS.black,
						}}
					>
						Hello again, you have been missed!
					</Text>
				</View>

				<View
					style={{ justifyContent: "center", alignItems: "center" }}
				>
					<Image
						source={require("../assets/hero1.png")}
						style={{
							height: 300,
							width: 300,
							borderRadius: 20,
						}}
					/>
				</View>

				<View style={{ marginBottom: 18 }}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "flex-end",
							marginEnd: 10,
							marginBottom: 10,
						}}
					>
						<Text style={{ color: "#83829A" }}>
							Don’t have an account?{" "}
						</Text>
						<Pressable
							onPress={() => navigation.navigate("Signup")}
						>
							<Text style={{ color: "#FF7754" }}>Sign up</Text>
						</Pressable>
					</View>

					<View
						style={{
							width: "100%",
							height: 54,
							backgroundColor: "#E6E4E6",
							borderRadius: 8,
							alignItems: "center",
							justifyContent: "center",
							paddingLeft: 22,
						}}
					>
						<TextInput
							onChangeText={(email) => setEmail(email)}
							placeholder="Your email address"
							placeholderTextColor={COLORS.textcolor}
							keyboardType="email-address"
							style={{
								width: "100%",
								fontSize: 19,
							}}
						/>
					</View>
				</View>

				<View style={{ marginBottom: 10 }}>
					<View
						style={{
							width: "100%",
							height: 54,
							backgroundColor: "#E6E4E6",
							borderRadius: 8,
							alignItems: "center",
							justifyContent: "center",
							paddingLeft: 22,
						}}
					>
						<TextInput
							onChangeText={(password) => setPassword(password)}
							placeholder="Your password"
							placeholderTextColor={COLORS.textcolor}
							secureTextEntry={isPasswordShown}
							style={{
								width: "100%",
								fontSize: 19,
							}}
						/>

						<TouchableOpacity
							onPress={() => setIsPasswordShown(!isPasswordShown)}
							style={{
								position: "absolute",
								right: 12,
							}}
						>
							{isPasswordShown == false ? (
								<Ionicons
									name="eye-off"
									size={24}
									color={COLORS.grey}
								/>
							) : (
								<Ionicons
									name="eye"
									size={24}
									color={COLORS.grey}
								/>
							)}
						</TouchableOpacity>
					</View>
				</View>

				<View
					style={{
						flexDirection: "row",
						marginLeft: 10,
						marginBottom: 10,
					}}
				>
					<Pressable
						onPress={() => navigation.navigate("ConfirmEmail")}
					>
						<Text style={{ color: "#FF7754" }}>
							Forgot Password?
						</Text>
					</Pressable>
				</View>

				<Button
					onPress={handleLogin}
					title="Login"
					filled
					style={{
						backgroundColor: COLORS.maugach,
						borderColor: "transparent",
						marginTop: 10,
						marginBottom: 4,
					}}
				/>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginVertical: 15,
					}}
				>
					<View
						style={{
							flex: 1,
							height: 1,
							backgroundColor: COLORS.grey,
							marginHorizontal: 10,
						}}
					/>
					<Text style={{ fontSize: 14 }}>Or Login with</Text>
					<View
						style={{
							flex: 1,
							height: 1,
							backgroundColor: COLORS.grey,
							marginHorizontal: 10,
						}}
					/>
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
					}}
				>
					<TouchableOpacity
						onPress={() => console.log("Pressed")}
						style={{
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "row",
							height: 52,
							borderWidth: 1,
							borderColor: COLORS.grey,
							marginRight: 4,
							borderRadius: 10,
						}}
					>
						<Image
							source={require("../assets/facebook.png")}
							style={{
								height: 36,
								width: 36,
								marginRight: 8,
							}}
							resizeMode="contain"
						/>

						<Text>Facebook</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => console.log("Pressed")}
						style={{
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "row",
							height: 52,
							borderWidth: 1,
							borderColor: COLORS.grey,
							marginRight: 4,
							borderRadius: 10,
						}}
					>
						<Image
							source={require("../assets/google.png")}
							style={{
								height: 36,
								width: 36,
								marginRight: 8,
							}}
							resizeMode="contain"
						/>

						<Text>Google</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Login;
