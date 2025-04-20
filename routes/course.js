const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all courses
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM courses');
  res.json(result.rows);
});

// Add course
router.post('/', async (req, res) => {
  const { course_name, dept_id } = req.body;
  const result = await pool.query(
    'INSERT INTO courses (course_name, dept_id) VALUES ($1, $2) RETURNING *',
    [course_name, dept_id]
  );
  res.json(result.rows[0]);
});

// Delete course
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM courses WHERE course_id = $1', [id]);
  res.sendStatus(204);
});

module.exports = router;
