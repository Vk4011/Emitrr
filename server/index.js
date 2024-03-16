const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('\n\t MongoDB connected..!'))
  .catch((err) => console.log(err));

// Define User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Create UserModel
const UserModel = mongoose.model("User", userSchema);

// Example routes
app.get('/login', (req, res) => res.send('Login data'));
app.get('/', (req, res) => res.send('Server is running..!'));

// Register User
app.post('/signup', (req, res) => {
    UserModel.create(req.body)
      .then((user) => res.status(200).json(user))

      .catch((err) => res.status(500).json({ error: err.message }));
});

// Login User
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email })
      .then((user) => {
        if (user) {
          if (user.password === password) {
            res.json({ status: 'Success' ,user: user });
          } else {
            res.json({ status: 'Error', message: 'The password is incorrect' });
          }
        } else {
          res.json({ status: 'Error', message: 'No record found' });
        }
      })
      .catch((err) => res.status(500).json({ error: err.message }));
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => console.log(`\n\t Server listening on port ${port}`));
