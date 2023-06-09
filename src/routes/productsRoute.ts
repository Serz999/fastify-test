import { FastifyInstance } from "fastify"
import { ProductController } from "../controllers"

const productController =  new ProductController()

export async function productsRoute(fastify: FastifyInstance, options: Object) {

    fastify.get('/api/products', productController.getAll.bind(productController))

    fastify.get('/api/products/:id', productController.getById.bind(productController))
 
    fastify.post('/api/products', productController.add.bind(productController))

    fastify.patch('/api/products/:id', productController.update.bind(productController))

    fastify.delete('/api/products/:id', productController.delete.bind(productController))

    fastify.post('/api/products/revisions', productController.revisionsMethodsEval.bind(productController))
}
