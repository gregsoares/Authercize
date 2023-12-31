import express from 'express'
import bodyParser from 'body-parser'

// Create an Express application
const app = express()

// Enable CORS to allow cross-origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})

// Middleware to parse JSON request bodies
app.use(bodyParser.json())

// TODO: connect Store's UUID to user's ID in database, so that we can track which user is using which store and which store is being used by which user
// Create a simple in-memory database for users
const users = []
const deletedUsers = []

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Endpoint for user registration
app.post('/register', (req, res) => {
  const { email, password } = req.body
  // Check if the email is already taken
  if (users.some(user => user.email === email)) {
    return res
      .status(400)
      .json({ status: 400, message: 'Email is already taken' })
  }
  //check that password isn't invalid
  if (!password.length) {
    return res.status(400).json({ status: 400, message: 'Password is invalid' })
  }
  const newUser = { email, password }
  users.push(newUser)
  res.status(201).json({ status: 200, message: 'User registered successfully' })
})

// Endpoint for user login
app.post('/login', (req, res) => {
  const { email, password } = req.body
  // Check if the user exists and the password matches
  const user = users.find(
    user => user.email === email && user.password === password
  )
  if (user) {
    res.status(200).json({ message: 'Login successful' })
  } else {
    res.status(401).json({ message: 'Invalid credentials' })
  }
})

// Endpoint to create a new user
app.post('/createUser', (req, res) => {
  const { email, password } = req.body
  const newUser = { email, password }
  users.push(newUser)
  res.status(201).json({ message: 'User created successfully' })
})

// Endpoint to get a list of all users
app.get('/users', (req, res) => {
  res.status(200).json(users)
})

// Endpoint to remove a user and add to the list of deleted accounts
app.delete('/removeUser/:email', (req, res) => {
  const { email } = req.params
  const userIndex = users.findIndex(user => user.email === email)
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' })
  }
  const deletedUser = users.splice(userIndex, 1)[0]
  deletedUsers.push(deletedUser)
  res
    .status(200)
    .json({ message: 'User removed and added to deleted accounts' })
})

const port = 9021
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
