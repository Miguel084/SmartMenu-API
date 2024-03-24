using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SmartMenu.Server.Data;
using SmartMenu.Server.Models;
using System.ComponentModel.DataAnnotations;

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
            return await _context.Cardapios.ToListAsync();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var cardapio = await _context.Cardapios.FindAsync(id);
            if (cardapio == null)
            {
                return NotFound();
            }

            _context.Cardapios.Remove(cardapio);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpPost]
        public async Task<ActionResult<Cardapio>> Post([FromForm] CardapioModel cardapioModel)
        {
            
            var guid = Guid.NewGuid().ToString();
            
            var cardapio = new Cardapio()
            {
                Nome = cardapioModel.Nome,
                Descricao = cardapioModel.Descricao,
                Valor = cardapioModel.Valor
            };
            
            // Verifica se a imagem foi fornecida
            if (cardapioModel.Imagem != null)
            {
                // Salvar arquivo
                var nomeArquivo = guid + Path.GetExtension(cardapioModel.Imagem.FileName);
                var urlImagem = Path.Combine("imagens", nomeArquivo);
                var caminhoArquivo = Path.Combine(Directory.GetCurrentDirectory(),"imagens", nomeArquivo);

                using (var stream = new FileStream(caminhoArquivo, FileMode.Create))
                {
                    await cardapioModel.Imagem.CopyToAsync(stream);
                }

                cardapio.Imagem = urlImagem;
            }
            

            // Adiciona o cardápio ao contexto e salva as alterações
            _context.Cardapios.Add(cardapio);
            await _context.SaveChangesAsync();

            // Retorna a resposta CreatedAtAction
            return CreatedAtAction("Get", new { id = cardapio.CardapioId }, cardapio);
        }

        public class CardapioModel
        {
            [Required]
            public string Nome { get; set; }

            [Required]
            public string Descricao { get; set; }

            [Required]
            public double Valor { get; set; }

            // Propriedade Imagem permite ser nula
            public IFormFile? Imagem { get; set; }
            
        }
    }
}