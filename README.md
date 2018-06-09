# Ciclo de Pagamentos- Backend

O Sistema de ciclo de pagamentos tem por objetivo organizar as finanças mensais, ele irá exibir na no Dashboard da tela inicial tudo o que ja foi cadastrado no sistema de todos os meses consolidados. Nos Widgets Total de creditos, total de debitos, e valor consolidado.

Temos tambem o cadatro de ciclos de pagamentos que será organizado em abas onde posso listar ou incluir um novo ciclo de pagamento com seus creditos e debitos.

Na tela de inclusão podemos ainda incluir , excluir , clonar um registro


## Novidades da Versão 0.0.1

-[Clique aqui para ver as demais alterações](CHANGELOG.md)



#### Uso da api

### Contrato

```
const creditSchema = new mongoose.Schema({
    name: { type: String, required : true},
    value: {type: Number, min: 0, required: true}
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true},
    value: { type: Number, min:0 ,required: true},
    status: {type: String, required: false, uppercase: true,
    enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true},
    month: {type: Number, min: 1 , max: 12, required: true },
    year: { type: Number, min: 1970, max: 2100, required: true },
    credits:[creditSchema],
    debts: [debtSchema]
})

```
## Rotas da API

- Rota retorna todos os registros cadastrados
```
/api/billingCycles
```

- Rota retorna os registros conforme id informado
```
/api/billingCycles/{id}
```
- Rota o numero de registro para futura paginação do frontend
```
/api/billingCycles/count
```
- Rota retorna os dados consolidados
```
/api/billingSummary
```


## Configurações

> Lista com todas as configurações possíveis e seus defaults caso existam

- **PORT**: Porta na qual o servidor web ficará disponível (valor default: 3003);
- **SERVICE_URL**: URL em que o serviço esta disponivel (Valor default: localhost);


## Stack

Para a criação deste projeto utilizamos as seguintes tecnologias e frameworks:

- [node.js] - Plataforma de desenvolvimento
- [Express] - Web framwork minimalista desenvolvido em node.js
- [Docker CE] - Plataforma de deploy
- [New Relic] - Plataforma de monitoramento e performance
- [Circleci] - Integração contínua

## Instalação e execução da aplicação

### Testes
- Para executar a stack de testes basta executar o seguinte comando:
```sh
npm test
```

- Para executar somente os testes automatizados deve ser executado:
```sh
npm run mocha
```

## Executando local

```sh
https://github.com/ferpioli/softwareQualityDesign.git
npm i
npm run dev
```
