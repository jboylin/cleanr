// import { StatusBar } from "expo-status-bar"; // DONT THINK WE NEED THIS
import React from "react";
// import { useEffect, useState } from "react";
// import { db } from "./src/config";
// import { StyleSheet } from "react-native";
import UserType from "./components/UserType";
import SignUp from "./components/SignUp";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
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
					component={UserType}
					options={{ title: "Choose your user type" }}
				/>
				<Stack.Screen
					name="Sign Up"
					component={SignUp}
					options={{ title: "Welcome" }}
				/>
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
