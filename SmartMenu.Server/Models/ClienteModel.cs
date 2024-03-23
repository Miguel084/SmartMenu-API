using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SmartMenu.Server.Models
{
    public class ClienteModel
    {

        [Required]
        public string cnpj;

        public string inscricaoEnstadual;

        public string razaoSocial;

        [Required]
        public string email;

        public string telefone;

        public string cep;

        public string endereco;

        public string numero;

        public string bairro;

        public string cidade;

        public string estado;

        [Required]
        public string senha;


    }
}
