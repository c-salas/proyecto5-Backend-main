import express from 'express'
const router = express.Router()

import {
    getAllBooks,
    getBookById
} from '../controllers/book.controller.js'

router.get('/books', getAllBooks)

router.get('/books/:id', getBookById)

export default router