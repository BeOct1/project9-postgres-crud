const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');
const { body } = require('express-validator');

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Email is invalid'),
        body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer')
    ],
    UserController.createUser
);
router.put('/:id',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Email is invalid'),
        body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer')
    ],
    UserController.updateUser
);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
