# <center>Assignment - 03</center>
 **Project Name : car-washing-system** <br>
 **Live Link : [https://car-washing.vercel.app](https://car-washing.vercel.app/)** 

## Features

1. **User Sing up system**
2. **User log in system**
3. **Create Service by Admin**
4. **Retrieve All Service and Specific Service Also Update and Delete  Service**
5. **Create Slot by Admin**
6. **Get Available Slot**
7. **Book a Service by User**
8. **Get All Bookings Only Accessible by Admin**
9. **Get User's to his Bookings Slot**
10. **Handle Different Type Error**


## Technology Used

1. **Node.js**
2. **Express.js**
3. **Mongoose**
4. **TypeScript**
5. **Dotenv**
6. **Zod Validation**
7. **Jsonwebtoken**
8. **http-status**




## Instructions on how to run the application locally

1. **Clone or download the repository:**
   - First you clone the repository .
    
   - Or download the repository .

2. **Open the project:**
   - Open the project directory.

3. **Install packages:**
   - Open a command terminal or Git Bash to run the following command to install all necessary packages:
     ```
     npm install
     ```

4. **Set up environment variables:**
   - Create a `.env` file in the root of the project.
   - Add the following environment variables in the `.env` file:
     ```
     PORT=5000

     DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.25fgudl.mongodb.net/carWashing?retryWrites=true&w=majority&appName=Cluster0

     JWT_ACCESS_TOKEN_SECRET=jfkgkjfdioufdhjfgshuirturt8uiyhueruiourjeioteroehjkfgjkfghkjjk
     
     JWT_ACCESS_EXPIRES_IN=10d
     
     ```
     Replace `username` and `password` with your MongoDB `username` and `password`.

5. **Run the application:**
   - Open a terminal in the project directory and run the following command to start the project:
     ```
     npm run start
     ```
   - Your project should now be running.
