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
    public class ProdutoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProdutoController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Produto>> Get()
        {
            return await _context.Produtos.ToListAsync();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var produto = await _context.Produtos.FindAsync(id);
            if (produto == null)
            {
                return NotFound();
            }

            _context.Produtos.Remove(produto);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpPost]
        public async Task<ActionResult<Produto>> Post([FromForm] ProdutoDTO produtoModel)
        {
            
            var guid = Guid.NewGuid().ToString();
            
            var produto = new Produto()
            {
                Nome = produtoModel.Nome,
                Descricao = produtoModel.Descricao,
                Valor = produtoModel.Valor
            };
            
            // Verifica se a imagem foi fornecida
            if (produtoModel.Imagem != null)
            {
                // Salvar arquivo
                var nomeArquivo = guid + Path.GetExtension(produtoModel.Imagem.FileName);
                var urlImagem = Path.Combine("imagens", nomeArquivo);
                var caminhoArquivo = Path.Combine(Directory.GetCurrentDirectory(),"imagens", nomeArquivo);

                using (var stream = new FileStream(caminhoArquivo, FileMode.Create))
                {
                    await produtoModel.Imagem.CopyToAsync(stream);
                }

                produto.Imagem = urlImagem;
            }
            

            // Adiciona o cardápio ao contexto e salva as alterações
            _context.Produtos.Add(produto);
            await _context.SaveChangesAsync();

            // Retorna a resposta CreatedAtAction
            return CreatedAtAction("Get", new { id = produto.ProdutoId }, produto);
        }

       
    }
}