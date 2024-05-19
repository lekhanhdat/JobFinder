import React, { useEffect, useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	Alert,
	Image,
	ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { firebase } from "../configFirebase";
import styles from "./welcome.style";

const HomePage = ({ route, navigation }) => {
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");

	useEffect(() => {
		if (route.params?.userData) {
			setUserName(route.params.userData.fullName);
			setUserEmail(route.params.userData.email);
		}
	}, [route.params?.userData]);

	const handleSignOut = async () => {
		await firebase.auth().signOut();
		await AsyncStorage.removeItem("user");
		navigation.navigate("Login");
	};

	const handleResetPassword = async () => {
		if (userEmail) {
			try {
				await firebase.auth().sendPasswordResetEmail(userEmail);
				Alert.alert(
					"Reset Password",
					"Password reset email has been sent."
				);
			} catch (error) {
				console.error("Error resetting password: ", error);
				Alert.alert("Reset Password Failed", error.message);
			}
		} else {
			Alert.alert(
				"Reset Password Failed",
				"No email found for the user."
			);
		}
	};

	return (
		<ScrollView>
			<View style={styles.head}>
				<Image
					style={styles.menu}
					source={require("../assets/icons/menu.png")}
				/>
				<Image
					style={styles.avatar}
					source={require("../assets/avatar.png")}
				/>
			</View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello {userName} 👋</Text>
				<TouchableOpacity onPress={handleResetPassword}>
					<Text style={styles.resetPassword}>Reset Password</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleSignOut}>
					<Text>Sign Out</Text>
				</TouchableOpacity>
				<Text style={styles.welcomeMessage}>
					Find your perfect job 🚀
				</Text>
			</View>
		</ScrollView>
	);
};

export default HomePage;
