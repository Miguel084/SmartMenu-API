using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SmartMenu.Server.Models
{
    public class Cliente()
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClienteId { get; set; }

        public string CNPJ { get; set; }
        public string InstricaoEstadual { get; set; } 

        public string RazaoSocial { get; set; } 
        public string NomeFantasia { get; set; }

        public string NomeRua { get; set; }

        public int NumeroComplemento { get; set; } 

        public string NomeCidade { get; set; }

        public string NomeBairro { get; set; } 
        public string UF { get; set; }

        public string CEP { get; set; }
        public string Email { get; set; } 
        public DateOnly RegistroData { get; set; }



        public void CadastroCliente(
            string cnpj,
            string instricaoEstadual,
            string razaoSocial,
            string nomeFantasia,
            string nomeRua,
            int numeroComplemento,
            string nomeCidade,
            string nomeBairro,
            string uf,
            string cep,
            string email
        )
        {
            CNPJ = cnpj;
            InstricaoEstadual = instricaoEstadual;
            RazaoSocial = razaoSocial;
            NomeFantasia = nomeFantasia;
            NomeRua = nomeRua;
            NumeroComplemento = numeroComplemento;
            NomeCidade = nomeCidade;
            NomeBairro = nomeBairro;
            UF = uf;
            CEP = cep;
            Email = email;
            RegistroData = DateOnly.FromDateTime(DateTime.Now);
        }

    }
}
