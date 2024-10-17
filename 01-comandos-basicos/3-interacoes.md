### Interagindo com o container

Agora que já sabemos como criar e gerenciar nosso container, vamos fazer algumas interações com ele.

#### Acessando o container no modo interativo

Certifique-se que o container que criamos no passo anterior esteja executando:

```shell
docker ps
docker start meu-nginx
```

Agora vamos acessar o container a partir do nosso terminal executando o seguinte comando:

```shell
docker exec -it meu-nginx /bin/bash
```

E agora estamos dentro do container do nosso `meu-nginx`. Podemos visualizar a lista de diretórios, pacotes instalados, etc.

Vamos navegar até a pasta do servidor web do `nginx` que possui a página de boas vindas que é apresentada quando acessamos o servidor:

```shell
 cd /usr/share/nginx/html/
```

E vamos alterar o arquivo `index.html`

```shell
nano index.html
```

Opááá!! O container não possui o pacote `nano` pra gente editar o arquivo. Sem problemas, vamos instalá-lo:

```shell
apt update && apt install nano
```

Altere o título `<h1>` para `bem vindo ao meu nginx` e feche o editor com `CTRL + X` e `enter` para confirmar as modificações.

Acesse novamente o servidor web em [localhost:8080](http://localhost:8080) e veja a sua modificação.

Saia do modo interativo do container digitando comando `exit`.