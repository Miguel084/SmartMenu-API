using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartMenu.Server.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cardapios",
                columns: table => new
                {
                    CardapioId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RestauranteId = table.Column<int>(type: "INTEGER", nullable: false),
                    Nome = table.Column<string>(type: "TEXT", nullable: false),
                    Descricao = table.Column<string>(type: "TEXT", nullable: false),
                    DataCriacao = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Categoria = table.Column<string>(type: "TEXT", nullable: false),
                    Status = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cardapios", x => x.CardapioId);
                });

            migrationBuilder.CreateTable(
                name: "ClientesRestaurantes",
                columns: table => new
                {
                    CNPJ = table.Column<string>(type: "TEXT", nullable: false),
                    RestauranteId = table.Column<int>(type: "INTEGER", nullable: false),
                    RazaoSocial = table.Column<string>(type: "TEXT", nullable: false),
                    NomeFantasia = table.Column<string>(type: "TEXT", nullable: false),
                    Endereco = table.Column<string>(type: "TEXT", nullable: false),
                    Numero = table.Column<string>(type: "TEXT", nullable: false),
                    Cep = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Telefone = table.Column<string>(type: "TEXT", nullable: false),
                    InscricaoEstadual = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientesRestaurantes", x => x.CNPJ);
                });

            migrationBuilder.CreateTable(
                name: "ItensMenu",
                columns: table => new
                {
                    ItemMenuId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", nullable: false),
                    Descricao = table.Column<string>(type: "TEXT", nullable: false),
                    Preco = table.Column<decimal>(type: "TEXT", nullable: false),
                    Disponibilidade = table.Column<bool>(type: "INTEGER", nullable: false),
                    CategoriaId = table.Column<int>(type: "INTEGER", nullable: false),
                    Alergenos = table.Column<string>(type: "TEXT", nullable: false),
                    Imagem = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItensMenu", x => x.ItemMenuId);
                });
            
              migrationBuilder.InsertData(
                table: "Cardapios",
                columns: new[] { "RestauranteId", "Nome", "Descricao", "DataCriacao", "Categoria", "Status" },
                values: new object[,]
                {
                    { 1, "Cardápio de Comidas", "Cardápio de comidas deliciosas", DateTime.UtcNow, "Comidas", "Ativo" },
                    { 2, "Cardápio de Bebidas", "Cardápio de bebidas refrescantes", DateTime.UtcNow, "Bebidas", "Ativo" },
                });

            migrationBuilder.InsertData(
                table: "ClientesRestaurantes",
                columns: new[] { "CNPJ", "RestauranteId", "RazaoSocial", "NomeFantasia", "Endereco", "Numero", "Cep", "Email", "Telefone", "InscricaoEstadual" },
                values: new object[,]
                {
                    { "12345678901234", 1, "Restaurante Delícia Ltda", "Delícia Restaurante", "Rua Principal", "123", "12345-678", "restaurante@email.com", "(00) 1234-5678", "123456789" },
                    { "98765432109876", 2, "Bar do João Ltda", "Bar do João", "Avenida Secundária", "456", "98765-432", "barjoao@email.com", "(00) 9876-5432", "987654321" },
                });

            migrationBuilder.InsertData(
                table: "ItensMenu",
                columns: new[] { "Nome", "Descricao", "Preco", "Disponibilidade", "CategoriaId", "Alergenos", "Imagem" },
                values: new object[,]
                {
                    { "Hamburguer", "Hamburguer suculento", 10.99m, true, 1, "Glúten", "hamburguer.jpg" },
                    { "Refrigerante", "Refrigerante gelado", 3.50m, true, 2, "Nenhum", "refrigerante.jpg" },
                });
        }

        

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cardapios");

            migrationBuilder.DropTable(
                name: "ClientesRestaurantes");

            migrationBuilder.DropTable(  
                name: "ItensMenu");
        }
    }
}
