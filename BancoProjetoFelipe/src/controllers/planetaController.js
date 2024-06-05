const pool = require('../config/dbConfig');

async function getAllplanetas(req, res) {
  try {
  const query = 'SELECT * FROM planetas';
  const result = await pool.query(query);
  res.status(200).json(result.rows);
}catch(erro){
  console.error('Erro ao buscar todos os planetas:', erro);
  res.status(500).json({ message: 'Erro ao buscar planetas', error: erro.message });
}
}

async function DeletePlanetas(req, res) {
  try {
const { id } = req.params;
const query = 'DELETE FROM planetas WHERE id = $1';
  await pool.query(query, [id]);
  res.status(200).json({ message: 'Planeta deletado com sucesso!' });
  }catch(erro){
    console.error('Erro ao deletar planeta:', erro);
    res.status(500).json({ message: 'Erro ao deletar planeta', error: erro.message });
  }
}

async function CreatePlanetas(req, res) {
  try {
const {nome, descricao, imagem, rec_pedras, rec_metal, rec_madeira, rec_agua, populacao, poder_militar, especies, especies_domadas, tempo_vida_planeta} = req.body;
const query = 'INSERT INTO planetas (nome, descricao, imagem, rec_pedras, rec_metal, rec_madeira, rec_agua, populacao, poder_militar, especies, especies_domadas, tempo_vida_planeta) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
  await pool.query(query, [nome, descricao, imagem, rec_pedras, rec_metal, rec_madeira, rec_agua, populacao, poder_militar, especies, especies_domadas, tempo_vida_planeta]);
  res.status(201).json({ message: 'Planeta criado com sucesso!' });
}catch(erro){
  console.error('Erro ao criar planeta:', erro);
  res.status(500).json({ message: 'Erro ao criar planeta', error: erro.message });
}
}

async function UpdatePlanetas(req, res) {
  try {
const { id } = req.params;
const {nome, descricao, imagem, rec_pedras, rec_metal, rec_madeira, rec_agua, populacao, poder_militar, especies, especies_domadas, tempo_vida_planeta} = req.body;
const query = 'UPDATE planetas SET nome = $1, descricao = $2, imagem = $3, rec_pedras = $4, rec_metal = $5, rec_madeira = $6, rec_agua = $7, populacao = $8, poder_militar = $9, especies = $10, especies_domadas = $11, tempo_vida_planeta = $12 WHERE id = $13';
  await pool.query(query, [nome, descricao, imagem, rec_pedras, rec_metal, rec_madeira, rec_agua, populacao, poder_militar, especies, especies_domadas, tempo_vida_planeta, id]);
  res.status(200).json({ message: 'Planeta atualizado com sucesso!' });
}catch(erro){
  console.error('Erro ao atualizar planeta:', erro);
  res.status(500).json({ message: 'Erro ao atualizar planeta', error: erro.message });
}
}

module.exports = {
  getAllplanetas,
  UpdatePlanetas,
  DeletePlanetas,
  CreatePlanetas
  };