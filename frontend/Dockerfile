# Etapa de construção (build-stage)
FROM node:18-alpine as build-stage
WORKDIR /src/app                      # Define o diretório de trabalho correto como /src/app
COPY package*.json ./                 # Copia package.json e package-lock.json para /src/app
COPY . .                              # Copia todo o conteúdo do diretório frontend para /src/app
RUN npm install                       # Instala as dependências
RUN npm run build                     # Gera o build do projeto

# Etapa de produção (production-stage)
FROM nginx:1.19.3-alpine as production-stage
COPY --from=build-stage /src/app/.next/server/app /usr/share/nginx/html  # Copia o build gerado
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
