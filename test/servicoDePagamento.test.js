import ServicoDePagamento from '../src/servicoDePagamento.js';
import assert from 'node:assert';

describe('Classe de Servico de Pagamento', () => {
    it('Teste 1: Validar que o pagamento é registrado na lista de pagamentos', function () {
        //Arrange
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

    it('Teste 2: Validar consulta do último pagamento registrado com categoria /cara/', () => {

        //Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        const resultado = servicoDePagamento.realizarPagamento(
            '0987-7656-3475',
            'Samar',
            156.87
        );
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        //Assert            
        assert.equal(ultimoPagamento.codigoDeBarras, '0987-7656-3475');
        assert.equal(ultimoPagamento.empresa, 'Samar');
        assert.equal(ultimoPagamento.valor, 156.87);
        assert.equal(ultimoPagamento.categoria, 'cara');
    });

    it('Teste 3: Validar consulta do último pagamento registrado com categoria /padrão/', () => {

        //Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        const resultado = servicoDePagamento.realizarPagamento(
            '1234-5678-9000',
            'Samar',
            99.99
        );
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        //Assert            
        assert.equal(ultimoPagamento.codigoDeBarras, '1234-5678-9000');
        assert.equal(ultimoPagamento.empresa, 'Samar');
        assert.equal(ultimoPagamento.valor, 99.99);
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });
});