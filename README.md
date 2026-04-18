# Weather App

Aplicação web simples para consulta do clima atual de uma cidade, desenvolvida com **HTML**, **CSS** e **JavaScript puro**, consumindo dados da **WeatherAPI**.

## Visão geral do projeto

Este projeto foi construído como uma interface leve de consulta meteorológica em tempo real.

O usuário informa o nome de uma cidade, clica no botão de busca e a aplicação faz uma requisição à API para exibir:

- temperatura atual em °C;
- nome da cidade e região;
- país;
- umidade relativa do ar;
- velocidade do vento;
- ícone representando a condição climática.

A aplicação é inteiramente client-side, ou seja, não utiliza back-end próprio. Toda a lógica está concentrada no arquivo `index.js`, a estrutura visual no `index.html` e o estilo em `style.css`.

---

## Estrutura do projeto

```text
Weather-App-main/
├── images/
│   ├── humidity.png
│   ├── search.png
│   └── wind.png
├── index.html
├── index.js
└── style.css
```

## Finalidade de cada arquivo

### `index.html`
Responsável pela estrutura da interface.

Contém:
- campo de entrada para o nome da cidade;
- botão de busca;
- área de exibição de erro;
- área de exibição das informações do clima.

### `style.css`
Define o visual da aplicação.

Inclui:
- layout centralizado em formato de card;
- gradiente no fundo do card;
- estilização do campo de busca e botão;
- organização dos blocos de temperatura, cidade, país, umidade e vento;
- ocultação inicial da seção de clima e da mensagem de erro.

### `index.js`
Contém a lógica de funcionamento.

Implementa:
- montagem dinâmica da URL de consulta com base na cidade digitada;
- chamada assíncrona à WeatherAPI;
- leitura dos dados retornados pela API;
- atualização dos elementos do DOM com os dados do clima.

### `images/`
Armazena os ícones locais utilizados na interface para:
- busca;
- umidade;
- vento.

---

## Como a aplicação funciona

### 1. Entrada da cidade
O usuário digita o nome da cidade no campo de busca.

### 2. Montagem da URL
A função `getLocale()` lê o valor digitado e monta a URL da API no formato abaixo:

```js
http://api.weatherapi.com/v1/current.json?key=SUA_CHAVE&q=CIDADE&aqi=no
```

### 3. Requisição à API
Ao clicar no botão, a função `busca()` é chamada e faz o `fetch` da URL gerada.

### 4. Leitura do retorno
Os dados recebidos são extraídos principalmente de:

- `Busca.location`
- `Busca.current`

### 5. Exibição em tela
Os valores são inseridos diretamente no HTML por meio de `getElementById(...).innerHTML`.

### 6. Exibição do card de clima
Ao final da consulta, a seção `.weather`, que começa oculta, passa a ser exibida.

---

## Dados exibidos pela aplicação

A partir da resposta da API, o projeto mostra:

- **Temperatura:** `temp_c`
- **Cidade e região:** `location.name` + `location.region`
- **País:** `location.country`
- **Umidade:** `humidity`
- **Velocidade do vento:** `wind_kph`
- **Ícone da condição climática:** `condition.icon`

---

## Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **WeatherAPI**

---

## Como executar o projeto

Como é um projeto estático, basta abrir o arquivo `index.html` no navegador. Ainda assim, o mais recomendado é executar com um servidor local.

### Opção 1: abrir diretamente no navegador
Abra o arquivo `index.html`.

### Opção 2: rodar com Live Server no VS Code
1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html`.
4. Selecione **Open with Live Server**.

---

## Configuração da API

No arquivo `index.js`, existe uma chave definida diretamente no código:

```js
const apiKey = 'SUA_CHAVE_AQUI'
```

Para usar corretamente:
1. crie uma conta na WeatherAPI;
2. gere sua chave;
3. substitua a chave existente pela sua.

> Em produção, o ideal é não expor a chave diretamente no front-end.

---

## Pontos positivos do projeto

- estrutura simples e fácil de entender;
- boa separação entre HTML, CSS e JavaScript;
- interface visual agradável;
- ideal para estudo de consumo de API com JavaScript puro;
- implementação direta, sem dependências externas.

---

## Pontos de atenção e melhorias recomendadas

Durante a análise, alguns pontos merecem atenção:

### 1. Chave da API exposta no código
A chave está pública no arquivo JavaScript. Isso não é recomendado em aplicações reais.

### 2. Uso de `http` em vez de `https`
A URL da API foi montada com `http`. O ideal é usar `https`.

### 3. Falta de tratamento de erro
Existe uma `div.error`, mas o JavaScript atual não trata falhas de requisição ou cidade inválida de forma completa.

### 4. Seletor inválido para o botão
No código existe:

```js
const searchBtn = document.querySelector('searchBtn')
```

Esse seletor não encontra nenhum elemento, pois deveria usar uma classe, id ou tag válida, por exemplo:

```js
document.querySelector('.btn')
```

Além disso, essa variável não está sendo usada atualmente.

### 5. Eventos inline no HTML
A chamada das funções foi feita inline no HTML com `onclick` e `onblur`. Funciona, mas uma abordagem mais organizada seria registrar eventos pelo JavaScript.

### 6. Tratamento do ícone pode falhar
O código tenta transformar a URL do ícone retornado pela API em um caminho local dentro de `images/`. Isso pode falhar, porque a pasta local não contém os ícones climáticos retornados pela WeatherAPI.

### 7. Busca apenas pelo botão
Atualmente a busca depende do clique no botão. Uma melhoria interessante seria permitir busca ao pressionar `Enter`.

---

## Melhorias futuras sugeridas

- adicionar tratamento de erro visual para cidade inválida;
- trocar `http` por `https`;
- usar diretamente o ícone remoto retornado pela API;
- remover a chave do front-end e usar proxy ou back-end;
- implementar loading durante a consulta;
- permitir busca com tecla `Enter`;
- exibir sensação térmica, condição textual e hora local;
- tornar a interface mais responsiva em telas menores.

---

## Exemplo de uso

1. Digite uma cidade, por exemplo: `São Paulo`.
2. Clique no botão de busca.
3. O sistema consulta a API.
4. A tela exibe temperatura, localização, país, umidade e vento.

---

## Resumo interpretativo do projeto

Este projeto implementa uma **aplicação de clima básica para consulta em tempo real**, com foco em aprendizado de front-end e integração com API.

A solução foi construída sem frameworks, usando apenas tecnologias web nativas. O principal objetivo foi criar uma interface simples, bonita e funcional, capaz de buscar o clima atual de uma cidade e apresentar os dados ao usuário de forma visual.

Pela forma como o código está organizado, trata-se de um projeto introdutório ou intermediário para estudo de:

- manipulação do DOM;
- chamadas assíncronas com `fetch`;
- consumo de API REST;
- atualização dinâmica da interface.

---

## Licença

Este projeto não possui licença definida no material analisado. Caso seja publicado, recomenda-se adicionar uma licença como MIT.
