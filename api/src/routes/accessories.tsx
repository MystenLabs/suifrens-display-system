// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { FastifyPluginAsync } from 'fastify';
import { Type, TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import {
	SuiFrenImage,
	accessories as suiFrensAccessories,
	designerToPartnerLogo,
} from '@suifrens/ui';
import { renderToStaticMarkup } from 'react-dom/server';

export const accessories: FastifyPluginAsync = async (fastify) => {
	fastify.withTypeProvider<TypeBoxTypeProvider>().get(
		'/accessories/:name/svg',
		{
			schema: {
				params: Type.Object({
					name: Type.String(),
				}),
				response: {
					200: {
						type: 'string',
						headers: {
							'Content-Type': 'image/svg+xml',
						},
					},
				},
			},
		},
		async (request, reply) => {
			const accessoryName = request.params.name;
			const accessory = suiFrensAccessories.find((accessory) => accessory.name === accessoryName);

			if (!accessory) {
				return reply.status(404);
			}

			const renderedSvg = renderToStaticMarkup(
				<SuiFrenImage
					attributes={{
						mainColor: 'FFFFFF',
						secondaryColor: 'FFFFFF',
						expression: 'bigSmile',
						skin: 'basic',
						earShape: 'default',
					}}
					accessories={[accessory]}
					logo={designerToPartnerLogo[accessory.designer]}
					shadow
					incognito
				/>,
			);
			reply.header('Content-Type', 'image/svg+xml');
			return reply.send(renderedSvg);
		},
	);
};
