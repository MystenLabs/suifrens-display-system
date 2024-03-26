// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import express from 'express';
import { renderToStaticMarkup } from 'react-dom/server';

import { getSuiFrenAttributesAndAccessories } from './sui-client';
import { SuiFrenImage, SuiLogo, accessories, designerToPartnerLogo } from '@suifrens/shared';

/**
 * REST API
 */
export default express
	.Router()

	/**
	 * Route: GET /capy/:capyId/svg - Get SVG image for the Capy
	 */
	.get('/suifrens/:suifrenId/svg', async (req, res) => {
		res.setHeader('Content-Type', 'image/svg+xml');
		const suifrenId = req.params.suifrenId || '';
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
			return res.send(renderedSvg);
		} catch (e: any) {
			if (e.message === 'deleted' || e.message === 'notExists') return res.sendStatus(404);
			console.error(`failed to render SuiFren ${suifrenId}`, e);
			return res.sendStatus(500);
		}
	})

	/**
	 * Route: GET /accessories/:name/svg - Get SVG image for the Accessory
	 */
	.get('/accessories/:name/svg', async (req, res) => {
		res.setHeader('Content-Type', 'image/svg+xml');
		res.set('Cache-Control', 'public, max-age=31557600, s-maxage=31557600');

		const accessoryName = req.params.name || '';
		const accessory = accessories.find((accessory) => accessory.name === accessoryName);

		if (accessory) {
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
			return res.send(renderedSvg);
		}
		return res.sendStatus(404);
	});
