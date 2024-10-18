### Usando o docker compose

O Docker Compose é uma ferramenta usada para definir e gerenciar aplicações Docker multi-contêiner. Ele permite que você orquestre a execução de vários contêineres de forma simplificada, utilizando um único arquivo YAML, o docker-compose.yml, onde você pode descrever todos os serviços, redes e volumes que compõem sua aplicação.

#### Principais benefícios

- Multi-contêiner: Facilita a execução de aplicações que precisam de mais de um contêiner (por exemplo, um servidor web e um banco de dados).

- Automação: Com um único comando, você pode iniciar, parar e escalar toda a sua aplicação.
Ambientes isolados: Facilita a criação de ambientes de desenvolvimento e produção consistentes.

#### Estrutura do arquivo docker-compose.yml

Um arquivo `docker-compose.yml` define os serviços que compõem a aplicação, as redes usadas e os volumes para armazenamento de dados persistente. 

Exemplo:

```yaml
services:
  web:
    image: node:14
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    working_dir: /app
    command: npm start
  db:
    image: postgres
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password

```

#### Principais comandos

- `docker compose up`: Inicia os contêineres definidos no arquivo.
- `docker compose down`: Para e remove os contêineres, redes e volumes criados.
- `docker compose ps`: Lista os contêineres em execução