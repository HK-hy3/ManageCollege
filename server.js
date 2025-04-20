
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const db = require("./db");

//Middleware 
app.use(cors());
app.use(bodyParser.json());

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use("/students", require("./routes/students"));
app.use("/teachers", require("./routes/faculty"));
app.use("/departments", require("./routes/departments"));
app.use("/courses", require("./routes/course"));
app.use("/attendance", require("./routes/attendance"));

const PORT = process.env.PORT || 5501;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'views/index.html'));
  });

  app.get('/student-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/students.html'));
  });

  app.get('/attendance-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/attendance.html'));
  });

  app.get('/courses-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/courses.html'));
  });

  app.get('/department-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/department.html'));
  });

  app.get('/faculty-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/teachers.html'));
  });
  const { insertStudent } = require('./db'); // Custom DB insert function

  app.use(bodyParser.json());
  
  app.post('/students', async (req, res) => {
    const { student_name, email, dept_id } = req.body;
  
    if (!student_name || !email || !dept_id) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      // Insert into the database
      await insertStudent(student_name, email, dept_id);
      res.status(201).send("Student added successfully!");
    } catch (error) {
      console.error("Error adding student:", error);
      res.status(500).json({ message: "Error adding student" });
    }
  });
  // app.post('/students', async (req, res) => {
  //   const { student_name, email, dept_id } = req.body;
  
  //   try {
  //     await db.query(
  //       'INSERT INTO students (student_name, email, dept_id) VALUES ($1, $2, $3)',
  //       [student_name, email, dept_id]
  //     );
  //     res.status(200).send({ message: 'Student added successfully' });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).send({ error: 'Database error' });
  //   }
  // });
  