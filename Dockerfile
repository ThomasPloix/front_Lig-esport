FROM node:18-alpine AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json ./

# Installer les dépendances de l'application
RUN npm install -g @angular/cli

# Copier tous les fichiers sources dans le conteneur
COPY . .
RUN npm install
# Builder l'application Angular pour la production
RUN npm run build --prod

CMD ["npm", "start"]

FROM nginx:alpine

# Copier les fichiers de build Angular dans le répertoire Nginx
COPY --from=build /app/dist/front-skeleton /usr/share/nginx/html
