import express from 'express';
import { fetchNews } from '../controllers/controller.js';

const router = express.Router();

router.get('/news', fetchNews);
router.get('*', (req, res) => {
    return res.json({message: "Page not found"});
})

export default router;
