CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY ,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    senha TEXT NOT NULL,
    avatar_id INTEGER NOT NULL,
    FOREIGN KEY(avatar_id) REFERENCES Avatares(id)
);
INSERT INTO usuarios (nome, email, senha, avatar_id) VALUES 
('Zara', 'zara.pinheiro@gmail.com', '123456', 1);
