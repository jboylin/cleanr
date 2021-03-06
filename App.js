import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { db } from "./src/config";

import { StyleSheet, Text, View } from "react-native";

export default function App() {
	const [data, setData] = useState(    {"cleaners": {
		"one": {
			"name": "",
			"city": "",
			"PhoneNumber": "",
			"userName": ""
		} }
	});

	useEffect(() => {
		db.ref("/").on("value", (ourData) => {
			setData(ourData.val());
		});
	}, []);

	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app {data.cleaners.one.name}!</Text>
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
