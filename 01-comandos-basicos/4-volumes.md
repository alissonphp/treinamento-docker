### Mapeando volumes

Maravilha! Já sabemos interagir com os nossos containers. Vamos agora mapear volumes entre a nossa máquina (host) e o container.

#### Destruindo o container

Antes de fazer nosso primeiro mapeamento de volumes, vamos excluir o container que criamos nos passos anteriores:

```shell
docker stop meu-nginx
docker rm meu-nginx
```

Os comandos são para finalizar a execução do container e destruí-lo, respectivamente.

Agora podemos recriar o container realizando o mapa de volumes com o seguinte comando:

```shell
docker run --name meu-nginx -v ./01-comandos-basicos/meu-site:/usr/share/nginx/html:ro -p 8080:80 -d nginx:latest
```

O comando é bem semelhante ao anterior, porém temos um parâmetro novo: `-v`. Ele é o responsável por mapear os volumes de disco entre o host e o container. Nesse nosso exemplo falamos pro Docker que o conteúdo que está na nossa pasta `meu-site` aqui no repositório vai mapear com o diretório `/usr/share/nginx/html` do container, que é onde ficam os arquivos expostos no servidor web do nginx. Com isso substituímos aquela mensagem de boas vindas por uma página customizada.

Acesse o [localhost:8080](http://localhost:8080) para visualizar.

A propriedade `:ro` no mapeamento informa que o volume mapeado será somente leitura (Read Only). 

Agora você pode modificar diretamente o arquivo `index.html` e ao atualizar o browser a página refletirá as modificações em necessidade de entrar no modo interativo do container.