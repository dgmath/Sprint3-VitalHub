// Funcao para formatar qualquer tipo de dados
export const UseMask = (mascara, valor) => {
    if (valor) {
      let indexValor = 0;
  
      // Canvertendo o valor da mascara para uma lista
      mascara = Array.from(mascara);
  
      // String para receber os dados formatados
      let textoFormatado = "";
  
      // Percorrendo todos os caracteres da mascara
      for (let index = 0; index < mascara.length; index++) {
        if (mascara[index] === "#") {
          if (valor[indexValor] !== undefined) {
            textoFormatado += valor[indexValor];
            indexValor++;
          } else {
            break;
          }
        } else {
          textoFormatado += mascara[index];
        }
      }
  
      // Devolvendo o texto formatado
      return textoFormatado;
  
    } else {
      return valor;
    }
  };
  