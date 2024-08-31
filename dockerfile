FROM node:current-bookworm-slim

RUN apt-get update && apt-get install -y curl

COPY ./package.json .
COPY ./package-lock.json .
COPY ./prisma /prisma
RUN npm ci --only=production

RUN npx prisma generate


COPY ./api /api
COPY ./controllers /controllers
COPY ./routes /routes
COPY ./.env .
COPY ./openAPI.js .
COPY ./passwordUtils.js .

ENV NODE_ENV=production

RUN npx prisma migrate deploy
EXPOSE 8001

CMD [ "npm","run","start" ]