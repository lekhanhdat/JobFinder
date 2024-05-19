import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { firebase } from "../configFirebase";

const Login = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		try {
			const userCredential = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password);
			const user = userCredential.user;

			// Lưu thông tin người dùng vào Firestore
			const userDoc = firebase
				.firestore()
				.collection("users")
				.doc(user.uid);
			const doc = await userDoc.get();

			if (!doc.exists) {
				await userDoc.set({
					fullName: "Default FullName", // Bạn nên thay thế bằng tên người dùng thực sự nếu có
					email: user.email,
				});
			}

			await AsyncStorage.setItem("user", JSON.stringify(user));

			setEmail("");
			setPassword("");

			navigation.navigate("HomePage");
		} catch (error) {
			console.error("Login Error: ", error);
			Alert.alert("Login Failed", "Email or Password is incorrect");
		}
	};

	return (
		<View>
			<Text>Login</Text>
			<TextInput
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
			/>
			<TextInput
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<Button title="Login" onPress={handleLogin} />
		</View>
	);
};

export default Login;
