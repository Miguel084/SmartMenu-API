using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SmartMenu.Server.Models
{
    public class Cliente
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClienteId { get; set; }

        public string CNPJ { get; set; }
        //public string InstricaoEstadual { get; set; }

        //public string RazaoSocial { get; set; }
        //public string NomeFantasia { get; set; }

        //public string NomeRua { get; set; }

        //public int NumeroComplemento { get; set; }

        //public string NomeCidade { get; set; }

        //public string NomeBairro { get; set; }

        //public string UF { get; set; }

        //public string CEP { get; set; }
        //public string Email { get; set; }

        public DateOnly RegistroData { get; set; }



    }
}
