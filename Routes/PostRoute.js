import express from 'express'
import {
  createPost,
 
} from '../Controller/PostController.js'

const router = express.Router()

router.get('/', createPost)


export default router
