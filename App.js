// import { StatusBar } from "expo-status-bar"; // DONT THINK WE NEED THIS
import React from "react";
// import { useEffect, useState } from "react";
// import { db } from "./src/config";
// import { StyleSheet } from "react-native";
import { useState } from "react";
import UserType from "./components/UserType";
import SignUp from "./components/SignUp";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
	const [userType, setUserType] = useState("");
	// const [data, setData] = useState({
	// 	cleaners: {
	// 		one: {
	// 			name: "",
	// 			city: "",
	// 			PhoneNumber: "",
	// 			userName: ""
	// 		}
	// 	}
	// });

	// useEffect(() => {
	// 	db.ref("/").on("value", (ourData) => {
	// 		setData(ourData.val());
	// 	});
	// }, []);

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Choose User"
					options={{ title: "Choose your user type" }}
				>
					{(props) => (
						<UserType
							{...props}
							userType={userType}
							setUserType={setUserType}
						/>
					)}
				</Stack.Screen>
				<Stack.Screen name="Sign Up" options={{ title: "Welcome" }}>
					{(props) => (
						<SignUp {...props} userType={userType} setUserType={setUserType} />
					)}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center"
// 	}
// });
