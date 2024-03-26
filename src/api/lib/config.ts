// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

type Config = {
	packageId: string;
	packageIdV2: string;
	accessoriesPackageId: string;
	accessoriesStoreId: string;
	rpcUrl: string;
};

// "mainnet" | "testnet" | "devnet" | "localnet"
type Network = 'mainnet' | 'testnet';

// Default network
export const NETWORK: Network = 'mainnet';

export const mainnet: Config = {
	rpcUrl: 'https://suifrens-rpc.mainnet.sui.io',
	packageId: '0xee496a0cc04d06a345982ba6697c90c619020de9e274408c7819f787ff66e1a1',
	packageIdV2: '0x8894fa02fc6f36cbc485ae9145d05f247a78e220814fb8419ab261bd81f08f32',
	accessoriesPackageId: '0x7aee872d77cade27e7d9b79bf9c67ac40bfb1b797e8b7438ee73f0af21bb4664',
	accessoriesStoreId: '0x742b03f312e6e2cee14a510213c22315ae0abfc58c0c80f16c8c6e313638815a',
};

export const testnet: Config = {
	rpcUrl: 'https://suifrens-rpc.testnet.sui.io:443',
	packageId: '0x80d7de9c4a56194087e0ba0bf59492aa8e6a5ee881606226930827085ddf2332',
	packageIdV2: '0x297d8afb6ede450529d347cf9254caeea2b685c8baef67b084122291ebaefb38',
	accessoriesPackageId: '0x15a2fe781ae848c3f108eddc0298649ed9e76da4e9103b5e0bd6f363cca1d56d',
	accessoriesStoreId: '0xe2d841d8e3bdd07e5fc82726886f30ba8d2713b182bf28a7789951bce9bdb27d',
};

const config = {
	mainnet,
	testnet,
};

export const CAPY_TYPE = `${config[NETWORK].packageId}::capy::Capy`;
export const BULLSHARK_TYPE = `${config[NETWORK].packageIdV2}::bullshark::Bullshark`;
export const ACCESSORIES_KEY_TYPE = `${config[NETWORK].accessoriesPackageId}::accessories::AccessoryKey`;
