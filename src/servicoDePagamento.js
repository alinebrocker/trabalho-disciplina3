/*
Crie uma classe que possua dois métodos: 
um para realizar pagamento 
e outro para consultar o último pagamento. 
Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. 
Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. 
Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade categoria como 'cara', 
    caso contrário, a propriedade categoria ficará como 'padrão'. 
    O método de consultar trará apenas o último pagamento.
  
  ex. 
  const servicoDePagamento = new ServicoDePagamento();
  servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
  console.log(servicoDePagamento.consultarUltimoPagamento());
  {
     codigoBarras: '0987-7656-3475',
     empresa: 'Samar',
     valor: 56.87,
     categoria: 'cara'
  }
*/
export default class servicoDePagamento {

    listaDePagamentos;

    constructor() {
        this.listaDePagamentos = [];
    }

    // Método 1: realizar pagamento
    realizarPagamento(codigoDeBarras, empresa, valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            throw new Error('Valor inválido');
        }

        this.listaDePagamentos.push({
            codigoDeBarras,
            empresa,
            valor,
            categoria: valor > 100.00 ? 'cara' : 'padrão'
        });

        return 'Pagamento realizado!';
    }

    // Método 2: consultar o último pagamento
    consultarUltimoPagamento() {
        if (this.listaDePagamentos.length === 0) {
            throw new Error('Nenhum pagamento realizado');
        }

        return this.listaDePagamentos[this.listaDePagamentos.length - 1];
    }
}
