const { body, validationResult } = require('express-validator');

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: errors.array().map(err => ({
        field: err.param,
        message: err.msg
      }))
    });
  }
  next();
};

// Validation rules for user registration
const validateRegisterRules = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Invalid email format')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('bio')
    .trim()
    .isLength({ min: 5, max: 500 })
    .withMessage('Bio must be between 5 and 500 characters'),
  body('experience')
    .optional()
    .isInt({ min: 0, max: 70 })
    .withMessage('Experience must be a number between 0 and 70')
];

exports.validateRegister = [...validateRegisterRules, handleValidationErrors];

// Validation rules for user login
const validateLoginRules = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Invalid email format')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

exports.validateLogin = [...validateLoginRules, handleValidationErrors];

// Validation rules for user update
const validateUserUpdateRules = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .optional()
    .trim()
    .isEmail()
    .withMessage('Invalid email format')
    .normalizeEmail(),
  body('password')
    .optional()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('bio')
    .optional()
    .trim()
    .isLength({ min: 5, max: 500 })
    .withMessage('Bio must be between 5 and 500 characters'),
  body('experience')
    .optional()
];

exports.validateUserUpdate = [...validateUserUpdateRules, handleValidationErrors];

// Validation rules for assessment
const validateAssessmentRules = [
  body('userId')
    .notEmpty()
    .withMessage('userId is required'),
  body('score')
    .isInt({ min: 0, max: 100 })
    .withMessage('Score must be between 0 and 100'),
  body('category')
    .isIn(['technical', 'management', 'hr', 'behavioral'])
    .withMessage('Invalid category')
];

exports.validateAssessment = [...validateAssessmentRules, handleValidationErrors];

// Validation rules for cover letter
const validateCoverLetterRules = [
  body('userId')
    .notEmpty()
    .withMessage('userId is required'),
  body('content')
    .trim()
    .isLength({ min: 50, max: 5000 })
    .withMessage('Cover letter must be between 50 and 5000 characters'),
  body('company')
    .optional()
    .trim()
    .isLength({ max: 200 }),
  body('jobTitle')
    .optional()
    .trim()
    .isLength({ max: 200 })
];

exports.validateCoverLetter = [...validateCoverLetterRules, handleValidationErrors];

// Validation rules for job creation
const validateJobCreationRules = [
  body('title')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Title must be between 5 and 200 characters'),
  body('company')
    .trim()
    .isLength({ min: 2, max: 200 })
    .withMessage('Company must be between 2 and 200 characters'),
  body('location')
    .trim()
    .isLength({ min: 2, max: 200 })
    .withMessage('Location must be between 2 and 200 characters'),
  body('type')
    .isIn(['Full-time', 'Contract', 'Remote', 'Freelance'])
    .withMessage('Invalid job type'),
  body('category')
    .isIn(['Software', 'Design', 'Marketing', 'Data Science', 'Product'])
    .withMessage('Invalid category'),
  body('salary')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Invalid salary format'),
  body('description')
    .trim()
    .isLength({ min: 20, max: 10000 })
    .withMessage('Description must be between 20 and 10000 characters')
];

exports.validateJobCreation = [...validateJobCreationRules, handleValidationErrors];

// Export the error handler separately for custom use
exports.handleValidationErrors = handleValidationErrors;
