# CRUD-nodejs-mondoDB
Práctica de Node JS, MongoDB y Angular para realizar un CRUD y Autenticación

Para iniciar el proyecto de backend (API Rest con NodeJS) se necesita instalar las siguientes dependencias:
1. npm init -y: Para crear el package.json
2. npm i express mongoose cors jsonwebtoken:
    express: Es un módulo y a la vez un framework de node o npm que permite conectar el servidor de una manera sencilla
    mongoose: Permite conectarse a MongoDB
    cors: Permite comunicar los servidores de node con los de Angular
    jsonwebtoken: Permite crear un token que se envía desde el servidor al cliente cuando se trata de información privada
3. node backend/src/index.js: Para ejecutar el servidor o la ruta en la que se encuentre el archivo 'index.js'
4. mongod: Para inciar la conexión con MongoDB si se tiene instalado localmente
5. npm install nodemon -D: Permite el reinicio automático de la aplicación, sin necesidad de detener la ejecución y volverla a mandar.
    Ahora se modifica en los "scripts", quedaría como "dev": "nodemon backend/src/index.js" de manera se cambia la forma en la que se ejecuta la aplicación por medio del nuevo comando: "npm run dev"
6. npm i morgan: Permite el registro de peticiones HTTP
7. npm i express-handlebars: Es la forma de implementar un motor de plantilla llamado handelbars de express, es decir, que es un lenguaje que se le añade a HTML
8. npm install --save-dev @babel/core
9. npm install --save-dev @babel/cli
10. npm install --save-dev @babel-node
11. npm install --save-dev @babel/preset-env
12. Al agregar al package.json "dev": "nodemon backend/src/index.js --exec babel-node", se usa de nuevo el comando "npm run dev"

Para iniciar el proyecto de frontend (AngularJS) se necesita instalar:
1. ng new frontend --routing
    se debe seleccionar CSS