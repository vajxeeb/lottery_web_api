
//Import libraries
const express = require('express')
const app = express();
const cors = require('cors')
const  bodyParser = require('body-parser');
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

//Use
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Require routes
const brance = require('./routes/branch.route')
const login = require('./routes/login.route')


//Initial routes
app.use('/api/', brance)
app.use('/api/', login)


//Swagger setting
const PORT = process.env.port || 8080
const option = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "Web Lottery API"
    },
    components: {
      securitySchemes: {
        jwt: {
          type: "http",
          scheme: "bearer",
          in: "header",
          bearerFormat: "JWT"
        },
      }
    }
    ,
    security: [{
      jwt: []
    }],
  swagger: "3.0",
    servers: [
      {
        url: `http://localhost:${PORT}`
      }
    ],
  },

  apis: ['./routes/*.js']
        
}

const swaggerDocs = swaggerJSDoc(option)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))



//Call server
app.listen(PORT, console.log(`Server Running on port ${PORT}`))
module.exports = app;
