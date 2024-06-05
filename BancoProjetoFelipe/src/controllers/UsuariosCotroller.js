const pool = require('../config/dbConfig');

async function Login(req, res) {
  try {
    const { email, senha } = req.params;
    const query = 'SELECT * FROM usuarios WHERE email = $1 AND senha = $2';
    const result = await pool.query(query, [email, senha]);
    if (result.rowCount === 0) {
      res.status(404).json({ message: 'Usuário não encontrado' });
    } else {
      res.status(200).json(result.rows);
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
  }
}
async function updateUsuarios(req, res) {
  try {
const { id } = req.params;
const {nome, email, senha, avatar, id_planeta} = req.body;
const query = 'UPDATE usuarios SET nome = $1, email = $2, senha = $3, avatar = $4, id_planeta = $5 WHERE id = $6';
  await pool.query(query, [nome, email, senha, avatar, id_planeta, id]);
  res.status(200).json({ message: 'Usuario atualizado com sucesso!' });
}catch(erro){
  console.error('Erro ao atualizar usuario:', erro);
  res.status(500).json({ message: 'Erro ao atualizar usuario', error: erro.message });
}
}
async function deleteUsuarios(req, res) {
  try {
const { id } = req.params;
const query = 'DELETE FROM usuarios WHERE id = $1';
  await pool.query(query, [id]);
  res.status(200).json({ message: 'Usuario deletado com sucesso!' });
  }catch(erro){
    console.error('Erro ao deletar usuario:', erro);
    res.status(500).json({ message: 'Erro ao deletar usuario', error: erro.message });
  }
}
async function createUsuarios(req, res) {
  try {
const {nome, email, senha, avatar, id_planeta} = req.body;
const query = 'INSERT INTO usuarios (nome, email, senha, avatar, id_planeta) VALUES ($1, $2, $3, $4, $5)';
  await pool.query(query, [nome, email, senha, avatar, id_planeta]);
  res.status(201).json({ message: 'Usuario criado com sucesso!' });
  }catch(erro){
    console.error('Erro ao criar usuario:', erro);
    res.status(500).json({ message: 'Erro ao criar usuario', error: erro.message });
  }
}
module.exports = {
  Login,
  updateUsuarios,
  deleteUsuarios,
  createUsuarios
  };