# BASE image
FROM node:alpine AS base

# set working directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
# add `/app/node_modules/.bin` to $PATH

FROM base AS release
# install and cache app dependencies
RUN npm install --silent

# start app
CMD ["npm", "run", "serve"]