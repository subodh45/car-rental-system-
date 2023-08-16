const express = require('express')
const app = express()
const port = process.env.PORT || 5000
 const dbconnection = require('./db')
 app.use(express.json())


 app.use('/api/cars/' , require('./routes/carsRoute'))
 app.use('/api/users/' , require('./routes/usersRoute'))
 app.use('/api/bookings/' , require('./routes/bookingsRoute'))
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Node js server started in ${port}`))