### Gerenciando imagens

Até aqui já passamos pelos principais comandos para o gerenciamento de containers. Agora vamos ver alguns comandos para gerenciar as imagens que os containers utilizam.


#### Listando as imagens baixadas

Você pode ver a lista de todas as imagens baixadas executando o comando

```shell
docker images
```

Você terá um output parecido com esse:

```shell
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
nginx        latest    3b25b682ea82   2 weeks ago   192MB
```

Por padrão o Docker utiliza o [docker hub](hub.docker.com) como repositório de imagens. Lá você pode pesquisar e utilizar várias imagens para os mais diversos objetivos.

Para baixar uma imagem específica você pode executar o comando:

```shell
docker pull <nome da imagem>:<versão>
```

por exemplo: `docker pull nginx:latest`

Para remover/excluir uma imagem baixada basta executarmos o comando:

```shell
docker image rm nginx
```

Ao executar o comando de remoção o Docker irá apagar todas as camadas da imagem baixada.