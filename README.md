## Manual de Criação de Projeto Serverless

### 1. Criar `package.json`

Execute o comando abaixo para iniciar o projeto:

```bash
npm init -y
```

Adicionar ao script "start": "serverless offline start",

### 2. Instalar Pacotes de Desenvolvimento

```bash
npm install ts-node serverless serverless-offline typescript @serverless/typescript @types/aws-lambda serverless-esbuild serverless-domain-manager json-schema-to-ts @middy/core @middy/http-json-body-parser -D
```

Sobre o Middy

"O Middy facilita a criação e a utilização de middlewares em aplicações Node.js baseadas em AWS Lambda e AWS HTTP API Gateway. Ele oferece um conjunto de utilitários e padrões para desenvolver middlewares de forma estruturada, promovendo a modularidade e a reutilização de código."

Sobre o serverless-esbuild

"Facilita a criação de de serverless com aws lambda"

### 3. Instalar Pacotes Normais

```bash
npm install aws-sdk serverless-plugin-typescript serverless-cors-plugin
```

### 4. Iniciar TypeScript

```bash
npx tsc --init
```
Copiar o template `tsconfig.json`

### 5. Adicionar `.gitignore`

Edite ou crie o arquivo `.gitignore` e adicione as seguintes entradas:

```gitignore

node_modules

.serverless

.esbuild
```

### 6. Criar Arquivo `serverless.ts`

Crie o arquivo `serverless.ts` utilizando o template necessário para o seu projeto.

### 7. Criar estrutura de Arquivos

```javascript
📦src
 ┣ 📂functions
 ┃ ┣ 📂helloWorld
 ┃ ┃ ┣ 📜handler.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜schema.ts
 ┃ ┗ 📜index.ts
 ┣ 📂libs
 ┃ ┣ 📜api-gateway.ts
 ┃ ┣ 📜handler-resolver.ts
 ┃ ┗ 📜lambda.ts

```

### 8. Iniciar Dominio

```bash
 serverless create_domain
```

### 9. Fazer Deploy

```bash
 serverless deploy --stage production
```


# Informações importantes

### 1. Quando usar o AWS Lambda:

-**Arquiteturas Event-Driven:** O Lambda é eficaz para aplicações que precisam responder a eventos específicos, como solicitações HTTP de um API Gateway, mudanças em um banco de dados DynamoDB, uploads de arquivos no S3, entre outros.

-**Operações de Backend:** Para operações de backend de aplicações ou serviços, onde não é necessário manter um servidor ativo constantemente.

### 2. Quando não usar o AWS Lambda:

-**Alto Volume de Solicitações e Longa Duração de Execução:**  Se suas funções Lambda são executadas frequentemente e por longos períodos, os custos podem aumentar rapidamente.

-**Uso de Grande Quantidade de Memória:**  Se suas funções Lambda são executadas frequentemente e por longos períodos, os custos podem aumentar rapidamente.

-**Uso Excessivo Além do Nível Gratuito:**  mbora a AWS ofereça um nível gratuito que inclui um milhão de solicitações por mês e 400.000 GB-segundos de tempo de computação, ultrapassar esses limites resultará em cobranças.