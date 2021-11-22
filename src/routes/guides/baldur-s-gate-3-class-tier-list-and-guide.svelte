<script lang="ts">
	import Class from '$lib/guideComponents/class.svelte';
	import type { bgClass } from 'src/global';
	import Navigation from '$lib/guideComponents/navigation.svelte';

	let slideOver = false;

	function toggleSlideOver() {
		slideOver = !slideOver;
	}

	function handleMessage(event) {
		slideOver = !slideOver;
	}

	const guide = {
		body: [],
		categories: [{ title: 'BG3', description: "Baldur's Gate 3" }],
		image: {
			url: '/images/guides/bg3-class-tier-list.webp',
			alt: "Baldur's Gate 3 standard party characters standing in a diamond formation."
		},
		publishedAt: '2021-03-21T15:00:00.000Z',
		slug: 'baldur-s-gate-3-class-tier-list-and-guide',
		title: "Baldur's Gate 3 Class Tier List and Guide",
		excerpt:
			'This is entry three of four in my Baldur’s Gate 3 rankings and guide series where I review the 7 classes and the 15 subclasses available in the early access so far.',
		updatedAt: '2021-11-19T21:11:28Z'
	};

	let cleric: bgClass = {
		title: 'Cleric',
		tier: 'S',
		image: {
			url: '/images/guides/bg3-class-cleric.webp',
			alt: 'BG3 Cleric symbol'
		},
		list: [
			{ title: 'Hit Points', body: '1d8 progression' },
			{ title: 'Saving Throws', body: 'Wisdom and Charisma' },
			{ title: 'Proficiencies', body: 'Light and Medium Armor, Shields, Simple Weapons' },
			{ title: 'Team Role', body: 'Support, Control' }
		],
		body: [
			`We are starting out hot! There is a lot to talk about with this class. The Cleric base class
				offers two invaluable support buffs at this stage of the game. The first is Bless, a
				concentration team accuracy and saving throw booster. Bless gives you on average a +2.5 on
				saving throws and attack roles. That is big deal (on Great Weapon Master builds the +2.5
				accuracy will add on average 4 damage per hit, which is a lot). The second spell is Aid,
				which increases the maximum hit points of your allies by 5. With a 4-member party, a single
				cast of this spell is increasing the overall party hit point pool by 20. It is not a
				concentration spell, so you can stack it with bless. Notice also that it is not giving
				temporary hit points but increased maximum hit points, so you can still stack it with
				temporary hit points. It is easy to overlook small buffs that stack on multiple allies like
				this but getting a guaranteed 20 HP on a single cast is a very efficient use of a second
				level spell slot.`,
			`Clerics also get the spell Healing Word, a subtle spell that is practically a cheat code for
				most fights. Healing Word is like Cure Wounds, but it heals 1d4 + your ability modified at
				18m range at the cost of a bonus action. If you are not sure why this is good, you should
				play Darkest Dungeon, and you’ll figure it out. Basically, in BG3, same as in Darkest
				Dungeon, in-combat healing is not designed to be efficient, you should never be able to
				reliably heal more damage than your enemies are dealing. An efficient use of healing in
				combat is either when it revives a fallen character, or it gives a character just enough hit
				points to survive an attack that otherwise would have downed them, effectively giving them
				another action.`,
			`Let’s model it in our minds. Imagine a cleric, an enemy owlbear, and an ally fighter taking
				turns in that initiative order. When it is the owlbear’s turn, he will down the fighter, but
				a Cure Wounds spell will allow the fighter to survive the attack with 1 HP remaining. This
				is an efficient cast of Cure Wounds, because at the cost of one action you are giving the
				fighter one action and forcing the owlbear to expend one action more to kill the fighter;
				it’s a 1 for 2 trade. As good as that is, Healing Word is even better. Healing word will not
				heal enough to save the fighter against the owlbear’s onslaught, so the cleric will spend
				their turn attacking the owlbear. On the owlbear’s turn it will down the fighter. The
				fighter loses their turn, and we are back to the cleric. The cleric can then cast Healing
				Word to revive the fighter <span class="italic">with a bonus action</span> and spend their action
				to attack again. Now it’s the owlbear’s turn again, and they are in exactly the same situation
				as last time: they have to spend their action downing the fighter. Suppose the owlbear averages
				20 damage per action, they will have to spend that 20 damage to down the fighter, even though
				the fighter only has 6 hit points remaining. So, casting Healing Word in this situation is effectively
				absorbing 20 damage at the cost of a bonus action… That is insane efficiency.`,
			`Putting Bless, Aid, and Healing Word together, you get a class that, as long as they are
				alive and are maintaining concentration, will reliably swing the action economy in your
				favor.`,
			`But there is even more to this class than just its phenomenal support buffs. The cleric also
				has some top tier control spells like Bane and Hold Person. Hold Person is an important
				spell. In short, it’s a single target death sentence if it lands, since all melee attacks
				made against a held target are automatic crits. Bane is an undervalued debuff. It’s the
				offensive counterpart to Bless, subtracting 2.5 on average to enemy saving throws and attack
				roles. It the saving throw debuff that is the most important, because it can help you land
				debilitating control effects like Hold Person more reliably.`,
			`Now let’s look at the Cleric’s subclass options.`
		]
	};

	let lightDomain: bgClass = {
		title: 'Light Domain',
		tier: 'A',
		image: {
			url: '/images/guides/bg3-class-cleric-light.webp',
			alt: 'BG3 Light domain symbol'
		},
		body: [
			`The Life Domain adds Disciple of Life, Preserve Life, heavy armor proficiency, and domain spells to the Cleric base class. Disciple of life is a small boost to healing potency. Its nice, but 80% of the value of healing comes from reviving fallen allies, which you get even if you heal 1 hp (if this claim is confusing to you, read my analysis of Healing Word in the Cleric base class review).`,
			`Preserve Life is an AoE heal that costs an action and your Channel Divinity. Again, the base Channel Divinity – Turn Undead – is situationally useful at best, so a consistently useful option like Preserve Life is valuable, because it allows you to get reliable use from a resource that refreshes on a short rest. At level 4, if you hit every ally with it, and every ally has taken at least 12 points of damage, Preserve Life heals 48 HP, and refreshes on a short rest. That is adding a lot of durability to your party. If you are playing a Life Domain Cleric, don’t be afraid to take a little bit of damage in order to maximize your own damage output. Play offensively, trade hit for hit, because those are the fights where you will get the most efficiency from this subclass.`,
			`The Life Domain’s bonus spells are useful Cleric staples like Bless and Aid. They are good spells, but ones you would be taking anyways. I prefer domain spells to augment the base spell list with new options. The heavy armor proficiency is forgettable with the state of the game right now. It does allow you to dump dex, and this is one of few subclasses that can afford to do that.`,
			`<strong>Build:</strong> An optimized build would go half wood-elf, but I recommend the gold dwarf just because it is fun and interesting. Take the ASI at level 4, your stats should be 14,8,18,8,16,12. It’s a tanky melee cleric build with insane durability. If you are concentrating on Bless, it will be rare that you ever lose it. Your melee damage is low, but reliable. You AC should be 18, with 48 hp when Aid is up. It’s an awesome support/tank build.`
		]
	};

	let lifeDomain: bgClass = {
		title: 'Life Domain',
		tier: 'B',
		image: {
			url: '/images/guides/bg3-class-cleric-life.webp',
			alt: 'BG3 Life domain symbol'
		},
		body: [
			`The Life Domain adds Disciple of Life, Preserve Life, heavy armor proficiency, and domain spells to the Cleric base class. Disciple of life is a small boost to healing potency. Its nice, but 80% of the value of healing comes from reviving fallen allies, which you get even if you heal 1 hp (if this claim is confusing to you, read my analysis of Healing Word in the Cleric base class review).`,
			`Preserve Life is an AoE heal that costs an action and your Channel Divinity. Again, the base Channel Divinity – Turn Undead – is situationally useful at best, so a consistently useful option like Preserve Life is valuable, because it allows you to get reliable use from a resource that refreshes on a short rest. At level 4, if you hit every ally with it, and every ally has taken at least 12 points of damage, Preserve Life heals 48 HP, and refreshes on a short rest. That is adding a lot of durability to your party. If you are playing a Life Domain Cleric, don’t be afraid to take a little bit of damage in order to maximize your own damage output. Play offensively, trade hit for hit, because those are the fights where you will get the most efficiency from this subclass.`,
			`The Life Domain’s bonus spells are useful Cleric staples like Bless and Aid. They are good spells, but ones you would be taking anyways. I prefer domain spells to augment the base spell list with new options. The heavy armor proficiency is forgettable with the state of the game right now. It does allow you to dump dex, and this is one of few subclasses that can afford to do that.`,
			`<strong>Build:</strong> An optimized build would go half wood-elf, but I recommend the gold dwarf just because it is fun and interesting. Take the ASI at level 4, your stats should be 14,8,18,8,16,12. It’s a tanky melee cleric build with insane durability. If you are concentrating on Bless, it will be rare that you ever lose it. Your melee damage is low, but reliable. You AC should be 18, with 48 hp when Aid is up. It’s an awesome support/tank build.`
		]
	};

	let trickeryDomain: bgClass = {
		title: 'Trickery Domain',
		tier: 'B',
		image: {
			url: '/images/guides/bg3-class-cleric-trickery.webp',
			alt: 'BG3 Trickery domain symbol'
		},
		body: [
			`The Trickery Cleric is a fun utility support that is sadly difficult to translate well to the video game format. Larian has also made some choices that have really unexpectedly hurt the subclass. The Trickery Domain adds Blessing of the Trickster, Invoke Duplicity, and domain spells to the base cleric class.`,
			`Blessing of the Trickster is an at-will feature that gives an ally advantage on stealth checks. Stealth is really useful, so this should be a really valuable feature. However, the way it is right now, it is taking up the cleric’s important concentration slot. If the feature followed the rules of the Players Handbook, it shouldn’t compete for concentration, but for some reason it does in BG3. Taking concentration really cripples this feature, but it is still useful in certain situations.`,
			`Invoke Duplicity costs an action, concentration, and your channel divinity to summon an illusion to distract enemies. If you or an ally attacks an enemy that is within 3m of the illusion, that attack has advantage. This is another victim of some of Larian’s current balancing choices. First, this is another feature that in the Players Handbook does not take concentration (although it does use something like concentration, but that doesn’t take up the concentration slot), but in BG3 it does, giving it a steep opportunity cost to cast. It used to be that in BG3, advantage on attacks was trivially easy to get without this feature, but Larian has removed attack advantage on backstab and high-ground. Now that that has been changed, this feature is not totally useless. However, the fact that it competes with Bless for your concentration slot really hurts. I use this feature only when I am clearing an easy encounter and don't want to use the level 1 spell slot on Bless.`,
			`However, the Trickery Domain is rescued from C tier by its awesome bonus spells. At level 3 you get access to Mirror Image and Pass without Trace. Mirror Image gives you a whopping +9 bonus to AC that decays by 3 every time an enemy misses you. Moreover, my experience has been that enemy AI will shun targets with high AC, which means you will end up avoiding many more attacks then just the ones that your images absorb. Avoiding attacks is the best way to maintain concentration, and maintaining concentration is everything for clerics. Pass without Trace is a concentration spell that gives all allies in the area of effect a +10 bonus to stealth checks. How good is a +10? A level 4 character maximized for stealth with the high roll on guidance will also get a +10 to stealth… that means with this level 2 spell, your trickery cleric is making everyone in your party the equivalent of a fully optimized sneak. And this +10 bonus stacks with other bonuses, like the advantage you get from Blessing of the Trickster, or a bonus from Guidance, and even standard proficiency. With this spell you should never get spotted, which means you basically have an invisibility spell that doesn’t break when you attack enemies. The big problem Trickery Domain Clerics face is that they have too many good level 2 spells to choose from.`,
			`<strong>Build:</strong> For most readers, asking, “how should I build a Trickery Cleric?” is equivalent to asking, “how should I build Shadowheart?” so I will answer the latter question. I recommend spending your ASI to improve either her Wisdom or Constitution. Clerics can afford to invest in other attributes other than Wisdom because Wisdom improves your spell DC, improving you as a controller, but most of the Trickery Clerics spell slots are not going to be spent casting control spells. You will lose 1 DC on Hold Person, which hurts, but you get better concentration saves and more hit points if you choose Constitution. Honestly, both choices are good.`
		]
	};

	let druid: bgClass = {
		title: 'Druid',
		tier: 'B',
		image: {
			url: '/images/guides/bg3-class-druid.webp',
			alt: 'BG3 Druid symbol'
		},
		list: [
			{ title: 'Hit Points', body: '1d8 progression' },
			{ title: 'Saving Throws', body: 'Wisdom and Intelligence' },
			{ title: 'Proficiencies', body: 'Light and Medium Armor, Shields, Druid weapons' },
			{ title: 'Team Role', body: 'Control, Striker, Support' }
		],
		body: [
			`The Druid is a weird kind of spell casting class that really isn’t about spell casting. It is strong though, and has one of the most interesting subclasses in the game, so be sure to read through to the subclasses.`,
			`The Druid base class gets two features – spell casting and Wild Shape – which we will discuss in that order. Druid spell casting works the same as a Cleric's, but they have their own spell list. So far, I find the Druid spell list to be lackluster. I don’t have the space in this article to review every spell (I will do that in my forthcoming Spell Tier List), so we will have to be satisfied looking at just a few. The most serious problem of their spell list is that so many of the spells use concentration. After casting one concentration spell I find myself spending a lot of turns staring at my spell list looking for something else to cast before settling on a sub-optimal cantrip. All of that said, Druids still get access to some great spells. Heat Metal is either devastating DPR on a single target or it disarms them, and both are good. Spike Growth is also fantastic DPR if you can make enemies move through it. They get Healing Word and Pass Without Trace, which we discussed above in the Cleric review. They have Hold Person, an important control spell. These are all good options, it is just to bad so many of them compete for your concentration.`,
			`The Wild Shape feature allows your Druid to shapeshift into various animals like you are an Animorph. You can use this feature twice per short rest, which is a lot of uses. By level 4, you will have six Wild Shape options, seven if you take the right dialogue options. Those seven are: badger, cat, raven, spider, wolf, deep rothe, and abberation. The badger, cat, and raven are sub-optimal in combat, being more useful for exploration, so we will set them aside and look at the others. The spider is the most mobile, has an enweb ability as a bonus action, and its attacks can impose the poisoned condition. The wolf has a very interesting once per short rest ability that guarantees a critical for the next ally that attacks a target. They can also buff the move speed of allies once per battle. The deep rothe you get at level 4, it is the best DPR wild shape. The abberation has a powerful intelligence attacking ability, but use this shape carefully, since NPCs will attack you when they see you.`,
			`Wild shaping costs an action, but you maintain concentration in your animal form. When in animal form, if you are reduced to zero hit-points, you revert back to your human form with however many hit-points you had when you wild shaped. So, hit points from your animal form function very similarly to temporary hit-points, and you get two wild shapes per short rest. The spider, for example, has 20 HP, so if you use all your wild shapes on the spider, you can get up to 120 bonus hit-points per long rest. That is a lot of extra durability.`,
			`In summary, the Druid is a weak spell caster, but makes up for it with its Wild Shape feature, which gives unparalleled durability. Now lets look at the Druid’s subclasses.`
		]
	};

	let circleOfTheMoon: bgClass = {
		title: 'Circle of the Moon',
		tier: 'S',
		image: {
			url: '/images/guides/bg3-class-druid-moon.webp',
			alt: 'BG3 Circle of the Moon symbol'
		},
		body: [
			`An S-tier ranking indicates a subclass whose features strongly compliment the base class, either by adding new role options to the class or by perfecting the original role. The Moon Druid is S-tier because it adds a new role – Defender – to the Druid base class. I consider it the only real defender class in the game so far. The Circle of the Moon adds three features to the Druid base class: Combat Wild Shape, Lunar Mend, and the Improved Wild Shapes.`,
			`Combat Wild Shape allows you to Wild Shape at the cost of a bonus action instead of a standard action. The usefulness of this feature is straightforward and obvious, so let’s not waste a lot of words discussing it.`,
			`Lunar Mend allows you to heal yourself while in wild shape for the cost of a bonus action and a spell slot. You heal 1d8 per spell level of the slot you use. Druids are already insanely durable, so with Lunar Mend it is as if you are shapeshifting into a rock. It is like Paul Simon said, “rocks feel no pain, and Moon Druids never die.” Remember how Druids find themselves staring at their spell list and not having any to cast because so many of their spells take concentration? Well Lunar Mend takes care of that dilemma. Now you can use your spell slots healing yourself.`,
			`The last feature is the Improved Wild Shapes, which are two unique shape available to Moon Druids only. They are Polar Bear at level 2 and Dire Raven at level 4. Polar Bears have 30 hit-points. That means if you use every Wild Shape to turn into a Polar Bear you will be getting 180 bonus HP… That is on top of your Lunar Mend feature… Polar bears can also spend their action to do a goading roar, which is a taunting ability. When you use it, enemies within 9m of you must make a wisdom saving throw or be forced into attacking you. This is one of the few taunting mechanics in 5e. Combine this shape with Lunar Mend and the Druid base class and you get a highly durable character who can draw enemy fire through an at-will taunting ability. The dire raven is an extremely mobile form that can blind enemies on its attack. It doesn't offer much more than that. The mobility can be useful to position for your spells or to fly out of a sticky situation, but it really does not add much to this subclass.`,
			`<strong>Build:</strong> Moon Druids are easy to build, because all of your physical abilities (strength, dexterity, constitution) will be replaced when you wild shape. All you really need is to prioritize is wisdom. Gold dwarf is a great choice then because of the wisdom and extra hit-points. Take Produce Flame and Thornwhip as your cantrips. For spells, take whatever looks cool! You will be using most of your spell slots healing yourself anyways. In combat, cast a concentration spell, then Wild Shape and start tanking for your team. Moonbeam, Spike Growth, and Heat Metal should be your go to options for using your concentration. At level 4, take an ASI in wisdom to bump it to 18.`
		]
	};

	let circleOfTheLand: bgClass = {
		title: 'Circle of the Land',
		tier: 'B',
		image: {
			url: '/images/guides/bg3-class-druid-land.webp',
			alt: 'BG3 Circle of the Land symbol'
		},
		body: [
			`This sub-class is the king of the casters. Choosing Circle of the Land gives you three features: Natural Recovery, a bonus cantrip, and Circle Spells.`,
			`Natural Recovery allows you to recover some spell slots between encounters. You can use it once per long rest, and the spell slots recovered must be equal to or less than half your Druid level (rounded up). So, a 4th level Druid can recover one 2nd level spell slot, or two 1st level spell slots. This isn’t a flashy feature, but it is awesome, giving you more spells to cast.`,
			`At level 2, Land Druids also get an extra cantrip. We haven’t discussed Druid cantrips, so here is a good place to do that. Druids have two cantrips that stand out among the others, they are Produce Flame and Thornwhip. Both are spell attack cantrips. Produce Flame does 1d8 damage, but can also be held in hand, shedding light in a 3m radius. If you cast this before shapeshifting you can combat a lack of darkvision in your animal forms. Thornwhip does 1d6 damage, but also pulls your target 3m towards you. There is no saving throw on the pull. The remaining cantrips to choose from likely will not get a lot of use. Guidance is fantastic, but you already get access to it from a very easy to acquire item. Shillalegh is probably the best choice, it’s a good cantrip, but Druids should try to avoid attacking melee in human form, so you will seldom use it. So, getting a bonus cantrip seems cool at first, but it doesn’t do much for you in the end.`,
			`Finally, at level 3 Land Druids choose a biome which represents the natural environment they study and protect. There are eight biomes to choose from, and each gives your Druid two bonus spells which are always learned. It is this feature and Natural Recovery which make Land Druids the king of casters. Classes like the Cleric get bonus spells for more choice. Wizards get spell recovery features for more casts per long rest. Land Druids are the only class option that gets both.`,
			`What I want out of my Circle Spells choice are spells that don’t take concentration, are consistently useful, are not otherwise available to Druids, and that compliment the Land Druid’s combat role as a controller. The Coast and Swamp spells fit these criteria the best. It’s a matter of preference between the two. For Swamp, chaining Acid Arrow with the Druid’s DPR concentration options, like Heat Metal or Moonbeam, is a lot of consistent damage. However, choosing Coast allows for Misty Step into Thunderwave combos, which are always fun, and Druids already get a lot of utility from Thunderwave when they use it to push enemies back into their ground effects, like Entangle or Spike Growth.`,
			`Honestly, as good as the Mood Druid is, I have more fun playing as the Circle of the Land. I'm not about that Animorph life, and casting spells is fun.`,
			`<strong>Build:</strong> Wood Elf or Half-Wood Elf are you best choices for race, because they get a bonus to wisdom and Fey Ancestry to prevent sleep from breaking your concentration. Because you will spend more time in human form than a Moon Druid, it is worth investing in constitution and dexterity for the durability. Make sure you buy the highest even numbers you can get in wisdom, constitution and dexterity, and spend the remaining points however you like. For cantrips, take Produce Flame, Thornwhip, then whatever at level 2. At level 3, choose the Coast biome. At level 4, get that wisdom score up to 18 with an ASI. In combat, cast Spike Growth, then try to use your mobility and Thunderwave to push enemies into it.`
		]
	};

	let fighter: bgClass = {
		title: 'Fighter',
		tier: 'A',
		image: {
			url: '/images/guides/bg3-class-fighter.webp',
			alt: 'BG3 Fighter symbol'
		},
		list: [
			{ title: 'Hit Points', body: '1d10 progression' },
			{ title: 'Saving Throws', body: 'Strength and Constitution' },
			{
				title: 'Proficiencies',
				body: 'Light, Medium, and Heavy Armor, Shields, Simple and Martial Weapons.'
			},
			{ title: 'Team Role', body: 'Striker' }
		],
		body: [
			`Besides the excellent hit-point progression and proficiencies, fighters get the following features: Second Wind, a Fighting Style, and Action Surge. We will go through them one at a time.`,
			`Second Wind is a self heal on a bonus action that refreshes on a short rest. It heals 1d10 + your fighter level, so at level 4 it’s on average a bonus 9.5 health per short rest. It doesn’t seem like much, but that is a lot of extra durability if you make sure you are using it three times per long rest.`,
			`A Fighting Style represents the specialized martial training a fighter has received. You can choose between six styles, with each style giving a different bonus:`,
			[
				`Archery: gives a +2 bonus to attack roles made with ranged weapons`,
				`Defense: gives a +1 to AC while wearing armor`,
				`Dueling: gives a +2 to damage when attacking with a one-handed melee weapon while the other hand is free.`,
				`Great Weapon Fighting (GWF): allows the player to re-roll 1’s and 2’s on damage die on attacks made with two-handed melee weapons.`,
				`Protection: allows the player to use their reaction to impose disadvantage on attacks made against allies within 1.5m of them.`,
				`Two-Weapon Fighting (TWF): allows the player to add their ability modifier to damage made with their off-hand attack.`
			],
			`Most of the these are useful but not crucial bonuses. Let’s look at some of the weaker ones first. GWF is the weakest DPR boost, giving around a +1 bonus to damage (it varies by weapon type, but is always around a +1 if you round it). Protection is technically the strongest boost, but is extremely restrictive to use. I have always wanted to run a phalanx duo on tabletop, where two players pick this style and always fight in formation, but its asking a lot of my friends for them to chain themselves to that concept. From a pure optimization stand-point I think it is undervalued as a choice, but there are still better build paths out there. In the PHB you can gain the bonus from Dueling even when you have a shield in your off-hand, making it the go-to style for shield builds, but Larian has changed the description in a way that makes me think it does not work with shields in BG3. If that is true (I haven’t tested it yet), it is also to restrictive to compete with other choices. That leaves Defense, Archery, and TWF as the three remaining options. Defense is boring, but awesome, and is almost always the best choice for melee focused builds. TWF is the highest DPR boost among the styles, but dual wielding still loses out to two-handed builds in DPR once you factor in the Great Weapon Master feat. Still, TWF is a decent choice if you just prefer dual wielding. If you aren’t going melee, take Archery, a +2 bonus to accuracy is always good.`,
			`Finally, there is Action Surge, which gives you a second action in a turn and refreshes on a short rest. This feature is a lot of fun! Its like a burst damage spell that scales off of your standard action DPR that you can cast three times per long rest. There are two situations where you want to use this. First, whenever the extra attack will reliably kill a target that otherwise would survive your turn. This is efficient because you are not only getting another standard action for yourself, but you are also removing a whole turn that your opponent would be getting. The second situation is when you can target enemies under status effects that guarantee crits, like sleep or paralyze. Two crits in a single turn is a death sentence for most enemies.`,
			`Altogether, the Fighter base class is solid foundation for a reliable striker. Its reliable because their features are easy to use, useful in every combat situation, and are either always available or refresh on a short rest. Moreover, the fighter is also highly durable compared to other striking classes in the game, allowing them to consistently push through to priority targets, and to survive long enough to dish out the damage that you want them for. It is best to not think of the Fighter as a defender class, but as a durable striker class.`
		]
	};

	let battleMaster: bgClass = {
		title: 'Battle Master',
		tier: 'S',
		image: {
			url: '/images/guides/bg3-class-fighter-battlemaster.webp',
			alt: 'BG3 Battle Master symbol'
		},
		body: [
			`This subclass pretty much does what it says on the tin: it masters battles. Seriously though, this class is meat mincer. Battle Master’s add the Combat Maneuver feature to the Fighter base class. Maneuvers are spell-like abilities that use a special resource called superiority dice. Basically, a superiority dice is a resource you expend to perform the maneuver (like a spell slot for a spell), and most maneuvers will have you roll the expended dice (a d8) and add it to the effect of the maneuver in some way. You start with 4 superiority dice, and they refresh after a short rest, meaning you will get a maximum of 12 “casts” per long rest. Some of the maneuvers require the enemy to make a saving throw, in which case the DC is always “8 + proficiency bonus + strength or dexterity modifier (whichever is highest)”`,
			`So far in the early access you are able to select 3 maneuvers from a total of 6 options. Those options are:`,
			[
				`Menacing Attack: you make a standard attack against the target and add the superiority dice roll to the damage. The target must also succeed on a wisdom saving throw or be frightened of you until the end of your next turn.`,
				`Pushing Attack: you make a standard attack against the target and add the superiority dice roll to the damage. If the target is large or smaller it must make a strength saving throw or get pushed 4.5m away from you.`,
				`Rally: with a bonus action, expend a superiority die to give 8 temporary hit-points to an ally within 1.5m of you. These hit points last 10 rounds.`,
				`Riposte: when an ally misses you with a melee attack you use your reaction to riposte. Make a standard attack against the target and add the superiority dice roll to the damage.`,
				`Trip Attack: you make a standard attack against the target and add the superiority dice roll to the damage. The target must also succeed on a strength saving throw or be knocked prone.`,
				`Disarming Attack: you make a standard attack against the target and add the superiority dice roll to the damage. The target must also succeed a strength saving throw or drop their weapon to the ground.`
			],
			`We will discuss these options one at a time.`,
			`Menacing Attack is amazing. It requires two “hits” to get the full effect: first you have to hit the attack, then they have to fail their saving throw. If you manage to hit both, the enemy is frightened for one turn. Usually I do not like the two-hit maneuvers, but Frightened is such a good status effect, that it is worth it. The reason it is good is that, if your make this maneuver as a melee attack, your frightened enemy will run from you next turn, procing an attack of opportunity. This means you are able to use your reaction to make another full attack, which is an extremely efficient use of a reaction. We will discuss this more when we get to the Riposte maneuver. Finally, the new Dazed condition which you can apply on a bonus action with weapons that have access to Pommel Strike gives disadvantage to enemy wisdom saves, allowing you to land that second hit more reliably.`,
			`Pushing Attack is situationally worth the cast. If you can use it to push your target off of a high place it does a lot of damage and inflicts prone, which is useful. Otherwise, it is underwhelming.`,
			`Rally would be amazing if it worked the way it works in the Players Handbook, but Larian has nerfed it into near uselessness in BG3. In the tabletop rules, Rally has no timed expiration, it just lasts until you take enough damage to break the temporary hit-points or until you take your next long rest. That means you can start every adventuring day by casting Rally on your party, then take a short rest. The expended superiority dice refresh on the short rest, but the temporary hit points stay. In effect, you are boosting your party’s hit point total by, on average, 18 (even more if you have a positive charisma modifier) every day, at level 3, for no real cost at all. Larian apparently noticed the potential for abuse and gave the maneuver an expiration. They tried to buff it by having it always heal for the maximum 8, but its usually a waste of a dice. The fact that it is on a bonus action is nice though.`,
			`Riposte allows you to weaponize your reaction, an otherwise under-utilized resource in your action budget. For the cost of a superiority die you are reliably buying an extra attack per turn, which is incredible. However, Riposte does compete with the attack of opportunity you may get from Menacing Strike. Does that mean it is better to save your superiority dice for Menacing Strikes and pass on Riposte altogether? No, it doesn't because Riposte is a more reliable proc, since it doesn't depend on your enemy failing their saving throw. Use both Riposte and Menacing Strike liberally.`,

			`Trip Attack is decent if you have not used your Action Surge yet. If you land the trip you can then Action Surge and attack with advantage before they can get back up. Its just decent though, since its still a double-hit maneuver.`,
			`Lastly, Disarming Attack is strong, but limited to targets who use weapons, i.e. not beast creatures like owlbears, bulletes, or hooked horrors.`,
			`To finish I just want to note something about the Battle Master and sustained DPR. I consider the Battle Master the highest DPR subclass in the game because they have a the most reliable ways of weaponizing all of their action types, particularly their reaction. Some people object to me figuring Riposte or attacks of opportunity into their sustain DPR since it technically does not proc every round (though I find that it is close). So here is a graph that compares the DPR of a Great Weapon Master Battle Master build with and without the reaction attack:`,
			{
				url: '/images/guides/bg3-riposte-dmg-comparison.webp',
				alt: 'Riposte damage analysis graph'
			},
			`As you can see, weaponizing that reaction is a big deal. Note that weaponizing it through Menacing Strike will result in an identical curve, so while I have it labeled as Riposte it works for both. Battle Master's can do this 4 times per short rest. If we were being strict about what counts as sustain DPR we would not include the Riposte damage, but 4 times per short rest is A LOT, so not including it is also a distorted picture. So, going forward I will include both lines in my sustain DPR graphs, for context.`,
			`<strong>Build:</strong>  Like I did with the Trickery Domain Cleric, I am going to suggest a Battle Master build for a companion, this time Lae’zel. Lae’zel is actually really close to an optimized Battle Master already, which is just fantastic. Take Riposte, Rally, and Pushing Attack at level 3, then the Great Weapon Master feat at level 4. This build centers around maximizing damage per attack, then multiplying attacks with Riposte, Action Surge, and the cleave feature from Great Weapon Master. Assuming you proc cleave on around half of your turns, are procing Riposte, and are attacking with advantage, you will average 34.9 DPR against an AC range of 5-25. This isn’t factoring in Bless, or the guaranteed crits from spells like Sleep and Hold Person. If you have a team that can support Lae’zel with spells like this, her DPR shoots into the stratosphere. It is the highest sustain DPR build I know of in BG3 right now, and it even has burst and AoE damage options with Action Surge and Cleave ability from Greatswords. Its the best striker build in the game and you can get it on a stock companion. I can’t say enough good things about it!`
		]
	};

	const sections = [
		cleric,
		lightDomain,
		lifeDomain,
		trickeryDomain,
		druid,
		circleOfTheMoon,
		circleOfTheLand,
		fighter,
		battleMaster
	];

	function getTitle(item) {
		let title = item.title;
		let link = item.title.replace(/\s+/g, '');
		return { title: title, link: link };
	}

	const links = sections.map(getTitle);
