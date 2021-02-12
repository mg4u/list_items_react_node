This project is an `Articles CRUD operation`
There is a Login required to be able to add, and control the articles.

# The Technologies:
- Node JS
- Typescript
- Mysql
- Sequalize (ORM)
- React JS
- Docker
- Jest for unit-testing


# Demo
https://youtu.be/Pl2Di_pPm_k

[![DEMO](https://img.youtube.com/vi/Pl2Di_pPm_k/0.jpg)](https://www.youtube.com/watch?v=Pl2Di_pPm_k)


# Installation

### 1- Install Node Modules
@ For Node Projects 
<pre>
$ cd server
$ npm install
</pre>

@ For React JS application
<pre>
$ cd client
$ npm install
</pre>

### 2- Docker Images

Run these 2 commands after setting the image Names in the `docker-compose.yaml`, to build and run the images

<pre>
$ docker-compose up
</pre>




# Troubleshooting

- After change settings in `docker-compose.yml`, you may need to clear images, and rebuil them, so just run the next command:
<pre>
# clear
$ docker-compose rm -v

# rebuild
$ docker-compose up
</pre>

### Resources
- Resources for how to migrate docker with Node js
[Carlos Cuba tutorial](https://medium.com/@carloscuba014/building-a-react-app-that-connects-to-mysql-via-nodejs-using-docker-a8acbb0e9788) about how to implement docker with the above technologies in one project

