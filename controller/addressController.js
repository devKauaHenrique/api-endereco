const pool = require('../config/db');

exports.create = async (req, res) => {
    const { country, state, city, road } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO address (country, state, city, road) VALUES ($1, $2, $3, $4) RETURNING *',
            [country, state, city, road]
        )
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Deu erro, tente novamente' })
    }
}

exports.getAll = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM address'
        )
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Deu erro, tente novamente' }) //500 = resposta de erro de conexão
    }
}

exports.getOne = async (req, res) => {
    const { id } = req.params
    try {
        const result = await pool.query(
            'SELECT * FROM address WHERE id = $1', [id]
        )
        if (result.rows.length === 0) {
            res.status(400).json({ Message: 'Não encontrado' })
        }
        res.status(201).json(result.rows[0])
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Deu erro, tente novamente' }) //500 = resposta de erro de conexão
    }
}

exports.updateOne = async (req, res) => {
    const { id } = req.params;
    const { country, state, city, road } = req.body;

    try {
        const result = await pool.query(
            'UPDATE address SET country = $1, state = $2, city = $3, road = $4 WHERE id = $5 RETURNING *', [id]
        [country, state, city, road]
        )
        if (result.rows.length === 0) {
            res.status(400).json({ Message: 'Não encontrado' })
        }
        res.status(201).json(result.rows[0])
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Deu erro, tente novamente' }) //500 = resposta de erro de conexão
    }
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            'DELETE FROM address WHERE id = $1 RETURNING *', [id]
        )
        if (result.rows.length === 0) {
            res.status(400).json({ Message: 'Não encontrado' })
        }
        res.status(201).json(result.rows[0])
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Deu erro, tente novamente' }) //500 = resposta de erro de conexão
    }
}