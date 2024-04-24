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

        [HttpPut("AlterarFotoPerfil")]
        public async Task<IActionResult>  UploadProfileImage(Guid id, [FromForm] UsuarioViewModel user) 
        {
            try
            {
                Usuario usuarioBuscado = usuarioRepository.BuscarPorId(id);

                if (usuarioBuscado == null)
                {
                    return NotFound();
                }

                var connectionString = "DefaultEndpointsProtocol=https;AccountName=blobvitalhubguilhermeg;AccountKey=s2VgfWPbBwpEv0D6G5mRNfwtDSslf9o8GxJcJIFkdJOy7QueMUE0/ovnRbIWtF5+GK34tiwfKYbK+AStbzIPmQ==;EndpointSuffix=core.windows.net";

                var containerName = "containervitalhubguilhermeg";

                string fotoUrl = await AzureBlobStorageHelper.UploadImageBlobAsync(user.Arquivo!, connectionString, containerName);

                usuarioRepository.AtualizarFoto(id, fotoUrl);

                return Ok();

            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
