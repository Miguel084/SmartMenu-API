using Microsoft.EntityFrameworkCore;
using SmartMenu.Server.Models;

namespace SmartMenu.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public ApplicationDbContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public object ClienteRestaurante { get; internal set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sqlite database
            options.UseSqlite(Configuration.GetConnectionString("ApplicationDbContext"));
        }
        public DbSet<Cardapio> Cardapios { get; set; }
        public DbSet<Cliente> Clientes { get; set; }

    }
}
