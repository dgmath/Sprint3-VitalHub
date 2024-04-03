using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using WebAPI.Domains;
using WebAPI.Interfaces;
using WebAPI.Repositories;
using WebAPI.ViewModels;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository usuarioRepository { get; set; }

        public UsuarioController()
        {
            usuarioRepository = new UsuarioRepository();
        }

        [Authorize]
        [HttpPut("AlterarSenha")]
        public IActionResult AlterarSenha(AlterarSenhaViewModel senhas)
        {
            Guid idUsuario = Guid.Parse(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

            bool correto = usuarioRepository.AlterarSenha(idUsuario, senhas.SenhaAntiga, senhas.SenhaNova);
            if (!correto)
                return Unauthorized("Senha incorreta");

            return Ok();
        }

        [HttpPost]
        public IActionResult Post(Usuario usuario)
        {
            Usuario user = new Usuario();
            user.Nome = usuario.Nome;
            user.Email = usuario.Email; 
            user.TipoUsuario = usuario.TipoUsuario;
            user.Senha = usuario.Senha;

            user.Paciente = new Paciente();

            user.Paciente.DataNascimento = usuario.Paciente.DataNascimento;
            user.Paciente.Rg = usuario.Paciente.Rg;
            user.Paciente.Cpf = usuario.Paciente.Cpf;

            user.Paciente.Endereco = new Endereco();

            user.Paciente.Endereco.Logradouro = usuario.Paciente.Endereco.Logradouro;
            user.Paciente.Endereco.Numero = usuario.Paciente.Endereco.Numero;
            user.Paciente.Endereco.Cep = usuario.Paciente.Endereco.Cep;
            user.Paciente.Endereco.Cidade = usuario.Paciente.Endereco.Cidade;

            usuarioRepository.Cadastrar(user);
            return Ok();
        }

    }
}
