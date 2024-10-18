# Usar uma imagem base oficial do Node.js
FROM node:14

# Criar e definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código para o contêiner
COPY . .

# Expor a porta 3000 para acessar o servidor
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]