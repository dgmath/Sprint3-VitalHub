using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebAPI.ViewModels
{
    public class ExameViewModel
    {
<<<<<<< HEAD:API-VitalHub-Atualizada/WebAPI/WebAPI/ViewModels/ExameViewModel.cs
        public Guid ConsultaId { get; set; }
=======
        public Guid consultaId { get; set; }
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990:API-VitalHub/WebAPI/WebAPI/ViewModels/ExameViewModel.cs

        [NotMapped]
        [JsonIgnore]
        public IFormFile? Imagem { get; set; }

        public string? Descricao { get; set; }
    }
}
