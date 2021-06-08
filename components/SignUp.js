import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

const SignUp = ({ userType }) => {
	// states for cleaner sign up
	const [companyName, setCompanyName] = useState("");
	const [city, setCity] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [confirmEmail, setConfirmEmail] = useState("");
	const [password, setPassword] = useState("");
	const [description, setDescription] = useState("");

	// states for customer sign up
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");

	const handleSubmit = () => {
		// get value of all states
		// collate them into an object / whatever the format needs to be
		// check username is unique
		// send post request to db
	};

	if (userType === "cleaner") {
		return (
			<View style={styles.signup}>
				<Text style={styles.subtitle}>You are logging in as a {userType}</Text>
				<KeyboardAwareScrollView>
					<View>
						<TextInput
							label="Company Name"
							value={companyName}
							onChangeText={setCompanyName}
						/>
					</View>
					<View>
						<TextInput label="City" value={city} onChangeText={setCity} />
					</View>
					<View>
						<TextInput
							label="Phone Number"
							value={phoneNumber}
							onChangeText={setPhoneNumber}
						/>
					</View>
					<View>
						<TextInput
							label="Username"
							value={username}
							onChangeText={setUsername}
						/>
					</View>
					<View>
						<TextInput
							style={styles.input}
							label="Email"
							value={email}
							onChangeText={setEmail}
						/>
					</View>
					<View>
						<TextInput
							label="Confirm Email"
							value={confirmEmail}
							onChangeText={setConfirmEmail}
						/>
					</View>
					<View>
						<TextInput
							label="Password"
							value={password}
							onChangeText={setPassword}
						/>
					</View>
					<View>
						<TextInput
							label="Description"
							value={description}
							onChangeText={setDescription}
						/>
					</View>
				</KeyboardAwareScrollView>
				<Button color="blue" mode="contained" onPress={handleSubmit}>
					Submit
				</Button>
			</View>
		);
	}
	if (userType === "customer") {
		return (
			<View style={styles.signup}>
				<Text style={styles.subtitle}>You are logging in as a {userType}</Text>
				<KeyboardAwareScrollView>
					<View>
						<TextInput label="Name" value={name} onChangeText={setName} />
					</View>
					<View>
						<TextInput
							label="Address"
							value={address}
							onChangeText={setAddress}
						/>
					</View>
					<View>
						<TextInput
							label="Phone Number"
							value={phoneNumber}
							onChangeText={setPhoneNumber}
						/>
					</View>
					<View>
						<TextInput
							label="Username"
							value={username}
							onChangeText={setUsername}
						/>
					</View>
					<View>
						<TextInput
							style={styles.input}
							label="Email"
							value={email}
							onChangeText={setEmail}
						/>
					</View>
					<View>
						<TextInput
							label="Confirm Email"
							value={confirmEmail}
							onChangeText={setConfirmEmail}
						/>
					</View>
					<View>
						<TextInput
							label="Password"
							value={password}
							onChangeText={setPassword}
						/>
					</View>
				</KeyboardAwareScrollView>
				<Button color="blue" mode="contained" onPress={handleSubmit}>
					Submit
				</Button>
			</View>
		);
	} else {
		return <Text>You have not set your account type.</Text>;
	}
};

const styles = StyleSheet.create({
	signup: {
		flex: 1,
		padding: 8,
		margin: 5,
		fontSize: 18,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: "#E6E5ED",
		backgroundColor: "#F8F8F9",
		justifyContent: "flex-start",
		height: 150
	},
	input: {
		borderRadius: 4
	},
	subtitle: {
		textAlign: "center",
		marginBottom: 5
	}
});

export default SignUp;

//if customer button pressed render this

//if cleaner button pressed render this
