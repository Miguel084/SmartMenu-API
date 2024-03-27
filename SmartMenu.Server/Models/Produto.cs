﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartMenu.Server.Models
{
    public class Produto
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProdutoId { get; set; }

        public string? Imagem { get; set; }

        [Required]
        public required string Nome { get; set; }

        [Required]
        public required string Descricao { get; set; }

        [Required]
        public required double Valor { get; set; }
    }
}
