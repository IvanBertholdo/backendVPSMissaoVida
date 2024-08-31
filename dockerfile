FROM node:current-bookworm-slim

COPY ./package.json .
COPY ./package-lock.json .

RUN npm ci --only=production


COPY ./api /api
COPY ./controllers /controllers
COPY ./routes /routes
COPY ./.env .
COPY ./openAPI.js .
COPY ./passwordUtils.js .

ENV NODE_ENV=production

EXPOSE 8001

CMD [ "npm","run","start" ]