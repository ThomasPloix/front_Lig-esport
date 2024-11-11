# Utiliser une image Node.js pour builder l'application
FROM node:16 AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier tous les fichiers sources dans le conteneur
COPY . .

# Builder l'application Angular pour la production
RUN npm run build --prod

# Utiliser une image Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers de build Angular dans le répertoire Nginx
COPY --from=build /app/dist/nom-de-votre-projet-angular /usr/share/nginx/html

# Exposer le port 80 pour accéder à l'application
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]