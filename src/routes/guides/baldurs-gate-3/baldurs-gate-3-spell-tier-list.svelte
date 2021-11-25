<script lang="ts">
	import Class from '$lib/guideComponents/class.svelte';
	import type { spell } from 'src/global';
	import Navigation from '$lib/guideComponents/navigation.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import Seo from '$lib/seo.svelte';

	let slideOver = false;
	let timing = 500;
	let delay = 250;

	function toggleSlideOver() {
		slideOver = !slideOver;
	}

	function handleMessage(event) {
		slideOver = !slideOver;
	}

	let acidSplash: spell = {
		level: 0,
		class: ['sorcerer', 'wizard'],
		title: 'Acid Splash',
		tier: 'C',
		image: {
			url: '/images/spell/acid-splash.webp',
			alt: 'BG3 Acid Splash symbol'
		},
		body: [
			`Acid Splash is an attack cantrip. Its worth taking a second to describe what an attack cantrip is now so that we understand it for other spells. Attack cantrips are a kind of substitute for a standard attack. All of them do damage that scales with levels, in theory to compete with weapon damage, but they actually begin and remain significantly behind normal attacks for DPR. Nevertheless, they can still be the best standard attack option for casters who don’t want to invest ability score improvement in non-caster attributes like strength. Attack cantrips come in three varieties: melee attacks, ranged attacks, and saving throw attacks (or save attacks for short).  Melee and ranged attacks both target enemies AC, so they function the same as a weapon attack. The only difference between them is range and some other factors which modify one or the other (backstabbing only works for melee attacks, for example). Save attacks do not function like normal weapon attacks. Instead, they function like many spells do, where an enemy must make a specific kind of saving throw against the caster’s spell DC. For the most part, saving throw attacks are weaker, because it is much more difficult to impose disadvantage on saving throws than it is to get advantage on attacks.`,
			`Acid Splash is a saving throw cantrip that targets dexterity (that means the affected enemies must fail a dexterity saving throw for the attack to hit. It does 1d6 acid damage (all attack cantrips do more damage after level 5) and it affects everybody in a 2m radius. It is the only area of effect (AoE) cantrip in the game, which is the only thing saving it from an RP tier. It has a niche, but the damage is really low, and it is hard to hit it reliably. I would pass on this cantrip unless you want to set up specifically for it with spells like Web or Entangle which impose disadvantage on dexterity saving throws. `
		]
	};
	let bladeWard: spell = {
		level: 0,
		class: ['warlock', 'wizard', 'high elf', 'high half-elf'],
		title: 'Blade Ward',
		tier: 'B',
		image: {
			url: '/images/spell/blade-ward.webp',
			alt: 'BG3 Blade Ward symbol'
		},
		body: [
			`Blade Ward is a defensive self buff, giving you resistance to bludgeoning, piercing, and slashing damage for two turns. What this often means is that you halve incoming physical damage, but also halve your own damage, since if you want to keep this buff permanently up in a fight you need to cast it every other turn. It is rare that this is a good trade. However, Blade Ward is situationally good in combination with the 1st level spell Armor of Agathys, or when combined with the Extend Spell Metamagic feature available to sorcerers.We will discuss the combination with Armor of Agathys when we get to it below. `
		]
	};
	let chillTouch: spell = {
		level: 0,
		class: ['warlock', 'wizard', 'high elf', 'high half-elf'],
		title: 'Chill Touch',
		tier: 'A',
		image: {
			url: '/images/spell/chill-touch.webp',
			alt: 'BG3 Chill Touch symbol'
		},
		body: [
			`Chill Touch is a ranged attack cantrip that does 1d8 necrotic damage. It also puts a debuff on the target for two turns. The debuff prevents the target from regaining hit points. If the target is undead, the debuff also imposes disadvantage on attack roles. Both of these debuffs are situationally awesome and necrotic damage is a seldom resisted damage type, making Chill Touch one of the best attack cantrip options in the game. `
		]
	};
	let dancingLights: spell = {
		level: 0,
		class: ['sorcerer', 'wizard', 'bard'],
		title: 'Dancing Lights',
		tier: 'A',
		image: {
			url: '/images/spell/dancing-lights.webp',
			alt: 'BG3 Dancing Lights symbol'
		},
		body: [
			`Dancing Lights conjures a light, which negates disadvantage from darkness in its AoE. Negating disadvantage is not the same as giving advantage since advantage does not stack; if you have two sources of advantage, and one source of disadvantage, you attack as normal. However, if you have one source of advantage, one source of disadvantage, and then you negate the disadvantage, you attack with advantage. I know this sounds like a confusing tongue twister, but basically it means that negating a common source of disadvantage is valuable. This cantrip would be S-tier if it did not take concentration. Since it does, it comes at a pretty hefty opportunity depending on your build, so take that into consideration.`,
			`I say a little more about Dancing Lights below when I compare it to its counterpart: Light.`
		]
	};
	let eldritchBlast: spell = {
		level: 0,
		class: ['warlock'],
		title: 'Eldritch Blast',
		tier: 'S/B',
		image: {
			url: '/images/spell/eldritch-blast.webp',
			alt: 'BG3 Eldritch Blast symbol'
		},
		body: [
			`This spell is really hard to rank fairly because of its tethering to a single class: Warlock. Most spells can be taken by multiple classes and work the same regardless of what class you are, but Eldritch blast is not like that. So I give it an S-tier for Warlocks and a B-tier for everyone else.`,
			`On its own, Eldritch Blast is a ranged attack cantrip that does 1d10 force damage. 1d10 is great for a cantrip and force damage is the least resisted damage type in the game. Eldritch Blast also has atypical scaling compared to other attack cantrips. Most attack cantrips do more damage at certain level thresholds. So, for example, Fire Bolt does 1d10 damage until level 5, then it does 2d10 damage until level 11, then 3d10 until level 17, and 4d10 after that. Eldritch Blast has the same level thresholds, but instead of just increasing damage it increases attacks. So at level 5, instead of making one attack that does 2d10 damage like Fire Bolt, Eldritch Blast will make two attacks that do 1d10 damage. You can have those attacks target one enemy or split them to target multiple. While the damage range is the same for both Eldritch Blast will average more in the middle of its damage range and avoid the extreme lows and highs. `,
			`If that was all that it was it would be a high B-tier cantrip, and the third best attack cantrip option (Chill Touch and Ray of Frost are better). And this IS all it is for any class that isn’t Warlock and gets this spell through the Magic Initiate: Warlock feat. For the Warlock though, this spell is S-tier, because the Warlock class gets several features that augment this cantrip. The most important is the Agonizing Blast Invocation which allows you to add your charisma modifier to every HIT with Eldritch Blast. I put “HIT” in all caps because it is important. Remember that as Eldritch Blast scales you make more attacks instead of one big attack. More attacks means more hits, meaning you can potentially add your charisma modifier to the damage of every bolt. This effectively doubles the damage of Eldritch Blast. On top of that, Warlock’s can take the Repelling Blast Invocation which adds a pushing effect to Eldritch Blast. Altogether, these make Eldritch Blast an S-tier cantrip for Warlocks. It is practically the definition of a build defining spell.`
		]
	};
	let fireBolt: spell = {
		level: 0,
		class: ['wizard', 'high elf', 'high half-elf'],
		title: 'Fire Bolt',
		tier: 'B',
		image: {
			url: '/images/spell/fire-bolt.webp',
			alt: 'BG3 Fire Bolt symbol'
		},
		body: [
			`This spell is kind of the vanilla attack cantrip. It does 1d10 fire damage, which is good for a cantrip, but does not compete with most sources of weapon damage. It is useful to have a ranged fire attack at will for blowing up barrels or lighting flammable surfaces. There is a guaranteed drop of Fire Bolt on an Imp corpse in the first nautiloid room after you start (the room with Us), so don’t take this cantrip in character creation if you are playing a Wizard. Just learn the spell from the scroll as soon as you have 50 gold to spare. `
		]
	};
	let friends: spell = {
		level: 0,
		class: ['sorcerer', 'wizard', 'bard', 'warlock'],
		title: 'Friends',
		tier: 'B',
		image: {
			url: '/images/spell/friends.webp',
			alt: 'BG3 Friends symbol'
		},
		body: [
			`This spell give you advantage on charisma checks against the target. It has no direct combat utility, but charisma skill checks are really common and importat, so this spell is worth taking after you’ve covered all the A – S cantrips. `
		]
	};
	let guidance: spell = {
		level: 0,
		class: ['cleric', 'druid'],
		title: 'Guidance',
		tier: 'S',
		image: {
			url: '/images/spell/guidance.webp',
			alt: 'BG3 Guidance symbol'
		},
		body: [
			`Guidance is a single target, touch range buff for yourself or allies. While it is active, the target receives a bonus 1d4 on skill checks. It stays active for 10 rounds, or as long as you maintain concentration. It isn’t really a combat spell, but it is so useful out of combat that I cannot give it anything but S-Tier. Having this spell is like you are proficient in every skill, only it stacks with proficiency. Take it, cast it. `
		]
	};
	let light: spell = {
		level: 0,
		class: ['cleric', 'wizard', 'high elf', 'high half-elf'],
		title: 'Light',
		tier: 'S',
		image: {
			url: '/images/spell/light.webp',
			alt: 'BG3 Light symbol'
		},
		body: [
			`This cantrip is a must have for any party with Lae’zel. Light infuses an entity with light, illuminating 12m around it. This effect lasts 99 turns, and because it is a cantrip it can be cast at will, so it is effectively permanent. Cast this on a party member who does not have Darkvision and they now have their own personal light source that follows them around. Notice also that Light does not take up your concentration, unlike Dancing Lights. So, with this cantrip you practically negate disadvantage from dim light and darkness on all melee characters at an opportunity cost of nothing. Incredible!`,
			`If Light is so good though, why isn’t Dancing Lights RP Tier, since they serve the same purpose? Light only illuminates 12m of space, which is enough for melee attacks, but not enough to help with most ranged attacks. Moreover, most of your uses of Light will be to cast it on yourself or one of your party members so that the light stays with them, but this also means they cannot hide in shadows themselves. See, enemies without Darkvision also have disadvantage when attacking you. Dancing Lights can reliably illuminate the area an enemy is in without illuminating the area you and your allies are in. Light cannot do that.`
		]
	};
	let mageHand: spell = {
		level: 0,
		class: ['warlock', 'bard', 'sorcerer', 'wizard'],
		title: 'Mage Hand',
		tier: 'B',
		image: {
			url: '/images/spell/mage-hand.webp',
			alt: 'BG3 Mage Hand symbol'
		},
		body: [
			`Mage hand is a summon, and summons are always good, because they come with their own movement and actions. However, this summon is extremely underwhelming. You will get the most use out Mage Hand by spamming shove to push targets off of high places or into AoE spells. If I didn’t find this spell tedious, cheesy, and annoying I would probably give it an A ranking, or even S. You can safely clear many fights just by stealthing and using your Mage Hand to shove targets off cliffs if you have the patience, but that is not why I boot up BG3, and I am sure it isn’t why you do either, so I give this spell a B.`,
			`It technically also has some out of combat utility for solving puzzles. For example, I use Mage Hand to throw a certain dark tome in a locked/trapped cage through the bars so I can pick it up safely.`
		]
	};
	let minorIllusion: spell = {
		level: 0,
		class: ['warlock', 'bard', 'sorcerer', 'wizard'],
		title: 'Minor Illusion',
		tier: 'A',
		image: {
			url: '/images/spell/minor-illusion.webp',
			alt: 'BG3 Minor Illusion symbol'
		},
		body: [
			`I am honestly surprised to be giving this an A-tier ranking, but once I really think it through I feel like I can’t give it anything lower. Minor Illusion is made to be cast during stealth. It creates a distraction, drawing the attention of NPCs away from somewhere so you can safely sneak to a better position. Think of that iconic scene in Star Wars IV: A New Hope, where Obi Wan uses the force to make a little *click* that distracted the storm troopers so he could sneak by. That is what Minor Illusion does.`,
			`So why is it A-Tier? I use Minor Illusion in a few encounters to get into position where I can start the fight with a free attack and surprise. For those fights its combat value is insane for a single cantrip with basically zero opportunity cost. I am sure I am not even close to exhausting all of the ways it could be used to advantages in fights I haven’t even thought about. This is a textbook  “situationally amazing” cantrip, so A-tier all the way. `
		]
	};
	let poisonSpray: spell = {
		level: 0,
		class: ['warlock', 'druid', 'sorcerer', 'wizard'],
		title: 'Poison Spray',
		tier: 'C',
		image: {
			url: '/images/spell/poison-spray.webp',
			alt: 'BG3 Poison Spray symbol'
		},
		body: [
			`This is a save attack cantrip that targets constitution and does 1d12 poison damage. 1d12 is fantastic damage for a cantrip, but poison resistance and even immunity is fairly common among classic D&D enemies like undead or fiends. Constitution saving throws are also fairly high among monsters. Finally, Poison Spray also has a low range, forcing your caster into close combat. All of these together make Poison Spray an underwhelming spell.`
		]
	};
	let produceFlame: spell = {
		level: 0,
		class: ['druid'],
		title: 'Produce Flame',
		tier: 'A',
		image: {
			url: '/images/spell/produce-flame.webp',
			alt: 'BG3 Produce Flame symbol'
		},
		body: [
			`This cantrip is a standard ranged attack cantrip with an extra step. Using this spell costs an action and you summon a flame into your hand. This flame illuminates 3m and can be held in your hand for 99 turns. At the cost of another action you can throw the flame and it does 1d8 fire damage. If you throw the flame on the same turn that you summon it, it does not cost an action to throw.`,
			`It sounds complicated, but its really just a slightly lower damage Fire Bolt which you can choose to hold for illumination like the Light cantrip. Unlike the Light cantrip, you cannot cast this on allies, which is why it is A-tier rather then S.`
		]
	};
	let rayOfFrost: spell = {
		level: 0,
		class: ['sorcerer', 'wizard'],
		title: 'Ray of Frost',
		tier: 'A',
		image: {
			url: '/images/spell/ray-of-frost.webp',
			alt: 'BG3 Ray of Frost symbol'
		},
		body: [
			`This is a ranged attack cantrip that does 1d8 cold damage and applies a debuff on the target that reduces their movement by 3m. It can also be cast on liquid surfaces to create an ice ground effect which can knock enemies prone on movement, ending their turn. The damage is mediocre, but the debuff and ground effect are nifty. Its decent cantrip to have in your arsenal.`,
			`It would have a B ranking except for its synergy with another spell: Create/Destroy Water. Skip to the Create/Destroy Water review if you want to read about that synergy, I discuss it there. `
		]
	};
	let resistance: spell = {
		level: 0,
		class: ['cleric', 'druid'],
		title: 'Resistance',
		tier: 'C',
		image: {
			url: '/images/spell/resistance.webp',
			alt: 'BG3 Resistance symbol'
		},
		body: [
			`Resistance works exactly like Guidance, but it allows you to add 1d4 to your saving throws rather than skill checks. This is a very important difference. Skill checks mostly happen outside of combat, whereas saving throws mostly happen inside of combat. Outside of combat, there isn’t much that competes for your concentration, so Guidance has a very low opportunity cost. Inside of combat there is A LOT that competes for your concentration, so Resistance has a very high opportunity cost and is therefor very rarely efficient to cast. One of the spells that it competes with is Bless, which does the same thing Resistance does but better. The only reason this spell is not RP tier is that there are still some outside of combat situations that call for Saving Throws, and it is perfect for those.`
		]
	};
	let sacredFlame: spell = {
		level: 0,
		class: ['cleric'],
		title: 'Sacred Flame',
		tier: 'C',
		image: {
			url: '/images/spell/sacred-flame.webp',
			alt: 'BG3 Sacred Flame symbol'
		},
		body: [
			`Another C-tier save attack cantrip. Sacred Flame targets dexterity and does 1d8 radiant damage to a single target at range. Save attack cantrips are hard to hit and hard to get advantage on. Do not rely on this spell as your main source of damage, use a crossbow instead.`
		]
	};
	let shillelagh: spell = {
		level: 0,
		class: ['druid'],
		title: 'Shillelagh',
		tier: 'A',
		image: {
			url: '/images/spell/shillelagh.webp',
			alt: 'BG3 Shillelagh symbol'
		},
		body: [
			`Shillelagh is a bonus action spell that buffs a club, greatclub, or quarterstaff you are wielding. It enchants that weapon so that it now does 1d8 + your wisdom modifier damage and uses your wisdom modifier on attack roles instead of strength. If you think of this like an attack cantrip it is  technically the only one that adds your spell attribute modifier to the damage (Eldritch Blast can, but only for Warlocks who take the right Invocation). If you think of it like a normal weapon attack, this is one of handful that allow you to use your spellcasting attribute (wisdom) for standard attacks. That is useful because it allows you to effectively invest in weapon attack potency and spell potency simultaneously. However, while this is good, it is still very far from being in the top tier of damage sources in the game, so it has to stay in A-tier. `
		]
	};
	let shockingGrasp: spell = {
		level: 0,
		class: ['sorcerer', 'wizard'],
		title: 'Shocking Grasp',
		tier: 'A',
		image: {
			url: '/images/spell/shocking-grasp.webp',
			alt: 'BG3 Shocking Grasp symbol'
		},
		body: [
			`The only melee attack cantrip in the game so far. Shocking grasp does 1d8 lightning damage and applies a debuff that prevents the target from using their reaction. Canceling an enemy reaction means you can run away from them without triggering an opportunity attack, allowing you to kite enemies who have managed to close to melee range of you. Shocking grasp also synergizes with Create/Destroy Water the same as Ray of Frost. We will discuss both of those synergies below in the Create/Destroy Water review.`
		]
	};
	let thaumaturgy: spell = {
		level: 0,
		class: ['cleric'],
		title: 'Thaumaturgy',
		tier: 'B',
		image: {
			url: '/images/spell/thaumaturgy.webp',
			alt: 'BG3 Thaumaturgy symbol'
		},
		body: [
			`This spell gives the caster advantage on intimidation and performance checks. It doesn’t have any in combat use, but intimidation and performance checks are fairly common and important. `
		]
	};
	let thornWhip: spell = {
		level: 0,
		class: ['druid'],
		title: 'Thorn Whip',
		tier: 'A',
		image: {
			url: '/images/spell/thorn-whip.webp',
			alt: 'BG3 Thorn Whip symbol'
		},
		body: [
			`Thorn Whip is in between a melee and ranged attack cantrip. It does 1d6 slashing damage and pulls the target 3m towards the caster if they are large or smaller. As a consistent source of damage this spell is terrible. The range is low and the damage is dismally weak. However, pulling a target toward you is a rare and valuable effect. You should use this to pull enemies off of high places into fall damage. Its also useful for pulling enemies into your AoE spells. If you use it like this, Thorn Whip is worth taking.`
		]
	};
	let trueStrike: spell = {
		level: 0,
		class: ['bard', 'sorcerer', 'warlock', 'wizard', 'eldritch knight', 'arcane trickster'],
		title: 'True Strike',
		tier: 'RP',
		image: {
			url: '/images/spell/true-strike.webp',
			alt: 'BG3 True Strike symbol'
		},
		body: [
			`This cantrip is a trap… It costs an action and gives you advantage on attacks against a target for the next two turns. It is in a similar situation to Blade Ward, where to keep it up constantly you would need to cast it every other turn. Almost always it will be better for your DPR to just attack twice rather then sacrificing one attack to give advantage to another. The only exceptions I can think of are, of course, Rogues, who’s attacks are more than twice as efficient if they have advantage, and sorcerers, who can either extend the duration of True Strike or use Quickened Spell to take more than one action their next turn. Even in these extremely niche situations, True Strike still takes up a concentration slot… There are just better ways to get advantage on your attacks for this spell, so its an RP-tier without doubt.`,
			`Larian, if you are reading this, my recommendation for fixing this cantrip is:`,
			[
				`Take away its concentration requirement`,
				`Make it cast on self rather then cast on enemies so that it gives your character advantage on their attacks against any enemy rather than just one.`,
				`Extend the duration so that a single cast of this spell will give you two turns of attack with advantage rather than one.`
			],
			`If all three of these are too strong in testing, then take away 3. If its still to strong take away 2. `
		]
	};
	let armsOfHadar: spell = {
		level: 1,
		class: ['warlock'],
		title: 'Arms of Hadar',
		tier: 'RP',
		image: {
			url: '/images/spell/arms-of-hadar.webp',
			alt: 'BG3 Arms of Hadar symbol'
		},
		body: [
			`We are going to start off by breaking alphabetical order slightly and look at a save attack spell so that we can discuss how save attack spells are different then save attack cantrips and set the pattern for how we will evaluate them. Remember that save attacks are offensive spells that target a saving throw defense instead of armor class. They have a different kind of math to them, for example, they cannot crit, they are not affected by certain conditional modifiers like high ground or disadvantage from dim light, etc. One of the unique things about save attack spells is that they do damage even when they miss (i.e. I consider an enemy making their saving throw a “miss”). Every save attack spell that is not a cantrip will have a rider that says something like “on a successful save, targets only take half damage.” You can think of this as making up for the fact that they cannot crit. Save attack spells do reliable damage compared to higher potential but more volatile standard attacks`,
			`To calculate their “damage per target” we multiple the damage on a hit with the probability to hit, then do the same with damage on a miss with probability to miss then add the two together. This will tell us how much damage the spell will do on average per target, but because most save attack spells are AoE they have the possibility of hitting multiple targets you will need to multiply that by the average number of targets per cast to get a complete “damage per cast” number. It is, tragically, impossible for me to get a precise number for the average number of targets per cast, so when reviewing save attack spells I will just give you their damage per target average (DPTr) and my subjective opinion on how easy it is to hit a high number of targets with the spell.`,
			`So, this means we will have 3 criteria on which to judge the potency of a save attack spell:`,
			[
				`Their damage per target average (DPTr). <strong>In this article I calculate DPTr assuming there is a 60% chance to hit, which is as if you are attacking a target with a +2 to save with a 14 DC.</strong> Its somewhat arbitrary, but I just needed a number to express the relative strengths of the spells.`,
				`The value of their particular targeting method, ex. all creatures in 4.5m cone, all enemies in 3m circle from caster, a ranged 6m blast, etc. Here we will need to make some subjective value judgements.`,
				`The value of any extra effects to the spell. Here again we’ll need to make some value judgments.`
			],
			`Okay, now that we have said all of that, let’s return to Arms of Hadar.`,
			`When you cast Arms of Hadar all creatures in a 3m radius from the caster must make a strength save or take 2d6 necrotic damage and lose their reaction until the start of their next turn. On a failed save, targets take half damage. Arms of Hadar will average 5.6 DPTr, which is low. It also have a very inconvenient targeting method, a low 3m radius centered on the caster that can hit allies, meaning you have to put yourself in an exposed position to maximize the damage of the spell. The only real reason you would want to cast this spell is if you are already surrounded and you want to try to escape without taking attacks of opportunity. However, targets only lose their reaction if the spell hits, so it is not a guaranteed escape, and there is another spell, Misty Step, which is a guarantee and is more useful in general. Its always better to cast Misty Step or Expeditious Retreat, which is why I have given Arms of Hadar a RP-tier ranking. I want to note though, the RP value of this spell is amazing. Tendrils of dark energy attack my enemies? That is so badass! `
		]
	};
	let animalFriendship: spell = {
		level: 1,
		class: ['bard', 'druid', 'ranger'],
		title: 'Animal Friendship',
		tier: 'RP',
		image: {
			url: '/images/spell/animal-friendship.webp',
			alt: 'BG3 Animal Friendship symbol'
		},
		body: [
			`Animal Friendship is a single target save spell that targets wisdom. It can only be cast on a beast that has an intelligence of 4 or lower. If the target fails their save they are charmed. Charmed is already an underwhelming condition, and this spell is a charm that only works for an extremely niche creature group. There are better things to cast from a power perspective, but it may help you navigate some quests/areas without harming any animals, so 10/10 for RP utility.`
		]
	};
	let armorOfAgathys: spell = {
		level: 1,
		class: ['warlock'],
		title: 'Armor of Agathys',
		tier: 'S',
		image: {
			url: '/images/spell/armor-of-agathys.webp',
			alt: 'BG3 Armor of Agathys symbol'
		},
		body: [
			`This is a phenomenal spell that is easy to overlook. When you cast Armor of Agathys you become encased in a spectral frost. This gives the caster 5 temporary hit points. Furthermore, for as long as the temporary hit points remain, melee attacks that hit you return 5 cold damage to the attacker in retaliation. The temporary hit points remain until you finish a long rest, or until they are depleted from damage.`,
			`It may seem a little confusing, but basically it works like this: you do 5 retaliation damage to attackers until you have taken 5 damage yourself. After that, the spell is done. So casting this at level 1 will likely be worth about 10 damage: 5 damage saved and 5 damage dealt. 10 damage is ok at best. Its close to the same value as Magic Missile, but you cannot choose the target, and its technically not a guarantee. Why is it S-tier then?`,
			`It’s S-tier because of how insanely it scales when it is upcast. For every spell slot above 1st level that you cast this spell it increases both the temp hit point value and retaliation damage by 5. So, as a 2nd level spell its now giving 10 hit points and retaliates 10 damage. When it was 5 temporary hit points it was very unlikely to absorb more then one hit. But now with 10 hit points there is definitely a possibility that it will absorb two, which means two procs of retaliation… that’s a 30-damage swing from a single spell. Its starting to look much better now. Imagine how its going to look on full release when we can cast it as a 3rd or even 5th level spell.`,
			`There are some more subtle aspects to this spell that are easy to miss. One is its low opportunity cost. It costs an action to cast, but it lasts until your long rest, which means you should always cast this before an encounter, effectively making it cost no action at all. And at the low cost of nothing it is unlocking an otherwise locked resource of the action economy: free retaliation. See, all other forms of damage that you can deal in BG3 actually cost some part of the action economy: full actions, bonus actions, reactions, concentration, etc. Armor of Agathys costs nothing except a spell slot. There is nothing else like this in the game.`,
			`Because it does damage to enemies completely for free, you can actually afford to spend actions to get more value out of it. There are three primary ways to do this. The first and best is the cantrip Blade Ward, which we discussed above. The resistances from Blade Ward reduce incoming damage, meaning more durability and more retaliation procs. The second is Ray of Enfeeblement which we will review below. It also reduces incoming damage and stacks with Blade Ward. The final way is Create/Destroy Water, which we will also discuss below. It debuffs enemies to take more damage from your retaliation damage.`
		]
	};
	let bane: spell = {
		level: 1,
		class: ['cleric', 'warlock'],
		title: 'Bane',
		tier: 'A',
		image: {
			url: '/images/spell/bane.webp',
			alt: 'BG3 Bane symbol'
		},
		body: [
			`Bane is an AoE debuff that targets three enemies in a large area. Those enemies must make a Charisma saving throw. If they fail they subtract 1d4 (2.5 average) from all attack roles and saving throws. This is an extremely potent debuff, especially the penalty to saving throws. A penalty to an enemies saving throw is effectively a buff to your save spell’s accuracy. As we will see, there are a handful of saving throw spells which are so debilitating that might as well be a guaranteed kill, so being more accurate with them is powerful. The only reason this spell is not S tier is that it competes for a concentration slot against better spells, making its opportunity cost to cast very high. Speaking of better spells…`
		]
	};
	let bless: spell = {
		level: 1,
		class: ['cleric'],
		title: 'Bless',
		tier: 'S',
		image: {
			url: '/images/spell/bless.webp',
			alt: 'BG3 Bless symbol'
		},
		body: [
			`Bless if the buff counterpart to Bane. It does the same thing, but reverse, and to members of your own party. It is probably slightly worse as a buff then as a debuff (it is harder and more important to hit save spells then weapon attacks, and Bane improves the accuracy of save spells), however, since this is cast on allies there is no chance to miss! If there is one thing I like in BG3, its not missing.`,
			`Its easy to overlook how good this buff is though. A +2 bonus so saving throws is like having proficiency in every saving throw. It helps you maintain concentration so that you get more efficiency from your concentration spells.  A +2.5 to accuracy adds 4.4 DPR to Lae’zel on the current optimum build, and that is just one companion. This spell is insane, cast it every encounter.`
		]
	};
	let burningHands: spell = {
		level: 1,
		class: ['cleric', 'warlock', 'wizard'],
		title: 'Burning Hands',
		tier: 'B',
		image: {
			url: '/images/spell/burning-hands.webp',
			alt: 'BG3 Burning Hands symbol'
		},
		body: [
			`You shoot fire from your hands, scorching all creatures in a 5m cone from the caster. All creatures in the cone must make a dexterity saving throw or take 3d6 fire damage. Targets take half damage on a successful save; any flammable or explosive surfaces/objects in the cone are ignited. Burning Hands averages 8.4 DPTr (as a reminder, this is with a 60% chance to hit the target), which is the highest DPTr 1st level spell. However, its targeting method does typically force you into an exposed position. It synergizes well with flammable ground effect spells like Grease, Entangle, and Web. When cast on top of those ground effects they ignite all targets in the area (a 2.5 DPT for two turns). Moreover, those spells impose either the restrained or prone conditions, which give disadvantage to dexterity saving throws. Your DPTr increases to 9.66 against targets with disadvantage.`,
			`We will discuss this spell more when we get to Entangle, Grease, and Web spells below, but the jist is that even in combination with those spells Burning Hands is just a mediocre striking spell, so I have given it a B-tier ranking.`,
			`It is worth noting that casting Burning Hands is the only way in the game so far to guarantee a proc of the item Circlet of Fire, a potentially build defining item. That interaction could bump its rating up to an A, but because it is a very niche item interaction that is difficult to capitalize on I am leaving it out of this spells rank. Unlike other item-spell combos, it just won’t affect the majority of runs.`
		]
	};
	let charmPerson: spell = {
		level: 1,
		class: ['cleric', 'warlock', 'wizard', 'druid'],
		title: 'Charm Person',
		tier: 'RP',
		image: {
			url: '/images/spell/charm-person.webp',
			alt: 'BG3 Charm Person symbol'
		},
		body: [
			`Charm Person is a control spell that imposes the charmed condition on a target that fails a wisdom save for 10 turns or until you lose concentration. As we discussed in the introduction to this article, charmed is an underwhelming condition. This spell is completely outperformed by a competing spell – Tasha’s Hideous Laughter – so it gets an RP-tier ranking.`
		]
	};
	let chromaticOrb: spell = {
		level: 1,
		class: ['sorcerer', 'wizard'],
		title: 'Chromatic Orb',
		tier: 'A',
		image: {
			url: '/images/spell/chromatic-orb.webp',
			alt: 'BG3 Chromatic Orb symbol'
		},
		body: [
			`When you cast Chromatic Orb you hurl a elemental sphere at a single target. You choose the element of that sphere from one of several options. It is a ranged attack spell. Each option does 2d8 (9 average) damage of its elemental type with an added effect. The elemental types are:`,
			[
				`Fire: 2d8 fire damage and ignites the target and the ground they are standing on. Ignited targets take 1d4 initial damage and another 1d4 on their subsequent turn.`,
				`Acid: 2d8 acid damage and a puddle of acid forms in the area around the target. The target, and anyone who moves through the puddle, receive a -2 penalty to their AC.`,
				`Cold: 2d8 cold damage and the ground freezes around the target. They must make a dexterity saving throw or fall prone. Any creature that walks on the ice must also make a dexterity saving throw or fall prone.`,
				`Lightning: 2d8 lightning damage and the target is electrocuted. The area around the target is electrically charged, electrocuting creatures who move through it. Electrocuted is identical to the ignited condition (see fire above) only it does lightning damage instead of fire.`,
				`Thunder: 3d8 (13.5 average) damage.`,
				`Poison: 2d8 damage and a small cloud of bursts around the point of impact. Any creature in the area must make a constitution saving throw or be poisoned for two rounds.While poisoned the creature has disadvantage on attack roles and ability checks.`
			],
			`The damage on this spell is a bit low, but that’s not that bad since the you will likely be casting it to exploit enemy vulnerabilities or for the extra effects. Except for poison and cold, which require saving throws, all the extra effects proc even when the spell misses. If you aren’t exploiting vulnerabilities, the best extra effect is acid. A guaranteed -2 to a targets AC is a significant accuracy boost for the rest of the party. Frost and Lightning need a special mention due to their synergy with another spell: Create/Destroy Water. We will discuss that synergy below once we review Create/Destroy Water.`,
			`*Note to Larian if you are reading this. The DC on the saving throws for this spell are bugged right now. On my 18 intelligence Gale, whose DC is 14 on all other spells, has a DC 12 for Chromatic Orb for some reason. I tested it on an custom wizard with 8 intelligence and it was still DC12 (it should be 9).*`
		]
	};
	let colorSpray: spell = {
		level: 1,
		class: ['wizard'],
		title: 'Color Spray',
		tier: 'C',
		image: {
			url: '/images/spell/color-spray.webp',
			alt: 'BG3 Color Spray symbol'
		},
		body: [
			`This is one of two control spells that break the typical pattern for spells in that they attack neither saving throws nor AC. Instead, they effect a number of targets equal to a certain hit point threshold. The other spell that is like it is Sleep. I discuss the mechanic in more detail there.`,
			`Color Spray imposes the blind condition to the targets it hits. Blind is a valuable debuff but not nearly as strong as the incapacitated condition offered by Sleep. Its almost always better to cast Sleep instead of this Color Spray. The only reason this spell is not RP-tier is that a fairly common racial trait – Elven Ancestry – gives immunity to sleep, but not blind, so against those targets Color Spray is a useful spell that reliable imposes a strong debuff. I still rarely have this in my spell book.`
		]
	};
	let command: spell = {
		level: 1,
		class: ['cleric', 'warlock'],
		title: 'Command',
		tier: 'B',
		image: {
			url: '/images/spell/command.webp',
			alt: 'BG3 Command symbol'
		},
		body: [
			`This is a single target control spell. When cast the target must makes a wisdom save and if they fail they lose their next turn. They cannot move or take any actions. It is only one turn however. Command does not require concentration.`,
			`The trouble with this spell is, on its own, you are trading your most of your turn for all of theirs’s. Its unlikely that a player character will have a less impactful turns then whoever they are halting. This can be good if you are halting someone in a vulnerable area, like in a Cloud of Daggers for example.`
		]
	};
	let createDestroyWater: spell = {
		level: 1,
		class: ['druid'],
		title: 'Create/Destroy Water',
		tier: 'S',
		image: {
			url: '/images/spell/create-destroy-water.webp',
			alt: 'BG3 Create/Destroy Water symbol'
		},
		body: [
			`This spell rocketed from RP-tier to S-tier with the introduction of Chromatic Orb on patch 6. I have already mentioned it several times when discussing cantrips like Ray of Frost and Shocking Grasp, so let’s get right to it. Create/Destroy water has two unique parts: creating water and destroying water, we will discuss each in turn`,
			`Creating Water drenches a 4.5m radius in water that magically manifests out of the air. A puddle is created on the ground in that radius and any creatures in it when the spell is cast gains the wet condition for two rounds. There is no saving throw to avoid getting wet (that’s a sentence that felt weird to type…) A wet creature is immune to the ignited condition and resistant to fire damage but is also vulnerable to cold and lightning damage. There are so many uses for this spell it is daunting to have to describe them. You can cast this defensively on your own party if you are expecting incoming fire damage; resistance to fire halves that damage. The puddle it creates on the ground can be frozen or electrically charged. If you freeze it, all enemies in the area and who subsequently move through it must make a dex saving throw or fall prone. If you electrically charge it shocks everyone in the area, dealing 1d4 lightning damage, and 1d4 more at the start of their next turn. The most important use is as a debuff on enemies to set up for lightning and cold orbs.`,
			`Let’s take a second to analyze vulnerability as a mechanic. You can think of vulnerability as a slightly better version of a critical hit. A target that is vulnerable to a damage type takes double the damage of that type. Unlike critical hits, it is really, truly, double damage. Mathematically you calculate damage as normal and then when you have added everything up, you multiply it by two. Another advantage is has over critical hits is that it stacks with critical hits. With vulnerability you can super-crit, so to speak, where you double your damage (kinda) from critting then double the double with vulnerability. `,
			`So, what does this mean for Create Water? It means you have a method of forcing a condition which will, effectively, turn all of your hits with cold and lightening attacks into critical hits but better. So cast Create Water, get those baddies all moist, then hit one with a Lightening Chromatic Orb, what happens? Well to start, if you hit, your target takes 4d8 damage (18 average) with a chance that it can crit (which will add around 2 damage to the average). They also get electrocuted for 2d4 (5 average) damage which will trigger again on their next turn if they are still alive. Remember that the electrocution effect from Chromatic Orb procs even when the spell misses! Altogether you will average 30ish damage on a hit and 10 damage on a miss. But there is more! The electricity will spread through the whole 4.5m radius puddle, electrocuting every creature in it, even if the chromatic orb misses, procing a guaranteed 10 damage on average. For comparison, Burning Hands averages 10.5 damage ON A HIT. You need a 90% accuracy before you get comparable DPTr out of the highest 1st level DPTr spell. You get so much guaranteed value from this spell. It turns a fairly average single target damage spell into a nuke with an AoE electricity death trap on the side. The gravity of this synergy has completely warps the value of other spells. Cantrips like Ray of Frost and Shocking Grasp are bumped up a tier just because their damage types add to this combo.`,
			`Destroy Water evaporates water and liquids in an area. You can use it to dispel a Fog Cloud, for example. To be honest, I’ve never actually been in a situation where this Destroy Water was useful, but Create Water is useful enough for the both of them.   `
		]
	};
	let cureWounds: spell = {
		level: 1,
		class: ['bard', 'cleric', 'druid', 'paladin', 'ranger', 'celestial'],
		title: 'Cure Wounds',
		tier: 'RP',
		image: {
			url: '/images/spell/cure-wounds.webp',
			alt: 'BG3 Cure Wounds symbol'
		},
		body: [
			`Cure Wounds heals a single target adjacent to the caster for 1d8 + your spellcasting modifier at the cost of an action. This is how we used to heal our allies back in BG1 when resting for 8 hours would heal your 1 HP… But we are playing BG3 now and we heal allies with Healing Word. Just cast Healing Word instead. If you aren’t sure why, scroll down and read my entry on it below.`
		]
	};
	let disguiseSelf: spell = {
		level: 1,
		class: ['cleric', 'wizard'],
		title: 'Disguise Self',
		tier: 'RP',
		image: {
			url: '/images/spell/disguise-self.webp',
			alt: 'BG3 Disguise Self symbol'
		},
		body: [
			`This spell modifies the appearance of the caster into a humanoid of another kind. It has no direct combat utility. As far as I know it also has no indirect combat utility, but I haven’t messed around with it that much. This spell is designed for role-play, not for optimization, so it belongs in RP-tier.`
		]
	};
	let dissonantWhispers: spell = {
		level: 1,
		class: ['bard', 'warlock'],
		title: 'Dissonant Whispers',
		tier: 'S',
		image: {
			url: '/images/spell/dissonant-whispers.webp',
			alt: 'BG3 Dissonant Whispers symbol'
		},
		body: [
			`This is a single target control spell that attacks wisdom. If the target fails a wisdom saving throw they take 3d6 psychic damage and become frightened. If they succeed, they take half as much damage and are not frightened. The damage on this spell is the same as Burning Hands, but on a single target, so not bad. Frightened is a very strong condition, especially if you land it on a target that will proc an opportunity attack when they flee. This spell does damage, steals an enemy turn, and procs an opportunity attack. That is extremely efficient. `
		]
	};
	let ensnaringStrike: spell = {
		level: 1,
		class: ['ranger'],
		title: 'Ensnaring Strike',
		tier: 'B',
		image: {
			url: '/images/spell/ensnaring-strike.webp',
			alt: 'BG3 Ensnaring Strike symbol'
		},
		body: [
			`Ensnaring strike is cast on a weapon attack. If that attack hits, besides dealing normal attack damage, the target must make a strength saving throw or be restrained. While restrained the creature takes 1d6 (3.5 average) piercing damage on each of its turns. The creature or an ally may use an action to try to tear away the restraints, making another strength saving throw. If they succeed the condition ends.`,
			`Ensnaring Strike is an interesting spell mechanically. Since it is attached to a weapon attack, you can think of it as a spell that costs no action, meaning it has a very low opportunity cost. That said, you kind of get what you pay for with this spell. It is meant to lock down a target and make them vulnerable to attacks and dexterity attacking spells. It also adds a little bit of damage and keeps a target from moving. It’s a consistently average spell, so B Tier.`
		]
	};
	let entangle: spell = {
		level: 1,
		class: ['druid'],
		title: 'Entangle',
		tier: 'B',
		image: {
			url: '/images/spell/entangle.webp',
			alt: 'BG3 Entangle symbol'
		},
		body: [
			`Entange covers a large are ground with a vines. The area is now difficult terrain. Creatures that are in it when it is cast or that subsequently move through it have to make a strength saving throw or be restrained. On their turn an entangled target or one of their allies may expend an action to reroll the saving throw to free themselves from the condition. If something ignites the vines all creatures in it are ignited, immediately taking 1d4 fire damage and 1d4 more on the start of their next turn. Once it is ignited, it no longer restrains or is difficult terrain, however, it does burn for a round and any creature that moves through it in that round is ignited. Entangle uses concentration.`,
			`Restrained targets cannot move and all attacks against them have advantage. This means you can entangle a group of enemies then shoot at them with arrows. Your attacks will have advantage and they won’t be able to close the distance against you, because they are restrained. They can still shoot back at you of course if they have ranged weapons, and most enemies do. Entangle is a good spell, but it requires concentration, and gets out competed by often stronger options of the same level, like, say, Faerie Fire. I compare the two spells when I review Faerie Fire below.`
		]
	};
	let expeditiousRetreat: spell = {
		level: 1,
		class: ['sorcerer', 'warlock', 'wizard'],
		title: 'Expeditious Retreat',
		tier: 'C',
		image: {
			url: '/images/spell/expeditious-retreat.webp',
			alt: 'BG3 Expeditious Retreat symbol'
		},
		body: [
			`This is a self only buff that can be cast as a bonus action. When it is cast, it functions as if you took the dash action and on subsequent turns, while this spell is active, you may dash as a bonus action. The spell remains active until your next long rest or until you lose concentration.`,
			`To rank this spell we need to ask what it should be used for? My first instinct for this spell is that it is a mobility buff that competes with Longstrider and Jump, and, indeed, it can be used this way. However, when used this way it is objectively worse than its competitors. Another use for this spell is as an escape/reposition tool, competing with spells like Arms of Hadar and Misty Step. Because it can be cast as a bonus action and doesn’t depend on a saving throw to work it is better then Arms of Hadar. It is still always worse than Misty Step, but it doesn’t require a 2nd level spell slot to cast, so there is a niche situation where you need to escape and do not have 2nd level spell slots where this spell is useful. It’s a generic brand Misty Step.`,
			{
				url: '/images/guides/expeditious-retreat-joke.webp',
				alt: 'Joke image'
			}
		]
	};
	let falseLife: spell = {
		level: 1,
		class: ['sorcerer', 'wizard'],
		title: 'False Life',
		tier: 'B',
		image: {
			url: '/images/spell/false-life.webp',
			alt: 'BG3 False Life symbol'
		},
		body: [
			`False life is a self buff spell that gives the caster 7 temporary hit points. It does not require concentration and lasts until your next long rest, or until you’ve taken 7 or more damage. When you cast this spell with a 2nd level spell slot it gives you 12 temp hit points (it should increase by 5 for each spell slot level once we have more levels). It is single use hit point booster, not useless but not game changing. Its practically always better to use Armor of Agathys, which we discussed above. However, not all characters who can cast False Life have access to Armor of Agathys, so for them it is a B-tier spell.`
		]
	};
	let faerieFire: spell = {
		level: 1,
		class: ['druid', 'cleric', 'drow'],
		title: 'Faerie Fire',
		tier: 'A',
		image: {
			url: '/images/spell/faerie-fire.webp',
			alt: 'BG3 Faerie Fire symbol'
		},
		body: [
			`When you cast Faerie Fire, enemies in a large area begin to glow, revealing any invisible creatures and providing advantage to your attacks against them for the duration of the spell. Enemies are lit up if they fail a dexterity saving throw and remain that way until the spell expires (10 rounds) or concentration is broken.`,
			`This is a very potent spell. Getting advantage on attacks is a substantial boost to accuracy, and accuracy is very important in BG3. To see what really makes this spell good it is useful to compare it to a competing spell: Entangle. Entangle also applies a debuff that gives advantage to attacks in a large area, but it also does much more, so why have I given Faerie Fire a higher ranking? The biggest reason is that Faerie Fire only has one save. If enemies fail their initial saving throw, they do not get another chance. With Entangle, enemies can get a chance to free themselves every turn. This makes Faerie Fire is a much more reliable way to get advantage.`
		]
	};
	let featherFall: spell = {
		level: 1,
		class: ['bard', 'sorcerer', 'wizard'],
		title: 'Feather Fall',
		tier: 'C',
		image: {
			url: '/images/spell/feather-fall.webp',
			alt: 'BG3 Feather Fall symbol'
		},
		body: [
			`Feather Fall is an AoE team buff that makes everyone effected immune to fall damage. It lasts 10 rounds, does not require concentration, and can be cast on a bonus action. In tabletop 5e this spell can be cast as a reaction, which is better, since you can use while someone is falling instead of when you are worried, they might fall. There are some fights where fall damage is a factor, but good planning and positioning will mitigate that almost as well as this spell. Most of the time when you have the high ground you don’t want to leave it, so Feather Fall isn’t very useful for mobility. There are a few out of combat puzzles that are simpler if you have Feather Fall, but not impossible without it. It’s a C-tier spell for now, but could easily change once we have more content that may call for it.`
		]
	};
	let findFamiliar: spell = {
		level: 1,
		class: ['wizard', 'ranger', 'eldritch knight', 'warlock'],
		title: 'Find Familiar',
		tier: 'B',
		image: {
			url: '/images/spell/find-familiar.webp',
			alt: 'BG3 Find Familiar symbol'
		},
		body: [
			`This spell conjures an extra-planar being which can manifest in the material plane in the shape of one several kinds small, cute animal. Each kind of animal that you summon is mechanically different, so we will discuss each:`,
			[
				`Spider: of the familiars, spider’s have the most hit-points (6) and do the most damage on their attacks (tied with crab). Their attack does 1 piercing damage + 1d4 poison. It also injects a venom which does 1d4 damage to the target on their turn for two turns. Spiders get a very long jump range, so that in theory they can jump to safety after attacking. I say “in theory” because they will still proc an attack of opportunity from whoever they just attacked, and it will probably kill them.`,
				`Raven: a raven attack blinds enemies on hit. They can also fly very far as a bonus action. For some reason blinded targets do not proc their attacks of opportunity, so if the raven hits their attack they can actually fly away to safety!`,
				`Rat: the rat infects their target with disease when their attack hits. It is a unique condition that subtracts 1 constitution from the target and imposes disadvantage on constitution saves. Enemies do lose hit points if their constitution modified drops from this condition, so, when attacking enemies with even number con scores, the rat’s attack does 1 times their level damage. Of course, that is low damage, so the more important effect is the penalty to their con saves. The whole point of the rat is to set up for a save attack spell that targets constitution.`,
				`Frog: The frog’s attacks impose disadvantage to dexterity saves if they hit. They also have a long jump, like the spider, but they will be risking opportunity attacks. Best for setting up a dex save attack spell.`,
				`Crab: their attacks do a bonus 1d4 piercing damage and inflict a unique condition: pinched. Pinched slows the target’s movement by 3m and deal 1d4 pierce damage at the start of their turns.`,
				`Cat: the cat can meow, which distracts NPCs, similar to the Minor Illusion cantrip above.`
			],
			`Practically speaking familiars should only be getting one attack, maybe two, before they die. They will likely miss that attack, although if they hit it will do something useful depending on your familiar. Most of the value from familiars comes from the fact that they will probably absorb an enemy action. The best familiar is the Raven, because there is a higher chance of getting more attacks out of her. `
		]
	};
	let fogCloud: spell = {
		level: 1,
		class: ['wizard', 'ranger', 'sorcerer', 'druid'],
		title: 'Fog Cloud',
		tier: 'S',
		image: {
			url: '/images/spell/fog-cloud.webp',
			alt: 'BG3 Fog Cloud symbol'
		},
		body: [
			`Fog Cloud is a AoE, terrain altering spell. It summons a 6m radius cloud of fog in an area that you choose within range. Any creature in that fog is blinded, but the blind goes away if they leave the fog. Creatures outside of the fog cannot see into it and thus cannot target anyone within the cloud.`,
			`Fog Cloud gets the S-tier for being consistently amazing once you understand how to use it. You should almost never cast fog cloud offensively, i.e. as a debuff against enemies, they can just walk out. What makes this spell so good is when you cast it on your own party. When used in this way, Fog Cloud is like a fortification spell; you choose a spot and don’t leave it. Because enemies can’t target you in the cloud, they will be forced to move towards you. At least, that is how it should work. How it actually works right now is the AI just doesn’t know you are there, and they stand around wasting their turn... You could just pop out, shoot at them, then run back into the cloud and hide if you wanted, but I consider that cheap and unfun. Nevertheless, even if you are like me and don’t want to exploit the AI by hiding, Fog Cloud is still an invaluable tool for controlling enemy aggro, covering against incoming fire on a charge, splitting off enemies from each other, or for sneaking into an optimal position to start the fight. There are several fights where most of the challenge is caused by enemies being spread out, for example, the harpies, or the tea house masks. While you run around trying to kill one, the others are hitting you at range with debilitating damage or CC. With Fog Cloud you mitigate most of those advantages. Seriously, try casting fog cloud in the center of the room against the tea house masks; it makes a difficult, chaotic fight predictable and easy.`
		]
	};
	let goodberry: spell = {
		level: 1,
		class: ['ranger', 'ranger'],
		title: 'Goodberry',
		tier: 'C',
		image: {
			url: '/images/spell/goodberry.webp',
			alt: 'BG3 Goodberry symbol'
		},
		body: [
			`Goodberry summons magical berries into your inventory. These berries can be passed on to companions and last until your next long rest. As a bonus action you can eat a berry and it will heal the glutton 1d4 (2.5 average) HP. This is healing that costs a bonus action, which is good, but you can’t really use this for what healing is best at – getting downed allies back into the fight. The healing is insignificant, so just pass on this spell and cast Healing Word instead.`
		]
	};
	let grease: spell = {
		level: 1,
		class: ['wizard'],
		title: 'Grease',
		tier: 'B',
		image: {
			url: '/images/spell/grease.webp',
			alt: 'BG3 Grease symbol'
		},
		body: [
			`Grease slicks a large are ground with a flammable oil. The area is now difficult terrain. Creatures that are in it when it is cast or that subsequently move through it have to make a dexterity saving throw or fall prone. If something ignites the grease, all creatures in it are ignited, immediately taking 1d4 fire damage and 1d4 more on the start of their next turn. Once it is ignited, it is no longer slippery, difficult terrain, however, it does burn for a round, and any creature that moves through it in that round is ignited. Grease does not use concentration.`,
			`Grease is just an alright spell. It can knock enemies prone, but you can’t reliably capitalize on the condition by gaining advantage on your attacks against them, because in order to be in melee range of them you have to risk falling prone yourself. In most fights it is strictly a kiting tool, meant to slow enemies who are trying to close to melee range against you so that you have more turns to pelt them with arrows. Igniting the grease does a guaranteed 2d4 damage (5 damage on average) and has a chance to proc again for another 2d4 if they can’t jump out. The guarantee is nice, but the damage is low for a two-spell combo. That said, sometimes you can combine grease with fire that’s already in the terrain, which removes half of the investment from the combo. Sometimes that 1d4 damage can break an enemy’s concentration. Sometimes you can use this to trigger explosive barrels. Milage for this spell varies depending on the terrain.`,
			`Now, some readers are probably thinking “isn’t this just an objectively worse version of Create/Destroy Water? Shouldn’t it be RP-tier, since there is always a better spell that does the same thing?” The short answer is no, you must consider Grease on it own merits. The long answer is that because the wet condition grants resistance to fire damage, party compositions which depend on fire damage for a significant part of their damage load cannot depend on Create Water the same way other compositions can. There are some S-tier fire damage spells that are worth building around that we will discuss below. Parties that are depending on those spells have reason to consider Grease over Create Water.`
		]
	};
	let guidingBolt: spell = {
		level: 1,
		class: ['cleric'],
		title: 'Guiding Bolt',
		tier: 'A',
		image: {
			url: '/images/spell/guiding-bolt.webp',
			alt: 'BG3 Guiding Bolt symbol'
		},
		body: [
			`Guiding Bolt is a ranged attack spell that deals 4d6 radiant damage to a single target on a hit. If hit, the next ally attack against that target will have advantage. The damage on this spell is awesome, 14 average on a hit, and twice that on a crit. Also giving advantage on an ally attack is just gravy. Nothing clever about this, just cast it and do lots of damage.`
		]
	};
	let hailOfThorns: spell = {
		level: 1,
		class: ['ranger'],
		title: 'Hail of Thorns',
		tier: 'C',
		image: {
			url: '/images/spell/hail-of-thorns.webp',
			alt: 'BG3 Hail of Thorns symbol'
		},
		body: [
			`This is a spell that is made with a standard ranged attack. If the attack lands, besides dealing damage like normal, there is a burst of thorns in a small area around the target. All creatures in the area must make a dexterity saving throw or take 1d10 (5.5) piercing damage, half as much on a successful save.`,
			`This is another spell that has basically no action cost since it is cast on a standard attack (the other is Ensnaring Strike above). Sadly, its damage is just abysmal. It never that bad to cast, since it costs next to nothing, but you also get next to nothing, so C-tier.`
		]
	};
	let healingWord: spell = {
		level: 1,
		class: ['cleric', 'druid'],
		title: 'Healing Word',
		tier: 'S',
		image: {
			url: '/images/spell/healing-word.webp',
			alt: 'BG3 Healing Word symbol'
		},
		body: [
			`This is our first contender for best spell of the game. My review here will be borrowing from what I already wrote about this spell in my Class Tier list. Healing Word is practically a cheat code for most fights. It is like Cure Wounds, but it heals 1d4 + your ability modified at 18m range at the cost of a bonus action. If you are not sure why this is good you should play Darkest Dungeon and you’ll figure it out. Basically, in BG3, same as in Darkest Dungeon, in-combat healing is not designed to be efficient, you should never be able to reliably heal more damage than your enemies are dealing. An efficient use of healing in combat is either when it revives a fallen character, or it gives a character just enough hit points to survive an attack that otherwise would have downed them, effectively giving them another action.`,
			`Let’s model it in our minds. Imagine a cleric, an enemy owlbear, and an ally fighter taking turns in that initiative order. When it is the owlbear’s turn, he will down the fighter, but a Cure Wounds spell will allow the fighter to survive the attack with 1 HP remaining. This is an efficient cast of Cure Wounds, because at the cost of one action you are giving the fighter one action and forcing the owlbear to expend one action more to kill the fighter; it’s a 1 for 2 trade. As good as that is, Healing Word is even better. Healing word will not heal enough to save the fighter against the owlbear’s onslaught, so the cleric will spend their turn attacking the owlbear. On the owlbear’s turn it will down the fighter. The fighter loses their turn, and we are back to the cleric. The cleric can then cast Healing Word to revive the fighter with a bonus action and spend their action to attack again. Now it’s the owlbear’s turn again, and they are in exactly the same situation as last time: they have to spend their action downing the fighter. Suppose the owlbear averages 20 damage per action, they will have to spend that 20 damage to down the fighter, even though the fighter only has 6 hit points remaining. So, casting Healing Word in this situation is effectively absorbing 20 damage at the cost of a bonus action… That is insane efficiency.`
		]
	};
	let hellishRebuke: spell = {
		level: 1,
		class: ['warlock'],
		title: 'Hellish Rebuke',
		tier: 'A',
		image: {
			url: '/images/spell/hellish-rebuke.webp',
			alt: 'BG3 Hellish Rebuke symbol'
		},
		body: [
			`Casting Hellish Rebuke is a free action that enables a reaction option. As a reaction, you can retaliate against enemies who hit you with a constitution save attack which does 2d10 (11 average) fire damage on a hit and half as much on a miss, average 8.8 damage in scenarios with a 60% hit chance. Unlike other retaliation mechanics in BG3 Hellish Rebuke will retaliate against ranged attacks as well as melee. The strength of this spell comes from its low opportunity cost. Weaponizing your reaction is difficult to do. The damage is kind of mediocre sadly.`
		]
	};
	let hex: spell = {
		level: 1,
		class: ['warlock'],
		title: 'Hex',
		tier: 'S',
		image: {
			url: '/images/spell/hex.webp',
			alt: 'BG3 Hex symbol'
		},
		body: [
			`Hex is the first of what I call “4e striker spells.” These are spells that add a d6 (necrotic damage in the case of Hex) to your damage on attacks against the marked target. The spells always hit their target, are a bonus action to cast, and can be switched to new targets when the first one dies without taking an extra spell slot. They also take concentration. In fact, its helpful to think of them as weaponizing your concentration slot, adding 3.5 damage per attack on average to your DPR when you hit. It’s a decent use of a concentration slot at early levels and an extremely efficient use of a level one spell slot.`,
			`Hex earns its S tier in virtue of it being build defining. If you don’t build around it its not that good. Building around it means optimizing the amount of attack roles you make in a round, usually through off-hand weapon attacks and something which gives you extra bonus attacks. Extra bonus attacks can be acquired through the Thief’s Fast Hands feature, the Helmet of Grit, and the Circlet of Fire. Another way to stack attacks on a round is to cast spells which make multiple attack roles. Eldritch Blast will be one of these spells once level cap is increased. A better one that you can cast in the game right now is  the 2nd level spell Scorching Ray, which we will discuss below.`,
			`Hex also imposes disadvantage on an ability check of your choice. Ability checks are kind of rare in combat. They are basically skill checks. Wisdom is used for perception checks for people spotting you in stealth. Initiative roles are a dexterity skill check, so you could give a target disadvantage on initiative if you start a fight with Hex. The most useful is to Hex strength before you shove somebody.`
		]
	};
	let huntersMark: spell = {
		level: 1,
		class: ['ranger'],
		title: "Hunter's Mark",
		tier: 'S',
		image: {
			url: '/images/spell/hunters-mark.webp',
			alt: 'BG3 Hunters Mark symbol'
		},
		body: [
			`Hunter’s Mark is practically identical to Hex, only it does piercing damage instead of necrotic, and it does not impose a disadvantage on skill checks. Those differences make it worse, but not by enough to move it down a tier. It still adds 3.5 damage per hit, so stack up as many attack roles as you can in a turn and you will get a ton of value from this spell.`
		]
	};
	let inflictWounds: spell = {
		level: 1,
		class: ['cleric'],
		title: 'Inflict Wounds',
		tier: 'A',
		image: {
			url: '/images/spell/inflict-wounds.webp',
			alt: 'BG3 Inflict Wounds symbol'
		},
		body: [
			`Inflict Wounds is a melee attack spell that deals 3d10 necrotic damage to its target. That is 16.5 average on a hit and double that on a crit. I crit with this spell probably 98% of the time I cast it, because I almost always cast it to execute incapacitated or paralyzed targets. Its not the highest crit damage possible in the game, but its close, and it’s the highest that doesn’t take several spells to prep. I always have this spell prepared on every caster who can learn it.`
		]
	};
	let jump: spell = {
		level: 1,
		class: ['druid', 'ranger', 'sorcerer', 'wizard'],
		title: 'Jump',
		tier: 'A',
		image: {
			url: '/images/spell/jump.webp',
			alt: 'BG3 Jump symbol'
		},
		body: [
			`Jump is a touch range self or ally buff spell. It triples the target’s jumping distance for 10 rounds and does not require concentration. It is particularly potent on characters who have a high strength since it triples their strength bonus to jump distance as well. A strength-based striker with jump is virtually unstoppable; do not even try to run… she will outrun you. It can also be a valuable tool for sneaking into a good position, because you can jump over entire cones of vision. With Larian’s vertical encounter design, being able to move up high is particularly important, and Jump gets you higher than anything else of its spell level. Its only draw back is that it takes a bonus action to jump, and bonus actions are hot commodities in the current state of the game.`
		]
	};
	let longstrider: spell = {
		level: 1,
		class: ['bard', 'druid', 'ranger', 'wizard'],
		title: 'Longstrider',
		tier: 'A',
		image: {
			url: '/images/spell/longstrider.webp',
			alt: 'BG3 Longstrider symbol'
		},
		body: [
			`Longstrider is another self or team mobility buff. It increases a single target’s movement by 3m until their next long rest. It does not require concentration. You can think of movement in BG3 and games like it as a kind of currency which you use to buy defensive or offensive buffs. Consider this situation: Lae’zel with Great Weapon Master kills the target next to her at the beginning of her turn procing the bonus action attack. The nearest target is 8m away, and her movement is 7m. That extra attack is an offensive buff she could have but doesn’t have enough movement moneys. If she had Longstrider she could afford it, and so her DPR would be boosted. Imagine Gale now, he casts a spell, and then spends his movement to position around the corner so that he is out of sight and does not draw aggro. He just bought himself a valuable durability buff that can only be purchased with movement. It can be hard for me to see what more mobility is really getting me, so thinking of it as a resource that I can use to buy more DPR or durability is useful to me. Maybe its useful to you too.`
		]
	};
	let mageArmor: spell = {
		level: 1,
		class: ['sorcerer', 'arcane trickter', 'eldritch knight', 'wizard'],
		title: 'Mage Armor',
		tier: 'B',
		image: {
			url: '/images/spell/mage-armor.webp',
			alt: 'BG3 Mage Armor symbol'
		},
		body: [
			`Mage Armor is a single target self or ally buff that you can only cast on a target that is not wearing armor. Once it is cast, that targets AC is now 13 + their dex modifier (a +3 bonus) until their next long rest or until they put on armor. Mage Armor does not require concentration. It is basically a way for wizards and sorcerers to wear armor without an armor proficiency, which is nice. The AC is respectable but not high, it’s a mediocre buff, but its always on and has a low opportunity cost.`
		]
	};
	let magicMissile: spell = {
		level: 1,
		class: ['sorcerer', 'eldritch knight', 'arcane trickster', 'wizard'],
		title: 'Magic Missile',
		tier: 'A',
		image: {
			url: '/images/spell/magic-missile.webp',
			alt: 'BG3 Magic Missile symbol'
		},
		body: [
			`Magic Missile shoots three bolts of magical energy. Each bolt does 1d4 + 1 (3.5 average) force damage to its target. There is no attack role and no saving throw, it just does damage. They are directed individually, so you can have them all hit one target, or all hit different targets, or any combination in between. 10.5 average damage on a single cast of a spell is not bad but not great. The real value of this spell is that it always hits, and force damage is never resisted (not yet anyways), so you can rely on this spell to do damage against hard to hit enemies. Really, that is all its useful for: hurting enemies with high AC. The higher their AC the more efficient the damage.`,
			`This is one of those rare spells where we need to talk about its synergy with an item. There is an easy to acquire necklace in the game which adds an extra 1d4 psychic damage (another seldom resisted damage type) to each bolt, bumping the average damage to 6 per bolt, or 18 damage total, 24 if you upcast it. Magic Missile becomes an S-tier spell for whoever gets that item.`
		]
	};
	let protection: spell = {
		level: 1,
		class: ['sorcerer', 'eldritch knight', 'arcane trickster', 'wizard'],
		title: 'Protection from Evil/Good',
		tier: 'B',
		image: {
			url: '/images/spell/protection-from-good-and-evil.webp',
			alt: 'BG3 Protection from Evil and Good symbol'
		},
		body: [
			`This is a single target self or ally defensive buff that requires concentration. Any aberration, fey, celestial, elemental, fiend, or undead now has disadvantage on all attacks against you. You also cannot be frightened or charmed by any creature of those categories. It’s a potent defensive buff, but it only works on one person and not in every encounter. If you are fighting one these kinds of creature it is worth casting on your striker. You can see a creatures category by right-clicking it and selecting “examine.”`
		]
	};
	let rayOfSickness: spell = {
		level: 1,
		class: ['sorcerer', 'wizard'],
		title: 'Ray of Sickness',
		tier: 'RP/B',
		image: {
			url: '/images/spell/ray-of-sickness.webp',
			alt: 'BG3 Ray of Sickness symbol'
		},
		body: [
			`Ray of Sickness is a ranged attack spell that does 2d8 (9 average) damage on a hit. If the spell hits, the target must also make a constitution save or become poisoned for two turns. The damage is low. Poisoned is a decent condition, but you need to hit twice (hit the attack and then the target needs to fail their saving throw) to apply it, so it is not reliable. What really makes this RP tier is that Ray of Sickness is just a slightly worse version of Chromatic Orb poison. Just take Chromatic Orb instead.`,
			`If you get this spell from a scroll or from a magic item, and thus cannot exchange it for Chromatic Orb, I would give it a B-tier.`
		]
	};
	let shieldOfFaith: spell = {
		level: 1,
		class: ['cleric'],
		title: 'Shield of Faith',
		tier: 'A',
		image: {
			url: '/images/spell/shield-of-faith.webp',
			alt: 'BG3 Shield of Faith symbol'
		},
		body: [
			`Shield of Faith is a self only buff that requires concentration. While it is active it adds 2 to your armor class. A bonus 2 AC is great in a system like 5e, where armor and accuracy bonuses are sparse. The big problem with this spell is that it competes for concentration in a spell list with Bless. It’s a good spell, but Bless is better.`
		]
	};
	let sleep: spell = {
		level: 1,
		class: ['bard', 'sorcerer', 'wizard'],
		title: 'Sleep',
		tier: 'S',
		image: {
			url: '/images/spell/sleep.webp',
			alt: 'BG3 Sleep symbol'
		},
		body: [
			`Okay, we made it to Sleep, I’ve been looking forward to this for a while! Sleep is an extremely potent spell, in fact it may be the best spell in the game. When cast it puts some targets in a very large radius to sleep for two rounds. The sleep condition is a unique, slightly worse version of incapacitated. It functions exactly the same except that some creatures are immune to it (creatures with the Elven Ancestry trait), and it automatically ends if the affected target takes damage or is moved involuntarily. While it is not as strong as a standard incapacitated condition, it still guarantees a crit on the next melee range attack made against the affected target, which is the important part. Guaranteeing a crit in a game with Sneak Attack and Great Weapon Master means A LOT of damage.`,
			`Sleep also has an odd targeting method that it shares with only one other spell – Color Spray – which we have already discussed above. Sleep and Color Spray attack neither saving throws nor AC. Instead, they effect a number of targets equal to a certain hit point threshold (24 HP, 32 if upcast). So, suppose there are 24 goblins, all with 1 hp, and all kind of clustered together. Sleep would hit all 24, no need to role dice. Now suppose you are fighting two hobgoblins, one of them has 12 hp and the other 13. Since their hit point total is above 24 you cannot hit both of them with one Sleep spell, even if they are both in the area of effect. You would have to choose to hit one or the other. If a creature has more than 24 hit points you cannot hit it with sleep until you do enough damage to get it below the threshold. Yes, that is right, it goes off of current hp, not total hp, so you can hit tougher targets with this spell once you have softened them up. Since Sleep guarantees a crit, and you should be criting for more then 24 damage with your strikers, landing a Sleep spell is a death sentence. No save, no chance to resist, you just die.`,
			`There are other spells that can incapacitate targets, but this is the only one that does it without a saving throw. USE IT LIBERALLY. If you are ever thinking “I will probably kill this target next attack anyways, no need to waste a spell slot putting him to sleep first” just slap yourself in the face and cast Sleep anyways. It’s a guarantee, so take it! Don’t put your life in the hands of the dice god, she will hurt you every time…  Its like my boy Boethius wrote:`,
			`“I know how Fortune is ever most friendly and alluring to those whom she strives to deceive, until she overwhelms them with grief beyond bearing, by deserting them when least expected… For no man can ever make himself sure that she will never desert him… Is good fortune dear to you, which is with you for a time and is not sure to stay, and which is sure to bring you unhappiness when it is gone?... If you set your sails before the wind, will you not move forward whither the wind drives you, not whither your will may choose to go? If you intrust your seed to the furrow, will you not weigh the rich years and the barren against each other? You have given yourself over to Fortune’s rule, and you must bow yourself to your mistress’s ways. Are you trying to stay the force of her turning wheel? Ah! Dull-witted mortal, if Fortune begin to stay still, she is no longer Fortune.”`,
			`Don’t sell yourself to Fortune’s rule friends. As sure as winter that critical miss is coming, so just cast Sleep.`
		]
	};
	let speakWithAnimals: spell = {
		level: 1,
		class: ['bard', 'druid', 'ranger', 'warlock'],
		title: 'Speak with Animals',
		tier: 'RP',
		image: {
			url: '/images/spell/speak-with-animals.webp',
			alt: 'BG3 Speak with Animals symbol'
		},
		body: [
			`This spell allows you to dialogue with animals. Its fun, but has no direct combat utility, so its RP-tier.`
		]
	};
	let tashasHideousLaughter: spell = {
		level: 1,
		class: ['bard', 'wizard'],
		title: "Tasha's Hideous Laughter",
		tier: 'S',
		image: {
			url: '/images/spell/tashas-hideous-laughter.webp',
			alt: 'BG3 Tashas Hideous Laughter symbol'
		},
		body: [
			`A single target control spell that attacks Wisdom. If the target fails their wisdom save they become incapacitated for as long as the caster maintains concentration or they pass a wisdom save to resist the spell. They can roll another wisdom save at the end of their next turn or whenever they take damage. This spell can only target enemies with 5 intelligence or above.`,
			`We have already talked about incapacitated a few times. It guarantees crits on melee ranged attacks, which is incredible. Basically then, Tasha’s is slightly better version of Sleep, but with a saving throw. If you are facing an enemy that you can drop below 32/24 health without risking to much, just go for Sleep, its more reliable. However, there are some encounters where most of the difficulty comes from a single enemy and hitting them with a Tasha’s early will make the fight a breeze. If you miss with this spell, you are basically wasting a turn though… it really sucks to miss it.`
		]
	};
	let thunderweave: spell = {
		level: 1,
		class: ['bard', 'druid', 'sorcerer', 'wizard'],
		title: 'Thunderweave',
		tier: 'A',
		image: {
			url: '/images/spell/thunderweave.webp',
			alt: 'BG3 Thunderweave symbol'
		},
		body: [
			`Thunderwave is an AoE save attack spell that targets constitution. When you cast it a sonic boom explodes out from the caster. It averages 7.2 DPTr (assuming a 60% hit chance) to all creatures in a 5m. Furthermore, targets who fail their save are thrown backwards pretty far (not sure how they do the push distance in BG3, but you won’t need to know, because the game will show you while you are aiming the spell). This is a solid, bread-and-butter spell, the “Fus-ro-dah” of BG3. It averages 1-2 damage less per target then Burning Hands, so its damage is fair as far is 1st level  AoE’s go. And then you get a knockback effect on top of it! Use this spell to push enemies off of high places.`
		]
	};
	let witchBolt: spell = {
		level: 1,
		class: ['sorcerer', 'warlock', 'wizard'],
		title: 'Witch Bolt',
		tier: 'RP',
		image: {
			url: '/images/spell/witch-bolt.webp',
			alt: 'BG3 Witch Bolt symbol'
		},
		body: [
			`Witch Bolt function like a standard ranged attack spell but with an added twist. If you hit with this spell, after doing an initial 1d12 damage lightning damage (6.5 on average), a bolt of lightning stays connected between the caster and the target. On subsequent turns, for as long as they maintain concentration, the caster may spend an action to reactivate the bolt, doing another 1d12 damage. There is no attack roll on the reactivation damage, it is a guaranteed hit.`,
			`The problem with Witch Bolt is the low damage for the high opportunity cost. It has a lot of potential. Only needing to hit once with the spell to apply damage every turn should be effective. But… Witch Bolt requires both your action and your concentration every turn to deal damage, and it only deals 6.5 damage on average… Even with the forced vulnerability from Create Water, there are just better ways to damage than this spell, so save yourself a headache and cast something else.`
		]
	};
	let aid: spell = {
		level: 2,
		class: ['cleric', 'paladin'],
		title: 'Aid',
		tier: 'A',
		image: {
			url: '/images/spell/aid.webp',
			alt: 'BG3 Aid symbol'
		},
		body: [
			`Aid, increases the maximum hit points of your allies by 5. With a 4-member party, a single cast of this spell is increasing the overall party hit point pool by 20. It is not a concentration spell, so you can stack it with Bless. Notice also that it is not giving temporary hit points but increased maximum hit points, so you can still stack it with temporary hit points. It is easy to overlook small buffs that stack on multiple allies like this but getting a guaranteed 20 HP (probably double that) on a single cast is a very efficient use of a second level spell slot. On full release, this buff will increase by 5 HP per spell slot level when upcast. Magnificent!`
		]
	};
	let barkskin: spell = {
		level: 2,
		class: ['druid', 'ranger'],
		title: 'Barkskin',
		tier: 'C',
		image: {
			url: '/images/spell/barkskin.webp',
			alt: 'BG3 Barkskin symbol'
		},
		body: [
			`A self and ally buff that costs an action to cast. It sets the targets AC to 16 for as long as the caster maintains concentration. It is supposed to be used as a way for druids to get a decent AC while in wild shape. In practically every other situation is subpar. There are just better ways to get AC than using a second level spell slot and your concentration. 16 AC isn’t even that high.`
		]
	};
	let blindness: spell = {
		level: 2,
		class: ['bard', 'cleric', 'sorcerer', 'wizard'],
		title: 'Blindness',
		tier: 'RP',
		image: {
			url: '/images/spell/blindness.webp',
			alt: 'BG3 Blindness symbol'
		},
		body: [
			`Blindness is a single target control spell that applies the blind condition if the target fails a constitution save. Each turn the target can make the save again to break free of the condition. Constitution is often a high save on enemies in my experience. Moreover, blindness is a middling condition, and targets get a chance to reroll the save every turn. This is just the worst. Its made worse because Blindness in BG1 and 2 was an S-tier spell…`
		]
	};
	let blur: spell = {
		level: 2,
		class: ['sorcerer', 'wizard'],
		title: 'Blur',
		tier: 'B',
		image: {
			url: '/images/spell/blur.webp',
			alt: 'BG3 Blur symbol'
		},
		body: [
			`Blur is a self only buff that imposes disadvantage on enemy attacks at the cost of concentration. You can think of it as a slightly better version of the level 1 Shield of Faith spell. Imposing disadvantage is great but a 2nd level spell slot and your concentration is a high opportunity cost for the wizards and sorcerers who get this spell.`
		]
	};
	let cloudOfDaggers: spell = {
		level: 2,
		class: ['bard', 'sorcerer', 'warlock', 'wizard'],
		title: 'Cloud of Daggers',
		tier: 'S',
		image: {
			url: '/images/spell/cloud-of-daggers.jpg',
			alt: 'BG3 Cloud of Daggers symbol'
		},
		body: [
			`This is, so far, the premier AoE damage spell. Cloud of Daggers summons a cloud of swarming daggers which slice creatures in a 3m radius. Any creature in the area when the spell is cast, who begin their turn in the area, or who move through the are area, take 4d4 (10 average) slashing damage. Cloud of Daggers requires concentration to cast.`,
			`Yep… you read that right, its not a type-o, they just take the damage. No saving throw, no attack roll, just automatic damage. To make it even better, you practically get a guarantee 2 procs of that damage per target in the area, because it will proc once when you cast it and once when they start their turn. That gives Cloud of Daggers a whopping 20 (!!) DPTr, and its not that hard to hit two people in the AoE. You can also shove people into the cloud later for another 20 damage average. This spell greatly out performs all other AoE damage spells.`,
			`*Note, the AoE on this spell when you are aiming it is a little bigger then the actual effect of the spell, so the spell will sometimes tell you it will apply damage to a target but then it doesn’t when you actually cast it. Keep that in mind.*`
		]
	};
	let crownOfMadness: spell = {
		level: 2,
		class: ['bard', 'sorcerer', 'warlock', 'wizard'],
		title: 'Crown of Madness',
		tier: 'RP',
		image: {
			url: '/images/spell/crown-of-madness.jpg',
			alt: 'BG3 Crown of Madness symbol'
		},
		body: [
			`This one is really sad… It should be so good, but its just not right now. Crown of Madness is a control spell that targets wisdom and requires concentration. It can only be cast on humanoid creatures. If the target fails its saving throw, they will spend their turn attacking whatever creature is closest to them regardless of whether it is an ally or an enemy. This would be a strong control spell because its effectively trading one action for two, because now you enemy is not only wasting an action (that would be one), they are using their action against their allies (that’s two). However… the spell hasn’t been working for me. Instead of predictably attacking the nearest creature they are running around attack random targets, which is significantly worse. Hopefully this gets fixed.`,
			`Even if it is fixed, Crown of Madness has another problem, and that is Hold Person. Hold Person is another control spell that targets wisdom and can only be cast on humanoids but it has a much, much better condition. I will say more about it below, but what it means is that its always better to just cast Hold Person right now.`
		]
	};
	let darkness: spell = {
		level: 2,
		class: ['sorcerer', 'warlock', 'wizard'],
		title: 'Darkness',
		tier: 'RP/S',
		image: {
			url: '/images/spell/darkness.webp',
			alt: 'BG3 Darkness symbol'
		},
		body: [
			`As far as I can tell, Darkness is identical to the 1st level spell Fog Cloud, which makes it an awesome spell to cast. Technically, it is a RP-tier, since there is an identical spell that you can cast that is one spell level cheaper. However, you may get this as a scroll or a class/racial feature in which case you cannot exchange it for Fog Cloud. In those situations, its an S-tier spell, because it is still impactful to cast. Sorry if this is confusing.`
		]
	};
	let darkvision: spell = {
		level: 2,
		class: ['druid', 'sorcerer', 'ranger', 'wizard'],
		title: 'Darkvision',
		tier: 'B',
		image: {
			url: '/images/spell/darkvision.webp',
			alt: 'BG3 Darkvision symbol'
		},
		body: [
			`Darkvision is an ally or self buff that gives them standard 12m darkvision until your next long rest. It does not require concentration. Most of the time you won’t need this spell because you can get practically the same effect with the cantrip Light. However, Darkvision does not illuminate you in the process, so it is a better buff, though only slightly better and at a much higher opportunity cost with a second level spell. Still, even though it is higher, its opportunity cost is still very low, making this sometimes worth the cast.`
		]
	};
	let detectThoughts: spell = {
		level: 2,
		class: ['sorcerer', 'bard', 'wizard'],
		title: 'Detect Thoughts',
		tier: 'RP',
		image: {
			url: '/images/spell/detect-thoughts.webp',
			alt: 'BG3 Detect Thoughts symbol'
		},
		body: [
			`This is another spell like Disguise Self or Speak with Animals, that is, one that is really cool and fun but has not direct combat utility. Its because of spells like this that I have an RP tier, rather than a F-tier. It’s a fun throw back to the gameplay from Larian’s 2010 game Divinity II: Ego Draconis.`
		]
	};
	let enhanceAbility: spell = {
		level: 2,
		class: ['sorcerer', 'bard', 'cleric', 'sorcerer'],
		title: 'Enhance Ability',
		tier: 'C',
		image: {
			url: '/images/spell/enhance-ability.webp',
			alt: 'BG3 Enhance Ability symbol'
		},
		body: [
			`This spell is like six separate spells all grouped into one. It’s a single target ally or self buff that requires concentration. The buff provides advantage on ability checks of one kind plus, in some instances, an additional effect:`,
			[
				`Bear’s Endurance: Creature gains advantage on Constitution checks, and gains 7 temporary hit points.`,
				`Bull's Strength: Creature gains advantage on Strength checks, and its carrying capacity is doubled.`,
				`Cat’s Grace: Creature gains advantage on Dexterity checks and only takes half damage from falling.`,
				`Eagle’s Splendor: Creature gains advantage on Charisma checks.`,
				`Fox’s Cunning: Creature gains advantage on Intelligence.`,
				`Owl’s Wisdom: Creature gains advantage on Wisdom checks.`
			],
			`Whatever in combat boosts this ability offers can be acquired through other spells in better ways, making this spell a primarily out of combat cast.`
		]
	};
	let enlargeReducePerson: spell = {
		level: 2,
		class: ['sorcerer', 'wizard'],
		title: 'Enlarge/Reduce Person',
		tier: 'C',
		image: {
			url: '/images/spell/enlarge-reduce-person.webp',
			alt: 'BG3 Enlarge Reduce/Person symbol'
		},
		body: [
			`This spell can be cast in two ways, Enlarge, which is an ally buff, and Reduce, which is an enemy debuff.`,
			`Let’s start with Enlarge. When you cast this on yourself or an ally, they grow one size larger (i.e. from medium to large), they gain a bonus 1d4 (2.5 average) bonus damage to weapon attacks, and advantage on strength ability checks (like shoves). Enlarge Person last 10 rounds or until you lose concentration.`,
			`Reduce person is the exact reverse in every way: enemies are shrunk, they do less damage with weapon attacks, and have disadvantage on strength ability checks. Enemy creatures can make a constitution save when the spell is cast to resist the debuff.`,
			`Both the buff and the debuff are underwhelming for a spell that requires an action, your concentration, and (in the case of when you cast it on enemies) a constitution save. This spell can be situationally good on builds that have a lot of weapon attacks (Eldritch Blast/Scorching Ray  are not a weapon attacks, so don’t even think about it), or in encounters where shoving is very dangerous (against Nere for example).`
		]
	};
	let flameBlade: spell = {
		level: 2,
		class: ['druid'],
		title: 'Flame Blade',
		tier: 'S',
		image: {
			url: '/images/spell/flame-blade.webp',
			alt: 'BG3 Flame Blade symbol'
		},
		body: [
			`This is one of my favorite spells in the game. On a bonus action you summon a flaming scimitar into your main hand which lasts until your next long rest or until you lose concentration. Unlike normal weapon attacks, attacks with the Flame Blade count as melee spell attacks (similar to spells like Inflict Wounds). That means they use your spell ability modifier for attack roles, but do not add any ability modifier to the damage. Flame Blade does 3d6 (10.5 average) fire damage per hit and double that on a crit. It also sheds bright light in a 3m radius, and dim light for another 3m more.`,
			`If all this spell did was give you a reusable 3d6 spell attack action I would probably rate it B-tier. 10.5 average damage per hit is good, but it is also taking up your concentration slot. What makes this spell S-tier is that the flaming scimitar has the “light” property, which means it can be used in the caster’s off-hand. Without Two Weapon Fighting Style, off-hand attacks are very weak, typically averaging around 3.5 damage per hit. Using the Flame Blade in your off-hand is therefore adding 7 damage per hit. Moreover, hits with the Flame Blade proc the Circlet of Fire item, which gives you another bonus action which you can use to make another off-hand attack with the Flame Sword! The damage is incredible! Its definitely worth building around. In fact, I am writing a build around this spell right now, so keep an eye out for it!`
		]
	};
	let flamingSphere: spell = {
		level: 2,
		class: ['druid', 'wizard'],
		title: 'Flaming Sphere',
		tier: 'S',
		image: {
			url: '/images/spell/flaming-sphere.webp',
			alt: 'BG3 Flaming Sphere symbol'
		},
		body: [
			`This is one of my least favorite spells in the game. Flaming Sphere is a summon spell… I know, its strange. This spell costs an action and your concentration to cast. It summons a fiery sphere. Like other summons, the sphere gets its own initiative and can take its own actions, which is always strong. Its only action is a bonus action save attack called Ram. Ram attacks dexterity, and will do 2d6 (7 average) fire damage, half on a successful save. Enemies that begin their turn adjacent to the Flaming Sphere also must make a dexterity saving throw or take 2d6 fire damage, the same as Ram, so its movement is weaponized in a way. As a save attack spell it averages 5.6 DPTr, which is very low, but it will hit significantly more targets then other spells, making its damage very high. It also sheds light in a 6m radius. Mathematically speaking, it’s a phenomenal use of a concentration slot, but I hate it… Maybe that’s just me.`
		]
	};
	let heatMetal: spell = {
		level: 2,
		class: ['druid', 'bard'],
		title: 'Heat Metal',
		tier: 'A',
		image: {
			url: '/images/spell/heat-metal.webp',
			alt: 'BG3 Heat Metal symbol'
		},
		body: [
			`Heat metal heats up a metal object that an enemy is holding (i.e. their weapon). The enemy takes 2d8 (9 average) fire damage and drops their weapon. For most enemies this is the end of the spell. Technically the weapon stays hot, taking your concentration. Enemies can pick it back up; in which case they suffer disadvantage on attack roles and ability checks and you may reactivate the spell as a bonus action on subsequent turns to do the damage over again. However, I not even sure if the AI even does pick up their weapon, because I will typically cancel the concentration and pick up their dropped weapon so that they cannot re-equip it. Enemies in BG3 do not carry side arms right now (Patch 6), so once you’ve taken their weapon, they are practically useless.`,
			`If you cast this spell on a metal construct however the spell heat them up rather than their weapon. They still drop their weapon (weirdly), but you can reapply the damage at the cost of a bonus action. This is nice, but the main use of this spell right now is disarming enemies. Think of this as a potent control spell, especially against striker enemies (like the Gith patrol). If they fail one save their damage drops to (practically) zero with no chance of making the save again.`
		]
	};
	let holdPerson: spell = {
		level: 2,
		class: ['bard', 'cleric', 'druid', 'sorcerer', 'warlock', 'wizard'],
		title: 'Hold Person',
		tier: 'S',
		image: {
			url: '/images/spell/hold-person.webp',
			alt: 'BG3 Hold Person symbol'
		},
		body: [
			`This is a single target save spell that only targets humanoids. If the target fails a wisdom save they are paralyzed. At the end of each turn they may try again to make the save. Its useful to compare this spell to Tasha’s Hideous Laughter. Paralyzed guarantees crits the same way incapacitated does, but unlike Tasha’s targets do not get to reroll their save every time they take damage. This means you can land as many guaranteed crits on the target as possible before the end of their next turn. Landing one of these on the right target with the right initiative order will single handily win you a fight. I try to have at least two people in the party who can cast this spell.`
		]
	};
	let invisibility: spell = {
		level: 2,
		class: ['bard', 'sorcerer', 'warlock', 'wizard'],
		title: 'Invisibilty',
		tier: 'A',
		image: {
			url: '/images/spell/invisibility.webp',
			alt: 'BG3 Invisibility symbol'
		},
		body: [
			`I think this ability should be A-tier, but to be honest with you, I hardly cast it. It makes a single ally invisible, allowing you to either sneak them to a good starting position or avoid aggro. You lose invisibility if you attack or cast a spell. Invisibility requires concentration. I hardly ever cast it because it seems like I hardly ever need to, but that’s probably just me being uncreative. What the spell does IS valuable, even if I forget to use it often.`
		]
	};
	let lesserRestoration: spell = {
		level: 2,
		class: ['bard', 'cleric', 'druid', 'paladin', 'ranger'],
		title: 'Lesser Restoration',
		tier: 'B',
		image: {
			url: '/images/spell/lesser-restoration.webp',
			alt: 'BG3 Lesser Restoration symbol'
		},
		body: [
			`This spell removes a negative condition afflicting an ally. It costs an action to cast. It can be very efficient depending on the condition, so I like to have this spell handy. However, it falls into the reactive-not-proactive trap. In BG3 and in tactics games in general it is better to spend your turns doing something to your enemy rather than countering what your enemy is doing to you. That said, in the case of conditions like paralyzed or incapacitated, you can see this spell as trading the caster’s action for the turn of an ally. An action for a whole turn is a good trade, especially if it is for a DPR striker character whose turns are very valuable.`
		]
	};
	let melfsAcidArrow: spell = {
		level: 2,
		class: ['wizard'],
		title: "Melf's Acid Arrow",
		tier: 'B',
		image: {
			url: '/images/spell/melfs-acid-arrow.jpg',
			alt: 'BG3 Melfs Acid Arrow symbol'
		},
		body: [
			`This is Hannah Montana spell – it gets the best of both worlds. It is a ranged attack spell that if it hits does 4d4 initial acid damage plus another 2d4 at the beginning of the targets next turn. If it misses it does half the initial damage (so 2d4). Regardless of whether it hits or misses it leaves a puddle of acid which lowers the armor class of all creatures within by 2. This is the only spell attack which also does half damage on a miss. You can crit with this spell, you can benefit from high ground and easy advantage, but you also do damage if you miss, the best of both worlds. What does that mean for its DPC? With a 75% hit chance this spell will average 13 damage, which is good but not great. Of course, you also get the nice addition of a -2 penalty to AC against the target, but you can get that from Chromatic Orb, which is a 1st level spell. Ultimately, this is a reliable spell, you’ll never regret casting it, but its not impactful enough to earn an A-tier.`
		]
	};
	let mirrorImage: spell = {
		level: 2,
		class: ['sorcerer', 'warlock', 'wizard'],
		title: 'Mirror Image',
		tier: 'A',
		image: {
			url: '/images/spell/mirror-image.webp',
			alt: 'BG3 Mirror Image symbol'
		},
		body: [
			`This is a self only buff that evokes three identical images of the caster which stand around them. This raises your armor class by 3 per image (9 total). Whenever an attack misses you one of those images is destroyed. Mirror Image costs an action, does not require concentration, and lasts either 10 turns or until all three images are gone. You will get the most value from this spell when you are drawing aggro from enemies who have a high damage per hit and fewer attacks (like a rogue, for example). I have found that the AI in BG3 often ignores targets with high AC, so you can also use this spell to control enemy aggro. However, the number one use of this spell is just for keeping your concentration spells up as long as possible. Avoiding hits is the best way to maintain concentration.`
		]
	};
	let mistyStep: spell = {
		level: 2,
		class: ['sorcerer', 'warlock', 'wizard'],
		title: 'Misty Step',
		tier: 'A',
		image: {
			url: '/images/spell/misty-step.webp',
			alt: 'BG3 Misty Step symbol'
		},
		body: [
			`Misty Step teleports the caster to a spot they can see within 18m. It costs a bonus action to cast and does not provoke attacks of opportunity. This spell has two primary uses: escaping difficult positions and repositioning for spells. Both of those are very important for most casters, so take this spell and use it!`
		]
	};
	let moonbeam: spell = {
		level: 2,
		class: ['sorcerer', 'warlock', 'wizard'],
		title: 'Moonbeam',
		tier: 'A',
		image: {
			url: '/images/spell/moonbeam.webp',
			alt: 'BG3 Moonbeam symbol'
		},
		body: [
			`Moonbeam is a very small area AoE save spell. Creatures in a 1.5 m radius that you can see within 18m must make a constitution save or take 2d10 (11 average) radiant damage, half as much on a successful save. Creatures who begin their turn in the area or who move into the area proc the damage as well. This means you will get two guaranteed procs on each target in the area of the cast, which is excellent. Moon Beam will average 8.8 DPTr, and when you are getting two guaranteed procs that adds up. Altogether this is a high damage spell in a small area. Cast this against targets you’ve engaged so that they are forced to take an opportunity attack if they want to leave the area.`
		]
	};
	let prayerOfHealing: spell = {
		level: 2,
		class: ['cleric'],
		title: 'Prayer of Healing',
		tier: 'B',
		image: {
			url: '/images/spell/prayer-of-healing.webp',
			alt: 'BG3 Prayer of Healing symbol'
		},
		body: [
			`This spell costs an action to cast and heals all allies that you can see 2d8+2 hit points (11 average). 11 HP can definitely be enough to buy your allies an extra turn before being knocked out. You can also use this to stack some of the useful healing buff effects you can get from items on multiple allies in a turn. Its useful, but I still prefer to rely on Healing Word and use my action killing enemies.`
		]
	};
	let passWithoutTrace: spell = {
		level: 2,
		class: ['druid', 'ranger'],
		title: 'Pass without Trace',
		tier: 'S',
		image: {
			url: '/images/spell/pass-without-trace.webp',
			alt: 'BG3 Pass without Trace symbol'
		},
		body: [
			`Pass without Trace is a concentration spell that gives all allies in the area of effect a +10 bonus to stealth checks. How good is a +10? A level 4 character maximized for stealth with the high roll on guidance will also get a +10 to stealth… that means with this level 2 spell, your trickery cleric is making everyone in your party the equivalent of a fully optimized sneak. And this +10 bonus stacks with other bonuses, like the advantage you get from Blessing of the Trickster, or a bonus from Guidance, and even standard proficiency. With this spell you should never get spotted, which means you basically have an invisibility spell that doesn’t break when you attack enemies. That said, I seldom cast this spell, because I prefer to face my enemies head on.`
		]
	};
	let protectionFromPoison: spell = {
		level: 2,
		class: ['cleric', 'druid', 'paladin', 'ranger'],
		title: 'Protection from Poison',
		tier: 'B',
		image: {
			url: '/images/spell/protection-from-poison.webp',
			alt: 'BG3 Protection from Poison symbol'
		},
		body: [
			`This is a touch range ally or self buff that costs an action to cast. It has three effects:`,
			[
				`It removes the poisoned condition from the target.`,
				`It grants advantage on saving throws against being poisoned`,
				`It grants resistance to poison damage.`
			],
			`These effects last until your next long rest. It does not require concentration.`,
			`This is a situationally good spell. The situation is if you are expecting to fight enemies that have poison, and enemies like that are fairly common.`
		]
	};
	let rayOfEnfeeblement: spell = {
		level: 2,
		class: ['warlock', 'wizard'],
		title: 'Ray of Enfeeblement',
		tier: 'B',
		image: {
			url: '/images/spell/ray-of-enfeeblement.webp',
			alt: 'BG3 Ray of Enfeeblement symbol'
		},
		body: [
			`This spell is a single target debuff. If the target fails a constitution save they do half damage on subsequent attacks that use strength (so most attacks). Ray of Enfeeblement lasts until the caster loses concentration. There are no ways for the victim of the spell to reroll saves; once it hits it hits. This is a phenomenal spell in any battle where the majority of the threat comes from a single target: think the owlbear fight, the minotaurs, the bullete, etc. It is also really strong in combination with Armor of Agathys, which we discussed above. However, in most fights it is not very effective, because typically damage is more spread out among enemies.`
		]
	};
	let scorchingRay: spell = {
		level: 2,
		class: ['sorcerer', 'wizard'],
		title: 'Scorching Ray',
		tier: 'S',
		image: {
			url: '/images/spell/scorching-ray.webp',
			alt: 'BG3 Scorching Ray symbol'
		},
		body: [
			`This spell is easy to overlook, but once you understand its math you will understand that it is one of a handful of premier striking spells for arcane casters. When you cast Scorching Ray you hurl 3 bolts of fire. Each bolt is its own ranged attack and can target any creature within range, so you can have them all hit one target or split to hit separate targets. If they hit each ray does 2d6 fire damage to the target.`,
			`So why is this so good? Its good for the same reasons that the cantrip Eldritch Blast is which we covered above. Typically spells do a lot of damage on a single attack role. Scorching Ray does less damage but gets multiple attack roles. Multiple attack roles are, as a general rule, better, because you can combine them with effects that proc on hits, like Hex. Assuming a 75% hit chance on each attack, Scorching Ray will average 16.8 damage per cast, which is decent, but not S-tier level damage. However, when you combine it with Hex your damage goes up to 25.2 per cast, much better! Add high-ground bonus to that and its 28.35. Hide before you cast it and now you have advantage and you’re averaging 33.86. Ring of Fire? Now its 36.5. You get the idea, it’s a lot of reliable damage.`,
			`Its also worth discussing how this spell will scale at full release once we have higher spell slots than level 2. Assuming they follow the scaling rules of tabletop 5e you will gain one additional ray for each slot level above 2nd. That means when you cast as a 3rd level spell you are getting 4 attacks instead of three. That is phenomenal scaling! This is a spell that is worth building around.`
		]
	};
	let searingSmite: spell = {
		level: 2,
		class: ['sorcerer', 'warlock', 'wizard'],
		title: 'Searing Smite',
		tier: 'C',
		image: {
			url: '/images/spell/searing-smite.webp',
			alt: 'BG3 Searing Smite symbol'
		},
		body: [
			`This spell is in a special category because you cannot currently access it through any available classes. The primary way to get it is as a racial spell if your Tav is a Zariel Tiefling. There is also a magical light hammer that allows you to cast it, but I am only going to look at it as a racial spell. Even though it is a first level spell, Zariel Tiefling’s can cast it as if it was using a 2nd level spell slot. When you cast it you make a normal weapon attack. If the attack hits you will do an extra 2d6 (7) fire damage. It also applies a concentration effect where on subsequent rounds the targets will take an additional 1d6 fire damage. The effect either lasts 10 rounds, until you drop concentration, or until they make a constitution saving throw, which they reroll every turn after taking damage.`,
			`The added concentration effect really holds this spell back. Without that it would be a practically zero opportunity cost spell for most casters, since you are taking it on to the weapon attack you would make anyways. However, it does cost concentration, and it’s a really inefficient use of it.`
		]
	};
	let shatter: spell = {
		level: 2,
		class: ['sorcerer', 'warlock', 'wizard', 'bard'],
		title: 'Shatter',
		tier: 'B',
		image: {
			url: '/images/spell/shatter.webp',
			alt: 'BG3 Shatter symbol'
		},
		body: [
			`Shatter is a ranged AoE save spell that targets the constitution save. It effects all creatures in a 6m blast. Targets that fail their save take 3d8 (13.5 average) thunder damage, half as much for those who succeed. Creatures made of inorganic matter have disadvantage on their saving throw. Assuming a 60% hit chance (as we always do for save spells) Shatter will average 10.8 DPTr or 12.42 against inorganic creatures.`,
			`The DPTr on Shatter is nothing to get excited about, but it does have a very potent targeting method. If you want to do AoE damage though you should just cast Cloud of Daggers, which we reviewed above. I’ll still give Shatter a B-tier since it less resisted damage type and not every class gets access to both.`
		]
	};
	let silence: spell = {
		level: 2,
		class: ['bard', 'cleric', 'ranger'],
		title: 'Silence',
		tier: 'B',
		image: {
			url: '/images/spell/silence.webp',
			alt: 'BG3 Silence symbol'
		},
		body: [
			`It creates a dome in a large area. There is  no sound in that zone, which means no spells can be cast within it and everyone within is immune to Thunder damage. The trouble with this spell is that enemies can walk out of the dome and still cast spells, so it only really useful when the terrain is such that the only direction the can walk is towards you. It can also be useful as a way to stop enemies from using Misty Step to flee while avoiding attacks of opportunity, but that is also really niche. Shutting down spells is good, an A-tier or higher effect, but I just haven’t been able to use this spell to effectively do that.`
		]
	};
	let spikeGrowth: spell = {
		level: 2,
		class: ['druid', 'ranger'],
		title: 'Spike Growth',
		tier: 'A',
		image: {
			url: '/images/spell/spike-growth.webp',
			alt: 'BG3 Spike Growth symbol'
		},
		body: [
			`Spike Growth is a ground effect spell, causing the earth in a 6m radius to twist up sharp, thorny vines. The area becomes difficult terrain and any creature that moves through it takes 2d4 (5 average) piercing damage for each 3m (I think. Tooltip says 1.5m but my experience is that you will proc damage twice if you just walk out without jumping) that they walk in it. There is no saving throw for this damage. Spike Growth requires concentration.`,
			`Any no-save damage spell will be good. The problem with Spike Growth for me is that enemies can jump out of much of the damage. Damage does not proc if you start your turn in the area, and that is a big draw back. Still a great spell!`
		]
	};
	let web: spell = {
		level: 2,
		class: ['sorcerer', 'wizard'],
		title: 'Web',
		tier: 'B',
		image: {
			url: '/images/spell/web.webp',
			alt: 'BG3 Web symbol'
		},
		body: [
			`Web is practically identical to the 1st level spell Entangle which we reviewed above. The difference is that Web targets the dexterity save and applies the enwebbed condition instead of restrained. Enwebbed is just a kind of restrained, they do the same things but there are creatures in the game that can be immune to enwebbed that aren’t immune to restrained. There is, in fact, a pair of boots that you can get fairly early in the game which makes a character immune to enwebbed. This gives Web an advantage the Entangle doesn’t have. You can cast Web and run a melee striker with the boots into it, giving them advantage on attacks against the enwebbed enemies. This is a decent strategy, but not good enough to earn Web anything above a B-tier ranking like its 1st level counterpart.`
		]
	};

	const guide = {
		body: [
			acidSplash,
			bladeWard,
			chillTouch,
			dancingLights,
			eldritchBlast,
			fireBolt,
			friends,
			guidance,
			light,
			mageHand,
			minorIllusion,
			poisonSpray,
			produceFlame,
			rayOfFrost,
			resistance,
			sacredFlame,
			shillelagh,
			shockingGrasp,
			thaumaturgy,
			thornWhip,
			trueStrike,
			armsOfHadar,
			animalFriendship,
			armorOfAgathys,
			bless,
			bane,
			burningHands,
			charmPerson,
			chromaticOrb,
			colorSpray,
			command,
			createDestroyWater,
			cureWounds,
			disguiseSelf,
			dissonantWhispers,
			ensnaringStrike,
			entangle,
			expeditiousRetreat,
			falseLife,
			faerieFire,
			featherFall,
			findFamiliar,
			fogCloud,
			goodberry,
			grease,
			guidingBolt,
			hailOfThorns,
			healingWord,
			hellishRebuke,
			hex,
			huntersMark,
			inflictWounds,
			jump,
			longstrider,
			mageArmor,
			magicMissile,
			protection,
			rayOfSickness,
			shieldOfFaith,
			sleep,
			speakWithAnimals,
			tashasHideousLaughter,
			thunderweave,
			witchBolt,
			aid,
			barkskin,
			blindness,
			blur,
			cloudOfDaggers,
			crownOfMadness,
			darkness,
			darkvision,
			detectThoughts,
			enhanceAbility,
			enlargeReducePerson,
			flameBlade,
			flamingSphere,
			heatMetal,
			holdPerson,
			invisibility,
			lesserRestoration,
			melfsAcidArrow,
			mirrorImage,
			mistyStep,
			moonbeam,
			prayerOfHealing,
			passWithoutTrace,
			protectionFromPoison,
			protection,
			rayOfEnfeeblement,
			scorchingRay,
			searingSmite,
			shatter,
			silence,
			spikeGrowth,
			web
		],
		game: [{ title: 'BG3', description: "Baldur's Gate 3", link: 'baldurs-gate-3' }],
		image: {
			url: '/images/guides/bg3-spell-tier-list-main.webp',
			alt: "Baldur's Gate 3 standard party characters standing in a diamond formation."
		},
		publishedAt: '2021-12-24T15:00:00.000Z',
		slug: 'baldurs-gate-3-spell-tier-list',
		title: "Baldur's Gate 3 Spell Tier List",
		excerpt:
			'This is the fourth and final article in my Baldur’s Gate 3 rankings and guide series where I review the spells available in the early access so far.',
		updatedAt: '2021-12-24T21:11:28Z'
	};

	function getTitle(item) {
		let title = item.title;
		let link = item.title.replace(/\s+/g, '');
		let image = item.image;
		return { title: title, link: link, image: image };
	}

	const links = guide.body.map(getTitle);

	// SEO
	let canonical = $page.host + $page.path;
	let seoImage = $page.host + guide.image.url;
