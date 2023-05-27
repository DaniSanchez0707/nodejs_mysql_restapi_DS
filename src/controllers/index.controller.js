import {pool} from '../db.js'

export const ping = async (req, res) => {
    const result = await pool.query('call suma()')
    res.json(result[0][0])
    }