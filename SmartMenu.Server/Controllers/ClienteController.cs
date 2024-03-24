using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using SmartMenu.Server.Data;
using SmartMenu.Server.Models;
using System.Runtime.ConstrainedExecution;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SmartMenu.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ClienteController(ApplicationDbContext context) : ControllerBase
    {

        private readonly ApplicationDbContext _context = context;

        [HttpGet]
        public async Task<IEnumerable<Cliente>> Get()
        {

            return await _context.Clientes.ToListAsync(); ;

        }

        [HttpPost]
        public async Task<Cliente> Post([FromBody] ClienteDTO clienteDTO)
        {

            var cliente = new Cliente();

                cliente.CadastroCliente(
                        clienteDTO.CNPJ,
                        clienteDTO.InstricaoEstadual,
                        clienteDTO.RazaoSocial,
                        clienteDTO.NomeFantasia,
                        clienteDTO.NomeRua,
                        clienteDTO.NumeroComplemento,
                        clienteDTO.NomeCidade,
                        clienteDTO.NomeBairro,
                        clienteDTO.UF,
                        clienteDTO.CEP,
                        clienteDTO.Email
                    );

            _context.Clientes.Add(cliente);
            await _context.SaveChangesAsync();

            return cliente;
        }
    }

}
