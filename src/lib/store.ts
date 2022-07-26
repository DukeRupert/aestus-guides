import {
	writable,
	asyncDerived,
	asyncReadable,
	asyncWritable,
	type Loadable,
	type WritableLoadable
} from '@square/svelte-store';

import type { PlaylistResponse, Snippet } from '$lib/types/youtube';
interface Guide {
	body: [];
	game: { title: string; description: string; link: string };
	image: {
		url: string;
		alt: string;
	};
	publishedAt: string;
	slug: string;
	title: string;
	excerpt: string;
	updatedAt: string;
}

export const recentVideos: Loadable<Snippet[]> = asyncReadable(
	[],
	async () => {
		const playlistId = 'UUs0WWs6-v6R1nQFZIW3iwSQ';
		const requestBody = JSON.stringify({ playlistId: playlistId });
		const res = await fetch('/api/youtube.json', {
			method: 'POST',
			body: requestBody,
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		const { items } = data;
		const newItems = [...items];
		return newItems;
	},
	true
);

export const bg3Videos: Loadable<Snippet[]> = asyncReadable(
	[],
	async () => {
		const playlistId = 'PLVycni4XqC0svYbrmIPYScY_xrCA91S2J';
		const requestBody = JSON.stringify({ playlistId: playlistId });
		const res = await fetch('/api/youtube.json', {
			method: 'POST',
			body: requestBody,
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		const { items } = data;
		const newItems = [...items];
		return newItems;
	},
	true
);

export const poeVideos: Loadable<Snippet[]> = asyncReadable(
	[],
	async () => {
		const playlistId = 'PLVycni4XqC0sD8ABXJ2j_5kQNb1hXiWz2';
		const requestBody = JSON.stringify({ playlistId: playlistId });
		const res = await fetch('/api/youtube.json', {
			method: 'POST',
			body: requestBody,
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		const { items } = data;
		const newItems = [...items];
		return newItems;
	},
	true
);

export const pathfinderWotrVideos: Loadable<Snippet[]> = asyncReadable(
	[],
	async () => {
		const playlistId = 'PLVycni4XqC0soPNyq6hKZ-5OnylsdHXZc';
		const requestBody = JSON.stringify({ playlistId: playlistId });
		const res = await fetch('/api/youtube.json', {
			method: 'POST',
			body: requestBody,
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		const { items } = data;
		const newItems = [...items];
		return newItems;
	},
	true
);

export const recentGuides: Loadable<Guide[]> = asyncReadable(
	{},
	async () => {
		const res = await fetch('/api/guides.json');
		const { data } = await res.json();
		return data;
	},
	true
);

export const bg1Guides: Loadable<Guide[]> = asyncReadable(
	{},
	async () => {
		const res = await fetch('/api/bg1guides.json');
		const { data } = await res.json();
		const { guides } = data[0];
		return guides;
	},
	true
);

export const bg3Guides: Loadable<Guide[]> = asyncReadable(
	{},
	async () => {
		const res = await fetch('/api/bg3guides.json');
		const { data } = await res.json();
		const { guides } = data[0];
		return guides;
	},
	true
);

export const pathfinderWotrGuides: Loadable<Guide[]> = asyncReadable(
	{},
	async () => {
		const res = await fetch('/api/pathfinderWrathGuides.json');
		const { data } = await res.json();
		const { guides } = data[0];
		return guides;
	},
	true
);

export const dark = writable(false);

export const mobileOpen = writable(false);

export const guides = writable([
	{
		body: [],
		game: { title: 'BG3', description: "Baldur's Gate 3", link: 'baldurs-gate-3' },
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
	},
	{
		body: [],
		game: { title: 'BG3', description: "Baldur's Gate 3", link: 'baldurs-gate-3' },
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
	},
	{
		body: [],
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
	},
	{
		body: [],
		game: { title: 'BG1', description: "Baldur's Gate 1", link: 'baldurs-gate-1' },
		image: {
			url: '/images/guides/flyingSolo.webp',
			alt: 'Steam flying solo achievement with thumbs up icon'
		},
		publishedAt: '2021-03-29T18:41:12.176Z',
		slug: 'three-must-play-solo-builds-for-baldurs-gate-1',
		title: 'Three Must-Play Solo Builds for Baldur’s Gate I',
		excerpt: 'My recommendations for extremely fun solo builds for BGI',
		updatedAt: '2021-03-30T15:33:07Z'
	},
	{
		body: [],
		game: { title: 'BG3', description: "Baldur's Gate 3", link: 'baldurs-gate-3' },
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
	}
]);

export const siteSettings = writable({
	_createdAt: '2019-03-29T10:09:19Z',
	_id: 'siteSettings',
	_rev: 'cBTo4ANanNbv51MUscFXzI',
	_type: 'siteSettings',
	_updatedAt: '2022-03-15T18:22:13Z',
	aboutMe: [
		{
			_key: '6d982364782b',
			_type: 'block',
			children: [
				{
					_key: 'b2aaa5f8b47a',
					_type: 'span',
					marks: [],
					text: "I am computer RPG veteran and long time fan of the Baldur's Gate series. I started playing BG3 early in January and am totally hooked. I have spent close to a thousand hours on the original BG series, including a few hundred on hardcore, no-reload, solo runs. My website will house articles and guides on computer RPG's like Neverwinter Knights, Icewindale, Pillars of Eternity, and most importantly the Baldur's Gate series."
				}
			],
			markDefs: [],
			style: 'normal'
		},
		{
			_key: 'fd7643fcbba0',
			_type: 'block',
			children: [
				{
					_key: '636842aee6030',
					_type: 'span',
					marks: [],
					text: 'You may have noticed that there are no advertisements on this site. That is because it is a labor of love rather than my day job. If you would like to see content more regularly please support me through my patreon page linked below.'
				}
			],
			markDefs: [],
			style: 'normal'
		}
	],
	author: {
		_ref: '2e0ab821-f636-4137-9e3b-993efdcf8dd8',
		_type: 'reference'
	},
	description:
		"Articles and guides on computer RPGs like Baldur's Gate, Neverwinter Nights, Icewind Dale and Pillars of Eternity.",
	keywords: [
		'crpg',
		"baldur's gate",
		'neverwinter nights',
		'icewind dale',
		'pillars of eternity',
		"baldur's gate 3",
		"baldur's gate 2",
		'tier list',
		'guide'
	],
	youtube: 'https://www.youtube.com/channel/UCs0WWs6-v6R1nQFZIW3iwSQ',
	patreon: 'https://www.patreon.com/user?u=52365991&fan_landing=true',
	subreddit: 'https://www.reddit.com/r/AestusGuides/',
	title: 'Aestus Guides'
});
