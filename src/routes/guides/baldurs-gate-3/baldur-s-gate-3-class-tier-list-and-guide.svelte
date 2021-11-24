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
			`Light Domain Clerics get three augments to the Cleric base class: Warding Flare, Radiance of Dawn, and bonus domain spells. Warding Flare imposes disadvantage on attacks at the cost of a reaction. You can use Warding Flare a number of times equal to your wisdom modifier per long rest. This is an awesome ability that really compliments the base class. Not getting hit means not losing concentration. Also, finding ways to utilize your reaction bonus is highly efficient, since it has very little opportunity cost.`,
			`Radiance of Dawn is an area-of-effect (AoE) nuke spell that you can cast at the cost of an action and your channel divinity, which refreshes on a short rest. The damage value of the spell is equivalent to a typical level 2 (it will average 2.5 less damage per target then Shatter, but has a much wider AoE), so, in effect, you are getting a level 2 spell that refreshes on a short rest. That is great! Especially because the opportunity cost of channel divinity is also low. Turn Undead is only useful when you are fighting undead, so for most encounters you would not get a use out of channel divinity without Radiance of Dawn.`,
			`Finally, the bonus spells that the Light Domain gets are all useful. Mostly they get fire-based nuke spells like Burning Hands or Scorching Ray. Nuking spells are always welcome, particularly Burning Hands since the base Cleric spell list is lacking in AoE damage. Faerie Fire is an interesting debuff spell that counter's invisibility and gives advantage to ally attacks against enemies who fail their save. Sadly, it requires concentration, so it competes with Bless. In most encounters you will want to stick to Bless, however, if your damage depends on procing Sneak Attacks (if you have a rogue), or you need to counter invisibility, its useful to have Faerie Fire around, it is a great a spell. `,
			`Altogether, the Light Domain utilizes underused action resources in ways that give a mix of defense and raw damage to an already awesome base class that can benefit from both.`,
			`<strong>Build:</strong> A wood elf Light Cleric is an awesome combination. For your starting stats, max wisdom at 16 and then buy a 14 in both constitution and dexterity. The remaining 7 points just put wherever you prefer. At level 4, take the ASI to bump your wisdom to 18. This build will make it very improbable that anyone cancels your concentration, because you will have 19 AC + Warding Flare (21 AC is you use your concentration for Shield) and are immune to sleep, which is the most reliable concentration breaker in the game.`
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

	let eldritchKnight: bgClass = {
		title: 'Eldritch Knight',
		tier: 'RP',
		image: {
			url: '/images/guides/bg3-class-fighter-eldritchknight.webp',
			alt: 'BG3 Eldritch Knight symbol'
		},
		body: [
			`This class will be really good on full release, probably A tier, maybe S, but right now it just can’t compete with the Battle Master. It hasn’t gotten enough of Larian’s attention in the early access, so as of now it is always worse to pick Eldritch Knight over Battle Master.`,
			`Eldritch Knights add spell casting to the Fighter base class. They learn two cantrips and up to four spells by level 4. Three of those four spells must be in the abjuration or evocation schools. At level 4 they have three first level spell casts per long rest. Their spell casting modifier is intelligence.`,
			`The problem with this feature is that there are not enough spells in the early access to support it. In patch 4 there are six evocation or abjuration spells they can choose from. They are Burning Hands, Magic Missile, Mage Armor, Protection from Evil and Good, Thunderwave, and Witch Bolt. None of them synergize well with the Fighter base class. The cantrip selection does not fare much better. For the one spell you get that isn’t restricted there are three interesting choices: Jump, Sleep, and Tasha's Hideous Laughter. All three are good spells, you will use them often, but they are not enough to compete with Riposte or Menacing Strike.`,
			`So instead, let’s discuss what can happen between this patch and full release to make the Eldritch Knight good. The obvious fix would be the addition of new spells and cantrips. The spell Shield, for example, is famously good on Eldritch Knights, basically serving as a defensive counterpart to Riposte. The Eldritch Knight also gets two really important class features at levels 7 and 10. The level 10 feature is particularly good, as it is one of only a handful of ways in the 5e rule set to reliably impose disadvantage on a target’s saving throws, setting up for those devastating paralyze spells. With more options, the Eldritch Knight should serve as a more durable and control focused alternative to Battle Master.`,
			`As you can see, weaponizing that reaction is a big deal. Note that weaponizing it through Menacing Strike will result in an identical curve, so while I have it labeled as Riposte it works for both. Battle Master's can do this 4 times per short rest. If we were being strict about what counts as sustain DPR we would not include the Riposte damage, but 4 times per short rest is A LOT, so not including it is also a distorted picture. So, going forward I will include both lines in my sustain DPR graphs, for context.`,
			`<strong>Build:</strong>  an optimal build would do something like our build for Battle Master above, taking Great Weapon Master and optimizing for DPR, but we have established that there is no way for the Eldritch Knight to compete, so I’m going to outline a sub-optimal but fun build that plays on a few unique interactions available to this sub-class. Pick Gold Dwarf as your race, max your constitution, and make sure you have a 14 dexterity. At level 3, take Shocking Grasp and Blade Ward as your cantrips. At level 4, take the tough feet. You should have 52 hit points at level 4, the highest possible in the early access. Normally a build that goes full tank like this will be two behind curve for accuracy, but with the Headband of Intellect, your Shocking Grasp will be only slightly behind curve. Your damage will still be painfully low, but you are extremely tanky to make up for it.`
		]
	};

	let ranger: bgClass = {
		title: 'Ranger',
		tier: 'B',
		image: {
			url: '/images/guides/bg3-class-ranger.webp',
			alt: 'BG3 Ranger symbol'
		},
		list: [
			{ title: 'Hit Points', body: '1d10 progression' },
			{ title: 'Saving Throws', body: 'Strength and Dexterity' },
			{
				title: 'Proficiencies',
				body: 'Light and Medium Armor, Shields, Simple and Martial Weapons.'
			},
			{ title: 'Team Role', body: 'Striker' }
		],
		body: [
			`Ranger’s are an interesting class in D&D history. I’ve never felt like they have been executed well, accept in that edition we all decided to hate for some reason. Larian has changed the Ranger quite a bit from how it works in the Player’s Handbook. They have tried to give them options that are more consistently useful. Besides the things outlined above, the ranger base class is defined by four features: Favored Enemy, Natural Explorer, Fighting Styles, and spell casting.`,
			`Favored Enemy represents the Ranger’s special training in hunting certain targets. You must choose one of five options:`,
			[
				`Bounty Hunter: Gain Proficiency in investigation and learn the Thieves' Cant passive. Creatures you restrain have a harder time escaping. (Note, I am not sure what ‘harder time escaping’ actually translates to mechanically).`,
				`Keeper of the Veil: You gain proficiency in Arcana, and can cast Protection from Evil and Good.`,
				`Mage Breaker: Gain proficiency with Arcana and the True Strike cantrip.`,
				`Ranger Knight: Gain proficiency with History and Heavy Armor.`,
				`Sanctified Stalker: Gain proficiency in Religion and the Sacred Flame cantrip. Wisdom is your spell casting ability for this spell.`
			],
			`Natural Explorer represents a Ranger’s special training in a particular environment. Again, you can choose one of five options:`,
			[
				`Beast Tamer: You can cast Find Familiar as a ritual.`,
				`Urban Tracker: you gain proficiency with the disguise kit and thieves' tools.`,
				`Wasteland Wanderer (Cold): Gain resistance to cold damage.`,
				`Wasteland Wanderer (Fire): Gain resistance to fire damage.`,
				`Wasteland Wanderer (Poison): Gain resistance to poison damage.`
			],
			`These features are much more useful. The Fire resistance is probably the best choice, with Beast Tamer taking second. Really, any of the resistances will be useful. Pass on Urban Tracker unless you really need it for a concept.`,
			`The Ranger Fighting Styles are identical to the eponymous feature in the Fighter base class, only the Ranger gets access to fewer options. Rangers may choose from Archery, Defense, Dueling, and Two-Weapon Fighting. Nothing in the Ranger class changes my analysis of this feature with the Fighter. It is best to take Archery if you want to primarily attack with ranged weapons, take TWF if you want to dual wield, and take Defense in all other cases.`,
			`Finally, the Ranger base class also gets access to spell casting at level 2. Their spell list is small, and, for the most part, lackluster, but there are some solid spells that are worth discussing. Hunter’s Mark is the first of what I call “4e striker spells.” These are spells that add a d6 to your damage on attacks against the marked target. The spells always hit their target, are a bonus action to cast, and can be switched to new targets when the first one dies without taking an extra spell slot. Usually they also take concentration. In fact, its helpful to think of them as weaponizing your concentration slot, adding 3.5 damage on average to your DPR when you hit. It’s a decent use of a concentration slot at early levels, and an extremely efficient use of a level one spell slot. Jump is an amazing mobility spell in BG3. Use it to kite if you are ranged attack focused and use it for priority target selection if you are melee.`,
			`Ensnaring Strike is a unique spell to the Ranger that has some promise, so its worth taking a second to discuss it. It is cast on an attack, and restrains a target that is hit and fails a strength saving throw. Besides being restrained, the target takes 1d6 damage per round for as long as they are restrained. Restrained is a useful condition, especially when you can chain it with other spells that target the dex saving throw (which is difficult at this point of early access). The damage is comparable to Hunter’s Mark, but does not refresh when the target dies. Its also one of those dreaded spells that has to hit twice to get full effect (hit on the attack and on the saving throw). It competes with Hunter’s Mark for concentration, so 95% of the time you should prefer Hunter’s Mark.`
		]
	};

	let beastmaster: bgClass = {
		title: 'Beastmaster',
		tier: 'B',
		image: {
			url: '/images/guides/bg3-class-ranger-beastmaster.webp',
			alt: 'BG3 Beast Master symbol'
		},
		body: [
			`<strong>*I haven't tested the Beastmaster since Patch 4, so some of this information may be outdated*</strong>`,
			`The Beastmaster augments the Ranger base class with the Summon Companion feature. As the name suggests, this feature allows you to summon an animal companion to fight along side you. You may summon this companion an infinite amount of times outside of combat, so you can have it for every fight, but if it falls in battle you cannot re-summon while the combat is ongoing.`,
			`Technically there are five options for animals to summon, but functionally there are only four. The five choices are bear, boar, raven, spider, wolf, but there really is no reason pick the the boar, it just gets outclassed by the other options. The bear gets a taunting feature and has the most hit-points at 19. In terms of raw stats, the spider used to be overloaded compared to the other options, but it has taken a big nerf. Still, it gets an enweb ability on a bonus action, and its attacks have a chance to impose the poisoned condition, which gives disadvantage on attacks, so not bad. Raven carves out its own niche by being able to blind opponents and fly away to safety as a hit-and-run move. Blind imposes disadvantage on their attacks, and advantage on all attacks against. The wolf does the most DPR of all the choices by just a smidge, and the wolf’s attacks have a chance to inflict the prone condition. If you prefer the prone condition to the spider’s poison, or the Raven's blind, you might prefer the wolf.`,
			`Now, we haven’t discussed summons in general yet, so now if a good time to do it. Summons are really useful, since they come with their own actions there is no real opportunity cost to them. The only opportunity cost is the cost of choosing a summon feature over some other feature. Also, summoned allies are typically at their best when you first get them, then diminish in power as your character progresses. In early access though, we are restricted to lower levels, which inflates the value of summons in general. Since the Beast Master gets the spider, one of the best summons in the game, it is an A Tier subclass. However, I don’t expect it to keep its ‘A’ ranking with full release.`,
			`<strong>Build:</strong>  The Beast Master animal companion feature doesn’t scale with anything, so go hog wild. An optimized Ranger would go Mountain Dwarf and take Great Weapon Master at level 4. However, for my play-through as a Beast Master, I played as my boy John Dell (in honor of the Adventures in Odyssey character from the “Castles and Cauldrons” episode, written to warn parents about the secret satanism of D&D in 1990). John Dell is a Stoutheart Halfling, with Agnes, his trusted spider companion. John Dell was a stone cold killer in every conceivable meaning of that phrase.`
		]
	};

	let hunter: bgClass = {
		title: 'Hunter',
		tier: 'A',
		image: {
			url: '/images/guides/bg3-class-ranger-hunter.webp',
			alt: 'BG3 Hunter symbol'
		},
		body: [
			`The Hunter adds the Hunter’s Prey feature to the Ranger base class. Hunter’s Prey has you choose one of three options to represent your Ranger’s special expertise in fighting a particular type of monster:`,
			[
				`Colossus Slayer: Once per turn, your weapon attack deals an extra 1d8 damage if the target is below its hit point maximum.`,
				`Giant Killer: If a Large or bigger creature attacks you, you can use your reaction to make a melee attack.`,
				`Horde Breaker: Target two creatures standing close to each other, attacking them in quick succession.`
			],
			`Giant Killer and Horde Breaker are impactful, but to situational to proc. Giant Killer looks really attractive when you read it, because there are a few tough fights against Large or bigger creatures in the early access. However, in those fights, I find it difficult to efficiently force aggro on my Ranger, which means you just don’t proc this feature enough for it to add substantial damage. Colossus Slayer is the best choice just because you can consistently proc it in most combats. The damage increase it gives you stacks with Hunter’s Mark, making Hunters very flexible damage dealers.`,
			`<strong>Build:</strong>  For this build I recommend shield dwarf. Buy a 16 in strength and constitution, a 14 in dexterity, putting the rest in wisdom (it should buy you a 13 with 1 point remaining). At level 2 take TWF for your fighting style At level 4 take the Dual Wielder feat. I recommend using the Shattered Flail in your off-hand.`
		]
	};

	let rogue: bgClass = {
		title: 'Rogue',
		tier: 'C',
		image: {
			url: '/images/guides/bg3-class-rogue.webp',
			alt: 'BG3 Rogue symbol'
		},
		list: [
			{ title: 'Hit Points', body: '1d8 progression' },
			{ title: 'Saving Throws', body: 'Dexterity and Intelligence' },
			{
				title: 'Proficiencies',
				body: 'Light Armor, Simple and Rogue Weapons.'
			},
			{ title: 'Team Role', body: 'Striker' }
		],
		body: [
			`A C-tier ranking might surprise a few readers. I had planned on ranking both the Rogue base class and the Thief subclass much higher then I have, but once I really did the analysis and compared the Rogue’s average DPR to other striker classes I discovered I was overrating them. It surprised me too. I will try to lay out all of my analysis in detail. If you feel that I missed something I welcome your input.`,
			`The Rogue base class gets two features in BG3: Sneak Attack and Cunning Action. Sneak Attack is kind of like a 4e striker spell, but it scales and is more situational to proc. Whenever you are attacking with advantage, or attacking a target that is within 1.5m of an ally, your standard action attack does an extra 1d6 damage, or 2d6 damage after level 3 (it gains 1d6 every odd level). This is a strong feature in BG3, since it is very easy to get advantage. However, as we will see below when we discuss the Thief subclass, it does not compare well to features that multiply attacks, like the Battle Master’s Riposte.`,
			`Cunning Action in BG3 allows you to take the Dash action as bonus action instead. Dash doubles your movement; a handy mobility boost. Its value is weakened a tad because it competes with Jump for your bonus action. With a high strength, Jump can be used for a few bonus meters. Dash will get you more movement though, and does not require in investment in strength. Mobility on strikers like Rogues can be used to close distance on priority targets if melee, or to kite if ranged.`,
			`These features are much more useful. The Fire resistance is probably the best choice, with Beast Tamer taking second. Really, any of the resistances will be useful. Pass on Urban Tracker unless you really need it for a concept.`,
			`Compared to Fighters and Rangers, Rogues have more mobility, but are less durable and do less damage. Its not a favorable trade for them, thus the C ranking.`
		]
	};

	let thief: bgClass = {
		title: 'Thief',
		tier: 'S',
		image: {
			url: '/images/guides/bg3-class-rogue-thief.webp',
			alt: 'BG3 Thief symbol'
		},
		body: [
			`Just this once we are going to break alphabetic order and discuss the Thief subclass before its counterpart, the Arcane Trickster. Larian has changed the Thief, giving it some attention grabbing features, and its become a fan favorite.`,
			`This subclass adds two features to the Rogue base class: Fast Hands and Second-Story Work. Second-Story Work gives resistance to fall damage. It has not been noticeable on any of my Thief runs. The real reason the Thief is valued so highly is Fast Hands.`,
			`Fast Hands gives the Thief an additional bonus action. That’s right, instead of having one bonus action per turn, you now have two. You can now Jump twice in turn, use the Dash bonus action and hide, Shove two goblins off a roof, drink two healing potions, you get the picture, there are so many possibilities. Probably the most tantalizing of them is combining Fast Hands with dual-wielding and getting two off-hand attacks in a turn, three attacks per turn total. How can that not be S-tier?`,
			`The biggest problem is that off-hand attacks are not very good unless you have the TWF Fighting Style offered by Fighters and Rangers. Without TWF, you do not get to add your ability modifier to your damage and this drastically undercuts the efficiency of dual-wielding.`,
			`However, there is a clever way to add some damage to those off-hand attacks, and that is to take the Magic Initiate: Warlock feat at level 4 instead of the ASI. With that feat you can cast Hex, which is currently bugged right now (Patch 6) to allow you to use it multiple times per long rest when you take it with the feat. Hex will add 1d6 (3.5 average) necrotic damage to each of your attacks, including you off-hand, greatly improving the thief's damage.`,
			`Here is a graph that compares the average damage per round of the three martial striker classes available so far - Thieves, Hunters, and Battle Masters - at (mostly) maximized level 4 builds. The X-axis represents average DPR each build has attacking the corresponding AC value on the Y-axis. It assumes that the Thief is procing Sneak Attack (but not with advantage). It also assumes each class has +1 enchanted weapons.`,
			{
				url: '/images/guides/bg3-thief-dmg-comparison.webp',
				alt: 'Thief DPR comparison'
			},
			`Its also worth noting that the thief will average 33 damage on a crit, the dual-wield hunter 29, and the Battle Master 22 (31 if they use a manuever). Since criting is common thanks to spells like Sleep, Hold Person, etc, having a higher damage per crit like the Thief does will mean a lot.`,
			`<strong>Build:</strong>  Probably the most fun I have had in BG3 is playing a Gith Thief! Gith get a bonus to str, and Jump as a racial spell. Strength gives you farther jump distance, the Jump spell that distance, and Fast Hands lets you jump twice in a round. You can move roughly 50m in a round (if my math is right) and still have your action left to attack with! With strength you also get more potent shoves. Moreover, Githyanki get an invisible Mage Hand as a cantrip, which you can use to consistantly prov Sneak Attack The build is pretty simple, just pick Gith, max strength, take a strength ASI or the Dual-Wielder Feat at level 4 and go bananas! Note, you cannot use Hex and Mage Hand together, since they both require concentration. If you want to do the Hex Thief build I graphed above, I recommend going half wood elf and prioritizing dexterity over strength.`
		]
	};

	let arcaneTrickster: bgClass = {
		title: 'Arcane Trickster',
		tier: 'B',
		image: {
			url: '/images/guides/bg3-class-rogue-arcanetrickster.webp',
			alt: 'BG3 Arcane Trickster symbol'
		},
		body: [
			`If the Thief is overrated, the Arcane Trickster is underrated. The gap between these two subclasses is pretty narrow in my opinion. The Arcane Trickster is a nifty subclass that has its own interesting niche compared to the Thief.`,
			`When you pick Arcane Trickster you gain two features: Mage Hand Legerdemain and spell casting.`,
			`Mage Hand Legerdemain is incomplete. The tool tip says it gives the summoned mage hand more actions, but it doesn’t yet. All it does right now is make the mage hand invisible when first summoned. Its barely noticeable.`,
			`The Arcane Trickster’s spell casting is similar to the Eldritch Knight’s that we discussed above. They learn 2 cantrips and up to 4 spells by level 4. 3 of those 4 spells must be in the enchantment or illusion schools. At level 4 they have 3 first level spell casts per long rest. Their spell casting modifier is intelligence. Like the Eldritch Knight, their spell selection is slim. There are five first level spells in those two schools. However, unlike the Eldritch Knight, the really important spells are available: Sleep and Tasha's.We’ve discussed Sleep a little above. At early levels, it is probably the best control spell in the game, because it doesn’t have a saving throw and the first melee attack against a sleeping target is a guaranteed crit. Tasha's is like Sleep, but with a saving throw. Rogues get very high value from crits because it multiplies their Sneak Attack damage. So, an Arcane Trickster is a striker that brings some of its own control options.`,
			`<strong>Build:</strong>  Pick Half Wood-Elf as your race, putting the two ability bonuses in dexterity and constitution. Your level 1 statistics should be 8,16,16,8,14,12 (its only really important that you have a 16 in dexterity and constitution, for the rest you can do whatever). For your spells, make sure you have Sleep. For your bonus spell, pick Longstrider. You should get 4.5m bonus movement between Longstrider and your race, which you can double on turns when you take Dash as a bonus action. At level 4, take the ASI to boost dexterity to 18. You should also have the Headband of Intellect now, so your intelligence will be at 17. Now you are a striker/controller with awesome mobility. This subclass is comparable in power to the Thief. Still not as good as Rangers and Fighters, but underrated all the same.Note, you can do this same build on Astarion.`
		]
	};

	let warlock: bgClass = {
		title: 'Warlock',
		tier: 'A',
		image: {
			url: '/images/guides/bg3-class-warlock.webp',
			alt: 'BG3 Warlock symbol'
		},
		list: [
			{ title: 'Hit Points', body: '1d8 progression' },
			{ title: 'Saving Throws', body: 'Wisdom and Charisma' },
			{
				title: 'Proficiencies',
				body: 'Light Armor and Simple Weapons.'
			},
			{ title: 'Team Role', body: 'Controller, Striker' }
		],
		body: [
			`Warlocks are a stand out class in terms of design, in my opinion. They are powerful and flexible, supporting a wide range of viable builds. They have a lot of features to talk about, so let’s get to it.`,
			`The Warlock base class has three features: spell casting, Eldritch Invocations, and their Pact Boon. We’ll discuss them one at a time.`,
			`Spell casting works differently for the Warlock then it does for most classes. Warlock’s get two spell slots which refresh on a short rest rather than a long one. Also, their spells are always up-cast at the highest available spell level (spell level 2 for a level 4 Warlock). Warlock’s use charisma as their spell ability. For the most part their spell list is the same as a Wizards, with a few notable unique spells that more or less define their class. In this article we will just look at the really important ones, although I will review every spell in depth in my forthcoming Spell Tier List article, so look forward to it!`,
			`The class defining spell for the Warlock is actually a cantrip: Eldritch Blast. Eldritch Blast is a ranged spell attack that does 1d10 force damage on a hit. When it’s damage scales (not available yet in early access) you also get an option to split the attacks to multiple targets, and you make separate attack roles with each beam. On its own, it is a solid damage cantrip, but the Warlock can also augment it with several invocations. In the early access there are two invocations which augment Eldritch Blast which we will discuss below.`,
			`Hex is the Warlock’s 4e striker spell. It’s identical to Hunter’s Mark, except it adds the extra feature of imposing disadvantage on one ability check of your choosing on the target for the duration of the spell (note, it’s an ability check, not a saving throw. I made that mistake for an embarrassing amount of time). I usually use the extra feature to impose disadvantage on strength checks for easier shove targets. However, the bread and butter of Hex is the extra 1d6 necrotic damage on successful attacks you make against the target. It adds up to a lot of damage for just one cast of a spell.`,
			`Armor of Agathys and Hellish Rebuke both do retaliation damage, which I value very highly because it has low opportunity costs. Armor of Agathys is the better of the two, but it only retaliates against melee attacks. Hellish Rebuke retaliates at range, so with ranged builds cast it, and for melee focused builds use Armor of Agathys.`,
			`For control spells the big one is, obviously, Hold Person, but there are other options as well. Some of the best alternatives are available specifically for certain sub-classes, so we will discuss them there.`,
			`Eldritch Invocations are small boosts meant to represent a Warlock’s supernatural powers. You choose two from among nine options:`,
			[
				`Agonizing Blast: When you cast Eldritch Blast you now add your Charisma modifier to the damage it deals.`,
				`Armor of Shadows: You can cast Mage Armor on yourself at will, without expending a spell slot.`,
				`Beast Speech: You can cast Speak with Animals at will, without expending a spell slot.`,
				`Beguiling Influence: You gain proficiency in deception and persuasion checks.`,
				`Devil’s Sight: You can see normally in darkness, both magical and nonmagical, to a distance of 18 m.`,
				`Fiendish Vigor: You can cast False Life on yourself at will as a 1st-level Spell, without expending a spell slot.`,
				`Mask of Many Faces: You can cast Disguise Self at will, without expending a spell slot.`,
				`Repelling Blast: When you hit a creature with Eldritch Blast, you can push the creature up to 4.5 m.`,
				`Thief of Five Fates: Once per long rest, you can cast Bane using a Warlock spell slot.`
			],
			`Some of these have no direct combat utility, namely, Beguiling Influence, Beast Speech, and Mask of Many Faces, so we will set them to one side. Agonizing Blast is a standout option, especially for ranged builds. Pass on Armor of Shadows, it is +2 AC early, but you can eventually find magical armor that is equivalent, and it is useless if you have medium armor proficiency as a racial bonus. Devil’s Sight is an awesome invocation in combination with the Darkness spell, but it seems that Larian hasn’t included a distinction between magical and non-magical darkness in the game yet, so if you have darkvision from your race Devil’s Sight is redundant (I haven’t tested this since Patch 3 yet, so it may be fixed). Fiendish Vigor is +7 temporary HP at the cost of an action, not bad, but not amazing, since temporary HP does not stack. Repelling Blast is also a mediocre boost in most situations, but procs automatically when you take an action that you will be taking a lot anyways, which makes it really good. Push effects can be really efficient in BG3 due to Larian’s vertical encounter design. Finally, Thief of Five fates is a great spell, but a once per long rest cast is just not enough, pass. In summary, Agonizing and Repelling Blast will be your best choices on most builds. Fiendish Vigor and Devil’s Sight can be good on certain builds. None of the rest are comparable in terms of combat efficiency.`,
			`The third and final feature Warlocks get is their Pact Boon. In tabletop 5e there are four official options for Boons to choose from, but in BG3 so far there is only one: the Pact of the Chain. This Boon allows you to summon a special familiar at will outside of combat (similar to the Beast Master’s summon). There are several options, but this class analysis is already taking up a lot of real estate, so instead of discussing them all I will just recommend the one I think is best, which is the Imp. Imps have a resistance to the most common damage types (including non-magical slashing, piercing, and bludgeoning). They also have a fly speed, and the chance to do extra poison damage on attacks. They are arguably the best summon option in the game so far, it’s between them and the spider for sure. Summons are really useful, since they come with their own actions there is no real opportunity cost to them.`,
			`In summary, Warlocks get a ton of features, and all of them are great, so why haven’t I given them an S-tier ranking? It has to do with my own value judgements and the way I have constructed the tier system. The mark of an S-tier class the way I have constructed it is when you really feel its absence if you don’t have it in your party. As good as the Warlock is, it isn’t that, probably because the Warlock is a selfish class. It’s really good on its own and doesn’t increase much in power when you plug it into a party that is built for it. Similarly, while the Warlock is good at two roles, it is not great at either. If you need a striker there are better strikers available. If you need a controller there are also better controllers. By my judgement, 5e favors classes that specialize in a roll and synergize with other roles in a multiplicative way, rather than merely additive. All of that said, Warlock is still an awesome base class, easily deserving of an A-tier ranking, and you party won’t suffer for having one if they are built right.`,
			`Whew! That was a lot! Let’s look at the subclasses now.`
		]
	};

	let fiendPatron: bgClass = {
		title: 'The Fiend Patron',
		tier: 'B',
		image: {
			url: '/images/guides/bg3-class-warlock-fiend.webp',
			alt: 'BG3 The Fiend Patron symbol'
		},
		body: [
			`The Fiend subclass represents a pact made with a devil or demon from the lower planes. They add two features to the Warlock base class: Dark One’s Blessing, and subclass spells.`,
			`Dark One’s Blessing grants you temporary hit-points equal to your charisma modifier + Warlock level upon killing an enemy. This feature patches up a weakness of the base class, which is durability. I don’t think its crazy to expect your Warlock to kill 1-2 targets per encounter on average, which gives them 8-16 extra health per encounter at level 4 (assuming you take a charisma ASI). That is a lot of bonus health. However, this isn’t a durability boost that at all helps you maintain concentration, which is what we would prefer on a caster class like Warlock. Note that the Fiendish Vigor invocation gives you 7 temp hp per cast, which is does not stack with Dark One’s Blessing, so taking it isn’t recommended with this sub-class.`,
			`Like the Cleric, Warlock subclasses have extended spell lists, granting two extra spells learned for each spell level up to level 5. Fiend Warlock’s get Burning Hands and Command for level 1, and Blindness/Deafness plus Scorching Ray for level 2. Both sets give you decent striking and control options but are hardly the best in their role.`,
			`Both these features are useful but are not enough to bump the Warlock base class up to an S-tier. Picking the Fiend subclass basically means having a slightly more durable Warlock.`,
			`<strong>Build:</strong> There are several interesting ways to build a Fiend Warlock, but a simple ranged build centered around Eldritch Blast is best, I think. You can use this build on Wyll. Make sure you max charisma and dexterity (or have at least a 14 dexterity on a race that gets medium armor proficiency). For cantrips, take Eldritch Blast and whatever else you prefer (I recommend Chill Touch or Blade Ward. If you aren’t sure how Blade Ward can be useful, keep an eye out for my forthcoming Spell Tier List, I will discuss it there). For your spells, take Hex and Hellish Rebuke. At level 2, take Repelling Blast and Agonizing Blast invocations and Armor of Agathys for your spell. For your level 2 spells, take Hold Person and Misty step, with the charisma ASI at level 4. If you find that you aren’t getting much use out of Hellish Rebuke, swap it out for something else, maybe Command, Mirror Image, or Ray of Enfeeblement.`
		]
	};

	let greatOldOnePatron: bgClass = {
		title: 'The Great Old One Patron',
		tier: 'RP',
		image: {
			url: '/images/guides/bg3-class-warlock-greatOldOne.webp',
			alt: 'BG3 The Great Old One Patron symbol'
		},
		body: [
			`Like the Eldritch Knight, this class just isn’t complete yet. It seems like Larian want’s to rework it, but haven’t finished the development. I expect that the class will be very good on full release, assuming they keep some of its key features from the tabletop version, and that Mind Flayers will remain the major enemy of the game.`,
			`This subclass adds two level 1 spells to the Warlock’s spells known. Those spells are Dissonant Whispers and Tasha’s Hideous Laughter. Both are very good spells. Tasha's guarantee's crits and Dissonant Whispers can be used to proc attacks of opportunity. Neither spell scales very well when up cast, which is kind of the Warlock's schtick, but they remain strong for the entire EA.`,
			`<strong>Build:</strong> Just follow the build I outlined for the Fiend subclass.`
		]
	};

	let wizard: bgClass = {
		title: 'Wizard',
		tier: 'S',
		image: {
			url: '/images/guides/bg3-class-wizard.webp',
			alt: 'BG3 Wizard symbol'
		},
		list: [
			{ title: 'Hit Points', body: '1d6 progression' },
			{ title: 'Saving Throws', body: 'Intelligence and Wisdom' },
			{
				title: 'Proficiencies',
				body: 'Wizard Weapons.'
			},
			{ title: 'Team Role', body: 'Controller, Striker, Support' }
		],
		body: [
			`This class is a little weird right now, benefiting from a bug that likely will not survive to full release. The bug is fun though, so enjoy it while we have it! Wizards are the best controllers available so far, and probably will remain the best controllers until full release, although I do not expect them to remain S-tier on full release.`,
			`The Wizard base class has three features: spell casting, Arcane Recovery, and what I call the Learn Spells feature. We will go through them one at a time.`,
			`Wizard spell casting is like the Druid or Cleric spell casting. Its has the same progression, refreshes on a long rest, only it uses intelligence rather then wisdom as its ability modifier. The Wizard spell list is extensive and flexible, so there isn’t enough space to talk about every spell in this article (I will review every spell in my forthcoming Spell Tier List article). There is one spell that is unique to the arcane casters (like Wizards) that bears mentioning, and that is Sleep. If you’ve read this tier list in order, you have already heard me mention Sleep several times. Sleep is the ultimate control spell at early levels. It is an AoE control that effects a number of targets up to 24 hit points (32 if cast as a level 2 spell) and there is no saving throw to resist. It targets current hit-points, not max hit-points, so you can get multiple targets if you soften them up first. What is really strong about it is the sleep condition. When you make a melee attack against a sleeping target it automatically hits and automatically crits (this is a buff from how it works in the tabletop rules). The target wakes up after taking damage. Because the target will necessarily have under 32 hit points, it is very likely that a melee attack from a striker will just kill them outright. So, with the right team, Sleep is a death sentence when it lands, and there is no chance for a saving throw. I love that Sleep is so powerful in BG3, since Sleep is also really powerful in the original BG games, it makes it feel like the same world. Note, Tasha's Hideous Laughter is exactly the same as sleep, accept it takes a saving throw rather than the hit-point system. That makes it better in some situations and worse in others. You should be casting both often.`,
			`Arcane Recovery allows you to recover some spell slots between encounters. You can use it once per long rest, and the spell slots recovered must be equal to or less than half your wizard level (rounded up). So, a 4th level Wizard can recover one 2nd level spell slot, or two 1st level spell slots. This isn’t a flashy feature, but it is awesome, giving you more spells to cast. It is this and the Wizard’s spell list that make them the strongest controllers in the game so far.`,
			`The last feature Wizards get is a hidden one; it is the Learn Spell feature. It is not listed as a class feature when you choose the class or when you level up, but it is there all the same. The name pretty much explains it, with the Learn Spell feature you can learn the way words are spelled. Not sure how to spell ‘Expeditious?’ Play a Wizard, its spelled right there on ‘Expeditious Retreat.’ This is the feature that really makes the Wizard base class S-tier, due to its obvious out-of-game utility.`,
			`Okay sorry, I couldn’t resist. Learn Spell is actually about learning new spells, not spellings. Unlike other classes, Wizard’s can learn new spells from scrolls you acquire in your adventures. You simply pay 50g per spell level, and you can now add that spell to your available spells to cast. On its own this feature is just okay, but its also bugged right now in a way that makes it incredible. The bug is that you can learn any spell that you find as a scroll regardless of whether it belongs to the Wizard spell list or not . Yes, that means you can learn Bless, or Armor of Agathys, or any other spell you find as a scroll. This greatly expands the Wizards already expansive spell list. It also works on cantrips, so whatever cantrip you find in a scroll you just get for the cost of 50g. I don’t expect this bug to survive the early access.`,
			`Altogether, the Wizard is great because of the sheer volume and variety of spells it can cast. Now lets look at its subclasses.`
		]
	};

	let abjuration: bgClass = {
		title: 'School of Abjuration',
		tier: 'C',
		image: {
			url: '/images/guides/bg3-class-wizard-abjuration.webp',
			alt: 'BG3 School of Abjuration symbol'
		},
		body: [
			`Wizard subclasses represent an education in a particular arcane tradition. The School of Abjuration is a tradition that emphasizes magic that wards and protects. So far, it adds one feature to the wizard base class, and that is the Arcane Ward feature. Whenever you cast an abjuration spell (not a cantrip) you will gain temporary hit-points. The first time you cast such a spell after a long rest it gives you temp HP equal to twice your wizard level plus you intelligence modifier (so 12 HP at level 4 and 18 intelligence). This amount represents your maximum value ward, and however many abjuration spells you cast its temp HP value can never exceed this number. Every abjuration spell you cast after the first will “heal” the ward an amount equal to twice the level of the spell. Its complicated, but I think it is reasonable to expect this feature to give you a comparable amount of temp HP per long rest to what a Fiend Warlock gets from Dark One’s Own Blessing (perhaps slightly less). It is giving your wizard a respectable boost to durability, which is something wizards can really use.`,
			`One complication of this feature is the pretty sorry selection of abjuration spells available so far. In the wizard spell list it is just two spells: Mage Armor and Protection from Evil/Good. Realistically, you will not be casting these very many times in an adventuring day. Armor of Agathys is an abjuration spell you can learn from a scroll that you can expect to cast often, but its bugged in a way that doesn’t work with Arcane Ward. There is one trick I know of to consistently proc Arcane Ward, but it requires a very particular build, so I will outline it in the build section.`,
			`In summary, the Abjuration School gives you a middling amount of durability. On top of that, it is difficult to get maximum value out of the feature do to early access’s limited abjuration spells. It is an underwhelming subclass.`,
			`<strong>Build:</strong>  This is one of my favorite builds, I call it the Sword Wizard (damn… I suck at names). The crux of the build is using the greatsword proficiency that Githyanki get to allow the Abjuration Wizard to use the Sword of Justice. Besides being a +1 greatsword, the Sword of Justice allows the wielder to cast Shield of Faith once per combat (at-will outside of combat). Shield of Faith is a useful Abjuration spell that procs Arcane Ward, so you can keep your ward topped up without expanding valuable spell slots. You also get medium armor proficiency from Githyanki, so your Wizard will function like a warrior with spells.`,
			`Pick Githyanki as your race and Wizard as your class. Buy a 16 strength, and a 14 dexterity and constitution, then use the rest of your points however you want (I recommend dumping intelligence and just use the Headband of Intellect when you get it). For cantrips take Light to make up for the lack of darkvision (note, the light spell hasn't been working in some of my runs on patch 4), and the whatever else you like (I recommend Blade Ward and Chill Touch, if these choices confuse you be sure to read my forthcoming Spell Tier List article). For 1st level spells, be sure to take Sleep. When you reach level 3, take Misty Step and Hold Person for your 2nd level spells. At level 4 take the Great Weapon Master Feat. Now you are a decent striker (you have comparable DPR to an optimized Thief), with all of the benefits of being a Wizard. You can cast Sleep on your enemies then crit them yourself for 30+ damage. You are also comparable in durability to a standard Fighter. This is the best Wizard build in the game so far. Sadly it does not work on Gale, since he is not a Gith.`
		]
	};

	let evocation: bgClass = {
		title: 'School of Evocation',
		tier: 'C',
		image: {
			url: '/images/guides/bg3-class-wizard-evocation.webp',
			alt: 'BG3 School of Evocation symbol'
		},
		body: [
			`The School of Evocation is a tradition that specializes in spells that unleash elemental energy. This sub-class emphasizes the striker aspect of the Wizard by adding the Sculpt Spells feature to the base class. Sculpt Spells creates pockets of safety within your Evocation Spells. Allied creatures automatically succeed their saving throws and take no damage from these spells. It’s the nature of this feature that you will get no benefit from it when casting single targets evocations spells. After all, why would you cast a single target evocation spell on an ally? So this spell will only practically effect AoE evocation spells that have saving throws. There are three of these spells in the game: Burning Hands, Thunderwave, and Shatter (Darkness is an AoE evocation spell, but does not have a saving throw). I tested to see if it also worked on ground effects from evocation spells, like when you cast Witch Bolt on a target standing in water, but it doesn’t (Larian, if you are reading this, you should change it to effect ground effects from evocations spells too. It won’t break the balance of the game, but it will make Sculpt Spells more interesting). All three of the spells it augments are decent spells, but we are still entering an area of extreme situationality for this feature. It is only effective when you cast one of three spells AND when you couldn’t otherwise have positioned the spell in a way where it would hit all enemies possible without hitting any allies. There shouldn’t be very many of those, so this subclass gets a C ranking from me.`,
			`All of that said, you could build your party to better utilize this feature. For example, if you had both a Moon Druid and an Evocation Wizard, you could have the Moon Druid taunt enemies to group them up, then the Evocation Wizard could nuke them with Shatter without hitting the Druid. Its is still a lot of set up for mediocre payoff.`,
			`<strong>Build:</strong> There aren’t any tricks for this subclass, it is pretty much a vanilla Wizard , so I am going to use this section to explain how I recommend building Gale. Gale has good stats for an evocation wizard. The biggest choice for building him comes at level 4. How should you spend his ASI? The deciding factor should be whether or not you have another member of your team who can use the Headband of Intellect. If you do, spend the ASI to boost his intelligence to 18, then swap the Headband to the other party member. Otherwise, split the ASI between constitution and wisdom to bump them to a 16 and a 12 respectively. For spell selection, make sure you have Burning Hands, Thunderwave, and Shatter. Sleep and Hold Person are still mandatory. Misty Step is another good choice, since you can chain it with Thunderwave effectively in vertical terrain encounters.`
		]
	};

	let sorcerer: bgClass = {
		title: 'Sorcerer',
		tier: 'A',
		image: {
			url: '/images/guides/bg3-class-sorcerer.webp',
			alt: 'BG3 Sorcerer symbol'
		},
		list: [
			{ title: 'Hit Points', body: '1d6 progression' },
			{ title: 'Saving Throws', body: 'Constitution and Charisma' },
			{
				title: 'Proficiencies',
				body: 'Dagger, Quarterstaff, Light Crossbow'
			},
			{ title: 'Team Role', body: 'Controller, Striker ' }
		],
		body: [
			`The most recently released class as of patch 6. The sorcerer base class is distinguished by two features: its unique spell casting and metamagic. We will discuss each below. As spell casters the sorcerer class is very similar to the wizard, but with a narrower spell pool. Unlike wizards, sorcerer’s cannot learn spells from scrolls, and learn significantly less spells by level as well. Moreover, currently there are spells that are available to learn by level by the wizard that the sorcerer cannot learn, which is to say, they are also selecting from a smaller pool of spells. Nevertheless, the most important arcane control spells are available to sorcerers: Sleep, Hold Person, Misty Step, Cloud of Daggers, etc. What this means is that the sorcerer can cast all of the same S-tier arcane spells that spells that the wizard can cast, but they can’t cast anything else; you lose the ability to customize your spell selection to adapt to up coming encounters. To compensate for the loss in adaptability of spell choices, the sorcerer gets the metamagic feature, which allows them to adapt the spells they can cast on the fly. Metamagic functions a little like the Battle Master’s manuevers but for spells instead of attacks. You choose from a list of extra effects which you can add to your normal spells and you gain a resource – sorcery points -to manage these effects. Your sorcerer will get two sorcery points at level 2, then gain one per level after that. Sorcery points replenish on a long rest or when you expend spell slots to buy more, which we will discuss below. For now, lets look at the abilities you can spend these points on. Metamagic abilities are different in BG3 compared to table top 5e. In Bg3, you choose two metamagic abilities from a shortened list at level 2, then at level 3 you can choose one more from an expanded list with some of the more expensive and powerful abilities added.`,
			`Level 2 Metamagic Abilities (choose two):`,
			[
				`Careful Spell (costs 1 sorcery point): this ability modifies aoe spells that require saving throws. When you use this, any ally hit by one of these spells will automatically succeed on their saving throw. To be honest, I have not tested this ability very much, mostly because I just cannot imagine it being very impactful given the spells we have available in early access. There are three spells available to sorcerers, possibly five, which I can think of that this ability would effect: Burning Hands, Thunderwave, Shatter, Grease, and Web. For the first three, even when you allies succeed on the saving throw they will still take half damage… not an efficient use of a sorcery point. Grease and Web would be useful, but I am not sure if Careful Spell nullifies the save every round, or just the initial save from the cast. If it is the latter, then there is no use for this ability, just pass on it. If it’s the former, then I could see it being useful. <strong>*Note*</strong> Using careful spell with Thunderwave will stop the spell from pushing your allies, which can be useful. My thanks to reddit user Hi_I'm_A for drawing this to my attention.`,
				`Distant Spell (1 sorc point): This is ability is really interesting. Its cool to cast spells from such a long range, and you could imagine a build that exploits this to always stay out of range of its enemies. The problem is that it is not a persistant ability that costs a limited resource that refreshes on a long rest, and extending the range of a spell just isn’t the fight changing spike that you need from a limited resource ability, at least not with the way Larian has designed their combat encounters.`,
				`Extend Spell (1 sorc point): Here we get to a bread and butter metamagic ability. Extend Spell doubles the duration of conditions, summons, and ground effects. For the cost of a single sorc point this is amazing. The best spells to use this with are conditions and buffs that have duration but are not concentration. Of these, the two obvious candidates are Sleep and Blade Ward.`,
				`Twinned Spell (1 sorc point per spell level): This ability modifies single target spells allowing them to effect two targets instead of one. This is a phenomenal ability, especially for single target concentration debuffs like Hold Person or Crown of Madness, effectively doubling the potency of your concentration slot. Don’t pass on this ability.`
			],
			`Level 2 Metamagic Abilities (choose one):`,
			[
				`Heightened Spell (3 sorc points): This ability modifies spells that require a saving throw, imposing disadvantage on the first saving throw a target makes against that spell. There isn’t much to say here except that this makes your save spells more accurate. While simple, that is extremely important given the potency of many saving throw spells. Landing a Hold Person on the right target, even just for one turn, can single handedly win a fight, so packing a Heightened Spell for those occasions is game changing.`,
				`Quickened Spell (3 sorc points): With this ability you can spend three sorcery points to cast a spell with a bonus action that would otherwise cost an action. In table top 5e only one leveled spell can be cast per turn, but in BG3 you can use this to chain several spells in a turn. This is a powerful effect that you is practically always useful. It also has an interesting interaction with the Circlet of Fire item. A character who is wearing the Circlet of Fire gains a bonus action when they hit with a non-cantrip spell that deals fire damage, although this only works once per turn. If you have the circlet, Quickened Spell, and six sorcery points you can cast 3 spells in a single turn as long as one of them is a fire spell that hits.`,
				`Subtle Spell (1 sorc point): Subtle Spell allows you to cast any spell while silenced. Obviously when you are silenced you are close to useless since spells is a sorcerer’s whole thing, so being able to counteract silence for such a low cost is awesome. However, silence is not very common in my runs. Subtle Spell would be awesome to have if you got more metamagic abilities to choose, but since you can only pick one from this list, and it is competing with some of the best options, it is seldom worth grabbing.`
			],
			`I think that you should always pick Extend and Twinned Spell at level two if you are wanting to optimize. They are just better than the other options, more potent, more flexible, and easier to use. The really interesting metamagic choice comes at level 3, between Quickened Spell and Hightened Spell. Choose whichever one seems like the most fun. I suspect Hightened Spell is better, but only marginally.`,
			`Metamagic is not the only thing you can use your sorcery points for. You can also use them to exchange points for spell slots, and vice versa. When you exchange points to get an extra spell slot it costs the spell slot level plus one (so 2 for a level one spell and 3 for a level 2). Converting your spell slots into points gives you points equal to the spell slots level. Both kinds of exchanges can be done in combat as a bonus action. This feature also has a fun interaction with an item: Spellthief, a magical longbow that you can buy from Auntie Ethel in the grove. Once per short rest when you crit with Spellthief you recover a level 1 spell slot. You can exchange that spell slot for sorcery points, allowing you to store up 3 extra sorc points per long rest, allowing you to do fun things like the three casts in a one turn with Quickened Spell and the Circlet of Fire. Now, you may be thinking, will I really be critting reliably enough for Spellthief to be useful? If you just wait to role a 20 on an attack, no, you won’t. However, you can guarantee crits by attacking sleeping or paralyzed targets at melee range. It must be melee range to work. Chances are, you will have plenty of opportunities to get attacks on sleeping or paralyzed targets if you spam Sleep and Hold Person like I do. Have fun with all your extra spells/sorc points! As a final, short note before we move on to discussing the sorcerer’s subclasses, its needs to be noted that, unlike other casters in the game so far, sorcerer’s get proficiency in constitution saves, which is the saving throw used to maintain concentration, and thus the most important save for casters. This is a fantastic feature that is easy to miss.`
		]
	};

	let draconic: bgClass = {
		title: 'Draconic Bloodline',
		tier: 'A',
		image: {
			url: '/images/guides/bg3-class-sorcerer-draconic.webp',
			alt: 'BG3 Draconic Bloodline symbol'
		},
		body: [
			`Sorcerer subclasses are the origin and source of your characters unique magical gift. The Draconic Bloodline are sorcerer’s who are descended from dragons and whose arcane power come from their magical ancestry. Because the subclass represents this classes’s origina, they choose it at level 1. Mechanically what the Draconic origin adds to the sorcerer base class is two features: Draconic Ancestry and Draconic Resilience. Draconic Resilience provides a boost to hit points and armor class. You receive an extra hit point per sorcerer level and when you are not wearing armor your base armor class is 13 + your dex modifier, as opposed to the typical 10 + dex modifier. The bonus hit points are always useful. The AC boost is only effective for characters who do not plan on wearing armor, so choosing a race with an armor proficiency will have some negative synergy with this feature. Most arcane casters without armor proficiencies will cast Mage Armor, which also give 13 + dex modifier, so essentially the Draconic sorcerer is saving a level 1 spell cast per long rest, which is great! Draconic Ancestry represents the specific kind of dragon you are descended from. In D&D there are two broad types of dragons: chromatic and metallic. Chromatic dragons are typically evil in alignment whereas metallic are typically good. When you choose the Draconic Bloodline subclass you get to choose one of ten bloodline option which we will review below. Each choice is distinguished mechanically by an elemental damage type, which, at level 6 you will get boosted damage and a situational resistance to that type. Since early access only goes to level 4, the damage type does not really matter yet. However, each bloodline also gets a bonus spell. The bloodline are:`,
			[
				`Red Dragon (Fire): Burning Hands`,
				`Black Dragon (Acid): Grease`,
				`Blue Dragon (Lightning): Witch Bolt`,
				`White Dragon (Cold): Armor of Agathys`,
				`Green Dragon (Poison): Ray of Sickness`,
				`Gold Dragon (Fire): Disguise Self`,
				`Silver Dragon (Cold): Feather Fall`,
				`Bronze Dragon (Lightning): Fog Cloud`,
				`Copper Dragon (Acid): Tasha’s Hideous Laughter`,
				`Brass Dragon (Fire): Sleep`
			],
			`There isn’t the space to talk about each of these individually, so I will point out the two that I consider the best, they are White Dragon and Copper Dragon. Both of these provide S-tier, versatile spells that the sorcerer wouldn’t otherwise get access to. Armor of Agathys pairs well with an extended spell Blade Ward, giving your sorcerer much needed durability. In a solo run, I would recommend White Dragon for that reason. For everything else, Copper Dragon is better. Tasha’s Hideous Laughter is like Sleep but with a saving throw instead of targeting hit points. Being able to Twin Spell or Heighten Spell Tasha’s is extremely potent with a team that can utilize the free crits.`,
			`<strong>Build:</strong>  I recommend building a drow dragon sorcerer. Buy a 16 dexterity, 16 charisma, and 14 constitution, then use whatever is left however seems cool to you. Pick the Copper Dragon ancestry. For spells, take Chromatic Orb and Sleep (take Blade Ward, Chill Touch, then whatever else you life for cantrips). At level 2, take Twinned Spell and Extend Spell as your metamagic abilities, and something fun for your new level 1 spell, lets say Jump (we are going to replace it next level, so it doesn’t matter very much). At level 3, take the Heightened Spell metamagic ability, Cloud of Daggers, then replace Jump (or whatever else you chose) with Hold Person. Finally, at level 4, take the ASI to bump your charisma to 18, then take Misty Step as your spell. Your final spell list should be Chromatic Orb, Sleep, Tasha’s Hideous Laughter, Cloud of Daggers, Hold Person, and Misty Step. Your primary metamagic strategies are using Heightened Spell with Tasha’s and Hold Person, using Twinned Spell in combination with Chromatic Orb for burst damage, and using Extend Spell with Blade Ward when you cannot avoid taking damage, or Sleep when you can prevent the targets from being woken up. I consider this build to be the best controller available in early access so far, and it also does a lot of single target and AoE damage while being reasonably durable and mobile. It is an S-tier build in my books.`
		]
	};

	let wildMagic: bgClass = {
		title: 'Wild Magic',
		tier: 'A',
		image: {
			url: '/images/guides/bg3-class-sorcerer-wildmagic.webp',
			alt: 'BG3 Wild Magic symbol'
		},
		body: [
			`For those familiar with this class, you may be surprised that I am giving it an equal ranking to the Draconic Bloodline subclass. I have completed a playthrough with each subclass and I believe in the current state of the game the wild mages can be at least as powerful as the more predictable draconic sorcerers. If you are curious to find out why, keep reading! Wild mages have a natural control of the arcane that is potent and unpredictable. Mechanically this manifests with two features: Tides of Chaos and Wild Magic Surge. Tides of Chaos gives you advantage on one attack role, saving throw, or skill check per short or long rest. In previous patches this would have been nearly useless, but now advantage on attacks on backstab and high ground has been removed, making this a nifty little bonus when you need it. However, I do not recommend saving it for that right moment. Use it on the first useful opportunity you can, because once it is used it makes wild magic surges more frequent. Lets turn to that feature now to understand how useful this one can be.`,
			`Wild Magic surge is a random effect that might happen in addition to a magic spell you cast, whenever you cast a spell of 1st level or higher (i.e. not cantrips). You have no control over the which effect happens, or whether one happens at all, except that you can make the chance of a surge happening more frequent when you use your Tides of Chaos feature, as we discussed above. I do not have comprehensive list of possible surges, but some that have happened in my game are:`,
			[
				`Wild Magic: Enchant Weapons – The weapons of you and your allies within a large radius of you become enchanted. On the next hit with that weapon, it deals an additional 1d4 force damage and critical hits. This effect lasts until your next hit with the weapon.`,
				`Teleport -Until the end of your next turn, you can teleport up to 9m as a bonus action.`,
				`Summon Mephit – You summon a hostile mephit adjacent to you.`,
				`Position Swap – For the next few rounds (I forgot how many) whenever you target someone with a spell or cantrip you swap places with that target.`,
				`Heal Effect – Whenever you cast a spell of level 1 or higher, all creatures within 3m are healed 1d4 hit points.`,
				`Fog Cloud – a blinding fog cloud is summoned directly on top of you.`,
				`Blur – Every creature within 9m of you (including you) gains the blurred buff as if the spell Blur was cast on them.`
			],
			`Some surges that have not happened to me but are reported by other players on Reddit are:`,
			[
				`Fire – Every creature within a radius of the caster is lit on fire for 5 turns.`,
				`Water – A pool of water is summoned directly on top of the caster (I am assuming it is like the spell Create Water was cast).`
			],
			`No doubt many more surges will be added in future patches, but for now you will hopefully notice that all of these surges are either good for you or could be good for you. Consider summoning a mephit as an example. You might think “how could summoning a hostile creature be good? Isn’t it just one more bad guy to fight?” The thing is, in my runs, the mephit is also hostile to whatever it is you are fighting, so an enemy may waste a turn killing it for you! In one of my fights, a unnamed goblin attacked it, but in a different situation it could have been an owlbear, and minotaur, or a githyanki fighter. Imagine if, in addition to whatever spell you cast you also waste the turn of a minotaur… that is an extremely efficient use of a spell. The same principle applies to a surge like Fog Cloud, sure you are blinded, but so is everyone trying to attack you! With some clever thinking you can turn most of these into an advantage.`,
			`Then there are the surges that are just extremely good with almost no negatives. Two of the most potent are the enchanted weapons and position swap. Enchanted weapon makes your next hit with your weapon a crit and it lasts until your next hit, which means if you roll this surge in a routine fight against a weak enemy, you can save that weapon for the next boss battle. That is huge! Position swap can also completely change the outcome of a fight. You could Misty Step somewhere high up, swap places with an enemy, then pull them to their death. Alternatively, you could reposition their squishy caster right beside your striker. Have you lost the high ground? Not any more! Again, with some creative thinking, these surges become huge buffs.`,
			`Because the surges are almost always beneficial to me, I try to spam Tides of Chaos in order to get as many surges in a playthrough as possible. This is also why I give the Wild Mage subclass an A-tier ranking. In the future, if they add some nasty surges, I expect the subclass to drop to a B. It will always be S-tier for fun though!`,
			`<strong>Build:</strong>  If you are wanting to optimize you should probably build your wild sorcerer as some variation of tiefling so that you have resistance to the painful fire surge. However, I built mine as a Lightfoot halfling for the “luck bending” RP angle. Optimal attribute and spell selection will be similar to Draconic sorcerer build I outlined above, but with a few differences. Instead of Extended Spell it could be fun to play around with Distant Spell in combination with the possible position swap surge. I also recommend taking Misty Step as soon as you can (level 3), since being able to reposition is crucial for using many of the surges to your advantage.`
		]
	};

	const guide = {
		body: [
			cleric,
			lightDomain,
			lifeDomain,
			trickeryDomain,
			druid,
			circleOfTheMoon,
			circleOfTheLand,
			fighter,
			battleMaster,
			eldritchKnight,
			ranger,
			beastmaster,
			hunter,
			rogue,
			thief,
			arcaneTrickster,
			warlock,
			fiendPatron,
			greatOldOnePatron,
			wizard,
			abjuration,
			evocation,
			sorcerer,
			draconic,
			wildMagic
		],
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
		<article class="mt-6 prose-lg dark:prose-light mx-auto">
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
			<h2>Introduction and Fundamental Assumptions</h2>
			<p class="mt-8 text-xl leading-8">
				This article is a resource for optimizing your Tavs! It is entry three of four in my
				Baldur’s Gate 3 rankings and guide series. In the first entry I analyzed and ranked the six
				abilities: strength, dexterity, constitution, wisdom, intelligence, and charisma. That
				analysis formed the base for the second article , my race tier list, where I discussed all
				of the sub-races in the game and ranked them on a tier list. In this article I will give the
				same treatment to the 7 classes and the 15 sub-classes available in the early access so far.
				I hope you find it helpful!
			</p>
			<p class="mt-8 text-xl leading-8">
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
			<p class="mt-8 text-xl leading-8">
				Now some of you may be asking “why even have a tier ranking at all then?” There are a few
				reasons. One is that thinking about the relative strength of certain options compared to
				others is a great way to understand those options, which is to say that having power
				rankings helps us get the most out of our favorite sub-classes. Another reason is that I am
				hopeful that articles like this and the discussions that follow them will help Larian
				balance the game even better. Probably the most important reason is that power rankings and
				tier lists are just a fun part of gaming culture that I enjoy! If you do not enjoy them, I
				think you will still find a lot of helpful advice in this article anyways.
			</p>
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

			{#each guide.body as section}
				<Class data={section} />
			{/each}
			<a href="/"><p class="text-bgRed dark:text-gray-100">Return home</p></a>
		</article>
	</div>
</div>
