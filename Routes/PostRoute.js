import express from 'express'
import {
  createPost, getPost,
 
} from '../Controller/PostController.js'

const router = express.Router()

router.post('/create', createPost)
router.get('/', getPost)


export default router
