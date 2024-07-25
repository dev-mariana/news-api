import "dotenv/config";
import fastify from "fastify";

const app = fastify({
  logger: true,
});

const port = process.env.PORT || 8080;

try {
  app.listen({ port: Number(port) }).then(() => {
    app.log.info("Server is running...");
  });
} catch (error) {
  app.log.error(error);
}
