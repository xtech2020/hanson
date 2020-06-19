FROM ubuntu:18.04
RUN apt update -y
RUN apt upgrade -y
RUN apt install -y vim
RUN apt install -y git
 
RUN apt install -y build-essential apt-transport-https lsb-release ca-certificates curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt install -y nodejs

RUN mkdir -p ./nodejs/hanson
WORKDIR /nodejs/hanson