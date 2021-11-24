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

	let strength: bgClass = {
		title: 'Strength',
		image: {
			url: '/images/guides/bg3-ability-strength.webp',
			alt: 'BG3 Strength Icon'
		},
		body: [
			`In tabletop 5th edition strength is a mediocre stat, but in BG3 its back on top, so roll up some beef cakes! Strength gives you:`,
			[
				`Improved accuracy and damage for melee weapons.`,
				`Increased jump distance.`,
				`Increased carry weight.`,
				`Increased drag and lift.`,
				`Improved accuracy and distance on shoves`,
				`Improved athletics and strength saves.`
			],
			`Now, some of these bonuses are just conveniences, for example, the increased carry weight, drag, and lift. The really important bonuses are shove and jump distance. Why? Both have to do with the verticality of Larian’s encounter design. Let’s start with improved jump distance. Practically every encounter has vertical terrain and attacking from high ground is significantly better than attacking from low (just ask Anakin Skywalker). This means that the vertical movement of jumping is really valuable. Moreover, the jump action expends a flat amount of movement, thus with more strength you get more value from that expended movement. With a high strength stat you can jump farther than your full movement bar at a fraction of the cost, so, weirdly, strength gives you increased lateral mobility as well as vertical.`,
			`The importance of shove is also straightforward. Having the high-ground is important, but everyone who is up high is vulnerable to being pushed and plummeting to their deaths. So, in most encounters there will be a king-of-the-hill game to decide who holds the high-ground. Having the highest strength means you can shove the farthest and the most reliably as well as helping you resist shoves, making you the king or queen of every hill you see.`
		]
	};

	let constitution: bgClass = {
		title: 'Constitution',
		image: {
			url: '/images/guides/bg3-ability-constitution.webp',
			alt: 'BG3 Constitution Icon'
		},
		body: [
			`Constitution gives you:`,
			[`More hit points.`, `Improved constitution saves.`],
			`Both of these bonuses are very valuable for complicated reasons that have to do with the 5th edition ruleset and its flattened math. Unlike other rulesets, in 5th edition player characters and enemies do not accumulate vast increases to accuracy and armor class (AC) when they level. Instead, the main areas in which characters improve when they level is in the <strong>potency of the actions they can take</strong> (this is an important principle for understanding 5e). Ultimately, the standard for a potent action is how much damage it does or how much damage it mitigates. What all of this means is that, at the most abstract, 5th edition combat is a ledger, where the value of their actions are subtracted from your hit points and vice versa until one side is in the red.`,
			`Once we understand this it is easy to see why hit points are so valuable: they are the best and most reliable way to mitigate damage. Also spells like Sleep and Color Spray always hit if the targets are below a certain collective hit point threshold, so hit points also double as a method of avoiding some dangerous crowd control (CC) effects.`,
			`Constitution saves are particularly important for one crucial reason: concentration. Concentration is one of the four action slots (along with action, bonus action, and reaction), and maintaining it is a constitution save. As a general rule, the most efficient builds will find consistent and potent uses for all four actions, so a low constitution save will handicap the efficiency of an important action type.`,
			`As a final note, its worth mentioning that quite a few powerful spells target constitution. For example, Thunderwave, Blindness, Ray of Enfeeblement, or Shatter.`
		]
	};

	let wisdom: bgClass = {
		title: 'Wisdom',
		image: {
			url: '/images/guides/bg3-ability-wisdom.webp',
			alt: 'BG3 Wisdom Icon'
		},
		body: [
			`Wisdom gives you:`,
			[
				`A bonus to animal handling, insight, medicine, perception, and survival checks.`,
				`Improved wisdom saves.`,
				`Improved cantrip and spell potency for clerics, rangers, and druids (when they add them).`
			],
			`Our first spell ability. Obviously, if you are a cleric, ranger, or druid this ability will be very important, maybe even more important than strength and constitution. However, setting aside all class specific bonuses, wisdom is a very valuable stat. First and foremost because wisdom is the save targeted by the most spells and by some of the most dangerous spells (Hold Person, Tasha’s Hideous Laughter, Command, etc). Also, because in my own runs I have found perception to be a standout skill when it comes to indirect combat value (this opinion may change as I play more).`
		]
	};

	let dexterity: bgClass = {
		title: 'Dexterity',
		image: {
			url: '/images/guides/bg3-ability-dexterity.webp',
			alt: 'BG3 Dexterity Icon'
		},
		body: [
			`Dexterity gives you:`,
			[
				`Improved accuracy and damage for finesse and ranged weapons.`,
				`Improved AC.`,
				`Improved initiative.`,
				`A bonus to acrobatics, sleight of hand, and stealth checks.`,
				`Improved dexterity saves. `
			],
			`This ability would be so good if it did not compete with strength. Since it does, and strength is so important, dexterity ends up in an awkward place. It gives you accuracy and damage, but most builds will be attacking primarily with strength or spell ability. AC is important, but medium and heavy armor mitigate that, so you can get high AC with only a splash of dexterity. Even with all of those caveats, dexterity still manages to be super useful. Initiative is important because the flattened math of the games makes quickly bursting down single targets a highly efficient strategy. Stealth is probably the skill with the most direct combat value, and sleight of hand ranks high in indirect combat value. Several area of effect (AOE) damage nukes like Burning Hands are mitigated with dexterity saves. Pretty much every build should have at least 12 dexterity.`
		]
	};

	let charisma: bgClass = {
		title: 'Charisma',
		image: {
			url: '/images/guides/bg3-ability-charisma.webp',
			alt: 'BG3 Charisma Icon'
		},
		body: [
			`Charisma gives you:`,
			[
				`Improved shop prices.`,
				`A bonus to deception, intimidation, performance, and persuasion checks`,
				`Improves charisma checks.`,
				`Improved cantrip and spell potency for warlocks, as well as bards, sorcerers, and paladins once they add them.`
			],
			`If this analysis factored in classes, charisma would rank much higher than fifth place, since I expect charisma-based classes to be some of the best in the game. However, it is worth saying something about what charisma is useful for in abstraction from class mechanics, and the answer is not much. Improved shop prices are nice. The skills it modifies are good examples of principally roleplay value. Charisma is not particularly important as a save. Charisma classes would be even better if Wisdom were their spell ability instead.`
		]
	};

	let intelligence: bgClass = {
		title: 'Intelligence',
		image: {
			url: '/images/guides/bg3-ability-intelligence.webp',
			alt: 'BG3 Intelligence Icon'
		},
		body: [
			`At the bottom of the heap is intelligence. Its a shame, because in older systems the nerds used to rule. I kind of miss it. Intelligence gives you:`,
			[
				`A bonus to arcana, history, investigation, nature, and religion checks.`,
				`Improved intelligence saves.`,
				`Improved cantrip and spell potency for Wizards.`
			],
			`Wow, it actually seems worse when you write it all out. I haven’t found a way to get anything but marginal indirect combat value from any of the intelligence skills. Spells that target intelligence are really rare. If you are any class that is not a wizard, dump this stat and see if you notice.`
		]
	};

	const guide = {
		body: [strength, constitution, wisdom, dexterity, charisma, intelligence],
		game: { title: 'BG3', description: "Baldur's Gate 3", link: 'baldurs-gate-3' },
		image: {
			url: '/images/guides/bg3-ability-strength.webp',
			alt: "Gauntlet signifying strength in Baldur's Gate 3"
		},
		publishedAt: '2021-02-17T09:00:00.000Z',
		slug: 'baldurs-gate-3-ability-guide',
		title: "Baldur's Gate 3 - Ability Guide",
		excerpt:
			'This is the first article in a four part series where I analyze and rank fundamental build choices in Baldur’s Gate 3 (BG3). I will be ranking abilities, races, classes, and spells. In this article I analyze and rank abilities. Not all abilities are equal!',
		updatedAt: '2021-03-03T05:45:48Z'
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
		<article class="mt-6 prose prose-lg max-w-prose text-gray-700 mx-auto">
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
				This is the first article in a four part series where I analyze and rank fundamental build
				choices in Baldur’s Gate 3 (BG3). I will be ranking abilities, races, classes, and spells.
				In this article I analyze and rank abilities. Not all abilities are equal! Some are
				definitely more valuable than others. We will discuss each below in order of value from best
				to worst.
			</p>
			<p class="mt-8 text-xl text-gray-700 leading-8">
				Before getting into the analysis, it is prudent to say something about how I balance combat
				versus out of combat utility. This is my order of value starting with the most valuable and
				ending with the least:
			</p>
			<blockquote>
				<p>
					direct combat utility --> indirect combat utility --> convenience --> role-play utility
				</p>
			</blockquote>
			<p>
				By direct combat utility I mean bonuses like increased damage and accuracy, improved saving
				throws, etc. An example of indirect combat utility would be improved store prices that you
				get from charisma: better prices means better equipment to fight with. Convenience bonuses
				are things like increased carry weight: they just make the game more enjoyable. Role-play
				bonuses are mostly skill bonuses that primarily affect dialogue and seldom come up in
				combat. If it is really important to your run that you can, say, quickly romance Astarion or
				have the owlbear cub in your camp you might value these higher. The reason I favor combat
				and convenience over role-play in this article is because they can be more objectively
				compared. Sometimes being bad at a skill can actually improve the role-play experience you
				will have with a character. Think of the dumb brute or haughty elitist mage archetypes for
				example, they can be really fun to play! In contrast, having bad accuracy or damage just
				makes you worse at combat, end of story. With that said, let’s get to the abilities.
			</p>
			{#each guide.body as section}
				<Class data={section} />
			{/each}
			<p>
				That concludes the abilities. In the next article I will analyze and rank all available
				races and subraces in a tier list. Look forward to it!
			</p>
			<a href="/"><p class="text-bgRed">Return home</p></a>
		</article>
	</div>
</div>
