namespace WebAPI.Utils.Mail
{
    public interface IEmailService
    {
        //metodo assincromo para envio de email
        Task SendEmailAsync(MailRequest mailRequest);
    }
}
