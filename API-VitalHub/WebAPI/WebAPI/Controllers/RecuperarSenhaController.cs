using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Contexts;
using WebAPI.Domains;
using WebAPI.Utils.Mail;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecuperarSenhaController : ControllerBase
    {
        private readonly VitalContext _context;
        private readonly EmailSendingService _emailSendingService;

        public RecuperarSenhaController(VitalContext context, EmailSendingService emailSendingService)
        {
            _context = context;
            _emailSendingService = emailSendingService;
        }

        [HttpPost]

        //Como parâmtro teremos o email que o código será enviado
        public async Task<IActionResult> SendRecoveryCodePassword(string email)
        {
            try
            {
                //Verificando se o email é o mesmo recebido salvando dentro de uma variável
                Usuario? user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);

                if (user == null)
                {
<<<<<<< HEAD:API-VitalHub-Atualizada/WebAPI/WebAPI/Controllers/RecuperarSenhaController.cs
                    return NotFound("Usuário não encontrado!");
=======
                    return NotFound("Usuário não encontrado!");   
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990:API-VitalHub/WebAPI/WebAPI/Controllers/RecuperarSenhaController.cs
                }

                //Se for encontrado, vamos gerar um códico com 4 algarismos através do Random
                //Objeto instânciado
                Random random = new Random();

                //Códigos de 1000 até 9999 suportando apenas 4 algarismos
                int recoveryCode = random.Next(1000, 9999);

                user.CodRecupSenha = recoveryCode;

                //aguardo as alteracoes do banco
                await _context.SaveChangesAsync();

                await _emailSendingService.SendRecovery(user.Email, recoveryCode);
                return Ok("Código enviado com sucesso");

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }


        //Crie um controller para validar o codigo enviado para o email
        //Se o código for igual, resete o codigo anterior no banco e devolva um status code informando se o código é valido

<<<<<<< HEAD:API-VitalHub-Atualizada/WebAPI/WebAPI/Controllers/RecuperarSenhaController.cs
        [HttpPost("RecoverPasswordWhithCode")]
=======
        [HttpPost("ValidarCodigo")]
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990:API-VitalHub/WebAPI/WebAPI/Controllers/RecuperarSenhaController.cs

        public async Task<IActionResult> ValidationCode(string email, int codigo)
        {
            try
            {
                //Verificando se o email é o mesmo recebido salvando dentro de uma variável
                Usuario? user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);

                if (user == null || user.CodRecupSenha != codigo)
                {
                    return NotFound("Usuario não encontrado");
                }


                user.CodRecupSenha = null;

                await _context.SaveChangesAsync();
                return Ok("Código correto");
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
<<<<<<< HEAD:API-VitalHub-Atualizada/WebAPI/WebAPI/Controllers/RecuperarSenhaController.cs
}
=======
}
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990:API-VitalHub/WebAPI/WebAPI/Controllers/RecuperarSenhaController.cs
