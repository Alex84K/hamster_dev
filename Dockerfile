# Указываем базовый образ с Node.js
FROM node:23-alpine3.20 AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# Собираем приложение
RUN npm run build

# Указываем базовый образ для продакшн-сервера
FROM nginx:alpine

# Копируем собранное приложение в директорию nginx
COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем конфигурацию nginx (опционально)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Указываем порт, который будет слушать nginx
EXPOSE 3005

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
