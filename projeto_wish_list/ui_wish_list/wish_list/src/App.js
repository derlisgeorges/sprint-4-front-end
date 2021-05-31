import { Component } from 'react';
import './App.css';

class Desejo extends Component
{
  constructor(props)
  {
    super(props)
    this.state =
    {
      desejos : [],
      nomeUsuario : '',
      desejoAlterado: '',
      idBuscar : ''
    }
  }

  listarDesejos = (elemento) =>
  {
    elemento.preventDefault();

    console.log('A função ta funcionando')

    fetch('https://localhost:5001/api/Desejo/' + this.state.idBuscar )

    .then(resposta => resposta.json())

    .then(caixa => this.setState({ desejos : caixa }))

    .catch( erro => console.log(erro) )
  }

  listarTodos = () =>
  {

    fetch('https://localhost:5001/api/Desejo')

    .then(awnser => awnser.json())

    .then(box => this.setState({ desejos : box }))

    .catch( erro => console.log(erro) )
  }

  atualizaBuscar = async (nome) => 
  {
    await this.setState({ idBuscar : nome.target.value })
    console.log(this.state.idBuscar)
  }

  atualizaDesejo = async (wish) => 
  {
    await this.setState({ desejoAlterado : wish.target.value })
    console.log(this.state.desejoAlterado)
  }

  atualizaNomeUsuario = async (user) => 
  {
    await this.setState({ nomeUsuario : user.target.value })
    console.log(this.state.nomeUsuario)
  }

  componentDidMount(){
    this.listarTodos();
  }

  limparCampos = () => {
    this.setState({
        nomeUsuario : '',
        desejoAlterado: '',
        idBuscar : ''
    })

    console.log('Os states foram resetados!')
}

  cadastrarDesejo = (event) => {

    event.preventDefault();

    fetch('https://localhost:5001/api/Desejo', 
    {
        method : 'POST',

        body : JSON.stringify( {
            descricaoDesejo : this.state.desejoAlterado,
            idUsuario : this.state.nomeUsuario 
          } ),

        headers : {
            "Content-Type" : "application/json"
        }
    })

    .then(console.log('Função realizada'))

    .catch(erro => console.log(erro))

    .then(this.listarTodos)

    .then(this.limparCampos)
}

  render()
  {
    return(
      <div>
        <main>
          <section>
            <form onSubmit={this.listarDesejos}>
              <div>
                <input
                type="text"
                value={this.state.idBuscar}
                onChange={this.atualizaBuscar}
                placeholder="Nome de Usuário"
                />
                <button type="submit" onClick={this.listarDesejos}> Localizar </button>
              </div>
            </form>
          </section>
          <section>
          <table>
            <thead>
              <tr>
                <th> DATA DE CRIAÇÃO </th>
                <th> NOME </th>
                <th> DESCRIÇÃO </th>
              </tr>
            </thead>
            <tbody>
              {  this.state.desejos.map( (objeto) => {           
                  return(
                    <tr key={objeto.idDesejo}>
                      <td>{objeto.dataCriacao}</td>
                      <td>{objeto.idUsuario}</td>
                      <td>{objeto.descricaoDesejo}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>        
        </section>
        <section>
          <div>
            <form onSubmit={this.cadastrarDesejo}>
              <div>
                  <input
                      type="number"
                      value={this.state.nomeUsuario}
                      onChange={this.atualizaNomeUsuario}
                      placeholder="Nome do Usuario"
                  />
                  <input
                      type="text"
                      value={this.state.desejoAlterado}
                      onChange={this.atualizaDesejo}
                      placeholder="Desejo"
                  />
                  <button type="submit"> Cadastrar </button>
              </div>
            </form>
          </div>
        </section>
        </main>
      </div>
    )
  }

}

export default Desejo;
