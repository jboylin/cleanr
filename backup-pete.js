// export default function App() {
// 	const [data, setData] = useState({
// 		cleaners: {
// 			1: {
// 				name: "",
// 				city: "",
// 				PhoneNumber: "",
// 				userName: "",
// 			},
// 		},
// 	});

// 	useEffect(() => {
// 		db.ref("/").on("value", (ourData) => {
// 			setData(ourData.val());
// 		});
// 	}, []);

// 	writeUserData("Joe");

// 	return (
// 		<View style={styles.container}>
// 			<Text>
//         Open up App.js to start working on your app {data.cleaners[1].name}!
// 			</Text>
// 			<StatusBar style="auto" />
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });

// //peter
