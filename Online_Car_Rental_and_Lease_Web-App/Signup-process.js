// Initialize Firebase
const config = {
  apiKey: "AIzaSyAsc6lBx7z0LG02EFbRiETIY7KDd4P0EnE",
  authDomain: "authentication-3396f.firebaseapp.com",
  databaseURL:
    "https://authentication-3396f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "authentication-3396f",
  storageBucket: "authentication-3396f.appspot.com",
  messagingSenderId: "406917850767",
  appId: "1:406917850767:web:4b4bee76c92186c5eb32fa",
};

firebase.initializeApp(config);

// Get a reference to the database
const database = firebase.database();

// Handle form submission
const signupForm = document.getElementById("Signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Get form values
  const name = signupForm.name.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;

  // Store the form data in the database
  const userRef = database.ref("users"); // Change 'users' to your desired node name
  const newUserRef = userRef.push();
  newUserRef
    .set({
      name: name,
      email: email,
      password: password,
    })
    .then(() => {
      // Data stored successfully
      console.log("Data stored in the database!");
      // You can redirect the user to another page or perform any other action here
    })
    .catch((error) => {
      // An error occurred while storing the data
      console.error("Error storing data:", error);
    });
});
