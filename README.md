# FelixFacts

## Introduction

This is Felix Facts, a server that stores news information and provides an API to access the information. The server is built using Node.js and Express.js.

## Local setup

The local setup assumes you have node installed in your environment.

### Instal dependecies

To get started, install the required dependencies to get the project up and running:

```bash
$ npm install
```

### Run server

To run the felix dev server do the following:

```bash
$ docker compose up -d database
```

### Run db seed

In order to seed the database we need to run the following:

```bash
$ npm run seed
```

### Run tests

This will run all the unit tests for the project to ensure everything is functioning correctly.

```bash
$ npm test
```

### Run the main function

After setting up and running the tests, you can build and start the project:

# For Dev mode:

```bash
$ npm run dev
```

# For Production mode:

```bash
$ npm run build
$ npm run start
```
