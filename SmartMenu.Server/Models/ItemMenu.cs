using System.ComponentModel.DataAnnotations;

namespace SmartMenu.Server.Models
{
    public class ItemMenu
    {
        [Key] 
        public int ItemMenuId { get; set; }

        [Required]
        public string Nome { get; set; }

        public string? Descricao { get; set; }

        [Required]
        public decimal Preco { get; set; }

        [Required]
        public bool Disponibilidade { get; set; }

        [Required]
        public int CategoriaId { get; set; }

        public string? Alergenos { get; set; }

        public string? Imagem { get; set; }
    }
}
