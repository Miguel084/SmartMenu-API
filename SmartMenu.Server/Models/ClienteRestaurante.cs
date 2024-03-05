using System.ComponentModel.DataAnnotations;

namespace SmartMenu.Server.Models
{
    public class ClienteRestaurante
    {
        [Key]
        public required string CNPJ { get; set; }

        [Required]
        public int RestauranteId { get; set; }

        [Required]
        public required string RazaoSocial { get; set; }

        public required string NomeFantasia { get; set; }

        public required string Endereco { get; set; }

        public required string Numero { get; set; }

        public required string Cep { get; set; }

        public required string Email { get; set; }

        public required string Telefone { get; set; }

        public required string InscricaoEstadual { get; set; }
    }
}
