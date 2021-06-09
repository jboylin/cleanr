import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
// import { db } from "./src/config";
import database from "@react-native-firebase/database";

import { StyleSheet, Text, View } from "react-native";
import { writeUserData } from "./backendFuncs";

export default function App() {
	const [data, setData] = useState({
		cleaners: {
			1: {
				name: "",
				city: "",
				PhoneNumber: "",
				userName: "",
			},
		},
	});

	useEffect(() => {
		database.ref("/").on("value", (ourData) => {
			setData(ourData.val());
		});
	}, []);

	// console.log(typeof writeUserData);
	// writeUserData("Joe");

	return (
		<View style={styles.container}>
			<Text>
				Open up App.js to start working on your app {data.cleaners[1].name}!
			</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
