//import { v4 as uuidv4 } from "uuid";
//import * as admin from "firebase-admin";
//CommonJs//
const { v4 } = require('uuid');;
const admin = require('firebase-admin');


const createUser = async (req, reply) => {
  try {
    const { email } = req.body;

    var userDetails = {
      uniqueId: v4(),
      email: email
    };

    await admin.firestore().collection('User').doc(userDetails.uniqueId).set(userDetails);

    return userDetails;

  } catch (err) {

    console.log(err);

  }
};

module.exports = {
  createUser
}