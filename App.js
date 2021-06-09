// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
// import { db } from "./src/config";
import Firebase from "firebase";

import { Text, View } from "react-native";
// import { writeUserData } from "./backendFuncs";

export default function App() {
	Firebase.auth()
		.signInAnonymously()
		.then(() => {
			console.log("User signed in anonymously");
		})
		.catch((error) => {
			if (error.code === "auth/operation-not-allowed") {
				console.log("Enable anonymous in your firebase console.");
			}

			console.error(error);
		});
	// Set an initializing state whilst Firebase connects
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	// Handle user state changes
	function onAuthStateChanged(user) {
		setUser(user);
		if (initializing) setInitializing(false);
	}

	useEffect(() => {
		const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	}, []);

	if (initializing) return null;

	if (!user) {
		return (
			<View>
				<Text>Login</Text>
			</View>
		);
	}

	return (
		<View>
			<Text>Welcome {user.email}</Text>
		</View>
	);
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

//petr
