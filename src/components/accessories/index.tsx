import { Apron } from "./body/Apron.js";
import { Cardigan } from "./body/Cardigan.js";
import { LeatherJacket } from "./body/LeatherJacket.js";
import { Vest } from "./body/Vest.js";
import { BlueSlipons } from "./feet/BlueSlipons.js";
import { Boots } from "./feet/Boots.js";
import { CasualShoes } from "./feet/CasualShoes.js";
import { DressShoes } from "./feet/DressShoes.js";
import { PinkSlipons } from "./feet/PinkSlipons.js";
import { Sneakers } from "./feet/Sneakers.js";
import { BaseballCap } from "./head/BaseballCap.js";
import { Beanie } from "./head/Beanie.js";
import { Beret } from "./head/Beret.js";
import { BowlerHat } from "./head/BowlerHat.js";
import { CowboyHat } from "./head/CowboyHat.js";
import { HairBow } from "./head/HairBow.js";
import { Halo } from "./head/Halo.js";
import { SantaHat } from "./head/SantaHat.js";
import { Snorkel } from "./head/Snorkel.js";
import { BellBottoms } from "./legs/BellBottoms.js";
import { BlueJeans } from "./legs/BlueJeans.js";
import { BusinessSlacks } from "./legs/BusinessSlacks.js";
import { Cutoffs } from "./legs/Cutoffs.js";
import { SwimTrunks } from "./legs/SwimTrunks.js";
import { WhitePants } from "./legs/WhitePants.js";
import { Brush } from "./objects/Brush.js";
import { Lasso } from "./objects/Lasso.js";
import { Palette } from "./objects/Palette.js";
import { Pencil } from "./objects/Pencil.js";
import { BussinessShirt } from "./torso/BusinessShirt.js";
import { CowboyShirt } from "./torso/CowboyShirt.js";
import { HeartShirt } from "./torso/HeartShirt.js";
import { Lifeguard } from "./torso/Lifeguard.js";
import { SkullShirt } from "./torso/SkullShirt.js";
import { StripeShirt } from "./torso/StripeShirt.js";
import { Swimsuit } from "./torso/Swimsuit.js";
import { PunkSkirt } from "./legs/PunkSkirt.js";
import { RockStarRuffle } from "./legs/RockStarRuffle.js";
import { SuperHeroStars } from "./legs/SuperHeroStars.js";
import { MagicWand } from "./objects/MagicWand.js";
import { Microphone } from "./objects/Microphone.js";
import { GothBoots } from "./feet/GothBoots.js";
import { RockStarBoots } from "./feet/RockStarBoots.js";
import { WitchBoots } from "./feet/WitchBoots.js";
import { SuperHeroCape } from "./back/SuperHeroCape.js";
import { WizardRobe } from "./body/WizardRobe.js";
import { BlondeWig } from "./head/BlondeWig.js";
import { CurlyWig } from "./head/CurlyWig.js";
import { Mohawk } from "./head/Mohawk.js";
import { WizardHat } from "./head/WizardHat.js";
import { Glasses8Bit } from "./eyes/Glasses8Bit.js";
import { SuperHeroMask } from "./eyes/SuperHeroMask.js";
import { XRGoggles } from "./head/XRGoggles.js";
import { GlassesY2K } from "./eyes/GlassesY2k.js";
import { Wings } from "./back/Wings.js";
import { SaddleShoes } from "./feet/SaddleShoes.js";

export type BodyAccessoryProps = {
  lor?: "left" | "right";
  body?: boolean;
};

type AccessoryProps = BodyAccessoryProps & {
  accessory: string;
};

export function Accessory(props: AccessoryProps) {
  return (
    <>
      {props.accessory === "baseball cap" && <BaseballCap />}
      {props.accessory === "beanie" && <Beanie />}
      {props.accessory === "beret" && <Beret />}
      {props.accessory === "blonde wig" && <BlondeWig />}
      {props.accessory === "curly wig" && <CurlyWig />}
      {props.accessory === "mohawk" && <Mohawk />}
      {props.accessory === "bowler hat" && <BowlerHat />}
      {props.accessory === "cowboy hat" && <CowboyHat />}
      {props.accessory === "saddle shoes" && <SaddleShoes />}
      {props.accessory === "hair bow" && <HairBow />}
      {props.accessory === "halo" && <Halo />}
      {props.accessory === "santa hat" && <SantaHat />}
      {props.accessory === "wizard hat" && <WizardHat />}
      {props.accessory === "snorkel" && <Snorkel />}
      {props.accessory === "8 bit glasses" && <Glasses8Bit />}
      {props.accessory === "superhero mask" && <SuperHeroMask />}
      {props.accessory === "xr goggles" && <XRGoggles />}
      {props.accessory === "bug eyes" && <GlassesY2K />}
      {props.accessory === "apron" && <Apron body={props.body} />}
      {props.accessory === "wings" && <Wings lor={props.lor} />}
      {props.accessory === "cardigan" && (
        <Cardigan lor={props.lor} body={props.body} />
      )}
      {props.accessory === "leather jacket" && (
        <LeatherJacket lor={props.lor} body={props.body} />
      )}
      {props.accessory === "superhero cape" && <SuperHeroCape />}
      {props.accessory === "wizard robe" && (
        <WizardRobe lor={props.lor} body={props.body} />
      )}
      {props.accessory === "vest" && <Vest body={props.body} />}
      {props.accessory === "white pants" && <WhitePants />}
      {props.accessory === "punk skirt" && <PunkSkirt />}
      {props.accessory === "rock star ruffle" && <RockStarRuffle />}
      {props.accessory === "superhero stars" && <SuperHeroStars />}
      {props.accessory === "bell bottoms" && <BellBottoms />}
      {props.accessory === "blue jeans" && <BlueJeans />}
      {props.accessory === "business slacks" && <BusinessSlacks />}
      {props.accessory === "cutoffs" && <Cutoffs />}
      {props.accessory === "swim trunks" && <SwimTrunks />}
      {props.accessory === "palette" && <Palette />}
      {props.accessory === "brush" && <Brush />}
      {props.accessory === "lasso" && <Lasso />}
      {props.accessory === "pencil" && <Pencil />}
      {props.accessory === "magic wand" && <MagicWand />}
      {props.accessory === "microphone" && <Microphone />}
      {props.accessory === "business shirt" && (
        <BussinessShirt lor={props.lor} body={props.body} />
      )}
      {props.accessory === "cowboy shirt" && (
        <CowboyShirt lor={props.lor} body={props.body} />
      )}
      {props.accessory === "swimsuit" && <Swimsuit body={props.body} />}
      {props.accessory === "heart shirt" && (
        <HeartShirt lor={props.lor} body={props.body} />
      )}
      {props.accessory === "lifeguard" && (
        <Lifeguard lor={props.lor} body={props.body} />
      )}
      {props.accessory === "skull shirt" && (
        <SkullShirt lor={props.lor} body={props.body} />
      )}
      {props.accessory === "stripe shirt" && (
        <StripeShirt lor={props.lor} body={props.body} />
      )}
      {props.accessory === "blue slip ons" && <BlueSlipons />}
      {props.accessory === "boots" && <Boots />}
      {props.accessory === "casual shoes" && <CasualShoes />}
      {props.accessory === "dress shoes" && <DressShoes />}
      {props.accessory === "pink slip ons" && <PinkSlipons />}
      {props.accessory === "sneakers" && <Sneakers />}
      {props.accessory === "goth boots" && <GothBoots />}
      {props.accessory === "rock star boots" && <RockStarBoots />}
      {props.accessory === "witch boots" && <WitchBoots />}
    </>
  );
}
