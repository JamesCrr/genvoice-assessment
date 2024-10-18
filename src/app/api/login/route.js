import { cookies } from "next/headers";
import { firestore } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export async function POST(request) {
  const data = await request.json();
  const response = { success: true, msg: "" };

  // Valid object?
  if (!Object.hasOwn(data, "username") || !Object.hasOwn(data, "password")) {
    response["success"] = false;
    response["msg"] = "No username password field found";
  } else {
    const docRef = doc(firestore, "users", data["username"]);
    const docSnap = await getDoc(docRef);

    // User exists?
    if (docSnap.exists()) {
      let firestoreObj = docSnap.data();
      // Check password match
      if (firestoreObj["password"] != data["password"]) {
        response["success"] = false;
        response["msg"] = "Invalid password";
      } else {
        response["success"] = true;
        response["msg"] = "Login success";

        // Cookies
        const user = { username: data["username"] };
        const expires = new Date(Date.now() + 1000 * 1000);
        cookies().set("session", user, { expires });
      }
    } else {
      console.log("No such document!");
      response["success"] = false;
      response["msg"] = "No such username found";
    }
  }

  return Response.json(response);
}
