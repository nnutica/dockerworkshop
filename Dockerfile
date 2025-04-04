# ขั้นตอนที่ 1: Build stage
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ขั้นตอนที่ 2: Production stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# ลบ default nginx config แล้วใช้ของเราเอง (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
