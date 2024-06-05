const pool = require('../config/dbConfig');


async function getAllavatares(req, res) {
  try {
    const query = 'SELECT * FROM Avatares';
    const result = await pool.query(query);
    res.status(200).json(result.rows); 
  } catch (err) {
    console.error('Erro ao todos avatares:', err);
    res.status(500).json({ message: 'Erro ao buscar avatares', err }); 
  }
}
async function DeleteAvatares(req, res) {
    try {
  const { id } = req.params;
  const query = 'DELETE FROM avatares WHERE id = $1';
    await pool.query(query, [id]);
    res.status(200).json({ message: 'Avatar deletado com sucesso!' });
  }
  catch{
    console.error('Erro ao deletar avatar:', err);
    res.status(500).json({ message: 'Erro ao deletar avatar', error: err.message });
  }
}

module.exports = {
    getAllavatares,
    DeleteAvatares
  };