</script>

<Seo title={guide.title} excerpt={guide.excerpt} {canonical} {seoImage} />
<Navigation on:toggleSlideOver={handleMessage} {slideOver} {links} />
{#if !slideOver}
	<button
		class="fixed top-28 right-0 w-12 h-12 rounded-l-lg bg-white dark:bg-gray-900 flex justify-center items-center shadow-xl z-50"
		on:click={toggleSlideOver}
		in:fly={{ x: 100, delay: delay, duration: timing, easing: quintOut }}
		out:fly={{ x: 100, duration: timing, easing: quintOut }}
	>
		<svg
			class="h-6 w-6 text-gray-500 dark:text-gray-400"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line x1="19" y1="12" x2="5" y2="12" /> <polyline points="12 19 5 12 12 5" /></svg
		></button
	>
{/if}

<div class="relative py-16 overflow-hidden">
	<div class="relative px-4 sm:px-6 lg:px-8">
		<article class="mt-6 prose md:prose-lg dark:prose-light mx-auto">
			<h1>
				<span
					class="block text-base text-center text-bgRed dark:text-gray-100 font-semibold tracking-wide uppercase"
					>Guide</span
				>
				<span
					class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl"
					>{guide.title}</span
				>
			</h1>
			<p class="mt-8 text-xl leading-8">
				This is the fourth and final article in my Baldur’s Gate Three Rankings and Guide Series.
				The purpose of this series is to assess the relative power of fundamental choices for
				building your character in BG3. In past articles I ranked abilities, races, classes, and in
				this article, I rank every spell available in the game. My experience of CRPGs has always
				been that the more mastery I have over the system the more fun and rewarding my runs are, so
				that is the primary goal, to have more fun! A secondary goal is to help Larian improve the
				balance of the game. Let’s get to it.
			</p>
			<h2>Fundamental Assumptions</h2>
			<p>
				If you’ve read the last three articles in this series all of this will be old hat, so please
				just skip past if. For everyone else, it would be impossible to objectively rank spells
				without some stipulation on how they will be evaluated, particularly concerning combat
				versus out of combat utility. My hierarchy of values is, moving from most important to
				least: starting with the most valued and moving to the least:
			</p>
			<blockquote>
				<p>
					direct combat utility --> indirect combat utility --> convenience --> role-play utility
				</p>
			</blockquote>
			<p>
				The reason I make these assumptions is because what makes a better role play experience will
				differ from person to person, whereas combat utility is by contrast easy to compare and
				measure.
			</p>
			<p>
				This tier list will also operate from the fundamental assumption that you are trying as much
				as possible to minimize the amount of reloads and long rests you take in your runs. Spamming
				reloads and long rests trivializes many challenges of the game, so for the sake of
				evaluation we have to assume you are trying to use them as little as possible.
			</p>
			<h2>The Tiers Explained</h2>
			<p>
				Followers of this series will also be familiar with my tier system, since I use a similar
				one in nearly every article. Basically, I use a lettered tier system that focuses on two
				factors: impact and consistency. By impact I mean how powerful a spell is when cast in the
				right circumstances, and by consistency, I mean how common those circumstances are. So, my
				tiers are:
			</p>
			<ul role="list">
				<li>
					<strong>S Tier:</strong> Consistently amazing spells. Very often these spells are also build
					defining, that is, you will want to build specifically to maximize the potency of these spells.
				</li>
				<li>
					<strong>A Tier:</strong> Spells that are situationally amazing or consistently good.
				</li>
				<li>
					<strong>B Tier:</strong> Spells that are situationally good or consistently average.
				</li>
				<li>
					<strong>C Tier:</strong> Spells that can be useful in niche circumstances but are mostly overshadowed
					by others spells.
				</li>
				<li>
					<strong>RP Tier:</strong> Spells that are totally outperformed by similar, competing spells.
					Do not cast these for any other purpose besides role play. There should always be better spells
					to cast.
				</li>
			</ul>
			<h2>Ranking Status Effects</h2>
			<p>
				For a long time, I have found spells in RPGs to be daunting and difficult to learn. I
				discovered that the reason for that was status effects. Status effects – like ‘prone’ or
				‘confused’ – are little bundles of mechanics that spells refer to in short-hand. What that
				means is, when you read a tooltip description of a spell’s effects, it will typically say
				something like “covers the ground in grease. It becomes difficult terrain and creatures
				within can fall Prone.” Notice that most of the impact of the spell is hidden behind the
				short-hand term “Prone.” If you don’t know what prone actually does, you won’t understand
				the tooltip. Since I discovered this was my problem I started mastering spells much quicker,
				because I would start by reading through the status effects and ranking their effectiveness.
				In BG3, there is a relatively short list of status effects, so let’s take a second to
				analyze them.
			</p>
			<p>
				The very best status effects in BG3 by a mile are Paralyzed and Sleep/Incapacitated. Both of
				these effects force enemies to lose complete turns, i.e they lose all movements and actions,
				including breaking concentration, and that is very valuable on its own. However, both
				conditions also guarantee hits and crits for melee range attacks from you or your allies on
				the effected targets. With features like Sneak Attack and Great Weapon Master in the game,
				guaranteeing hits and crits will translate into a lot of extra damage on top of the lost
				turns.
			</p>
			<p>
				Incapacitated and Paralyzed really are in a league of their own for status effects, but if
				there was one other that can maybe compete it is the Frightened condition. A Frightened
				target must use their turn running directly away from the creature they are frightened of,
				which is functionally very similar to losing a complete turn. Moreover, when a frightened
				target runs away they can trigger attacks of opportunity. With the right positioning,
				frightening an enemy can give you an extra attack or two in a round, which is very valuable.
			</p>
			<p>
				The middle-of-the-road status effects are Blinded, Poisoned, Restrained, and Prone. A
				blinded target has disadvantage on their attacks, and all attack against them have advantage
				(for some reason, they also lose their attacks of opportunity as well). A poisoned target
				has disadvantage on all attack roles and skill checks. A restrained target cannot move, has
				disadvantage on dexterity saving throws, and all attacks made against them have advantage.
				This effect is for locking down enemies and killing them safely from range. Prone halves the
				target’s movements and gives advantage on melee attacks against them, so it is slightly
				worse version of Restrained. All of these conditions give advantage on attacks. Advantage is
				a significant boost to accuracy in a system where boosts to accuracy are hard to come by, so
				attacking with advantage is important. You should try to build your teams so that you are
				attack with advantage as much as possible.
			</p>
			<p>
				The only really underwhelming status effect is Charmed. When you charm an enemy, they will
				not attack the person who charmed them, so its impact will vary depending on how potent the
				target is that you charm and how much impact you can gain from avoiding that aggro. It is
				very situational, and I have not yet used it in a way that I feel really turned the tide of
				a fight, but in theory there can be situation where it is very efficient, so don’t forget
				about it.
			</p>
			<p>
				Now let’s look at the spells. We will start with cantrips and address each spell level
				successively. Spells are ordered alphabetically within each spell level.
			</p>
			<h2>Cantrips</h2>
			{#each guide.body as spell}
				{#if spell.level === 0}
					<Class data={spell} />
				{/if}
			{/each}
			<h2>Final Rankings for Cantrips</h2>
			<ul role="list">
				<li>
					<strong>S Tier:</strong> Eldritch Blast, Guidance, Light.
				</li>
				<li>
					<strong>A Tier:</strong> Chill Touch, Dancing Lights, Minor Illusion, Produce Flame, Ray of
					Frost, Shillelagh, Thorn Whip.
				</li>
				<li>
					<strong>B Tier:</strong> Blade Ward, Eldritch Blast, Fire Bolt, Friends, Mage Hand, Poison
					Spray*, Shocking Grasp, Thaumaturgy.
				</li>
				<li>
					<strong>C Tier:</strong> Acid Splash, Poison Spray*, Resistance, Sacred Flame.
				</li>
				<li>
					<strong>RP Tier:</strong> True Strike.
				</li>
			</ul>
			<h2>1st Level Spells</h2>
			{#each guide.body as spell}
				{#if spell.level === 1}
					<Class data={spell} />
				{/if}
			{/each}
			<h2>Final Rankings for 1st Level</h2>
			<ul role="list">
				<li>
					<strong>S Tier:</strong> Armor of Agathys, Bess, Create/Destroy Water, Dissonant Whispers,
					Fog Cloud, Healing Word, Hex, Hunter’s Mark, Sleep, Tasha’s Hideous Laughter.
				</li>
				<li>
					<strong>A Tier:</strong> Bane, Chromatic Orb, Faerie Fire, Guiding Bolt, Hellish Rebuke, Inflict
					Wounds, Jump, Longstrider, mage Armor, Magic Missile, Shield of Faith, Thunderwave.
				</li>
				<li>
					<strong>B Tier:</strong> Burning Hands, Command, Ensnaring Strike, Entangle, False Life, Find
					Familiar, Grease, Protection from Evil and Good.
				</li>
				<li>
					<strong>C Tier:</strong> Charm Person, Color Spray, Expeditious Retreat, Feather Fall, Hail
					of Thorns.
				</li>
				<li>
					<strong>RP Tier:</strong> Arms of Hadar, Animal Friendship, Cure Wounds, Disguise Self, Ray
					of Sickness, Speak with Animals, Witch Bolt.
				</li>
			</ul>
			<h2>2nd Level Spells</h2>
			{#each guide.body as spell}
				{#if spell.level === 2}
					<Class data={spell} />
				{/if}
			{/each}
			<h2>Final Rankings for 2nd Level</h2>
			<ul role="list">
				<li>
					<strong>S Tier:</strong> Cloud of Daggers, Darkness, Flame Blade, Flaming Sphere, Hold Person,
					Pass without Trace, Scorching Ray.
				</li>
				<li>
					<strong>A Tier:</strong> Aid, Heat Metal, Invisibility, Mirror Imgae, Misty Step, Moon Beam,
					Spike Growth.
				</li>
				<li>
					<strong>B Tier:</strong> Blur, Darkvision, Lesser Restoration, Melf's Acid Arrow, Prayer of
					healing, Ray of Enfeeblement, Shatter, Silence, Web
				</li>
				<li>
					<strong>C Tier:</strong> Barkskin, Enhance Ability, Enlarge/Reduce Person, Searing Smite.
				</li>
				<li>
					<strong>RP Tier:</strong> Blindness, Crown of Madness, Detect Thoughts, Protection from Poison.
				</li>
			</ul>
			<a href="/"><p class="text-bgRed dark:text-gray-100">Return home</p></a>
		</article>
	</div>
</div>
