## Checagem
Levando em consideração que você já tenha concluído a etapa de requisitos necessários para o andamento desse mini treinamento, vamos verificar a instalação do Docker na máquina.

Execute o seguinte comando no terminal:

```shell
 docker version
 ```

 Caso esteja tudo ok, você deverá visualizar um output semelhante a esse:

 ```shell
 Client:
 Version:           27.2.0
 API version:       1.47
 Go version:        go1.21.13
 Git commit:        3ab4256
 Built:             Tue Aug 27 14:14:20 2024
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Desktop  ()
 Engine:
  Version:          27.2.0
  API version:      1.47 (minimum version 1.24)
  Go version:       go1.21.13
  Git commit:       3ab5c7d
  Built:            Tue Aug 27 14:15:15 2024
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.7.20
  GitCommit:        8fc6bcff51318944179630522a095cc9dbf9f353
 runc:
  Version:          1.1.13
  GitCommit:        v1.1.13-0-g58aa920
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
  ```

  Em caso de problemas, verifique se você inicializou o serviço do Docker e revise os passos da instalação.

  Para visualizar uma lista de informações mais detalhadas sobre a instância do Docker que está rodando na máquina, execute o comando:

  ```shell
  docker info
  ```