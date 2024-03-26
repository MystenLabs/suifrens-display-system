import Fastify from "fastify";
import cors from "@fastify/cors";
import compress from "@fastify/compress";

import { suifrens } from "./routes/suifrens.js";
import { accessories } from "./routes/accessories.js";

const fastify = Fastify({
  logger: {
	transport: {
		target: 'pino-pretty',
		options: {
		  translateTime: 'HH:MM:ss Z',
		  ignore: 'pid,hostname',
		},
	  },
  }
});

// Register plugins:
fastify.register(compress);
fastify.register(cors);

// Register routes:
fastify.register(suifrens);
fastify.register(accessories);

// Health check:
fastify.get("/", async (_request, _reply) => {
  return { ok: true };
});

// Start the server:
fastify.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`SuiFrens image rendering server started successfully!`);
});
