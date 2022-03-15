import { writable } from 'svelte/store';

export const dark = writable(false);

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
	patreon: 'https://www.patreon.com/user?u=52365991&fan_landing=true',
	subreddit: 'https://www.reddit.com/r/AestusGuides/',
	title: 'Aestus Guides'
});
