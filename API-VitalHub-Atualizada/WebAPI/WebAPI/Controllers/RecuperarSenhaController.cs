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
        public RecuperarSenhaController(VitalContext context, EmailSendingService sendMail)
        {
            _context = context; 
            _emailSendingService = sendMail;    
        }

        //[HttpPost]
        //public async Task<IActionResult> SendRecoveryCodePassword(string email)
        //{
        //    try
        //    {
        //        var user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);

        //        if (user == null)
        //        {
        //            return NotFound("Usuario nao encontrado");
        //        }

        //        //gerar um codigo com 4 algarismos
        //        Random random = new Random(); 
        //        int recoveryCode = random.Next(1000, 9999);

        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //}

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
                    return NotFound("Usuário não encontrado!");
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
    }
}
