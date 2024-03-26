// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { FastifyPluginAsync } from 'fastify';
import { Type, TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { SuiFrenImage, SuiLogo } from '@suifrens/ui';
import { renderToStaticMarkup } from 'react-dom/server';

import { getSuiFrenAttributesAndAccessories } from '../client/sui-client';

export const suifrens: FastifyPluginAsync = async (fastify) => {
	fastify.withTypeProvider<TypeBoxTypeProvider>().get(
		'/suifrens/:suifrenId/svg',
		{
			schema: {
				params: Type.Object({
					suifrenId: Type.String(),
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
			const suifrenId = request.params.suifrenId;
			try {
				const { attributes, equippedAccessories } = await getSuiFrenAttributesAndAccessories(
					suifrenId,
				);
				const renderedSvg = renderToStaticMarkup(
					<SuiFrenImage
						attributes={attributes}
						accessories={equippedAccessories}
						logo={<SuiLogo />}
						shadow
					/>,
				);
				reply.header('Content-Type', 'image/svg+xml');
				return reply.send(renderedSvg);
			} catch (e: any) {
				if (e.message === 'deleted' || e.message === 'notExists') return reply.status(404);
				console.error(`failed to render SuiFren ${suifrenId}`, e);
				return reply.status(500);
			}
		},
	);
};
