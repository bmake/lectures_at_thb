# eLectures@THB


[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Requirements
- [Docker](https://www.docker.com/)

## Project setup

This prioject is developed at the [Brandenburg University of Applied Sciences](www.th-brandenburg.de). The scructure of the project can be outlined as follows:

Components:
- Frontend ([Vue.js](https://vuejs.org/) + [Vuetify.js](https://vuetifyjs.com/)) -> [This repository](https://github.com/bmake/lectures_at_thb)
- Backend ([Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/) + [Apache Jena Fuseki](https://jena.apache.org/documentation/fuseki2/)) -> [eLectures@THB REST API](https://github.com/bmake/lectures_at_thb_rest_api)

Both components are dockerized and are combined in a *docker-compose* in this repository.

The project is provided with a Makefile, which has the following targets:

- `start`: starts the whole orchestration, pull & build all needed containers if not already there
- `stop`: stops the whole orchestration
- `build`: build the docker containers
- `pull`: pull related docker containers
- `upload`: upload newest data to the database
- `clean-database`: remove all statements from the database