FROM node:16-alpine AS BUILDER

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD .browserslistrc .prettierrc .eslintrc.js babel.config.js jsconfig.json lint-staged.config.js vue.config.js .env.production ./

ADD src ./src
ADD public ./public

RUN npm run build

FROM node:16-alpine

WORKDIR /app

RUN npm i -g serve

COPY --from=BUILDER /app/dist ./

CMD serve -s -l $PORT