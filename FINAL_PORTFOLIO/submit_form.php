<?php
// Database connection
$servername = "localhost:3306"; // Change this if your MySQL server is running on a different host
$username = "root"; // Change this to your MySQL username
$password = ""; // Change this to your MySQL password
$dbname = "form"; // Change this to your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetching form data
if (isset($_POST['name'])) {
    $name = $_POST['name'];
} else {
    $name = ''; // Default value if the key is not set
}

if (isset($_POST['email'])) {
    $email = $_POST['email'];
} else {
    $email = ''; // Default value if the key is not set
}

if (isset($_POST['message'])) {
    $message = $_POST['message'];
} else {
    $message = ''; // Default value if the key is not set
}

// Inserting data into database
$sql = "INSERT INTO contact (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Message sent successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
