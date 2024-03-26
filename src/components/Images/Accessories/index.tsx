// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { Apron } from './Body/Apron.js';
import { Cardigan } from './Body/Cardigan.js';
import { LeatherJacket } from './Body/LeatherJacket.js';
import { Vest } from './Body/Vest.js';
import { BlueSlipons } from './Feet/BlueSlipons.js';
import { Boots } from './Feet/Boots.js';
import { CasualShoes } from './Feet/CasualShoes.js';
import { DressShoes } from './Feet/DressShoes.js';
import { PinkSlipons } from './Feet/PinkSlipons.js';
import { Sneakers } from './Feet/Sneakers.js';
import { BaseballCap } from './Head/BaseballCap.js';
import { Beanie } from './Head/Beanie.js';
import { Beret } from './Head/Beret.js';
import { BowlerHat } from './Head/BowlerHat.js';
import { CowboyHat } from './Head/CowboyHat.js';
import { HairBow } from './Head/HairBow.js';
import { Halo } from './Head/Halo.js';
import { SantaHat } from './Head/SantaHat.js';
import { Snorkel } from './Head/Snorkel.js';
import { BellBottoms } from './Legs/BellBottoms.js';
import { BlueJeans } from './Legs/BlueJeans.js';
import { BusinessSlacks } from './Legs/BusinessSlacks.js';
import { Cutoffs } from './Legs/Cutoffs.js';
import { SwimTrunks } from './Legs/SwimTrunks.js';
import { WhitePants } from './Legs/WhitePants.js';
import { Brush } from './Objects/Brush.js';
import { Lasso } from './Objects/Lasso.js';
import { Palette } from './Objects/Palette.js';
import { Pencil } from './Objects/Pencil.js';
import { BussinessShirt } from './Torso/BusinessShirt.js';
import { CowboyShirt } from './Torso/CowboyShirt.js';
import { HeartShirt } from './Torso/HeartShirt.js';
import { Lifeguard } from './Torso/Lifeguard.js';
import { SkullShirt } from './Torso/SkullShirt.js';
import { StripeShirt } from './Torso/StripeShirt.js';
import { Swimsuit } from './Torso/Swimsuit.js';
import { PunkSkirt } from './Legs/PunkSkirt.js';
import { RockStarRuffle } from './Legs/RockStarRuffle.js';
import { SuperHeroStars } from './Legs/SuperHeroStars.js';
import { MagicWand } from './Objects/MagicWand.js';
import { Microphone } from './Objects/Microphone.js';
import { GothBoots } from './Feet/GothBoots.js';
import { RockStarBoots } from './Feet/RockStarBoots.js';
import { WitchBoots } from './Feet/WitchBoots.js';
import { SuperHeroCape } from './Back/SuperHeroCape.js';
import { WizardRobe } from './Body/WizardRobe.js';
import { BlondeWig } from './Head/BlondeWig.js';
import { CurlyWig } from './Head/CurlyWig.js';
import { Mohawk } from './Head/Mohawk.js';
import { WizardHat } from './Head/WizardHat.js';
import { Glasses8Bit } from './Eyes/Glasses8Bit.js';
import { SuperHeroMask } from './Eyes/SuperHeroMask.js';
import { XRGoggles } from './Head/XRGoggles.js';
import { GlassesY2K } from './Eyes/GlassesY2k.js';
import { Wings } from './Back/Wings.js';
import { SaddleShoes } from './Feet/SaddleShoes.js';

export type BodyAccessoryProps = {
	lor?: 'left' | 'right';
	body?: boolean;
};

type AccessoryProps = BodyAccessoryProps & {
	accessory: string;
};

