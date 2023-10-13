import { pool } from '../config/database.js'

const getButtons = async (req, res) => {
    try {
      const results = await pool.query('SELECT * FROM buttons ORDER BY id ASC')
      res.status(200).json(results.rows)
    } catch (error) {
      res.status(400).json( { error: error.message } )
    }
}

const getButtonById = async (req, res) => {
    try {
      const id = req.params.id
      const selectQuery = `SELECT width, height, color, borderradius, price FROM buttons WHERE id = ${id}`
      const results = await pool.query(selectQuery)
  
      res.status(200).json(results.rows[0])
    } catch (error) {
      res.status(409).json( { error: error.message } )
    }
  }

  const updateButton = async (req, res) => {
    try {
      const id = req.params.id
      console.log(req.body)
      const { width, height, color, borderradius, price } = req.body // TK???????
      const results = await pool.query(`
        UPDATE buttons SET width = $1, height = $2, color=$3, borderradius=$4, price=$5 WHERE id = $6`,
        [width, height, color, borderradius, price, id]
      )
      res.status(200).json(results.rows[0])
    } catch (error) {
      res.status(409).json( { error: error.message } )
    }
  }
  
  const deleteButton = async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const results = await pool.query('DELETE FROM buttons WHERE id = $1', [id])
      res.status(200).json(results.rows[0])
    } catch (error) {
      res.status(409).json( { error: error.message } )
    }
  }

  const createButton = async (req, res) => {
    try {
      const { width, height, color, borderradius, price } = req.body
      const results = await pool.query(`
        INSERT INTO buttons (width, height, color, borderradius, price)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *`,
        [width, height, color, borderradius, price]
      )
      res.status(201).json(results.rows[0])
    } catch (error) {
      res.status(409).json( { error: error.message } )
    }
  }
export default {
    getButtons,
    getButtonById,
    updateButton,
    deleteButton,
    createButton
  }