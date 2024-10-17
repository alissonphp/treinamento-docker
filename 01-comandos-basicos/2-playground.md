## Playground

Agora que já verificamos a instalalção e está tudo ok, vamos passar pelos comandos mais comnuns do Docker.

### Prática

Nessa prática iremos criar nosso primeiro container e realizar algumas ações com ele. 

Vamos seguir os passos a seguir:

#### Primeiro vamos listar todos os containers ativos:

```shell
docker ps
```

Em teoria não temos containers ainda, então a resposta será o seguinte cabeçalho:

```shell
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

Explicando os rótulos:

| COLUNA  |  DESCRIÇÃO |
|---|---|
| CONTAINER ID  | é o identificador único do container  |
| IMAGE | a imagem base utilizada pelo container |
| COMMAND | o comando executado na inicialização do container |
| CREATED | data de criação do container |
| STATUS | situação atual do container | 
| PORTS | as portas que foram externadas/vinculadas ao host | 
| NAMES | são os "apelidos" que, assim como o ID, identificam o container |

#### Rodando o primeiro container

Agora vamos, enfim, rodar nosso primeiro container!

Execute o comando a seguir para rodar um container do servidor web Nginx:

```shell
docker run --name meu-nginx -d -p 8080:80 nginx
```

Vamos verificar como está a situação do container executando o comando de listagem:

```shell
docker ps
```

Agora sim! A lista tem o container do nginx que acabamos de criar.

Acesse no seu browser o endereço: [localhost:8080](http://localhost:8080)

Se tudo deu certo você verá a mensagem de boas vindas do nginx!

Vamos entender o comando que executamos:

O `docker run` já sabemos o que faz. Vai criar um container. A flag `--name` define o nome que queremos dar para esse container com o objetivo de ajudar na identificação, ness caso chamamos de `meu-nginx`. A flag `-d` informa que esse comando vai ser executado em background, ou seja, não vai "bloquear" o terminal. O `-p` vai mapear as portas entre o container e o nossa máquina, aqui mapeamos a porta `:80` do container com a nossa `:8080`, por isso ao acessarmos o localhost:8080 conseguimos visualizar a mensagem de boas vindas do nginx. O último parâmetro do comando é o nome da imagem base que será utilizada pelo container que estamos criando, nesse caso é o `nginx`. Podemos também definir uma versão (tag) específica para a imagem, por default é a `:latest`.


#### Gerenciando o container

Agora já sabemos como executar e visualizar o status do container. Vamos ver algumas opções que podemos realizar:

Para parar o container (encerrar a execução) vamos executar o seguinte comando:

```shell
docker stop meu-nginx
```

Agora vamos listar os containers em execução no `docker ps`. Vimos que o `meu-nginx` não está mais na lista.

Vamos executar o comando `docker ps -a` para listar todos os containers, inclusive os que não estão sendo executados no momento. O output será algo parecido com:

```shell
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                          PORTS     NAMES
c8d15f5855b0   nginx     "/docker-entrypoint.…"   46 minutes ago   Exited (0) About a minute ago             meu-nginx
```

A qualquer momento podemos iniciar novamente o container executando o comando:

```shell
docker start meu-nginx
```

Lembrando que você pode usar o ID do container para identificar o alvo nesses comandos, porém é uma boa prática atribuir nomes para facilitar o gerenciamento.