</script>

<Navigation on:toggleSlideOver={handleMessage} {slideOver} {links} />
{#if slideOver}
	<button
		class="fixed bottom-0 right-0 w-12 h-12 mb-4 mr-4 rounded-full bg-white flex justify-center items-center z-50"
		on:click={toggleSlideOver}
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
			<line x1="18" y1="6" x2="6" y2="18" /> <line x1="6" y1="6" x2="18" y2="18" /></svg
		></button
	>
{:else}
	<button
		class="fixed bottom-0 right-0 w-12 h-12 mb-4 mr-4 rounded-full bg-white flex justify-center items-center shadow-xl z-50"
		on:click={toggleSlideOver}
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
			<line x1="8" y1="6" x2="21" y2="6" /> <line x1="8" y1="12" x2="21" y2="12" />
			<line x1="8" y1="18" x2="21" y2="18" /> <line x1="3" y1="6" x2="3.01" y2="6" />
			<line x1="3" y1="12" x2="3.01" y2="12" /> <line x1="3" y1="18" x2="3.01" y2="18" /></svg
		></button
	>
{/if}

<div class="relative py-16 overflow-hidden">
	<div class="relative px-4 sm:px-6 lg:px-8">
		<div class="text-xl prose max-w-prose mx-auto">
			<h1>
				<span class="block text-base text-center text-bgRed font-semibold tracking-wide uppercase"
					>Guide</span
				>
				<span
					class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
					>{guide.title}</span
				>
			</h1>
			<h2>Introduction and Fundamental Assumptions</h2>
			<p class="mt-8 text-xl text-gray-700 leading-8">
				This article is a resource for optimizing your Tavs! It is entry three of four in my
				Baldur’s Gate 3 rankings and guide series. In the first entry I analyzed and ranked the six
				abilities: strength, dexterity, constitution, wisdom, intelligence, and charisma. That
				analysis formed the base for the second article , my race tier list, where I discussed all
				of the sub-races in the game and ranked them on a tier list. In this article I will give the
				same treatment to the 7 classes and the 15 sub-classes available in the early access so far.
				I hope you find it helpful!
			</p>
			<p class="mt-8 text-xl text-gray-700 leading-8">
				Before diving into my tier ranking system, let’s take a moment to discuss how I expect this
				guide will be different from the two that precede it. So far, I have ranked abilities,
				sub-races, and now classes. Of the three it is classes that are the most complex and are
				going to be the most impactful to your runs. This means that ranking classes is much more
				difficult than ranking the others. Moreover, I find the class system in BG3 to be quite
				balanced overall. Classes that I will give an S-tier will still be bad if you build them
				poorly, and classes I will give a C-tier can be great if you make the right choices. Because
				of all of this, I want this article to be more guide than tier list. My primary goal in
				writing this is to help you readers get the most out of the class you want to play, because
				they are all really fun! Towards that end, I have included a build outline for every
				subclass for you to try.
			</p>
			<p class="mt-8 text-xl text-gray-700 leading-8">
				Now some of you may be asking “why even have a tier ranking at all then?” There are a few
				reasons. One is that thinking about the relative strength of certain options compared to
				others is a great way to understand those options, which is to say that having power
				rankings helps us get the most out of our favorite sub-classes. Another reason is that I am
				hopeful that articles like this and the discussions that follow them will help Larian
				balance the game even better. Probably the most important reason is that power rankings and
				tier lists are just a fun part of gaming culture that I enjoy! If you do not enjoy them, I
				think you will still find a lot of helpful advice in this article anyways.
			</p>
		</div>
		<div class="mt-6 prose prose-lg text-gray-700 mx-auto">
			<h2>The Tiers and Combat Roles</h2>
			<p>I will be using a similar tier system to the one I used in my Race Tier List. It is:</p>
			<ul role="list">
				<li>
					<strong>S Tier:</strong> Consistently amazing classes where you feel it when you do not have
					one on your squad. A class that offers something worth building your entire team strategy around.
					For subclasses an S-Tier indicates a subclass whose features strongly compliment the base class,
					either by adding new role options to the class or by perfecting the original role.
				</li>
				<li>
					<strong>A Tier:</strong> Classes that excel at their given role. For subclasses, features that
					improve the role of their base class by one tier.
				</li>
				<li>
					<strong>B Tier:</strong> Classes that are average at their given role. For subclasses, features
					that offer minor improvements, not big enough improvements to shift the base class up a tier
					ranking.
				</li>
				<li>
					<strong>C Tier:</strong> Classes that tend to get overshadowed in their role. These classes
					could use a buff. For subclasses, features that, due to their opportunity cost, will seldom
					get used, and thus are not improvements to the base class.
				</li>
				<li>
					<strong>RP Tier:</strong> Classes and subclasses that get completely outperformed by others.
					Do not pick these options unless you are role-playing. There is always a better choice.
				</li>
			</ul>
			<p>
				The roles mentioned in the ranking are the roles a character can take in a combat encounter.
				They are:
			</p>
			<ul role="list">
				<li>
					<strong>Control:</strong> The hallmark of a controller is having effects which ruin your enemy’s
					day, but not because they do a lot of damage. Controllers manipulate the battlefield with an
					arsenal of status effects and debuffs.
				</li>
				<li>
					<strong>Defender:</strong> The role of a defender is to draw aggro and control enemy movement
					by throwing yourself into them.
				</li>
				<li>
					<strong>B Tier:</strong> Classes that are average at their given role. For subclasses, features
					that offer minor improvements, not big enough improvements to shift the base class up a tier
					ranking.
				</li>
				<li>
					<strong>Striker:</strong> The role of a striker is to generously dispense damage. That damage
					can be done to a single target or to many. It can be sustainable damage over a long period
					or focused into single turn. It can be dealt at range or at melee. All this counts as striking
					in my book.
				</li>
				<li>
					<strong>Support:</strong> Supporters enable their allies through buffs and healing. Again,
					there are a lot of different kinds of buffs – offensive, defensive, mobility, etc – but they
					all enable allies, so all count as support for me. In previous editions of D&D this role was
					called “leader,” but I prefer the straight-forward description of support.
				</li>
			</ul>
			<p>
				Something needs to be said about the defender role. Many people think that any class or
				build that is durable is a defender. This is not correct given the way I have defined these
				terms. The defender role is about drawing aggro. Durability is just about being able to
				withstand more enemy focus. I see durability in 5e as similar to mobility: it is something
				every role can benefit from that isn’t the hallmark of any one role in particular. A durable
				striker will deal more damage by surviving longer. They will also be better able to push
				through to priority targets. A durable support or control caster will be better able to
				maintain concentration. Durability is not role-defining, but it is almost always valuable.
				Of course, some roles will benefit from durability more than others, and the defender will
				benefit from it the most.
			</p>
			<p>
				In the rankings I will list the roles of each base classes. Many classes can be built for
				more than one role or for multiple roles simultaneously. Nonetheless, each class should have
				a single primary role which they are best at, with all other roles being secondary. To note
				this, when I list the roles of a class, the primary role will always be listed first. Most
				subclasses do not alter the role of their base classes. For the few that do, I will note
				this in their review.
			</p>
			<h2>Fundamental Assumption Disclaimers</h2>
			<p>
				I know you are probably anxious to get to the rankings, and we are almost ready, but there
				is still this one thing we need to get out of the way. My rankings only make sense given
				certain fundamental assumptions, which I will list now.
			</p>
			<p>
				First, I will be operating under the same assumptions concerning combat versus out of combat
				utility as my last two articles. For those who didn’t read them, starting with the most
				valued and moving to the least:
			</p>
			<blockquote>
				<p>
					direct combat utility --> indirect combat utility --> convenience --> role-play utility
				</p>
			</blockquote>
			<p>
				The reason I make these assumptions is because what makes a better role play experience will
				differ from person to person, whereas combat utility is by contrast easy to compare and
				measure. I go into in more detail in my previous articles. I recommend reading them first, I
				will build off of the arguments I make there for this tier list. This tier list will also
				operate from the fundamental assumption that you are trying as much as possible to minimize
				the amount of reloads and long rests you take in your runs.
			</p>
			<p>Ok, that is out of the way. Let’s get started!</p>
		</div>
		<div class="mt-6 prose prose-lg text-gray-700 mx-auto">
			{#each sections as section}
				<Class data={section} />
			{/each}
		</div>
	</div>
</div>
