FROM nginx:latest

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# INSTALLS NODE
ENV NODE_VERSION=18.14.0
ENV NVM_DIR=/root/.nvm
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

RUN apt update
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
RUN node --version
RUN npm --version
RUN apt-get install rsync -y
RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install npmrc -g

# 
COPY [ "./" , "/app/" ]
WORKDIR /app

COPY ./docker/web.conf /etc/nginx/nginx.conf
COPY ./docker/server.conf /etc/nginx/server.conf
COPY ./docker/run.sh /run.sh
RUN rm -rf /app/docker
RUN npm install

RUN ["chmod", "+x", "/run.sh"]

ENTRYPOINT [ "/run.sh" ]

STOPSIGNAL SIGQUIT
CMD ["nginx", "-g", "daemon off;"]