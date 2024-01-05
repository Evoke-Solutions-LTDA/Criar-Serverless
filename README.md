## Manual de Criação de Projeto Serverless

### 1. Criar `package.json`

Execute o comando abaixo para iniciar o projeto:

```bash
npm init -y
```

### 2. Instalar Pacotes de Desenvolvimento

```bash
npm install serverless serverless-offline typescript @serverless/typescript @types/aws-lambda -D
```

### 3. Instalar Pacotes Normais

```bash
npm install aws-sdk serverless-plugin-typescript serverless-cors-plugin
```

### 4. Iniciar TypeScript

```bash
npx tsc --init
```

### 5. Adicionar `.gitignore`

Edite ou crie o arquivo `.gitignore` e adicione as seguintes entradas:

```gitignore

node_modules

.serverless

.esbuild
```

### 6. Criar Arquivo `serverless.ts`

Crie o arquivo `serverless.ts` utilizando o template necessário para o seu projeto.
