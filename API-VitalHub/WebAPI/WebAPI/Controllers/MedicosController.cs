using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using WebAPI.Domains;
using WebAPI.Interfaces;
using WebAPI.Repositories;
using WebAPI.Utils.BlobStorage;
using WebAPI.Utils.Mail;
using WebAPI.ViewModels;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicosController : ControllerBase
    {
        private IMedicoRepository _medicoRepository;

        private readonly EmailSendingService _emailSendingService;
        public MedicosController(EmailSendingService emailSendingService)
        {
            _medicoRepository = new MedicoRepository();

            _emailSendingService = emailSendingService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_medicoRepository.ListarTodos());
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
                return Ok(_medicoRepository.BuscarPorId(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        //[HttpPost]
        //public IActionResult Post([FromForm]MedicoViewModel medicoModel)
        //{
        //    Usuario user = new Usuario();
        //    user.Nome = medicoModel.Nome;
        //    user.Email = medicoModel.Email;
        //    user.TipoUsuarioId = medicoModel.IdTipoUsuario;
        //    user.Foto = medicoModel.Foto;
        //    user.Senha = medicoModel.Senha;

        //    user.Medico = new Medico();
        //    user.Medico.Crm = medicoModel.Crm;
        //    user.Medico.EspecialidadeId = medicoModel.EspecialidadeId;


        //    user.Medico.Endereco = new Endereco();
        //    user.Medico.Endereco.Logradouro = medicoModel.Logradouro;
        //    user.Medico.Endereco.Numero = medicoModel.Numero;
        //    user.Medico.Endereco.Cep = medicoModel.Cep;

        //    _medicoRepository.Cadastrar(user);

        //    return Ok();
        //}


        [HttpPost]
        public async Task<IActionResult> Post([FromForm] MedicoViewModel medicoModel)
        {
            try
            {
                Usuario user = new Usuario();
                user.Nome = medicoModel.Nome;
                user.Email = medicoModel.Email;
                user.TipoUsuarioId = medicoModel.IdTipoUsuario;

                //Aqui iremos configurar e utilizar o método de upload image

                //define o nome do container do blob
                var containerName = "containervitalhubguilhermeg";

                //define a string de conexao
                var connectionString = "DefaultEndpointsProtocol=https;AccountName=blobvitalhubguilhermeg;AccountKey=s2VgfWPbBwpEv0D6G5mRNfwtDSslf9o8GxJcJIFkdJOy7QueMUE0/ovnRbIWtF5+GK34tiwfKYbK+AStbzIPmQ==;EndpointSuffix=core.windows.net";

                user.Foto = await AzureBlobStorageHelper.UploadImageBlobAsync(medicoModel.File!, connectionString, containerName);

                user.Senha = medicoModel.Senha;

                user.Medico = new Medico();
                user.Medico.Crm = medicoModel.Crm;
                user.Medico.EspecialidadeId = medicoModel.EspecialidadeId;


                user.Medico.Endereco = new Endereco();
                user.Medico.Endereco.Logradouro = medicoModel.Logradouro;
                user.Medico.Endereco.Numero = medicoModel.Numero;
                user.Medico.Endereco.Cep = medicoModel.Cep;

                _medicoRepository.Cadastrar(user);

                await _emailSendingService.SendWelcomeEmail(user.Email!, user.Nome!);

                return Ok(user);
            }
            catch (Exception)
            {

                throw;
            }
        }



        [HttpGet("BuscarPorIdClinica")]
        public IActionResult GetByIdClinica(Guid id)
        {
            try
            {
                return Ok(_medicoRepository.ListarPorClinica(id)); ;

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("BuscarPorData")]
        public IActionResult GetByDate(DateTime data, Guid id)
        {
            try
            {
                return Ok(_medicoRepository.BuscarPorData(data, id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize]
        [HttpPut]
        public IActionResult UpdateProfile(MedicoViewModel medico)
        {
            try
            {
                Guid idUsuario = Guid.Parse(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(_medicoRepository.AtualizarPerfil(idUsuario, medico));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}