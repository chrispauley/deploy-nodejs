FROM node:4.4.7

# Add our user and group first to make sure their IDs get assigned consistently
RUN useradd --user-group --create-home --shell /bin/false nodejs

# Environment Variables
ENV HOME=/home/nodejs
ENV NODE_ENV=production

RUN mkdir -p $HOME/app
COPY package.json $HOME/app
COPY npm-shrinkwrap.json $HOME/app
RUN chown -R nodejs:nodejs $HOME/*
USER nodejs
WORKDIR $HOME/app
RUN npm install


CMD ["node","server.js"]
