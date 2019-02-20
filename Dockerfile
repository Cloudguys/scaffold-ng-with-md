FROM nginx:1.14-alpine AS base
WORKDIR /usr/share/nginx/html/
RUN rm -rf *
COPY ./dist .

WORKDIR /etc/nginx/conf.d/
COPY ./_nginx/default.conf default.conf

# WORKDIR /etc/nginx/ssl/
# COPY ./_nginx/server.cer server.cer
# COPY ./_nginx/server.key server.key

FROM base AS final
EXPOSE 80
EXPOSE 443
