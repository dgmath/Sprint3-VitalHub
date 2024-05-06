﻿using Azure.Storage.Blobs.Models;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models;

namespace WebAPI.Utils.OCR
{
    public class OcrService
    {

        private readonly string _subscriptKey = "5cd8f390f90b4e8a9f4d3b7cb6ae6b05";
        private readonly string _endPoint = "https://cvvitalhubguilhermeg.cognitiveservices.azure.com/";

        public async Task<string> RecognizeTextAsync(Stream imageStream)
        {
            try
            {
                //Credenciais do cliente
                var client = new ComputerVisionClient(new ApiKeyServiceClientCredentials(_subscriptKey))
                {
                    //Passando o endPoint
                    Endpoint = _endPoint
                };

                var ocrResult = await client.RecognizePrintedTextInStreamAsync(true, imageStream);

                return ProcessRecognitionResult(ocrResult);
            }
            catch (Exception ex)
            {
                return "Erro ao recvonhecer o texto" + ex.Message;
            }
        }

        private static string ProcessRecognitionResult(OcrResult result)
        {
            try
            {
                string recognizeText = "";
                
                //Acessando as regiões
                foreach (var region in result.Regions)
                {
                    //Acessando As linhas
                    foreach (var line in region.Lines)
                    {
                        //Acessando as palavras
                        foreach (var word in line.Words)
                        {
                            recognizeText += word.Text + " ";
                        }
                        //Quebra de linha
                        recognizeText += "\n";
                    }
                }
                return recognizeText;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
;