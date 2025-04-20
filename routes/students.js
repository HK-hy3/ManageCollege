// const express = require('express');
// const router = express.Router();
// const pool = require('../db');

// // Get all students
// router.get('/data', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM students');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Database error' });
//   }
// });
// module.exports = router;
// // Add student
// router.post('/', async (req, res) => {
//   const { student_name, email, dept_id } = req.body;
//   const result = await pool.query(
//     'INSERT INTO students (student_name, email, dept_id) VALUES ($1, $2, $3) RETURNING *',
//     [student_name, email, dept_id]
//   );
//   res.json(result.rows[0]);
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all students
router.get('/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM students');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Add student
router.post('/', async (req, res) => {
  const { student_name, email, dept_id } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO students (student_name, email, dept_id) VALUES ($1, $2, $3) RETURNING *',
      [student_name, email, dept_id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Insert error' });
  }
});

module.exports = router;

