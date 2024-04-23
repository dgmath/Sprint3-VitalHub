using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebAPI.ViewModels
{
    public class UsuarioViewModel
    {
        [NotMapped]
        [JsonIgnore]
        public IFormFile? File { get; set; }
        public string? Pic { get; set; }
    }
}
