# GroupRecipeApp React-Flask 

**Recipe App** is an React-Flask app that allows users to register and login to view the Vegetarian Recipes and also create their own recipes on Create Recipe 
so other users can view the recipes created. It has ReactJs for the application with Flask as the server.

# Folder Directory
```
client
flask-server
virtual
```
# Prerequisites
Before getting started, ensure that you have the following dependencies installed on your system:
* [ ] Node.js
* [ ] npm (Node Package Manager)
* [ ] Python 3
* [ ] Flask

# Getting Started

To get started with this project, follow the steps below:
1. Clone this repository to your local machine using the following command: 
```
git clone https://github.com/ruhi102/GroupRecipeApp
```
2. Change into the project directory:
```
cd GroupRecipeApp
```
3. Install the necessary dependencies for the React application by running the following command:
```
cd client
npm install
```
4. Install Flask using pip, preferably in flask-server:
```
cd flask-server
pip install flask
```

5. Install database PostgreSQL since we are using that for our application
```
sudo apt install postgresql
```
6. Create userbase(optional)
7. Make changes on database using this command
```
sudo -u postgres psql
```
8. Since we have added the users using our own database create database signup in terminal
```
CREATE DATABASE signup;
```
9. After that alter the password for the databse as this 'SQLALCHEMY_DATABASE_URI' has a different password
```
ALTER USER postgres WITH PASSWORD 'new_password';
```
10. Quit the database using this command
```
\q
```
11. Start the Flask server by running the following command:
```
cd flask-server
python server.py
```
12. Open another terminal window and navigate to the project directory. Start the React development server with the following command:
```
cd client
npm start
```
13. The application should now be accessible in your browser at http://localhost:3000.
