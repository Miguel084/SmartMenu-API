using System.ComponentModel.DataAnnotations;

namespace SmartMenu.Server.Models
{
    public class Cardapio
    {
        [Key]
        public int CardapioId { get; set; }

        public int? Imagem { get; set; }

        [Required]
        public required string Nome { get; set; }

        [Required]
        public required string Descricao { get; set; }

        [Required]
        public required double Preco { get; set; }

    }
}
