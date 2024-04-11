
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;


namespace WebAPI.Utils.Mail
{
    public class EmailService : IEmailService
    {
        private readonly EmailSettings emailSettings;

        //construtor que recebe a dependenceinjection de EmailSettings
        public EmailService(IOptions<EmailSettings>options)
        {
            emailSettings = options.Value;
        }

        //metodo para envio de email
        public async Task SendEmailAsync(MailRequest mailRequest)
        {
            try
            {
                //objeto que representa o email
                var email = new MimeMessage();

                //define o remetente do email
                email.Sender = MailboxAddress.Parse(emailSettings.Email);

                //define o destinatario do email
                email.To.Add(MailboxAddress.Parse(mailRequest.ToEmail));

                //define o assunto do email
                email.Subject= mailRequest.Subject;

                //cria o corpo do email
                var builder = new BodyBuilder();
                
                //define o corpo do email como html
                builder.HtmlBody = mailRequest.Body;

                //define o corpo do email no objeto MimeMessage
                email.Body = builder.ToMessageBody();

                //cria um client SMTP para envio de email
                using (var smtp = new SmtpClient())
                {
                    //conecta-se ao servidor SMTP usando os dados do emailSettings
                    smtp.Connect(emailSettings.Host, emailSettings.Port, SecureSocketOptions.StartTls);

                    //authentica-se no servidor SMTP usando os dados de emails=Settings
                    smtp.Authenticate(emailSettings.Email, emailSettings.Password);

                    //envia o email
                    await smtp.SendAsync(email);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
