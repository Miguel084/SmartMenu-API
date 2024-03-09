CREATE TABLE IF NOT EXISTS "__EFMigrationsHistory" (
    "MigrationId" TEXT NOT NULL CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY,
    "ProductVersion" TEXT NOT NULL
);

BEGIN TRANSACTION;

CREATE TABLE "Cardapios" (
    "CardapioId" INTEGER NOT NULL CONSTRAINT "PK_Cardapios" PRIMARY KEY AUTOINCREMENT,
    "RestauranteId" INTEGER NOT NULL,
    "Nome" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "DataCriacao" TEXT NOT NULL,
    "Categoria" TEXT NOT NULL,
    "Status" TEXT NOT NULL
);

CREATE TABLE "ClientesRestaurantes" (
    "CNPJ" TEXT NOT NULL CONSTRAINT "PK_ClientesRestaurantes" PRIMARY KEY,
    "RestauranteId" INTEGER NOT NULL,
    "RazaoSocial" TEXT NOT NULL,
    "NomeFantasia" TEXT NOT NULL,
    "Endereco" TEXT NOT NULL,
    "Numero" TEXT NOT NULL,
    "Cep" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Telefone" TEXT NOT NULL,
    "InscricaoEstadual" TEXT NOT NULL
);

CREATE TABLE "ItensMenu" (
    "ItemMenuId" INTEGER NOT NULL CONSTRAINT "PK_ItensMenu" PRIMARY KEY AUTOINCREMENT,
    "Nome" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "Preco" TEXT NOT NULL,
    "Disponibilidade" INTEGER NOT NULL,
    "CategoriaId" INTEGER NOT NULL,
    "Alergenos" TEXT NOT NULL,
    "Imagem" TEXT NOT NULL
);

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20240309190319_InitialCreate', '8.0.2');

COMMIT;

