using Microsoft.EntityFrameworkCore.Migrations;

namespace SmartMenu.Server.Migrations
{
    public partial class CreateClienteRestauranteTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClienteRestaurante",
                columns: table => new
                {
                    CNPJ = table.Column<string>(type: "nvarchar(25)", nullable: false),
                    RestauranteId = table.Column<int>(type: "int", nullable: false),
                    RazaoSocial = table.Column<string>(type: "nvarchar(25)", nullable: false), // Ajuste aqui para o tamanho máximo desejado
                    NomeFantasia = table.Column<string>(type: "nvarchar(25)", nullable: true), // Ajuste aqui para o tamanho máximo desejado
                    Endereco = table.Column<string>(type: "nvarchar(25)", nullable: true), // Ajuste aqui para o tamanho máximo desejado
                    Numero = table.Column<string>(type: "nvarchar(10)", nullable: true), // Ajuste aqui para o tamanho máximo desejado
                    Cep = table.Column<string>(type: "nvarchar(10)", nullable: true), // Ajuste aqui para o tamanho máximo desejado
                    Email = table.Column<string>(type: "nvarchar(25)", nullable: true), // Ajuste aqui para o tamanho máximo desejado
                    Telefone = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    Celular = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    InscricaoEstadual = table.Column<string>(type: "nvarchar(20)", nullable: true) // Ajuste aqui para o tamanho máximo desejado
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClienteRestaurante", x => x.CNPJ);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClienteRestaurante");
        }
    }
}
