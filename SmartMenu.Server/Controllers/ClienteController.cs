using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartMenu.Server.Data;
using SmartMenu.Server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SmartMenu.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {

        private readonly ApplicationDbContext _context;

        public ClienteController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Cliente>> Get()
        {

            return await _context.Clientes.ToListAsync(); ;

        }

        [HttpPost]
        public async Task<Cliente> Post([FromBody] ClienteDTO clienteDTO)
        {

            var cliente = new Cliente();

            cliente.CNPJ = clienteDTO.CNPJ;
            cliente.RegistroData = new DateOnly();

            _context.Clientes.Add(cliente);
            await _context.SaveChangesAsync();

            return cliente;
        }
    }

}
