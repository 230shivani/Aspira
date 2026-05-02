import express from 'express';
import * as carController from '../controllers/car.controllers.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

// ==== PUBLIC ROUTES ====
// Browse all approved cars
router.get('/cars', carController.getAllCars);

// Get single car details
router.get('/cars/:carId', carController.getCarById);

// ==== SELLER ROUTES (Protected) ====
// Publish new car
router.post('/cars', auth, carController.publishCar);

// Get seller's own cars
router.get('/my-cars', auth, carController.getSellerCars);

// Update car listing (seller only)
router.put('/cars/:carId', auth, carController.updateCar);

// Delete car listing (seller only)
router.delete('/cars/:carId', auth, carController.deleteCar);

// Mark car as sold (seller only) - will delete the car
router.patch('/cars/:carId/mark-sold', auth, carController.markAsSold);

// View inquiries for seller's car
router.get('/cars/:carId/inquiries', auth, carController.getSellerInquiries);

// ==== BUYER ROUTES (Protected) ====
// Favorite a car (toggle)
router.post('/cars/:carId/favorite', auth, carController.favoriteCar);

// Send inquiry to seller
router.post('/cars/:carId/inquiry', auth, carController.sendInquiry);

// Get buyer's favorite cars
router.get('/my-favorites', auth, (req, res) => {
    console.log('Buyer accessing favorites');
    carController.getBuyerFavorites(req, res);
});

export default router;
