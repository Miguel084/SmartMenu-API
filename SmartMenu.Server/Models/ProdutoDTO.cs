using System.ComponentModel.DataAnnotations;

namespace SmartMenu.Server.Models
{
    public class ProdutoDTO
    {
        [Required]
        public string Nome { get; set; }

        [Required]
        public string Descricao { get; set; }

        [Required]
        public double Valor { get; set; }

        public IFormFile? Imagem { get; set; }

    }
}
