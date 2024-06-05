const pool = require('../config/dbConfig');

async function NpcPeloId(req, res) {
  try {
    const { id } = req.params;
    const query = 'SELECT * FROM npcs WHERE id = $1';
    const result = await pool.query(query, [id]);
    res.status(200).json(result.rows[0]);
  }catch(erro){
    console.error('Erro ao buscar avatar:', erro);
    res.status(500).json({ message: 'Erro ao buscar avatar', error: erro.message });
  }
}

module.exports = {
    NpcPeloId,
  };