/* import { v4 as uuidv4 } from "uuid";
import * as admin from "firebase-admin";

export const createUser = async (req, reply) => {
    
  try {
    const { email } = req.body;

    var userDetails = {
      uniqueId: uuidv4(),
      email: email
    };

    await admin.firestore().collection('User').doc(userDetails.uniqueId).set(userDetails);

    return userDetails;

  } catch (err) {

    console.log(err);

  }
}; */