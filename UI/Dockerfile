FROM node:16.19.0
WORKDIR /frontend
COPY package.json ./
COPY . /frontend/
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]