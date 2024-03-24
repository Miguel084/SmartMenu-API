using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartMenu.Server.Migrations
{
    /// <inheritdoc />
    public partial class MigracaoInicial : Migration
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
                    Imagem = table.Column<string>(type: "TEXT", nullable: true),
                    Nome = table.Column<string>(type: "TEXT", nullable: false),
                    Descricao = table.Column<string>(type: "TEXT", nullable: false),
                    Valor = table.Column<double>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cardapios", x => x.CardapioId);
                });

            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    ClienteId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CNPJ = table.Column<string>(type: "TEXT", nullable: false),
                    InstricaoEstadual = table.Column<string>(type: "TEXT", nullable: false),
                    RazaoSocial = table.Column<string>(type: "TEXT", nullable: false),
                    NomeFantasia = table.Column<string>(type: "TEXT", nullable: false),
                    NomeRua = table.Column<string>(type: "TEXT", nullable: false),
                    NumeroComplemento = table.Column<int>(type: "INTEGER", nullable: false),
                    NomeCidade = table.Column<string>(type: "TEXT", nullable: false),
                    NomeBairro = table.Column<string>(type: "TEXT", nullable: false),
                    UF = table.Column<string>(type: "TEXT", nullable: false),
                    CEP = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    RegistroData = table.Column<DateOnly>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.ClienteId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cardapios");

            migrationBuilder.DropTable(
                name: "Clientes");
        }
    }
}
