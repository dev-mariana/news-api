import { app } from "./server";

const port = process.env.PORT || 8080;

try {
  app.listen({ port: Number(port) }).then(() => {
    app.log.info("Server is running...");
  });
} catch (error) {
  app.log.error(error);
}
