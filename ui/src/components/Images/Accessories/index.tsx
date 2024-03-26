// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { Apron } from './Body/Apron';
import { Cardigan } from './Body/Cardigan';
import { LeatherJacket } from './Body/LeatherJacket';
import { Vest } from './Body/Vest';
import { BlueSlipons } from './Feet/BlueSlipons';
import { Boots } from './Feet/Boots';
import { CasualShoes } from './Feet/CasualShoes';
import { DressShoes } from './Feet/DressShoes';
import { PinkSlipons } from './Feet/PinkSlipons';
import { Sneakers } from './Feet/Sneakers';
import { BaseballCap } from './Head/BaseballCap';
import { Beanie } from './Head/Beanie';
import { Beret } from './Head/Beret';
import { BowlerHat } from './Head/BowlerHat';
import { CowboyHat } from './Head/CowboyHat';
import { HairBow } from './Head/HairBow';
import { Halo } from './Head/Halo';
import { SantaHat } from './Head/SantaHat';
import { Snorkel } from './Head/Snorkel';
import { BellBottoms } from './Legs/BellBottoms';
import { BlueJeans } from './Legs/BlueJeans';
import { BusinessSlacks } from './Legs/BusinessSlacks';
import { Cutoffs } from './Legs/Cutoffs';
import { SwimTrunks } from './Legs/SwimTrunks';
import { WhitePants } from './Legs/WhitePants';
import { Brush } from './Objects/Brush';
import { Lasso } from './Objects/Lasso';
import { Palette } from './Objects/Palette';
import { Pencil } from './Objects/Pencil';
import { BussinessShirt } from './Torso/BusinessShirt';
import { CowboyShirt } from './Torso/CowboyShirt';
import { HeartShirt } from './Torso/HeartShirt';
import { Lifeguard } from './Torso/Lifeguard';
import { SkullShirt } from './Torso/SkullShirt';
import { StripeShirt } from './Torso/StripeShirt';
import { Swimsuit } from './Torso/Swimsuit';
import { PunkSkirt } from './Legs/PunkSkirt';
import { RockStarRuffle } from './Legs/RockStarRuffle';
import { SuperHeroStars } from './Legs/SuperHeroStars';
import { MagicWand } from './Objects/MagicWand';
import { Microphone } from './Objects/Microphone';
import { GothBoots } from './Feet/GothBoots';
import { RockStarBoots } from './Feet/RockStarBoots';
import { WitchBoots } from './Feet/WitchBoots';
import { SuperHeroCape } from './Back/SuperHeroCape';
import { WizardRobe } from './Body/WizardRobe';
import { BlondeWig } from './Head/BlondeWig';
import { CurlyWig } from './Head/CurlyWig';
import { Mohawk } from './Head/Mohawk';
import { WizardHat } from './Head/WizardHat';
import { Glasses8Bit } from './Eyes/Glasses8Bit';
import { SuperHeroMask } from './Eyes/SuperHeroMask';
import { XRGoggles } from './Head/XRGoggles';
import { GlassesY2K } from './Eyes/GlassesY2k';
import { Wings } from './Back/Wings';
import { SaddleShoes } from './Feet/SaddleShoes';

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
