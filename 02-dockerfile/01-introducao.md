### Conhecendo o arquivo Dockerfile

O Dockerfile é um arquivo de texto usado pelo Docker para automatizar a criação de imagens de contêineres. Ele contém uma série de instruções que definem como o ambiente dentro do contêiner será configurado. Cada linha do Dockerfile é uma instrução que adiciona uma camada à imagem final. Aqui estão alguns dos principais comandos usados:

`FROM:` Define a imagem base, como `FROM ubuntu` ou `FROM node:alpine.`

`COPY/ADD:` Copia arquivos do seu sistema local para o contêiner.

`RUN:` Executa comandos no contêiner, como instalar pacotes.

`CMD:` Define o comando padrão a ser executado quando o contêiner iniciar.

`EXPOSE:` Especifica a porta que o contêiner irá expor.

`WORKDIR:` Define o diretório de trabalho dentro do contêiner.

#### Exemplo de Dockerfile

```yaml
# Usar imagem base do Node.js
FROM node:14

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos para o contêiner
COPY . .

# Instalar dependências
RUN npm install

# Expor porta da aplicação
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
```

#### Construindo uma imagem customizada usando Dockerfile

Vamos agora fazer um `build` de uma imagem customizada que irá rodar nosso servidor nodejs.

Acesse o diretório `cd 02-dockerfile/hello-node` e execute o comando:

```shell
docker build -t meu-nodejs .
```

O comando de `build` recebe a flag `-t` que atribui uma tag para a imagem que estamos buildando. O último parâmetro é a localização do Dockerfile que irá buildar a imagem, no nosso caso está na raiz `.`

Finalizado o build podemos verificar que a nova imagem já aparece na lista `docker images`

Agora podemos executar um container utilizando essa nossa imagem executando o comando:

```shell
docker run -p 3000:3000 meu-nodejs
```

Verifique o status do container com `docker ps`.

Agora pode pode acessar a url [http://localhost:3000/hello](http://localhost:3000/hello) e verificar que o servidor web está funcional.

Para parar a execução do container basta um `ctrl + c`.

#### Revise o Dockerfile

Para fixar melhor o que tratamos nessa prática, recomendo que você revise o Dockerfile da imagem que criamos. Cada linha executa uma função para construir o build.