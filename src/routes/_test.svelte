<script lang="ts">
	import VideoTabs from '$lib/VideoTabs.svelte';
	import CardYoutube from '$lib/youtube/CardYoutube.svelte';
	let items = [
		{
			kind: 'youtube#playlistItem',
			etag: 'VreqNnWOKMnbhG8cuFCh9GIeRcE',
			id: 'VVVzMFdXczYtdjZSMW5RRlpJVzNpd1NRLkVoQTZNUEJrODZr',
			snippet: {
				publishedAt: '2022-05-09T18:04:33Z',
				channelId: 'UCs0WWs6-v6R1nQFZIW3iwSQ',
				title: "Baldur's Gate 3 Wizard Class Review (Patch 7)",
				description:
					"I explain and rank Baldur's Gate 3's Wizard class and its sub-classes. Part 9 of my Class Tier List Series.\n\nMy Website: https://www.aestusguides.com/\n\nMy Patreon: https://www.patreon.com/user?u=52365991&fan_landing=true\n\nGith Wizard Build: https://www.aestusguides.com/guides/vlaakith-s-arcane-knight-of-faith-a-great-weapon-master-wizard-build",
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/EhA6MPBk86k/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/EhA6MPBk86k/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/EhA6MPBk86k/hqdefault.jpg',
						width: 480,
						height: 360
					}
				},
				channelTitle: 'Aestus_RPG',
				playlistId: 'UUs0WWs6-v6R1nQFZIW3iwSQ',
				position: 5,
				resourceId: {
					kind: 'youtube#video',
					videoId: 'EhA6MPBk86k'
				},
				videoOwnerChannelTitle: 'Aestus_RPG',
				videoOwnerChannelId: 'UCs0WWs6-v6R1nQFZIW3iwSQ'
			}
		},
		{
			kind: 'youtube#playlistItem',
			etag: 'Mar11sy1cGHC3dXykxqh9QdxYkE',
			id: 'VVVzMFdXczYtdjZSMW5RRlpJVzNpd1NRLndLMU5CSHp0RzFR',
			snippet: {
				publishedAt: '2022-04-29T19:15:59Z',
				channelId: 'UCs0WWs6-v6R1nQFZIW3iwSQ',
				title: "Baldur's Gate 3 Warlock Class Review (Patch 7)",
				description:
					"I explain and rank Baldur's Gate 3's Warlock class and its sub-classes. Part 8 of my Class Tier List Series\n\nMy Website: https://www.aestusguides.com/\n\nMy Patreon: https://www.patreon.com/user?u=52365991&fan_landing=true\n\n00:00:00 - Base Class\n\n00:04:28 - Cantrips\n\n00:08:03 - Level 1 Spells\n\n00:17:08 - Eldritch Invocations \n\n00:26:22 - Pact Boon\n\n00:27:42 - Quasit\n\n00:31:00 - Imp\n\n00:34:20 - Base Class Tier Ranking \n\n00:36:10 - The Great Old One\n\n00:37:58 - The Fiend Pact\n\n00:41:20 - Closing Remarks",
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/wK1NBHztG1Q/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/wK1NBHztG1Q/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/wK1NBHztG1Q/hqdefault.jpg',
						width: 480,
						height: 360
					}
				},
				channelTitle: 'Aestus_RPG',
				playlistId: 'UUs0WWs6-v6R1nQFZIW3iwSQ',
				position: 6,
				resourceId: {
					kind: 'youtube#video',
					videoId: 'wK1NBHztG1Q'
				},
				videoOwnerChannelTitle: 'Aestus_RPG',
				videoOwnerChannelId: 'UCs0WWs6-v6R1nQFZIW3iwSQ'
			}
		},
		{
			kind: 'youtube#playlistItem',
			etag: 'm74GgHPVv5hhURKudJonxcyNLjg',
			id: 'VVVzMFdXczYtdjZSMW5RRlpJVzNpd1NRLjZBQVl5aUpRcEVV',
			snippet: {
				publishedAt: '2022-04-15T08:20:01Z',
				channelId: 'UCs0WWs6-v6R1nQFZIW3iwSQ',
				title: "Baldur's Gate 3 Sorcerer Class Review (Patch 7)",
				description:
					"I explain and rank Baldur's Gate 3's Sorcerer class and its sub-classes. Part 7 of my Class Tier List Series\n\nMy Website: https://www.aestusguides.com/\n\nMy Patreon: https://www.patreon.com/user?u=52365991&fan_landing=true\n\nBriCon's Cantrip Guide: https://youtu.be/vAGgaUbjRog\n\n00:00:00 - Base Class\n\n00:04:01 - Cantrips\n\n00:12:20 - Level 1 Spells\n\n00:20:26 - Metamagic \n\n00:34:35 - Recommended Spell Loadout / Base Class Tier List Rating\n\n00:38:07 - Draconic Bloodline\n\n00:46:46 - Wild Magic \n\n01:01:34 - Closing Remarks",
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/6AAYyiJQpEU/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/6AAYyiJQpEU/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/6AAYyiJQpEU/hqdefault.jpg',
						width: 480,
						height: 360
					}
				},
				channelTitle: 'Aestus_RPG',
				playlistId: 'UUs0WWs6-v6R1nQFZIW3iwSQ',
				position: 7,
				resourceId: {
					kind: 'youtube#video',
					videoId: '6AAYyiJQpEU'
				},
				videoOwnerChannelTitle: 'Aestus_RPG',
				videoOwnerChannelId: 'UCs0WWs6-v6R1nQFZIW3iwSQ'
			}
		},
		{
			kind: 'youtube#playlistItem',
			etag: 'm2e64cAXGTeZaHiOEE5dCX3RA2I',
			id: 'VVVzMFdXczYtdjZSMW5RRlpJVzNpd1NRLklSakhYU1RpbVJV',
			snippet: {
				publishedAt: '2022-04-10T16:11:04Z',
				channelId: 'UCs0WWs6-v6R1nQFZIW3iwSQ',
				title: "Baldur's Gate 3 Rogue Class Review (Patch 7)",
				description:
					'I explain and rank Baldur\'s Gate 3\'s Rogue class and its sub-classes. Part 6 of my Class Tier List Series\n\nMy Website: https://www.aestusguides.com/\n\nMy Patreon: https://www.patreon.com/user?u=52365991&fan_landing=true\n\nArticle "Fundamental Math of 5e & BG3": https://www.aestusguides.com/guides/some-fundemental-math-in-5e-and-bg3\n\n00:00 - Base Class\n\n02:06 - Sneak Attack\n\n11:06 - Cunning Action\n\n14:06 - Arcane Trickster\n\n21:02 - Thief\n\n26:10 - Githyanki Strength Thief is awesome!\n\n29:28 - Closing Remarks',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/IRjHXSTimRU/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/IRjHXSTimRU/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/IRjHXSTimRU/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/IRjHXSTimRU/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/IRjHXSTimRU/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Aestus_RPG',
				playlistId: 'UUs0WWs6-v6R1nQFZIW3iwSQ',
				position: 8,
				resourceId: {
					kind: 'youtube#video',
					videoId: 'IRjHXSTimRU'
				},
				videoOwnerChannelTitle: 'Aestus_RPG',
				videoOwnerChannelId: 'UCs0WWs6-v6R1nQFZIW3iwSQ'
			}
		},
		{
			kind: 'youtube#playlistItem',
			etag: 'kVkDQqr6c82uRWETXF6CcCItnFE',
			id: 'VVVzMFdXczYtdjZSMW5RRlpJVzNpd1NRLjNUVG9XSU1YMzF3',
			snippet: {
				publishedAt: '2022-04-02T16:36:13Z',
				channelId: 'UCs0WWs6-v6R1nQFZIW3iwSQ',
				title: "Baldur's Gate 3 Ranger Class Review (Patch 7)",
				description:
					"I explain and rank Baldur's Gate 3's Ranger class and its sub-classes. Part 5 of my Class Tier List Series\n\nMy Website: https://www.aestusguides.com/\n\nMy Patreon: https://www.patreon.com/user?u=52365991&fan_landing=true\n\n00:00 - The Ranger class has no identity!\n\n05:12 - Base Class\n\n07:23 - Favored Enemy\n\n10:54 - Natural Explorer\n\n14:13 - Fighting Style\n\n17:26 - Spells\n\n22:28 - Base Class Tier/Summary\n\n25:52 - Hunter\n\n33:20 - Beast Master",
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/3TToWIMX31w/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/3TToWIMX31w/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/3TToWIMX31w/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/3TToWIMX31w/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/3TToWIMX31w/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Aestus_RPG',
				playlistId: 'UUs0WWs6-v6R1nQFZIW3iwSQ',
				position: 9,
				resourceId: {
					kind: 'youtube#video',
					videoId: '3TToWIMX31w'
				},
				videoOwnerChannelTitle: 'Aestus_RPG',
				videoOwnerChannelId: 'UCs0WWs6-v6R1nQFZIW3iwSQ'
			}
		}
	];
</script>

<!-- Video Tabs -->
<div class="w-full bg-white dark:bg-black mx-auto lg:max-w-4xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
	<h1 class="text-2xl lg:text-4xl text-black dark:text-gray-100 my-4">Videos</h1>
	<VideoTabs />

	<div class="bg-white dark:bg-black grid grid-cols-1 gap-y-4 sm:gap-y-10 lg:gap-x-8">
		<ul
			class="flex overflow-x-scroll no-scrollbar snap-mandatory snap-x divide-y divide-gray-200 dark:divide-gray-700"
		>
			{#each items as item}
				<CardYoutube snippet={item.snippet} />
			{/each}
		</ul>
	</div>
</div>
