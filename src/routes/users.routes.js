import express from 'express';
import {
  fetchAllUsers
} from '#controllers/users.controller.js';

const router = express.Router();

// GET /users - Get all users (admin only)
router.get('/', fetchAllUsers);

// GET /users/:id - Get user by ID (authenticated users only)
router.get('/:id', (req, res) => res.send('GET /users/:id'));

// PUT /users/:id - Update user by ID (authenticated users can update own profile, admin can update any)
router.put('/:id', (req, res) => res.send('PUT /users/:id'));

// DELETE /users/:id - Delete user by ID (admin only)
router.delete('/:id', (req, res) => res.send('DELETE /users/:id'));

export default router;