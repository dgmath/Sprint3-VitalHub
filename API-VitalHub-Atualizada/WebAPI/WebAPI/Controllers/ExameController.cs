using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Domains;
using WebAPI.Interfaces;
<<<<<<< HEAD:API-VitalHub-Atualizada/WebAPI/WebAPI/Controllers/ExameController.cs
=======
using WebAPI.Repositories;
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990:API-VitalHub/WebAPI/WebAPI/Controllers/ExameController.cs
using WebAPI.Utils.OCR;
using WebAPI.ViewModels;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExameController : ControllerBase
    {
<<<<<<< HEAD:API-VitalHub-Atualizada/WebAPI/WebAPI/Controllers/ExameController.cs
=======

>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990:API-VitalHub/WebAPI/WebAPI/Controllers/ExameController.cs
        private readonly IExameRepository _exameRepository;
        private readonly OcrService _ocrService;

        public ExameController(IExameRepository exameRepository, OcrService ocrService)
        {
            _exameRepository = exameRepository;
            _ocrService = ocrService;
        }

        [HttpPost("Cadastrar")]
<<<<<<< HEAD:API-VitalHub-Atualizada/WebAPI/WebAPI/Controllers/ExameController.cs
        public async Task<IActionResult> Post([FromForm] ExameViewModel exameViewModel) 
=======

        public async Task<IActionResult> Post([FromForm] ExameViewModel exameViewModel)
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990:API-VitalHub/WebAPI/WebAPI/Controllers/ExameController.cs
        {
            try
            {
                if (exameViewModel.Imagem == null || exameViewModel == null)
                {
<<<<<<< HEAD:API-VitalHub-Atualizada/WebAPI/WebAPI/Controllers/ExameController.cs
                    return BadRequest("nenhuma imagem fornecida");
                }

                using (var stream = exameViewModel.Imagem.OpenReadStream())
=======
                    return BadRequest("Nenhuma imagem fornecida");   
                }

                using(var stream = exameViewModel.Imagem.OpenReadStream())
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990:API-VitalHub/WebAPI/WebAPI/Controllers/ExameController.cs
                {
                    var result = await _ocrService.RecognizeTextAsync(stream);

                    exameViewModel.Descricao = result;

                    Exame exame = new Exame();
<<<<<<< HEAD:API-VitalHub-Atualizada/WebAPI/WebAPI/Controllers/ExameController.cs
                    exame.Descricao = exameViewModel.Descricao;
                    exame.ConsultaId = exameViewModel.ConsultaId;
                    
=======

                    exame.Descricao = exameViewModel.Descricao;
                    exame.ConsultaId = exameViewModel.consultaId;

>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990:API-VitalHub/WebAPI/WebAPI/Controllers/ExameController.cs
                    _exameRepository.Cadastrar(exame);

                    return Ok(exame);
                }
            }
            catch (Exception ex)
            {
<<<<<<< HEAD:API-VitalHub-Atualizada/WebAPI/WebAPI/Controllers/ExameController.cs
                return BadRequest(ex.Message);
            }
            
        }

        [HttpGet("BuscarPorIdConsulta")]
        public IActionResult GetByIdConsult( Guid idConsulta )
=======
                  return BadRequest(ex.Message);
            }
        }

        [HttpGet("BuscarPorIdConsulta")]
        
        public IActionResult GetByIdConsult(Guid idConsulta)
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990:API-VitalHub/WebAPI/WebAPI/Controllers/ExameController.cs
        {
            try
            {
                List<Exame> lista = _exameRepository.BuscarPorIdConsulta(idConsulta);
<<<<<<< HEAD:API-VitalHub-Atualizada/WebAPI/WebAPI/Controllers/ExameController.cs

=======
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990:API-VitalHub/WebAPI/WebAPI/Controllers/ExameController.cs
                return Ok(lista);
            }
            catch (Exception ex)
            {
<<<<<<< HEAD:API-VitalHub-Atualizada/WebAPI/WebAPI/Controllers/ExameController.cs

                return BadRequest(ex.Message);
            }
           
=======
                return BadRequest(ex.Message);
            }

>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990:API-VitalHub/WebAPI/WebAPI/Controllers/ExameController.cs
        }
    }
}