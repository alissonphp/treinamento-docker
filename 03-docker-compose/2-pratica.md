### Desenvolvimento local com docker compose

Agora que já sabemos como gerenciar containers, buildar imagens customizadas e executar nossas aplicações, vamos agora entender como o `docker compose` pode nos ajudar no dia a dia de desenvolvimento de software.


#### Cenário

Precisamos desenvolver uma aplicação em Java usando Spring Boot que precisa persistir alguns dados simples em um banco de dados postgres.

Também precisamos de uma interface visual para gerenciar o banco e validar se tá tudo ok.

1. Abra o projeto que está no diretório `meu-java` na sua IDE de preferência

2. Abra o arquivo `docker-compose.yml` e avalie a estrutura de services

3. Verifique a estrutura do componente Java

4. Execute o comando `docker compose up -d --build` para buildar e executar os containers especificados no compose

5. Agora vamos explorar todos os serviços que acabamos de criar;


Primeiro temos uma API Rest de Produtos em `http://localhost:8080/api/produtos` com os métodos de GET e POST para listarmos e criarmos produtos, respectivamente:

```shell
curl --location 'http://localhost:8080/api/produtos'
```

```shell
curl --location 'http://localhost:8080/api/produtos' \
--header 'Content-Type: application/json' \
--data '{
    "rotulo": "Produto A",
    "quantidade": 10,
    "preco": 20.5
}'
```

Essa api utiliza um banco postgres que subimos localmente e está disponível em `localhost:5432` e podemos conectá-lo via Dbeaver ou Datagrip, porém não queremos instalar nada pra validar o nosso banco, subimos um pgAdmin em `http://localhost:5050` e podemos conectá-lo ao nosso banco informando o host `db` e a porta `5432` com as credenciais que passamos no docker-compose.

Aproveitando o momento, subimos um Portainer em `http://localhost:9000` que nos fornece uma UI para gerenciar todas as estruturas do nosso Docker na máquina.

#### Outros casos de uso

Com `docker` e o `docker compose` podemos preparar os mais diversos ambientes de desenvolvimento localmente para trabalharmos em nossos projetos. Desde aplicações simples com poucos containers até cenários mais complexos que usam mensageria (rabbitmq, kafka, nats), ferramenta de SSO (keycloak), interação com storages (S3, minio), bancos em memória (redis), entre outras.