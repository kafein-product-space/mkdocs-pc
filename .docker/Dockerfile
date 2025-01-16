FROM python:3.8 as build

ADD . .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

RUN mkdocs build

FROM nginx:stable-alpine3.20

RUN apk add --no-cache tzdata sudo

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY .docker/entrypoint.sh /
COPY --from=build site /usr/share/nginx/html

ENTRYPOINT ["./entrypoint.sh"]
