import express from 'express'
import ButtonsController from '../controllers/buttons.js'

const router = express.Router()

router.get('/', ButtonsController.getButtons)
router.get('/:id', ButtonsController.getButtonById)
router.delete('/:id', ButtonsController.deleteButton)
router.patch('/:id', ButtonsController.updateButton)
router.post('/', ButtonsController.createButton)
export default router