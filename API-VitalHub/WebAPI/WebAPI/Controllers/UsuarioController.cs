using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using WebAPI.Domains;
using WebAPI.Interfaces;
using WebAPI.Repositories;
using WebAPI.Utils.BlobStorage;
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

        [HttpPut("AlterarSenha")]
        public IActionResult UpdatePassword(string email, AlterarSenhaViewModel senha)
        {
            try
            {
                usuarioRepository.AlterarSenha(email, senha.SenhaNova!);

                return Ok("Senha alterada com sucesso !");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("BuscarPorId")]
        public IActionResult GetById(Guid id)
        {
            try
            {
                return Ok(usuarioRepository.BuscarPorId(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("AlterarFoto")]

        //UsuarioViewModel é um arquivo por isso fromform 
        //Funcionalidade para atualizar a foto de perfil do usuário
        public async Task<IActionResult> UploadProfileImage(Guid id, [FromForm] UsuarioViewModel user)
        {
            try
            {
                //Buscar usuario
                Usuario usuarioBuscado = usuarioRepository.BuscarPorId(id);

                if (usuarioBuscado == null)
                {
                    return NotFound("Usuário não encontrado");
                }

                //Lógica para o upload da imagem

                //Define o nome a partir do seu container no blob
                var containerName = "containervitalhubmatheusd";

                //Define a string de conexão
                var connectionString = "DefaultEndpointsProtocol=https;AccountName=blobvitalhubmatheusd;AccountKey=U+R/WL4jO+90TLOXcykF18666979z4yqxY0BGj+qNRDD2yW4aTC2JnQT6Z/dgbhraqNziHtYZ+zC+AStdUsGfA==;EndpointSuffix=core.windows.net";

                string fotoUrl = await AzureBlobStorageHelper.UploadImageBlobAsync(user.File!, connectionString, containerName);

                //Fim da lógica para upload de imagem

                usuarioRepository.AtualizarFoto(id, fotoUrl);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
