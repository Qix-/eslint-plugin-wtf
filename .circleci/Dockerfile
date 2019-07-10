FROM mhart/alpine-node:12
WORKDIR /src
COPY package.json ./
RUN npm install
COPY index.js test.js ./
COPY lib ./lib
RUN npm run test
