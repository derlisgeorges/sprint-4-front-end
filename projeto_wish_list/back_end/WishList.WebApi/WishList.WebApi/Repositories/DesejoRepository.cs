using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList.WebApi.Context;
using WishList.WebApi.Domains;
using WishList.WebApi.Interfaces;

namespace WishList.WebApi.Repositories
{
    public class DesejoRepository : IDesejoRepository
    {
        WishListContext ctx = new WishListContext();
        public void Cadastrar(Desejo novoDesejo)
        {
            novoDesejo.DataCriacao = DateTime.Now;

            ctx.Desejos.Add(novoDesejo);

            ctx.SaveChanges();
        }

        public List<Desejo> Listar()
        {
            return ctx.Desejos
                .ToList();
        }

        public List<Desejo> ListarDeUmUsuario(int id)
        {
            return ctx.Desejos
                .Where(d => d.IdUsuario == id)
                .ToList();
        }
    }
}
