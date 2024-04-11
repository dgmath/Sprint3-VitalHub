using Azure.Storage.Blobs;

namespace WebAPI.Utils.BlobStorage
{
    public class AzureBlobStorageHelper
    {
        public static async Task<string> UploadImageBlobAsync(IFormFile arquivo, string StringConexao, string NomeContainer)
        {
			try
			{
                if (arquivo != null)
                {
                    //gera um nome unico + extensao do aqrquivo
                    var blobName = Guid.NewGuid().ToString().Replace("-","")+Path.GetExtension(arquivo.FileName);

                    //cria uma instancia do blob Service e passa a string de conexao
                    var blobServiceClient = new BlobServiceClient(StringConexao);
                    
                    //obtem um container client usando o nome do container blob
                    var blobContainerClient = blobServiceClient.GetBlobContainerClient(NomeContainer);
                    
                    //obtem um blob client usando o blob name
                    var blobClient = blobContainerClient.GetBlobClient(blobName);

                    //abre o fluxo  de entrada do arquivo
                    using (var stream = arquivo.OpenReadStream())
                    {
                        //carrega o arquivo para o blob storage de forma assincrona
                        await blobClient.UploadAsync(stream, true);   
                    }

                    //retorna a uri do blob como uma string
                    return blobClient.Uri.ToString();
                }
                else
                {
                    //retorna a uri de uma imagem padrao caso nao tenha arquivo
                    return "imagen padrao";
                }
            }
			catch (Exception)
			{

				throw;
			}
        }
    }
}