export function Accessory(props: AccessoryProps) {
	return (
		<>
			{props.accessory === 'baseball cap' && <BaseballCap />}
			{props.accessory === 'beanie' && <Beanie />}
			{props.accessory === 'beret' && <Beret />}
			{props.accessory === 'blonde wig' && <BlondeWig />}
			{props.accessory === 'curly wig' && <CurlyWig />}
			{props.accessory === 'mohawk' && <Mohawk />}
			{props.accessory === 'bowler hat' && <BowlerHat />}
			{props.accessory === 'cowboy hat' && <CowboyHat />}
			{props.accessory === 'saddle shoes' && <SaddleShoes />}
			{props.accessory === 'hair bow' && <HairBow />}
			{props.accessory === 'halo' && <Halo />}
			{props.accessory === 'santa hat' && <SantaHat />}
			{props.accessory === 'wizard hat' && <WizardHat />}
			{props.accessory === 'snorkel' && <Snorkel />}
			{props.accessory === '8 bit glasses' && <Glasses8Bit />}
			{props.accessory === 'superhero mask' && <SuperHeroMask />}
			{props.accessory === 'xr goggles' && <XRGoggles />}
			{props.accessory === 'bug eyes' && <GlassesY2K />}
			{props.accessory === 'apron' && <Apron body={props.body} />}
			{props.accessory === 'wings' && <Wings lor={props.lor} />}
			{props.accessory === 'cardigan' && <Cardigan lor={props.lor} body={props.body} />}
			{props.accessory === 'leather jacket' && <LeatherJacket lor={props.lor} body={props.body} />}
			{props.accessory === 'superhero cape' && <SuperHeroCape />}
			{props.accessory === 'wizard robe' && <WizardRobe lor={props.lor} body={props.body} />}
			{props.accessory === 'vest' && <Vest body={props.body} />}
			{props.accessory === 'white pants' && <WhitePants />}
			{props.accessory === 'punk skirt' && <PunkSkirt />}
			{props.accessory === 'rock star ruffle' && <RockStarRuffle />}
			{props.accessory === 'superhero stars' && <SuperHeroStars />}
			{props.accessory === 'bell bottoms' && <BellBottoms />}
			{props.accessory === 'blue jeans' && <BlueJeans />}
			{props.accessory === 'business slacks' && <BusinessSlacks />}
			{props.accessory === 'cutoffs' && <Cutoffs />}
			{props.accessory === 'swim trunks' && <SwimTrunks />}
			{props.accessory === 'palette' && <Palette />}
			{props.accessory === 'brush' && <Brush />}
			{props.accessory === 'lasso' && <Lasso />}
			{props.accessory === 'pencil' && <Pencil />}
			{props.accessory === 'magic wand' && <MagicWand />}
			{props.accessory === 'microphone' && <Microphone />}
			{props.accessory === 'business shirt' && <BussinessShirt lor={props.lor} body={props.body} />}
			{props.accessory === 'cowboy shirt' && <CowboyShirt lor={props.lor} body={props.body} />}
			{props.accessory === 'swimsuit' && <Swimsuit body={props.body} />}
			{props.accessory === 'heart shirt' && <HeartShirt lor={props.lor} body={props.body} />}
			{props.accessory === 'lifeguard' && <Lifeguard lor={props.lor} body={props.body} />}
			{props.accessory === 'skull shirt' && <SkullShirt lor={props.lor} body={props.body} />}
			{props.accessory === 'stripe shirt' && <StripeShirt lor={props.lor} body={props.body} />}
			{props.accessory === 'blue slip ons' && <BlueSlipons />}
			{props.accessory === 'boots' && <Boots />}
			{props.accessory === 'casual shoes' && <CasualShoes />}
			{props.accessory === 'dress shoes' && <DressShoes />}
			{props.accessory === 'pink slip ons' && <PinkSlipons />}
			{props.accessory === 'sneakers' && <Sneakers />}
			{props.accessory === 'goth boots' && <GothBoots />}
			{props.accessory === 'rock star boots' && <RockStarBoots />}
			{props.accessory === 'witch boots' && <WitchBoots />}
		</>
	);
}
