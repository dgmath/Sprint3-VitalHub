using WebAPI.Domains;

namespace WebAPI.Interfaces
{
    public interface IClinicaRepository
    {
        public void Cadastrar(Clinica clinica);

        public List<Clinica> Listar();

<<<<<<< HEAD
        public Clinica BuscarPorId(Guid id);
=======
        public Clinica BuscarPorId(int id);
>>>>>>> 48e010a8294ab3bbcbc806bc4f0e06d34e68dfd1

        public List<Clinica> ListarPorCidade(string cidade);
    }
}
