// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { BullsharkAttributes } from './bullsharkTypes';
import { CapyAttributes } from './capyTypes';

export enum SuiFrenType {
	BULLSHARK = 'BULLSHARK',
	CAPY = 'CAPY',
}

export type SuiFrenAttributes = CapyAttributes | BullsharkAttributes;
