import {Router} from 'express'
import { getEmployees, createEmployees, updateEmployees, deleteEmployess, getEmployee } from '../controllers/employees.controller.js'
const router = Router()

router.get('/employees', getEmployees)
router.get('/employees/:id',getEmployee)
router.post('/employees', createEmployees)
router.delete('/employees/:id', deleteEmployess)
router.patch('/employees/:id', updateEmployees)







export default router