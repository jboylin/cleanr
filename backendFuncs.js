import {db} from "./src/config";

export function writeUserData(name) {
	db.ref("cleaners/" + 1).set({
		name: name
	});
}