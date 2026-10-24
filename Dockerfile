# Stage 1: build the production bundle of the Create React App
FROM node:20-alpine AS build
WORKDIR /Yadav_Nandish_ui_garden
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: serve the production build on port 8083
FROM node:20-alpine
WORKDIR /Yadav_Nandish_ui_garden
RUN npm install -g serve@14.2.4
COPY --from=build /Yadav_Nandish_ui_garden/build ./build
EXPOSE 8083
CMD ["serve", "-s", "build", "-l", "8083"]
