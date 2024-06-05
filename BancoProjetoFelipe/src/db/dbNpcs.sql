CREATE TABLE npcs (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    fala TEXT NOT NULL,
    avatar_id INTEGER NOT NULL,
    FOREIGN KEY(avatar_id) REFERENCES avatares(id)
);

INSERT INTO npcs (nome, fala, avatar_id) VALUES 
('Zara', 'Saudações! Eu sou Zara. Por favor, não destrua nosso planeta. Ele é o lar de muitos seres pacíficos e maravilhas naturais.', 1),
('Orion', 'Eu sou Orion. Peço que poupem nosso mundo, onde a harmonia entre tecnologia e natureza é nossa maior conquista.', 2),
('Lumina', 'Olá, sou Lumina. Nosso planeta é uma joia rara do cosmos. Imploro que o deixem intacto.', 3),
('Thalor', 'Meu nome é Thalor. Nosso planeta é a fonte de vida de nosso povo. Não permitam que ele seja destruído.', 4),
('Aelina', 'Eu sou Aelina. Nosso mundo é um santuário de paz e conhecimento. Por favor, não o destrua.', 5),
('Kiro', 'Sou Kiro. Nosso planeta é um farol de esperança no universo. Peço humildemente que o preservem.', 6),
('Mara', 'Olá, sou Mara. Nosso planeta é um refúgio de biodiversidade e cultura. Por favor, não o aniquilem.', 7),
('Ryon', 'Eu sou Ryon. Nosso mundo é um paraíso de harmonia. Imploro que o poupem.', 8),
('Zephyr', 'Sou Zephyr. Nosso planeta é um oásis de vida no vasto cosmos. Por favor, não o destruam.', 9),
('Tara', 'Eu sou Tara. Nosso mundo é um repositório de sabedoria e beleza. Peço que não o destruam.', 10),
('Vega', 'Olá, sou Vega. Nosso planeta é uma obra-prima cósmica. Imploro que o deixem em paz.', 11),
('Lyra', 'Eu sou Lyra. Nosso planeta é um refúgio de paz e prosperidade. Por favor, não o destruam.', 12),
('Kael', 'Meu nome é Kael. Nosso mundo é uma joia no manto estelar. Peço humildemente que o preservem.', 13),
('Elara', 'Eu sou Elara. Nosso planeta é um farol de luz e esperança. Por favor, não o destruam.', 14),
('Juno', 'Sou Juno. Nosso mundo é um tesouro inestimável. Imploro que o deixem em paz.', 15),
('Seren', 'Olá, sou Seren. Nosso planeta é uma maravilha do universo. Peço que o poupem.', 16),
('Nara', 'Eu sou Nara. Nosso mundo é um símbolo de harmonia. Por favor, não o destruam.', 17),
('Cyrus', 'Meu nome é Cyrus. Nosso planeta é um baluarte de vida. Imploro que o preservem.', 18),
('Zara', 'Eu sou Zara. Nosso mundo é um santuário de serenidade. Por favor, não o destruam.', 19),
('Iona', 'Sou Iona. Nosso planeta é um farol de paz e conhecimento. Peço humildemente que o deixem em paz.', 20);
