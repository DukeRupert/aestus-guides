<script lang="ts">
	import { page } from '$app/stores';
	import Seo from '$lib/seo.svelte';

	const guide = {
		body: [],
		categories: [{ title: 'BG1', description: "Baldur's Gate 1" }],
		image: {
			url: '/images/guides/flyingSolo.webp',
			alt: 'Steam flying solo achievement with thumbs up icon'
		},
		publishedAt: '2021-03-29T18:41:12.176Z',
		slug: 'three-must-play-solo-builds-for-baldurs-gate-1',
		title: 'Three Must-Play Solo Builds for Baldur’s Gate I',
		excerpt: 'My recommendations for extremely fun solo builds for BGI',
		updatedAt: '2021-03-30T15:33:07Z'
	};

	// SEO
	let canonical = $page.host + $page.path;
	let seoImage = $page.host + guide.image.url;
</script>

<Seo title={guide.title} excerpt={guide.excerpt} {canonical} {seoImage} />
<div class="relative py-16 overflow-hidden">
	<div class="relative px-4 sm:px-6 lg:px-8">
		<div class="text-lg max-w-prose mx-auto">
			<h1>
				<span class="block text-base text-center text-bgRed font-semibold tracking-wide uppercase"
					>Guide</span
				>
				<span
					class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
					>{guide.title}</span
				>
			</h1>
			<p class="mt-8 text-xl text-gray-800 leading-8">
				I am one of those guys who prefers Baldur’s Gate I (BGI) over its sequel (BGII). Part of the
				reason is aesthetic: BGI is more focused in its aesthetic, and I prefer that. However,
				another reason is that BGI is so rewarding to play as a solo character, i.e., without any
				party members. Below I share three solo builds that are extremely fun to play through BGI. I
				hope you will give them a shot!
			</p>
			<p class="mt-8 text-xl text-gray-800 leading-8">
				Before getting to the builds, let me just briefly say something about what makes solo runs
				so interesting. The first is obviously the challenge; BGI is like a puzzle that is designed
				to be solved with the resources of six characters and finding a way to do it with the
				resources of one is extremely rewarding. One thing that always keeps me coming back to solo
				runs is the ease and simplicity of control, which leads to more interesting play styles.
				Micro-managing a party of six is a lot of work, and I find that the complexity leads to very
				stale game-play after a while. Your front-line tanks while you back line overwhelms them
				with crowd control. This guide is meant primarily for experienced Baldur's Gate players. If
				you are new to the original Baldur's Gate series and want to see what makes it so awesome,
				keep an eye out for my forthcoming Baldur's Gate Beginners Guide.
			</p>
		</div>
		<div class="mt-6 prose prose-lg text-gray-800 mx-auto">
			<h2>Gnome Illusionist/Thief</h2>
			<p>
				The Gnome Illusionist/Thief plays exactly like you would imagine a Gnome would fight:
				through tricks. It’s the Loki playstyle. Let me highlight the key spells and items of this
				build:
			</p>
			<h3>First level spells and the Ring of Wizardry</h3>
			<p>
				In BGI there are two vastly overpowered first level mage spells: Sleep and Blindness. Most
				people know how Sleep makes trash mobs in BGI trivial. Blindness is basically the same as
				sleep, but single target, and it effects all HD, so it stays relevant all game. Because
				Blindness is an illusion spell, enemies suffer a -1 penalty to saving throws. Illusionists
				also get bonus spell slots, including a bonus level one spell slot. Combine this with the
				Ring of Wizardry and you get, precisely, a carp-load of Sleep and Blindness spells to cast.
			</p>
			<h3>Invisibility and Improved Invisibility</h3>
			<p>
				These are the other two spells that form the core of your game-play. The obvious utility
				that Invisibility gives you is the ability to (i) avoid being targeted, and (ii) to be able
				to get multiple backstabs in a fight. Another often overlooked benefit is that it lasts for
				24 hours. So, if you cast this before leaving an area, you will still be invisible if you
				get ambushed, or when you enter the new zone. This means that you can practically always
				control when and how a fight starts, which is extremely useful normally, and absolutely
				invaluable in a no-reload run. Improved Invisibility shares all of those benefits except the
				24 hour duration. What it gets instead is one of the best defensive buffs in the game:
				effectively +4 to AC and saving throws. With Improved Invisibility your saving throws, which
				are already good due to shorty bonuses, become extremely good (sadly you miss out on Spirit
				Armor to make them god-like).
			</p>
			<h3>Dagger of Venom and Overall Core Playstyle</h3>
			<p>
				There aren’t any tricks to this weapon that everyone does not already know. Its really
				effective at taking out Mages, especially if you can start a fight by backstabbing them.
				This rounds out all the tools the Illusionist/Thief brings to the table. Opening a fight
				with a Dagger of Venom to the back will neutralize the highest priority caster. Blindness
				will neutralize physical attackers. If you are dealing with mobs, stack a few sleep spells.
				A combination of these tricks will get you past 90% of encounters. For the rest, just use
				your wits, and whatever wands you’ve managed to collect. My experience is that fights are a
				breeze, but not in a boring way! Its always fun to dominate with a clever application of
				stealth and disabling spells. *Note* You can backstab while polymorphed into an Ogre for
				insane damage if you ever want to see some chunks fly. Its not actually a great strategy,
				but it is hilarious.
			</p>
			<h2>Half-Elf Cleric/Mage</h2>
			<p>
				If the Illusionist/Thief is a surgeon, the Cleric/Mage is a butcher, or more like a
				landslide. Of course, there are hundreds of ways to play the Cleric/Mage, but the way I
				prefer is overwhelm enemies with buffed summons.
			</p>
			<h3>Animate Dead</h3>
			<p>
				This is your elite summon. You can use monster summoning for fodder, but skelos will be the
				core, elite phalanx holding the middle line. The main reasons skeletons are so good are
				their resistances: 100% Cold, 45% Magic, 40% Slashing, 50% Piercing, 60% Missile, plus
				immunity to most crowd control effects. With the use of Sanctuary, you can safely nullify
				enemy spells by having them target your Skelo soldiers (the Charm spells that the Sirine’s
				cast is a great example). You can also send them safely to fight in poison clouds. There
				damage is decent enough, but Skelos get really fun when you start layering on the offensive
				buffs we will discuss below. The spell lasts 8 hours to, so summon them early and often.
			</p>
			<h3>Buffs + Overall Core Playing Style</h3>
			<p>
				So you’ve summoned an undead army, but you are finding they just aren’t massacring the way
				you hoped they would… Never fear! The Cleric/Mage has a potent arsenal of party buffs to
				turn your skeleton soldiers into Seal team 6!
			</p>
			<p>
				Bless + Strength of One: In combination, these buffs give your summons -2 THAC0 and +3
				damage. You are multiplying this by the number of summons you have out (max 5), which is
				good, but we would like it to be better. Haste : This gives your summons all have +1 attacks
				per round (APR), which is doubling the efficiency we get from Bless and Strength of One. Now
				your Skelos are killing machines. Chant + Defensive Harmony : These are good defensive buffs
				to make your skeletons even tankier than they already are.
			</p>
			<p>
				This concludes the core strategy you will be using to get through most fights. You summon up
				an army, buff them to the nines, send them into a Poison Cloud to fight, then go grab a cup
				coffee because the battle is over.
			</p>
			<h3>Bonus Hammer Spider Cheese</h3>
			<p>
				As fun as it is watching your undead army roll every fight from the safety of your
				sanctuary, there will be times where you will need to mix it up in melee with them. The
				Cleric/Mage has spells for that too! The best one is Polymorph Self. There are lots of forms
				to choose from, but one of them is perfectly designed for you: the Sword Spider.
			</p>
			<p>
				The Sword Spider gets 4 APR, 5 with Haste , but has really low damage. You could easily fix
				the low damage with a few spells, but you can’t cast spells in spider form. There is a
				clever way around that though that only the Cleric/Mage can use. Cast Minor Sequencer and
				load it with Spiritual Hammer and some other useful buff. You can use the sequencer in
				spider form since it counts as a special ability rather than a spell. Change into a spider,
				then activate the sequencer. Now you are a spider dual-wielding hammers! It is not game
				breaking damage by any means, but it is good. This trick does not work in BGII for some
				reason.
			</p>
			<h2>Half-Orc Cleric/Thief</h2>
			<p>
				The Cleric/Thief is like a mix of the two above strategies. You will use summons, but also
				stealth and crowd control. The unique thing it brings to the table is a formula for insane
				backstab damage. That is why I recommend choosing the Half-Orc variant over the Gnome, but
				we will get to that.
			</p>
			<h3>Bless and Backstab</h3>
			<p>
				The hook that makes this build fun is backstabs and there are a few spells in this recipe.
				The first are the standard cleric buffs that affect damage: Bless and Chant . Cumulatively,
				these spells give you a bonus 1.5 damage per hit, but it is modified by the backstab
				multiplier, which gives you a respectable +4.5.
			</p>
			<p>
				Draw Upon Holy Might (DUHM) boosts your strength by 1-2 depending on your level. For most of
				the game it will be a +2 boost. Sadly, strength bonuses are not affected by the backstab
				multiplier, but the flat boost to damage is still a lot of damage. A half-orc, with the
				strength tome and DUHM will be doing +10 damage per hit.
			</p>
			<p>
				If you play this character into BGII you will get the <span class="italic"
					>piece de resistance</span
				> of Cleric/Thief backstabbing: Righteous Magic. This spell further boosts your Strength, practically
				guaranteeing the 25 cap, but the best part is that it makes all attacks to max damage. When you
				are multiplying by 4 or 5 the difference between a low roll and a high roll is a lot, so guaranteeing
				the highest roll makes the Cleric/Thief the backstabbing kings! Sadly, you do not get this spell
				in BGI.
			</p>
			<h3>Staff of Striking and Boots of Speed</h3>
			<p>
				Now for the items that make this build shine/ The best backstabbing weapon in the
				Cleric/Thief arsenal is the quarterstaff, and luckily there are some really strong staves in
				BGI. A +3 quarterstaff can be bought in Ulgoth’s beard. The damage bonus on weapons is
				multiplied in a backstab, so a +3 is a +9. In total it will average 23.4 damage per
				backstab, 38.8 with the other bonuses. The Staff Spear, found in Durlag’s tower will average
				a bit higher: 42.4. If you are brave enough, you can delve to the 4 level of Durlag’s
				dungeon to get the Staff of Striking, which averages: 45.4. It has charges, so save it for
				key battles.
			</p>
			<p>
				The Boots of Speed, which you will get just outside of the Cloakwood Mine, are the other key
				item for this build. With these boots, you can run away very quickly, allowing you to reset
				stealth and return for more backstabs. Keep the preoccupied with your skeleton summons,
				popping in to backstab, retreating to stealth, then returning for more backstabs. It is
				insanely fun!
			</p>
			<h3>Honorable Mentions</h3>
			<p>
				For crowd control spells, you will have Command , Hold Person , and Silence, all very useful
				spells in their own rights. You won’t match the CC power of the Mage/Thief, but you can hold
				your own. Sanctuary works as your equivalent to Invisibility to run away before you have
				Boots of Speed. Its clumsier though. You have to cast it, walk out of sight, stealth, then
				return to backstab.
			</p>
			<p>
				Do not be fooled by Holy Power. The THAC0 bonuses look tempting, but this spell sucks. It
				gives you THAC0 equivalent to a fighter of the same level, and since you are dual-classed,
				that is not a very high level. The spell is most efficient when cast by a single class
				Cleric, but single class Clerics also need more APR to combine with the THAC0 to be halfway
				decent as damage dealers. Just pass on this spell.
			</p>

			<a href="/"><p class="text-bgRed">Return home</p></a>
		</div>
	</div>
</div>
