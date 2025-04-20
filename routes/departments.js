const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all departments
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM departments');
  res.json(result.rows);
});

// Add department
router.post('/', async (req, res) => {
  const { dept_name } = req.body;
  const result = await pool.query(
    'INSERT INTO departments (dept_name) VALUES ($1) RETURNING *',
    [dept_name]
  );
  res.json(result.rows[0]);
});

// Delete department
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM departments WHERE dept_id = $1', [id]);
  res.sendStatus(204);
});

module.exports = router;
