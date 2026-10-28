import dotenv from "dotenv"; // Import the dotenv package to read environment variables from a .env file
dotenv.config(); // Load environment variables from the .env file into process.env

function getEnv(name: string): string { // Function to get environment variable by name
  const value = process.env[name]; // Retrieve the value of the environment variable from process.env
    if (!value) { // Ensure the environment variable is defined and not empty
        throw new Error(`Environment variable ${name} is not defined`); // Throw an error if the environment variable is not defined
    }
    return value; // Return the value of the environment variable
}

export const env = { // Export application environment variables as an object
  BASE_URL: getEnv("BASE_URL"), // Get the value of the BASE_URL environment variable
  LOGIN_USERNAME: getEnv("LOGIN_USERNAME"), // Get the value of the LOGIN_USERNAME environment variable
  LOGIN_PASSWORD: getEnv("LOGIN_PASSWORD"), // Get the value of the LOGIN_PASSWORD environment variable
  APIKEY: getEnv("APIKEY"), // Get the value of the APIKEY environment variable
}
