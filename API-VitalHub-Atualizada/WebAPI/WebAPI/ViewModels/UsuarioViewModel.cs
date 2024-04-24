using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebAPI.ViewModels
{
    public class UsuarioViewModel
    {
<<<<<<< HEAD:API-VitalHub-Atualizada/WebAPI/WebAPI/ViewModels/UsuarioViewModel.cs

        [NotMapped]
        [JsonIgnore]
        public IFormFile? Arquivo {  get; set; }    

=======
        [NotMapped]
        [JsonIgnore]
        public IFormFile? Arquivo { get; set; }
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990:API-VitalHub/WebAPI/WebAPI/ViewModels/UsuarioViewModel.cs
        public string? Foto { get; set; }
    }
}
