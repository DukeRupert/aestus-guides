# Build stage
FROM hugomods/hugo:exts as builder

WORKDIR /src
COPY . .

RUN hugo --minify

# Runtime stage
FROM nginx:alpine

COPY --from=builder /src/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
