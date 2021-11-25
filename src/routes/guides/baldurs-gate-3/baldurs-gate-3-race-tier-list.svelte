<script lang="ts">
	import Class from '$lib/guideComponents/class.svelte';
	import type { bgClass } from 'src/global';
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

	let goldDwarf: bgClass = {
		title: 'Gold Dwarf',
		tier: 'B',
		image: {
			url: '/images/guides/bg3-dwarf-gold.webp',
			alt: 'BG3 Gold Dwarf'
		},
		list: [
			{ title: 'Ability Bonuses', body: ' +2 con, +1 wis' },
			{ title: 'Move', body: '7.5' },
			{ title: 'Proficiencies', body: 'Handaxe, battle axe, light hammer, warhammer' },
			{ title: 'Traits', body: 'Dwarven resilience, darkvision, dwarven toughness' },
			{ title: 'Spells', body: 'None' }
		],
		body: [
			`The big thing this subrace gives you is hit points. Dwarven toughness gives you +1 HP per level, moving you ahead of the curve, and allowing you to exceed the +5 HP per level most races are restricted to. If you max constitution (you should) and take the Toughness feat, you can reach a +8 HP bonus per level. Hit points are useful in every build in BG3, since the flattened math of 5e makes avoiding damage altogether unreliable (see my section on constitution in my Abilities Ranked article). However, the other bonuses are useful too. Darkvision is effectively a buff to accuracy on standard attacks. The axe and hammer proficiencies are useful for strength builds on classes that do not get martial weapon proficiencies (cleric, rogue, warlock, wizard). The movement penalty dwarves get is easily mitigated with a high strength score. Dwarven resilience improves your defenses against poison attacks, which are typically uncommon in most RPGs, but are comparatively frequent in BG3 from what I can see so far. The reason gold dwarf gets a B instead of an A has to do with the projected length of the game. Gold dwarves shine as warrior classes in later levels, when they can equalize their strength attribute compared to shield dwarves. As a fighter, that is around level 12, but I have heard the game is projected to end at level 10, so the shield dwarf is better to pick in every situation accept for druid and cleric, who want the gold dwarf's +1 to wisdom.`
		]
	};

	let shieldDwarf: bgClass = {
		title: 'Shield Dwarf',
		tier: 'S',
		image: {
			url: '/images/guides/bg3-dwarf-shield.webp',
			alt: 'BG3 Shield Dwarf'
		},
		list: [
			{ title: 'Ability Bonuses', body: '+2 con, +2 str' },
			{ title: 'Move', body: '7.5' },
			{
				title: 'Proficiencies',
				body: 'Handaxe, battle axe, light hammer, warhammer, light armor, medium armor'
			},
			{ title: 'Traits', body: 'Dwarven resilience, darkvision' },
			{ title: 'Spells', body: 'None' }
		],
		body: [
			`Shield dwarves get a +2 bonus to the two best abilities in the game right now. There is practically no build that does not benefit from bonus strength and constitution. Even ranged builds can use the extra durability, mobility, and shove potency these bonuses give you. Having a +2 in each allows you to buy a 17 for both at level 1, then split your ability score increase at level 4 to get 18 in both, making you on curve for two stats simultaneously when everyone else only has one. This is the only subrace that can do that in the game currently.`,
			`Let’s take a second to discuss weapon and armor proficiencies. Proficiencies do not stack, so if you get the same proficiency from both your race and your class, the racial bonus is wasted. So, shield dwarves' weapon and armor proficiencies are only really useful for classes like wizard or warlock who otherwise wouldn't get them. In general, armor proficiences are better than weapon, because in most cases using an equivalent martial weapon will just be getting you +1 damage per round (for example, a longbow does +1 DPR compared to a shortbow). There are some exceptions though, usually when a certain weapon proficiancy is needed to unlock a feat or use a particularly powerful magic item.`
		]
	};

	let drow: bgClass = {
		title: 'Drow',
		tier: 'A',
		image: {
			url: '/images/guides/bg3-elf-drow.webp',
			alt: 'BG3 Drow Elf'
		},
		list: [
			{ title: 'Ability Bonuses', body: '+2 dex, +1 cha' },
			{ title: 'Move', body: '9' },
			{
				title: 'Proficiencies',
				body: 'Rapiers, shortswords, hand crossbows'
			},
			{ title: 'Traits', body: 'Fey Ancestry, Superior Darkvision' },
			{ title: 'Spells', body: 'Dancing Lights (1), Faerie Fire (3), Darkness (5)' }
		],
		body: [
			`Drow are a popular race, supposedly because of Drizzt but actually because they are hot. In BG3 they are a pretty good racial option! We'll take a pretty detailed look since they are so popular.`,
			`Let’s begin by talking about +2 bonuses to dexterity. What I say here will apply to all races that get a +2 to dex. Because strength outshines dexterity in BG3, it is seldom optimal to have dex as your primary ability. It is still really useful though, particularly because of its bonus armor class. In the early access so far, medium armor is the best armor type, and to get full efficiency from medium armor you need at least a 14 dexterity. As we discussed above, a +2 bonus to dexterity is overkill for getting a 14; a +1 bonus will allow you to buy a 14 without dipping into the increased costs. The +1 to charisma is useful if you decide to go with a charisma caster class like warlock or sorcerer, otherwise it is mediocre.`,
			`Fey Ancestry is amazing. It gives you advantage on charm effects and immunity to sleep. This trait is extremely good because sleep is the most reliable way in the game to interrupt concentration, and efficient builds will want to get maximum utility out of their concentration slot. Superior Darkvision is just like normal Darkvision but with twice the distance. Having longer distance can be very useful for ranged builds. In darkness, firing from maximum range, you will have better accuracy then everyone else, even races with normal Darkvision.`,
			`The drow’s portfolio of spells are interesting. Dancing Lights is a great cantrip, but does next to nothing for characters with Darkvision, which the drow half-elf gets. So, it is a support cantrip for the humans at best, but most likely it will be a waste of your concentration spot, so disregard it. Faerie Fire is a good spell to have on hand for revealing invisible targets, and there are a few fights where that is helpful. Darkness is good as well for a stealth build and for ranged builds. Altogether, drow bonuses are narrowly useful for ranged rogue and warlock builds. Altogether, drow bonuses are consistently good. I recommend building your drow as a ranged kiter to maximize their unique superior darkvision trait.`
		]
	};

	let highElf: bgClass = {
		title: 'High Elf',
		tier: 'C',
		image: {
			url: '/images/guides/bg3-elf-high.webp',
			alt: 'BG3 High Elf'
		},
		list: [
			{ title: 'Ability Bonuses', body: '+2 dex, +1 int' },
			{ title: 'Move', body: '9' },
			{
				title: 'Proficiencies',
				body: 'Perception, shortswords, longswords, shortbows, longbows'
			},
			{ title: 'Traits', body: 'Fey Ancestry, Darkvision' },
			{ title: 'Spells', body: 'Wizard cantrip (at level 1)' }
		],
		body: [
			`We discussed +2 dexterity above with the drow. The takeaway is that +2 dex is useful, but a +1 dex would be almost as useful, so it’s better to have a +2 in other abilities. The +1 bonus to intelligence is pretty bad, because intelligence is the worst ability in the game right now. It is the prime ability for only one class – the wizard – but even wizards can afford to dump intelligence right now due to the Headband of Intellect.`,
			`The free wizard cantrip seems really good, but it is actually only situationally useful. The most useful cantrips are spell attacks, and to keep your spell attack on curve you will need to invest in intelligence, which is suboptimal in most builds. Wizards get use out of intelligence, but wizards can also just learn cantrips with scrolls, so the high elf bonus cantrip saves you roughly 50 gold… The bonus cantrip is only really useful on one-quarter wizards subclasses - Arcane Knight and Arcane Trickster - who want the intelligence and can’t learn cantrips from scrolls. I suppose it also might be useful if you pick a non-scaling cantrip on other classes, like Blade Ward on Warlocks (which is actually a good combo, I will explain in my forthcoming class tier list). The big problem with the high elf is that it is the weakest race with Fey Ancestry. Fey Ancestry is still really good, especially in the low levels of the early access, but... there are just way better elves in the game. For example...`
		]
	};

	let woodElf: bgClass = {
		title: 'Wood Elf',
		tier: 'A',
		image: {
			url: '/images/guides/bg3-elf-wood.webp',
			alt: 'BG3 Wood Elf'
		},
		list: [
			{ title: 'Ability Bonuses', body: '+2 dex, +1 wis' },
			{ title: 'Move', body: '10.5' },
			{
				title: 'Proficiencies',
				body: 'Perception, stealth, shortswords, longswords, shortbows, longbows'
			},
			{ title: 'Traits', body: 'Fey Ancestry, Darkvision' },
			{ title: 'Spells', body: 'None' }
		],
		body: [
			`If you’ve watched the Lord of the Rings trilogy you know that wood elves are illogically badass. It’s the same with wood elves in BG3. Compared to the high elf the wood elf trades:`,
			[
				`+1 intelligence for for +1 wisdom (a net positive)`,
				`A wizard cantrip for stealth proficiency and an extra unit of movement.`
			],
			`Just looking at it at face value, it doesn’t seem like very much of an improvement. However, I consider stealth to be the most valuable skill in the game, and perception a close second. Wood elves get free proficiencies in both, which is useful. The bonus movement is obviously quite good in a game where mobility can very easily be exchanged for bonus accuracy and survivability (through high ground, kiting, better target selection, etc). The biggest factor though is the bonus to wisdom, which moves the wood elf in an exclusive group a races that can stay on curve as a cleric or druid. Having a top build puts the wood elf comfortably in the “situationally awesome” category.`
		]
	};

	let lightfoot: bgClass = {
		title: 'Lightfoot Halfling',
		tier: 'C',
		image: {
			url: '/images/guides/bg3-halfling-lightfoot.webp',
			alt: 'BG3 Lightfoot Halfling'
		},
		list: [
			{ title: 'Ability Bonuses', body: '+2 dex, +1 cha' },
			{ title: 'Move', body: '7.5' },
			{
				title: 'Proficiencies',
				body: 'Stealth'
			},
			{ title: 'Traits', body: 'Lucky, Fearless' },
			{ title: 'Spells', body: 'None' }
		],
		body: [
			`In a previous version of this article I had the lightfoot halfling ranked RP tier. That was before Larian added the Fearless trait to halflings. Fearless gives you advantage on saving throws against the frightened condition, which is one of the more potent conditions in the game. A step in the right direction! What about Lucky, how good is it? Its pretty good actually. By my math, having lucky is mathematically similar to getting a +1 bonus on all attack rolls, saving throws, and skill checks. +1 isn't a lot, but you are getting this so often that is adds up. The combination of bonuses to dex and charisma are useful for building charisma caster's like warlock or sorcerer. Stealth is probably the most valuable skill. With two good features in Lucky and Fearless, there are finally some reasons to choose this race over its competitors. Sadly, its competitors are still Drow and Half-elves, which are very strong, probably better options`
		]
	};

	let strongheart: bgClass = {
		title: 'Strongheart Halfling',
		tier: 'B',
		image: {
			url: '/images/guides/bg3-halfling-strongheart.webp',
			alt: 'BG3 Strongheart Halfling'
		},
		list: [
			{ title: 'Ability Bonuses', body: '+2 dex, +1 con' },
			{ title: 'Move', body: '7.5' },
			{
				title: 'Proficiencies',
				body: 'None'
			},
			{ title: 'Traits', body: 'Strongheart Resilience, Lucky, Fearless' },
			{ title: 'Spells', body: 'None' }
		],
		body: [
			`The strongheart is also benefitting from its new Fearless trait, going from a C to an B ranking. The combination of bonuses to dex and constitution suit the strongheart for melee striker roles like Fighter, Rogue, or Ranger. In this role it is competing with shield dwarves and Githyanki, so how does it compare? Lets look at the dwarf as an example. Compared to a shield dwarf you are trading strength for dexterity and 1 constitution and darkvision for Lucky and Fearless. This trade is still favorable for the shield dwarf, but not by much. Its favorable because strength and strength weapons are better right now than dex and finesse weapons are. On full release, depending on how they design items and encounters, I could see stronghearts being some of the best melee strikers.`
		]
	};

	let human: bgClass = {
		title: 'Human',
		tier: 'B',
		image: {
			url: '/images/guides/bg3-human.webp',
			alt: 'BG3 Human'
		},
		list: [
			{ title: 'Ability Bonuses', body: '+1 str, +1 dex, +1 con, +1 wis, +1 int, +1 cha' },
			{ title: 'Move', body: '9' },
			{
				title: 'Proficiencies',
				body: 'None'
			},
			{ title: 'Traits', body: 'None' },
			{ title: 'Spells', body: 'None' }
		],
		body: [
			`I’m one of those vanilla guys who plays a human 80% of the time, so I like it when humans are strong. In BG3 humans get a whopping +6 total to abilities. Most races get +3 total, some get +4, so you can think of it this way: humans get an extra ability score improvement’s worth of abilities free at level 1. If you could choose where those points would get spent, they would be S-tier, but sadly about half of them will be sitting on abilities that are not useful for your build. To get the most out of a human, pick a class that is dependent on multiple abilities. In the game right now, that is pretty much just cleric, but look forward to monks and paladin’s when they get introduced.`
		]
	};

	let githyanki: bgClass = {
		title: 'Githyanki',
		tier: 'S',
		image: {
			url: '/images/guides/bg3-githyanki.webp',
			alt: 'BG3 Githyanki'
		},
		list: [
			{ title: 'Ability Bonuses', body: '+2 str, +1 int' },
			{ title: 'Move', body: '9' },
			{
				title: 'Proficiencies',
				body: 'Shortsword, longsword, greatsword, light armor, medium armor'
			},
			{ title: 'Traits', body: 'None' },
			{ title: 'Spells', body: 'Mage Hand (1), Jump (3), Misty Step (5)' }
		],
		body: [
			`Probably the biggest upside of Gith is looking like the live action Grinch played by Canadian treasure Jim Carrey.`,
			`Seriously though, this race is super interesting. Clearly they set out to design a race that are rewarded for being either a warrior or a wizard. If you pick fighter, for example, you get a +2 to strength (the best attribute in the game), and a portfolio of racial spells that provide you insane mobility (*note* I am predicting Gith will get Misty Step at level 5 based on how the race works in tabletop 5e). If you pick wizard, you get awesome weapon and armor proficiencies to compliment your spells. On either of these classes, a Gith is a top tier build choice.`,
			`There is a third class that unexpectedly benefits from picking Gith though: the thief. Thieves get two bonus actions, and jump is a bonus action. The +2 strength from Gith allow you to jump really far, then you can cast the Jump spell to triple the already insane mobility, and on top of all of that you can take that jump action twice in a turn…. You have to try now, it’s so fun and they might nerf it. I will go over it in more detail in my Class Tier List article. Also, we should discuss the greatsword proficiency. This is the only heavy weapon proficiency that you can get just by picking a race. Heavy weapons are awesome because they allow you to utilize the Great Weapon Master feat. So, by picking a Gith you are able to use the feat on class that otherwise would not be able to. Is it useful on any of those classes? The short answer is yes. The long answer would be spoilers for the upcoming Class Tier list article.`
		]
	};

	let halfDrow: bgClass = {
		title: 'Drow Half-Elf',
		tier: 'A',
		image: {
			url: '/images/guides/bg3-halfelf-drow.webp',
			alt: 'BG3 Drow Half-Elf'
		},
		list: [
			{ title: 'Ability Bonuses', body: '+2 cha, +1 to two abilities of your choice' },
			{ title: 'Move', body: '9' },
			{
				title: 'Proficiencies',
				body: 'None'
			},
			{ title: 'Traits', body: 'Fey Ancestry, Darkvision' },
			{ title: 'Spells', body: 'Dancing Lights (1), Faerie Fire (3), Darkness (5)' }
		],
		body: [
			`In the original Baldur’s Gate series, there was one reason to play a half-elf: the fighter/cleric/mage class. In BG3 they have evolved into a very useful and versatile racial option. In effect they allow you to get the awesome Fey Ancestry trait on any build, because you can choose two of your ability bonuses. This variant of the half-elf gets all the awesome stuff of a half-elf plus the racial spells of drow. We discussed these spells when we reviewed the drow above. Drow half-elves make better ranged warlock’s then full drow in my opinion just because the flexibility of half-elf ability bonuses allows you to buy a 16 in charisma, dexterity, and constitution, whereas the drow has to settle for a 14 constitution. 16 constitution means better concentration saves and, of course, more hit points.`
		]
	};

	let halfHigh: bgClass = {
		title: 'High Half-Elf',
		tier: 'B',
		image: {
			url: '/images/guides/bg3-halfelf-high.webp',
			alt: 'BG3 High Half-Elf'
		},
		list: [
			{ title: 'Ability Bonuses', body: '+2 cha, +1 to two abilities of your choice' },
			{ title: 'Move', body: '9' },
			{
				title: 'Proficiencies',
				body: 'None'
			},
			{ title: 'Traits', body: 'Fey Ancestry, Darkvision' },
			{ title: 'Spells', body: 'Wizard Cantrip (1)' }
		],
		body: [
			`The advantage of picking the high half-elf subrace over other variants is pretty low. It gives you a wizard cantrip, which is meh, and is particularly disappointing for the half-elf, since you will likely be picking it for charisma-based casters, not intelligence. Pick this race if you want to play a High Elf with a beard.`
		]
	};

	let halfWood: bgClass = {
		title: 'Wood Half-Elf',
		tier: 'S',
		image: {
			url: '/images/guides/bg3-halfelf-wood.webp',
			alt: 'BG3 Wood Half-Elf'
		},
		list: [
			{ title: 'Ability Bonuses', body: '+2 cha, +1 to two abilities of your choice' },
			{ title: 'Move', body: '10.5' },
			{
				title: 'Proficiencies',
				body: 'Stealth'
			},
			{ title: 'Traits', body: 'Fey Ancestry, Darkvision' },
			{ title: 'Spells', body: 'None' }
		],
		body: [
			`Same as the high half-elf only you get a stealth proficiency and a bonus unit of movement instead of the cantrip. That is a good trade. There isn’t much to say except that everything they get is useful in practically every situation. We’ve talked about the power of fey ancestry, darkvision, stealth proficiency, bonus movement and the two +1 to attributes of your choice. Putting them altogether you get an extremely flexible and powerful racial option. I recommend putting the +1 bonuses in strength and constitution in most builds.`
		]
	};

	let tieflingAsmodeus: bgClass = {
		title: 'Asmodeus Tiefling',
		tier: 'C',
		image: {
			url: '/images/guides/bg3-tiefling-asmodeus.webp',
			alt: 'BG3 Asmodeus Tiefling'
		},
		list: [
			{ title: 'Ability Bonuses', body: '+2 cha, +1 int' },
			{ title: 'Move', body: '9' },
			{
				title: 'Proficiencies',
				body: 'None'
			},
			{ title: 'Traits', body: 'Hellish Resistance, Darkvision' },
			{ title: 'Spells', body: 'Thaumaturgy (1), Hellish Rebuke (3), Darkness (5)' }
		],
		body: [
			`Charisma and intelligence are the two worst abilities in the game, so tieflings are fighting uphill. Hellish Resistance gives you resistance to fire, probably the most common non-physical damage type in the game. That is great, but not enough on its own to make tieflings top tier tanks. The verdict is that the base race has cool bonuses, but they do not work together to give it a particular niche.`,
			`The main thing that differentiates teiflings are the racial spells that they get, so lets look at the Asmodeus tiefling’s offerings. Thaumaturgy gives the user advantage on performance and intimidation checks. These are not particularly useful skills, so it is kind of whatever. Hellish Rebuke is a reaction spell, which is awesome, because finding efficient ways to use reactions is difficult. However, all racial spells are a once per long rest cast, and having one efficient reaction per long rest is not a very big improvement. Darkness is a good spell, but it is hardly build defining like Jump is for the Gith. All of these factors considered, Asmodeus tieflings are incohesive and underwhelming. They look cool as hell though. Literally. In the past I had them as RP tier because I felt Mephistopheles Tieflings were always the better choice. Now I feel like the difference is so negligable that its not really worth a different rank.`
		]
	};

	let tieflingMephistopheles: bgClass = {
		title: 'Mephistopheles Tiefling',
		tier: 'C',
		image: {
			url: '/images/guides/bg3-tiefling-mephistopheles.webp',
			alt: 'BG3 Mephistopheles Tiefling'
		},
		list: [
			{ title: 'Ability Bonuses', body: '+2 cha, +1 int' },
			{ title: 'Move', body: '9' },
			{
				title: 'Proficiencies',
				body: 'None'
			},
			{ title: 'Traits', body: 'Hellish Resistance, Darkvision' },
			{ title: 'Spells', body: 'Mage Hand (1), Burning Hands (3), Flame Blade (5)' }
		],
		body: [
			`Identical to the Asmodeus tiefling except for the racial spells. Mage Hand is a more useful cantrip then Thaumaturgy that should stay somewhat useful for the entire game since it is a summon (because summons get their own actions they do not have a significant opportunity cost, which means they tend not to get out scaled by actions you can take at higher level). Burning Hands is the highest damage AoE spell at first level. Again, it's not build defining, but it is useful. Flame Blade summons a sword that does good damage and is a spell attack, which means it uses your spell ability modifier to determine bonuses to accuracy and damage. That could be a really interesting spell, giving a warlock, sorcerer, or bard a good melee attack option if they needed it. These spells are an improvement to the Asmodeus tiefling, but not enough to warrant a B. I predict it will bump up to B when the sorcerer and bard are added to the game.`
		]
	};

	let tieflingZariel: bgClass = {
		title: 'Zariel Tiefling',
		tier: 'B',
		image: {
			url: '/images/guides/bg3-tiefling-zariel.webp',
			alt: 'BG3 Zariel Tiefling'
		},
		list: [
			{ title: 'Ability Bonuses', body: '+2 cha, +1 str' },
			{ title: 'Move', body: '9' },
			{
				title: 'Proficiencies',
				body: 'None'
			},
			{ title: 'Traits', body: 'Hellish Resistance, Darkvision' },
			{ title: 'Spells', body: 'Thaumaturgy (1), Searing Smite (3), Branding Smite (5)' }
		],
		body: [
			`Zariel tieflings also get Thaumaturgy as their cantrip, which we discussed with the Asmodeus tiefling, so there is nothing new to say about that. The bonuses to charisma and strength prime this race to make good Paladins or blade pact warlocks, neither of which are in the game yet, which leaves them in an awkward place. Searing Smite is an interesting racial spell option. In effect, it boosts your DPR against targets who will reliably fail their consitution save. Con saves are typically pretty high on most D&D monsters, so it is situational. I think it is a decent racial spell that is really fun to use.`
		]
	};

	const guide = {
		body: [
			goldDwarf,
			shieldDwarf,
			drow,
			highElf,
			woodElf,
			lightfoot,
			strongheart,
			human,
			githyanki,
			halfDrow,
			halfHigh,
			halfWood,
			tieflingAsmodeus,
			tieflingMephistopheles,
			tieflingZariel
		],
		categories: [{ title: 'BG3', description: "Baldur's Gate 3" }],
		image: {
			url: '/images/guides/bg3-race-tier-list.webp',
			alt: "Baldur's Gate 3 High Elf portrait"
		},
		publishedAt: '2021-02-21T08:00:00.000Z',
		slug: 'baldurs-gate-3-race-tier-list',
		title: "Baldur's Gate 3 - Race Tier List",
		excerpt:
			'I rank the races available in BG3 early access. I cannot stress enough that BG3 is a video game. If you find this because you have googled something you will hopefully regret under the influence of rage, fear, and ethnic insecurity, I am not on your side. Find someone qualified to help you.',
		updatedAt: '2021-11-04T23:06:39Z'
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
		class="fixed top-28 right-0 w-12 h-12 rounded-l-lg bg-white flex justify-center items-center shadow-xl z-50"
		on:click={toggleSlideOver}
		in:fly={{ x: 100, delay: delay, duration: timing, easing: quintOut }}
		out:fly={{ x: 100, duration: timing, easing: quintOut }}
	>
		<svg
			class="h-6 w-6 text-gray-500"
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
				In this article I rank the races available in BG3 early access. I cannot stress enough that
				BG3 is a video game. This is not a tier list of so-called races of actual human beings. If
				you find this because you have googled something you will hopefully regret under the
				influence of rage, fear, and ethnic insecurity, I am not on your side. Find someone
				qualified to help you.
			</p>
			<p class="mt-8 text-xl leading-8">
				I also want to stress that this article is a first draft, representing my initial thoughts.
				I am sure my opinions will change as I think about it more and learn more about the game.
			</p>
			<h2>What the Tiers Mean and Fundamental Assumptions</h2>
			<p>
				Below I will rank every subrace available using a tier system. For the most part I am
				lifting this tier system from the original BG streamer Davaeorn. I highly recommend his
				guides on Youtube for those who play the original BG games. The tiers are:
			</p>
			<ul role="list">
				<li>
					<strong>S Tier:</strong> when a race is consistently amazing, i.e. the bonuses this race get
					are very useful for a wide range of classes and styles. Picking an S-tier race should always
					be a viable choice.
				</li>
				<li>
					<strong>A Tier:</strong> when a race is consistently good, and/or situationally amazing. By
					“situationally” I mean in a narrow set of builds or play styles.
				</li>
				<li>
					<strong>B Tier:</strong> when a race is just average, or situationally good but rarely amazing.
				</li>
				<li>
					<strong>C Tier:</strong> when a race is outperformed in most builds but does have a build or
					two where they are average.
				</li>
				<li>
					<strong>RP Tier:</strong> when a race is completely outperformed by other races in their particular
					niche. Don’t pick this race unless you are role-playing. There is always a better choice.
				</li>
			</ul>
			<p>
				This tier list will also operate from the fundamental assumption that you are trying as much
				as possible to minimize the amount of reloads and long rests you take in your runs. Why?
				Because reloads and long rests erode meaningful choice. For example, what is the value of
				picking perception if you reload every time you fail a perception check? If you reload
				enough times you can play through the entire game with every roll being a 20. Similarly, if
				you abuse the long rest feature, the individual niches of certain classes complete crumble.
				Wizard’s could just go nova on every encounter then instantly replenish all health and spell
				slots, leaving Warlocks in the dust. It makes choices trivial.
			</p>
			<p>
				I will also be operating under the same assumptions concerning combat versus out of combat
				utility as my last article where I ranked abilities. For those who didn’t read it, starting
				with the most valued and moving to the least:
			</p>
			<blockquote>
				<p>
					direct combat utility --> indirect combat utility --> convenience --> role-play utility
				</p>
			</blockquote>
			<h2>A Quick Note on Ability Bonuses</h2>
			<p>
				And since we are talking about abilities, I expect it will be useful to say something brief
				about ability bonuses, since they are a significant part of what differentiates races from
				each other. Bonuses received to abilities can either be a +1 or a +2, and the difference
				between them is not as obvious as it would seem at first glance.
			</p>
			<p>
				See, at character creation we are given 27 points to distribute among our abilities. You can
				spend a max of 9 of those points on a single ability, so 27 points will allow you max out
				three abilities, or max two abilities and split the remaining 9, you get the idea. When you
				max out an ability the first 5 points will buy you ability increases at a one-to-one ratio.
				Every point after the first 5 costs double, so one-to-two. Naturally you will want to avoid
				the steep cost of those last two ability points, but some abilities are valuable enough that
				they are worth it. Also, the progression curve of standard opponents assumes that you will
				start with a +3 ability modifier (a 16 or 17) in your classes primary ability, and will
				improve that ability every four levels until it is fully maxed at +5 (a 20). I expect Larian
				will keep that close to that progression curve in their encounter design. There is no way to
				get a 16 or 17 without paying the increased price.
			</p>
			<p>
				Now, if you have no racial bonuses to an ability a 13 (a +1 ability modifier) is the max you
				can buy before you have to start paying double. A +1 racial bonus is particularly important,
				because it allows you to reach a score of 14 (a +2 ability modifier) before paying increased
				costs, and spending the maximum 9 points will buy you a 16 (a +3 ability modifier) in that
				ability, which will keep you on curve in the difficulty progression. By contrast, a +2 is
				awkward, because it will buy you a 15 before the increased prices (still a +2 ability
				modifier) and will max at 17, which is still equally on curve. If this seems confusing, just
				think of it this way: even numbers are better than odd, and a +1 bonus in an ability lets
				you hit even numbers on the important point thresholds. The takeaway is that a +2 bonus is
				still an improvement on a +1, but not as much of an improvement as a +1 is to no bonus at
				all. Mostly this is important for one ability: dexterity. We will discuss that below in the
				actual tier-list.
			</p>
			<p>
				I will review each race in alphabetical order. At the end of the article, once all the races
				are reviewed, I list the races by tier. If you want to see the tier list without reading the
				reviews, just skip to the bottom. Also, at the end I’ve included a table that lists how I
				think each race works for each subclass.
			</p>
			{#each guide.body as section}
				<Class data={section} />
			{/each}
			<h2>Final List</h2>
			<ul role="list">
				<li>
					<strong>S Tier:</strong> Shield Dwarf, Githyanki, Wood Half-Elf
				</li>
				<li>
					<strong>A Tier:</strong> Drow, Wood Elf, Drow Half-Elf
				</li>
				<li>
					<strong>B Tier:</strong> Gold Dwarf, Human, High Half-Elf, Zariel Tiefling, Strongheart Halfling
				</li>
				<li>
					<strong>C Tier:</strong> High Elf, Lightfoot Halfling, Asmodeus Tiefling, Mephistopheles Tiefling.
				</li>
				<li>
					<strong>RP Tier:</strong> None (anymore).
				</li>
			</ul>
			<a href="/"><p class="text-bgRed dark:text-gray-100">Return home</p></a>
		</article>
	</div>
</div>
