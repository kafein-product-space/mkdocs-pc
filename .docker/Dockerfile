FROM nginx:stable-alpine3.20

RUN apk add --no-cache tzdata sudo

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY .docker/entrypoint.sh /
COPY site /usr/share/nginx/html

ENTRYPOINT ["./entrypoint.sh"]
