using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList.WebApi.Context;
using WishList.WebApi.Domains;
using WishList.WebApi.Interfaces;

namespace WishList.WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        WishListContext ctx = new WishListContext();
        public Usuario BuscarPorId(int id)
        {
            return ctx.Usuarios.FirstOrDefault(c => c.IdUsuario == id);
        }

        public List<Usuario> Listar()
        {
            return ctx.Usuarios.ToList();
        }
    }
}
