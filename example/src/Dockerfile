FROM "node:latest"

COPY ./package.json ./package.json
RUN npm i
COPY ./src/* ./src/

ENTRYPOINT ["npm", "run", "start"]