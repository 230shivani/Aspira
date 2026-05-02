import express from 'express';
import * as adminController from '../controllers/admin.controllers.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

// Admin middleware to verify admin role
const authAdmin = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Check if user is admin
        if (req.user.role !== 'ADMIN') {
            return res.status(403).json({ message: 'Forbidden - Admin access only' });
        }

        next();
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

// ==== ADMIN ONLY ROUTES ====

// Get all pending cars (awaiting approval)
router.get('/pending-cars', auth, authAdmin, adminController.getPendingCars);

// Approve a car (make it visible to buyers)
router.patch('/cars/:carId/approve', auth, authAdmin, adminController.approveCar);

// Reject a car (mark as rejected, don't delete)
router.patch('/cars/:carId/reject', auth, authAdmin, adminController.rejectCar);

export default router;
