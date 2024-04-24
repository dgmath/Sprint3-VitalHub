using Microsoft.Azure.CognitiveServices.Vision.ComputerVision;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models;

namespace WebAPI.Utils.OCR
{
    public class OcrService
    {
        private readonly string _subscriptKey = "5cd8f390f90b4e8a9f4d3b7cb6ae6b05";
        private readonly string _endpoint = "https://cvvitalhubguilhermeg.cognitiveservices.azure.com/";

        public async Task<string> RecognizeTextAsync(Stream imageStream)
        {
            try
            {
                var client = new ComputerVisionClient(new ApiKeyServiceClientCredentials(_subscriptKey))
                {
                    Endpoint = _endpoint
                };

                var ocrResult = await client.RecognizePrintedTextInStreamAsync(true, imageStream);

                return ProcessRecognitionResult (ocrResult);
            }
            catch (Exception ex)
            {
                return "Erro ao reconhecer o texto" + ex.Message;
            }
        }

        private static string ProcessRecognitionResult(OcrResult result) 
        {
            try
            {
                string recognizedText = "";

                foreach (var region in result.Regions)
                {
                    foreach(var line in region.Lines)
                    {
                        foreach( var word  in line.Words)
                        {
                            recognizedText += word.Text + " ";
                        }
                        recognizedText += "\n";
                    }
                }

                return recognizedText;
            }
            catch (Exception ex)
            {
                return(ex.Message);
            }
        }
    }
}
