const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors'); // Import cors

const app = express();
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'williams#5',
    database: 'Advising'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to database');
});

app.post('/api/register', async (req, res) => {
    const { email, password, role } = req.body;
    console.log("Role from client:", role);

    const allowedRoles = ['student', 'faculty', 'admin'];

    if (!allowedRoles.includes(role)) {
        return res.status(400).json({ error: 'Invalid role. Allowed roles are: student, faculty, admin' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const query = 'INSERT INTO users (email, password, role) VALUES (?, ?, ?)';

        console.log("SQL Query:", query);
        console.log("Query Values:", [email, hashedPassword, role]);

        connection.query(query, [email, hashedPassword, role], (err, results) => {
            if (err) {
                console.error('Error inserting user: ', err.sqlMessage);
                return res.status(500).json({ error: 'Registration failed' });
            }
            console.log('User registered successfully');
            res.json({ message: 'User registered successfully' });
        });
    } catch (error) {
        console.error('Error hashing password:', error);
        res.status(500).json({ error: 'Registration is failed' });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';

    connection.query(query, [email], async (err, results) => {
        if (err) {
            console.error('Error querying user: ', err);
            return res.status(500).json({ error: 'Login failed' });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            res.json({ message: 'Login successful', user: { id: user.id, email: user.email, role: user.role } }); // Send user data
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});