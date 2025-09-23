import swaggerJSDoc from 'swagger-jsdoc'
import * as Schemas from '@/swagger/schemas'

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0'
    }
  },
  components: {
    schemas: {
      ...Schemas
    }
  },

  apis: ['./src/routes/**/*.ts', './src/models/**/*.ts'] // adjust path
})
