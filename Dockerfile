# Stage 1: Build Vite client
FROM node:22-alpine AS client-build
WORKDIR /app

# Firebase client config (injected as build args by Cloud Build)
ARG VITE_FIREBASE_API_KEY
ARG VITE_FIREBASE_AUTH_DOMAIN
ARG VITE_FIREBASE_PROJECT_ID
ARG VITE_FIREBASE_STORAGE_BUCKET
ARG VITE_FIREBASE_MESSAGING_SENDER_ID
ARG VITE_FIREBASE_APP_ID

ENV VITE_FIREBASE_API_KEY=$VITE_FIREBASE_API_KEY
ENV VITE_FIREBASE_AUTH_DOMAIN=$VITE_FIREBASE_AUTH_DOMAIN
ENV VITE_FIREBASE_PROJECT_ID=$VITE_FIREBASE_PROJECT_ID
ENV VITE_FIREBASE_STORAGE_BUCKET=$VITE_FIREBASE_STORAGE_BUCKET
ENV VITE_FIREBASE_MESSAGING_SENDER_ID=$VITE_FIREBASE_MESSAGING_SENDER_ID
ENV VITE_FIREBASE_APP_ID=$VITE_FIREBASE_APP_ID

COPY package.json package-lock.json* ./
RUN npm install
COPY . .
ENV NODE_OPTIONS=--max-old-space-size=4096
RUN npm run build

# Stage 2: Build Express server
FROM node:22-alpine AS server-build
WORKDIR /app
COPY server/package.json server/package-lock.json* server/
RUN npm install --prefix server
COPY server server/
RUN npm run build --prefix server

# Stage 3: Runtime
FROM node:22-alpine
WORKDIR /app
ENV PORT=8080
ENV NODE_ENV=production
ENV CLIENT_DIST_PATH=/app/dist

COPY --from=client-build /app/dist ./dist
COPY --from=server-build /app/server/dist ./server/dist
COPY --from=server-build /app/server/package.json ./server/
COPY --from=server-build /app/server/node_modules ./server/node_modules

EXPOSE 8080
CMD ["node", "server/dist/src/index.js"]
