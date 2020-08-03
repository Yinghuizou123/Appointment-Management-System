# Use for Production 
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/TangchaoSpa /usr/share/nginx/html
# comment expose 80 on development
EXPOSE 80
CMD ["nginx","-g","daemon off;"]



#use for Development
#auto detect change, no need docker compose up
# FROM node:latest as build-step
# WORKDIR /app
# COPY . .
# RUN npm install
# CMD npm run start 