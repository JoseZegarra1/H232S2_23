import { Router } from "express";
import {
  createBooking_JoseZegara,
  deleteBooking_JoseZegarra,
  editBooking_JoseZegara,
  renderBookings_JoseZegarra,
  updateBooking_JoseZegarra,
} from "../controllers/bookingsController.js";
import {
  renderAboutUs,
  renderReservation,
} from "../controllers/homeController.js"; 
const router = Router();

router.get("/", renderBookings_JoseZegarra);
router.post("/add", createBooking_JoseZegara);
router.get("/update/:id", editBooking_JoseZegara);
router.post("/update/:id", updateBooking_JoseZegarra);
router.get("/delete/:id", deleteBooking_JoseZegarra);

router.get("/nosotros", renderAboutUs);
router.get("/home", renderReservation);

export default router;
