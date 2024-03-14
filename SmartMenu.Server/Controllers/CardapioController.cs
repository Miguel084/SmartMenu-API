/*
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmartMenu.Server.Data;
using SmartMenu.Server.Models;

namespace SmartMenu.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CardapioController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CardapioController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Cardapio>> Get()
        {
            return await _context.Cardapio.ToListAsync();
        }
    }
}
*/