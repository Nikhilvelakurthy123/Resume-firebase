import firebase from 'firebase';

const firebaseConfig = {
    // Your Credentials
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

// Creating a storage reference from our app  
var storageRef = storage.reference

// Creating a reference with an initial file path and name  
var pathReference = storageRef.child("images/stars.jpg")

// Creating a reference to a file from a Google Cloud Storage URI  
var gsReference = storage.getReferenceFromUrl("gs://velakurthy-nikhil-resume.appspot.com/Nikhil Resume.docx")

// Creating a reference from an HTTPS URL  
// In the URL, characters are URL escaped!  
var httpsReference = storage.getReferenceFromUrl(
    "https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg")

export default storage;
