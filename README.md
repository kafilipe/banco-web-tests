# Banco Web Tests

Este projeto é uma suíte de testes automatizados para a aplicação web bancária, desenvolvida com Cypress e JavaScript como parte do estudo do módulo de automação de testes com Cypress da Mentoria 2.0 do Julio de Lima.

## Objetivo do projeto

O objetivo deste repositório é validar cenários de login e transferência bancária na aplicação web, reforçando boas práticas de automação com:

- testes end-to-end (E2E);
- estrutura organizada por arquivos de teste;
- uso de Custom Commands para reutilização e manutenção;
- geração de relatórios executivos com Cypress Mochawesome Reporter.

## O que compõe o projeto

A estrutura do projeto é organizada da seguinte forma:

- `cypress/e2e/`: arquivos com os cenários de teste.
  - `login.cy.js`: testes de autenticação.
  - `transferencia.cy.js`: testes de transferência.
- `cypress/support/commands/`: implementação dos Custom Commands.
  - `common.js`: comandos auxiliares gerais.
  - `login.js`: comandos relacionados ao fluxo de login.
  - `transferencia.js`: comandos relacionados ao fluxo de transferência.
- `cypress/fixtures/`: dados de teste em formato JSON.
  - `credenciais.json`: credenciais válidas e inválidas para os cenários.
- `cypress.config.js`: configuração do Cypress, incluindo a URL base e o reporter de relatórios.
- `package.json`: dependências e scripts de execução do projeto.

## Pré-requisitos

Antes de executar os testes, é necessário que os seguintes projetos estejam em execução:

- API: https://github.com/juliodelimas/banco-api
- Aplicação web: https://github.com/juliodelimas/banco-web

Além disso, a aplicação web deve estar disponível em:

- `http://localhost:4000`

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/kafilipe/banco-web-tests.git
cd banco-web-tests
```

2. Instale as dependências:

```bash
npm install
```

## Execução dos testes

### Executar todos os testes em modo headless

```bash
npm test
```

### Executar os testes com interface visual (headed)

```bash
npm run cy:headed
```

### Abrir o Cypress Test Runner

```bash
npm run cy:open
```

## Relatórios

Os testes geram relatórios HTML através do plugin `cypress-mochawesome-reporter`.

Os arquivos ficam disponíveis em:

- `cypress/reports/html/`

## Testes implementados

### Login

O arquivo `login.cy.js` cobre os seguintes cenários:

- login com credenciais válidas;
- login com credenciais inválidas;
- validação da mensagem de erro exibida no toast.

### Transferência

O arquivo `transferencia.cy.js` cobre os seguintes cenários:

- transferência com dados válidos;
- tentativa de transferência acima de R$ 5.000,00 sem token de autenticação;
- validação da mensagem exibida ao usuário.

## Custom Commands

Os comandos customizados foram organizados em arquivos separados para facilitar a reutilização e a leitura do código.

### Comandos disponíveis

- `verificarMensagemNoToast(mensagem)`: valida uma mensagem exibida no toast.
- `selecionarOpcaoNaCombobox(labelDoCampo, opcao)`: seleciona uma opção em uma combobox pelo label.
- `fazerLoginComCredenciaisValidas()`: realiza login com credenciais válidas.
- `fazerLoginComCredenciaisInvalidas()`: realiza login com credenciais inválidas.
- `realizarTransferencia(contaOrigem, contaDestino, valor)`: executa o fluxo completo de transferência.

## Observações

- Os dados sensíveis e de teste estão armazenados na pasta `cypress/fixtures`.
- A automação foi pensada para ser simples, legível e reutilizável, seguindo o padrão de organização utilizado durante as aulas de Cypress.
- Para que os testes sejam executados corretamente, a API e a aplicação web precisam estar disponíveis e acessíveis na configuração definida no projeto.
