FROM nginx:1.14-alpine AS base
COPY ./_nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY ./_nginx/server.cer /etc/nginx/ssl/server.cer
# COPY ./_nginx/server.key /etc/nginx/ssl/server.key
EXPOSE 80
# EXPOSE 443
WORKDIR /wwwroot

FROM node:10-alpine AS stage
WORKDIR /src

# for east asia user, you can uncomment the following lines
# to speed up the installation of the dependencies
RUN printf "sass_binary_site=https://npm.taobao.org/mirrors/node-sass\nphantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs\nelectron_mirror=https://npm.taobao.org/mirrors/electron\nregistry=https://registry.npm.taobao.org" > ~/.npmrc

COPY package.json package.json
# RUN npm install

COPY . .
RUN npm run build


FROM base AS final
COPY --from=stage /src/dist /wwwroot
