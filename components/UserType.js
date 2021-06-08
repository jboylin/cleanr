import React from "react";
import { View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import { Button } from "react-native-paper";
import "react-native-gesture-handler";

const UserType = ({ navigation }) => {
	console.log(navigation);
	return (
		<View style={styles.container}>
			<View style={styles.button}>
				<Link to={"/signup"}>
					<Button
						title="window cleaner"
						color="blue"
						mode="contained"
						onPress={() =>
							navigation.navigate("Sign Up", { name: "test-name" })
						}
					>
						I am a window cleaner
					</Button>
				</Link>
			</View>
			<View style={styles.button}>
				<Link to={"/signup"}>
					<Button
						color="blue"
						mode="contained"
						onPress={() =>
							navigation.navigate("Sign Up", { name: "test-name" })
						}
					>
						I have dirty windows
					</Button>
				</Link>
			</View>
		</View>
	);
};

export default UserType;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	button: {
		margin: 50
	}
});
