# Servidor

## Run server

```bash
yarn dev
```

# Documentação Configuração

## Instalação

```bash
yarn add express
yarn add typescript @types/express -D
yarn tsc --init
yarn add ts-node-dev -D
yarn add socket.io
yarn add @types/socket.io
```

## Editar o arquivo `tsconfig.json`

```json
{
    "target": "es2020",
    "strict": false,
}
```
## Criar `server.ts`
> `src/server.ts`

## Editar o arquivo `package.json`

```json
{
  "scripts": {
    "dev": "ts-node-dev src/server.ts"
  },
}
```
