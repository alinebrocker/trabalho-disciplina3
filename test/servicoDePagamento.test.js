//import servicoDePagamento from '../src/servicoDePagamento.js';
import ServicoDePagamento from '../src/servicoDePagamento.js';
import assert from 'node:assert';

describe('Classe de Servico de Pagamento', () => {
    it('Teste 1 - Validar que o pagamento é registrado na lista de pagamentos', function () {
        //Arrange
        //const servicoDePagamento = new servicoDePagamento();
        const servicoDePagamento = new ServicoDePagamento();
        const registro = ['0987-7656-3475', 'Samar', 156.87, 'cara'];

        // Act
        const resultado = servicoDePagamento.realizarPagamento(
            '0987-7656-3475',
            'Samar',
            156.87
        );

        //Assert            
        assert.equal(resultado, 'Pagamento realizado!');
    })
});

/*it('Validar que o pagamento é registrado e consultar esse unico/ultimo pagamento', () => {

    //Arrange
    const servicoDePagamento = new ServicoDePagamento();
    servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);

    //Act
    console.log(ultimoPagamento);

    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    console.log(ultimoPagamento);

    assert.deepStrictEqual(ultimoPagamento, {
        codigoBarras: '0987-7656-3475',
        empresa: 'Samar',
        valor: 56.87,
        categoria: 'cara'
    });
    
const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

assert.equal(ultimoPagamento.codigoDeBarras, '0987-7656-3475');
assert.equal(ultimoPagamento.empresa, 'Samar');
assert.equal(ultimoPagamento.valor, 156.87);
assert.equal(ultimoPagamento.categoria, 'cara');


});*/
