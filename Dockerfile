# setting a base image
FROM node:24 AS builder

# setting up the working directory
WORKDIR /app

# copying the files
COPY . .

RUN npm i

#Stage2 building (Stage1 is compressed and used here as a compressed version of it)
FROM node:24-slim

WORKDIR /app

COPY --from=builder /app .

EXPOSE 8000

ENTRYPOINT ["npm", "start"]

