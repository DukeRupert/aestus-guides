<script lang="ts">
	import Class from '$lib/guideComponents/class.svelte';
	import type { spell } from 'src/global';
	import Navigation from '$lib/guideComponents/navigation.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

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
			url: '/images/spell/acid-splash.png',
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
			url: '/images/spell/blade-ward.png',
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
			url: '/images/spell/chill-touch.png',
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
			url: '/images/spell/dancing-lights.png',
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
			url: '/images/spell/eldritch-blast.png',
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
			url: '/images/spell/fire-bolt.png',
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
			url: '/images/spell/friends.png',
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
			url: '/images/spell/guidance.png',
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
			url: '/images/spell/light.png',
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
			url: '/images/spell/mage-hand.png',
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
			url: '/images/spell/minor-illusion.png',
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
			url: '/images/spell/poison-spray.png',
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
			url: '/images/spell/produce-flame.png',
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
			url: '/images/spell/ray-of-frost.png',
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
			url: '/images/spell/resistance.png',
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
			url: '/images/spell/sacred-flame.png',
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
			url: '/images/spell/shillelagh.png',
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
			url: '/images/spell/shocking-grasp.png',
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
			url: '/images/spell/thaumaturgy.png',
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
			url: '/images/spell/thorn-whip.png',
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
			url: '/images/spell/true-strike.png',
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
			trueStrike
		],
		game: [{ title: 'BG3', description: "Baldur's Gate 3", link: 'baldurs-gate-3' }],
		image: {
			url: '/images/guides/bg3-class-tier-list.webp',
			alt: "Baldur's Gate 3 standard party characters standing in a diamond formation."
		},
		publishedAt: '2021-11-24T15:00:00.000Z',
		slug: 'baldurs-gate-3-spell-tier-list',
		title: "Baldur's Gate 3 Spell Tier List",
		excerpt:
			'This is the fourth and final article in my Baldur’s Gate 3 rankings and guide series where I review the spells available in the early access so far.',
		updatedAt: '2021-11-24T21:11:28Z'
	};

	function getTitle(item) {
		let title = item.title;
		let link = item.title.replace(/\s+/g, '');
		let image = item.image;
		return { title: title, link: link, image: image };
	}

	const links = guide.body.map(getTitle);
</script>

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
		<article class="mt-6 prose prose-lg text-gray-700 mx-auto">
			<h1>
				<span class="block text-base text-center text-bgRed font-semibold tracking-wide uppercase"
					>Guide</span
				>
				<span
					class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
					>{guide.title}</span
				>
			</h1>
			<p class="mt-8 text-xl text-gray-700 leading-8">
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

			{#each guide.body as section}
				<Class data={section} />
			{/each}
			<a href="/"><p class="text-bgRed">Return home</p></a>
		</article>
	</div>
</div>
