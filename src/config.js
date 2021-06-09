import Firebase from "firebase";

const firebaseConfig = {
	databaseURL:
    "https://cleanr-database-default-rtdb.europe-west1.firebasedatabase.app/",
	apiKey: "AIzaSyA7vU680y_0mCYdZ0WkWtRJX5llDCeC_4k",
	project_info: {
		project_number: "663946512724",
		project_id: "cleanr-database",
		storage_bucket: "cleanr-database.appspot.com",
	},
	client: [
		{
			client_info: {
				mobilesdk_app_id: "1:663946512724:android:1c346354615665322760c1",
				android_client_info: {
					package_name: "com.cleanr",
				},
			},
			oauth_client: [
				{
					client_id:
            "663946512724-ppuq8lkqcrc5lfh9kolt0girvrehsl1c.apps.googleusercontent.com",
					client_type: 3,
				},
			],
			api_key: [
				{
					current_key: "process.env.API",
				},
			],
			services: {
				appinvite_service: {
					other_platform_oauth_client: [
						{
							client_id:
                "663946512724-ppuq8lkqcrc5lfh9kolt0girvrehsl1c.apps.googleusercontent.com",
							client_type: 3,
						},
					],
				},
			},
		},
	],
	configuration_version: "1",
};
const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
