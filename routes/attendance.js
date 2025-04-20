const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all attendance records
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM attendance');
  res.json(result.rows);
});

// Add attendance record
router.post('/', async (req, res) => {
  const { student_id, course_id, status } = req.body;
  const result = await pool.query(
    'INSERT INTO attendance (student_id, course_id, status) VALUES ($1, $2, $3) RETURNING *',
    [student_id, course_id, status]
  );
  res.json(result.rows[0]);
});

// Delete attendance
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM attendance WHERE attendance_id = $1', [id]);
  res.sendStatus(204);
});

module.exports = router;
