using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList.WebApi.Domains;

namespace WishList.WebApi.Interfaces
{
    interface IDesejoRepository
    {
        List<Desejo> Listar();

        List<Desejo> ListarDeUmUsuario(int id);

        void Cadastrar(Desejo novoDesejo);
    }
}
