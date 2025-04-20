const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all teachers
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM teachers');
  res.json(result.rows);
});

// Add teacher
router.post('/', async (req, res) => {
  const { teacher_name, email, dept_id } = req.body;
  const result = await pool.query(
    'INSERT INTO teachers (teacher_name, email, dept_id) VALUES ($1, $2, $3) RETURNING *',
    [teacher_name, email, dept_id]
  );
  res.json(result.rows[0]);
});

// Delete teacher
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM teachers WHERE teacher_id = $1', [id]);
  res.sendStatus(204);
});

module.exports = router;
