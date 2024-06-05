CREATE TABLE planetas (
    id SERIAL PRIMARY KEY,
    nome TEXT,
    descricao TEXT,
    imagem TEXT,
    rec_pedras INTEGER CHECK (rec_pedras BETWEEN 0 AND 100),
    rec_metal INTEGER CHECK (rec_metal BETWEEN 0 AND 100),
    rec_madeira INTEGER CHECK (rec_madeira BETWEEN 0 AND 100),
    rec_agua INTEGER CHECK (rec_agua BETWEEN 0 AND 100),
    populacao TEXT,
    poder_militar INTEGER CHECK (poder_militar BETWEEN 0 AND 100),
    especies INTEGER,
    especies_domadas INTEGER,
    tempo_vida_planeta TEXT
);
INSERT INTO planetas (nome, descricao, imagem, rec_pedras, rec_metal, rec_madeira, rec_agua, populacao, poder_militar, especies, especies_domadas, tempo_vida_planeta) VALUES 
('Avalon', 'Avalon é um planeta de beleza incomparável, com florestas exuberantes e montanhas majestosas. Sua população é composta por elfos, fadas e unicórnios. O planeta é rico em pedras preciosas e madeira.', 'https://th.bing.com/th/id/OIG2.zDd_8CXmqr9cNsrNxak9?pid=ImgGn', 80, 60, 90, 70, '7 bilhoes de pessoas', 70, 3, 2, '1.5 bilhões de anos');
