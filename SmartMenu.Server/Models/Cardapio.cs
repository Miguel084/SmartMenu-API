using System.ComponentModel.DataAnnotations;

namespace SmartMenu.Server.Models
{
    public class Cardapio
    {
        [Key] 
        public int CardapioId { get; set; }

        [Required]
        public int RestauranteId { get; set; }

        [Required]
        public required string Nome { get; set; }

        public string Descricao { get; set; }

        [Required]
        public DateTime DataCriacao { get; set; }

        [Required]
        public required string Categoria { get; set; }

        [Required]
        public required string Status { get; set; }
    }
}
