FROM node:18-alpine AS production-builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.21-alpine
COPY ./docker/conf.d /etc/nginx/conf.d
COPY --from=production-builder /app/dist/ /app/public/
