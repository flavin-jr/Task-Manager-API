# Task Manager API

## Descrição
Task Manager API é uma aplicação backend para gerenciamento de tarefas, desenvolvida com Node.js, Express e MongoDB.

## Tecnologias Utilizadas
- Node.js
- Express
- MongoDB
- Mongoose

## Funcionalidades
- Criar nova task
- Listar todas as tasks
- Buscar task por ID
- Deletar task

## Pré-requisitos
- Node.js
- MongoDB

## Instalação
1. Clone o repositório
```bash
git clone https://seu-repositorio/task-manager-api.git
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
- Crie um arquivo `.env`
- Adicione a conexão do MongoDB

4. Inicie o servidor
```bash
npm start
```

## Rotas da API
- `POST /tasks`: Criar nova task
- `GET /tasks`: Listar todas as tasks
- `GET /tasks/:id`: Buscar task específica
- `DELETE /tasks/:id`: Deletar task

## Contribuição
1. Faça um fork do projeto
2. Crie sua branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença
Este projeto está sob a licença MIT.
