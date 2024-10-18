import { firestore } from "../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function POST(request) {
  const data = await request.json();
  const response = { success: true, msg: "" };

  // Valid object?
  if (!Object.hasOwn(data, "username") || !Object.hasOwn(data, "password")) {
    response["success"] = false;
    response["msg"] = "No username password field found";
  } else {
    // Update document
    const userRef = doc(firestore, "users", data["username"]);
    await updateDoc(userRef, {
      password: data["password"],
    });
    response["success"] = true;
    response["msg"] = "Updated";
  }

  return Response.json(response);
}
