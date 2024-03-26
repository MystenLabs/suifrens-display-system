// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/**
 * Web server for the Capy API service.
 * When ran with `--index` also watches events.
 *
 * @module server
 */

import compression from 'compression';
import express from 'express';
import cors from 'cors';
import timeout from 'connect-timeout';

import restApi from './routers/rest-api';

import { NETWORK } from './lib/config';

// custom HTTP port; default 3000
const PORT = process.env.NODE_PORT || 3000;

// let's go!
const server = express()
	.use(express.static('views/boxes'))
	.use(compression())
	.use(timeout('10s'))
	.disable('x-powered-by')
	/* Allow everyone to access the API */
	.use(cors({ origin: '*' }))
	.use(restApi);

server.listen(PORT, () =>
	console.log('Yay, Suifrens server is running at http://0.0.0.0:%d/', PORT),
);

console.log('Fullnode target: ', NETWORK);
console.log('- [server] REST Server up and running');

// simplifies life
process.on('unhandledRejection', (err, promise) => {
	console.log(err);
	promise.catch(console.error);
});
