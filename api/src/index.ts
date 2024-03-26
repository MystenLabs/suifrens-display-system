// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import Fastify from 'fastify';
import cors from '@fastify/cors';
import compress from '@fastify/compress';

import { suifrens } from './routes/suifrens';
import { accessories } from './routes/accessories';

const FASTIFY_PORT = 3000;

const fastify = Fastify({
	// timeout: 10s
	requestTimeout: 10 * 1000,
	// enable logger on development
	logger: process.env.NODE_ENV === 'development',
	 
});

// Register plugins:
fastify.register(compress);
fastify.register(cors);



// healthcheck:
fastify.get('/', async (_request, _reply) => {
	return { ok: true };
});



fastify.listen({ port: FASTIFY_PORT }, (err, address) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
	fastify.log.info(`server listening on ${address}`);
});

// Register routes:
fastify.register(suifrens);
fastify.register(accessories);