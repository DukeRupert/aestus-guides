// https://www.sanity.io/docs/what-you-need-to-know-about-block-text/presenting-block-text
// https://github.com/movingbrands/svelte-portable-text
import BlockContent from '$lib/portable-text';
// https://www.npmjs.com/package/@sanity/image-url
import { urlFor } from '$lib/image-url';
import Section from '$lib/guideComponents/section.svelte';
import BodyImage from '$lib/guideComponents/bodyImage.svelte';
import Link from '$lib/guideComponents/link.svelte';
import Spell from '$lib/guideComponents/spell.svelte';
import TextSection from '$lib/guideComponents/textSection.svelte';

export default {
	marks: {
		link: ({ children, mark }) => ({
			component: Link,
			childNodes: children,
			props: mark
		})
	},
	types: {
		section: ({ node: { name, tier, body, image }, children }) => ({
			component: Section,
			childNodes: children,
			props: {
				name: name,
				tier: tier,
				body: body,
				url: urlFor(image.asset).width(150).auto('format').url(),
				alt: image.alt
			}
		}),
		bodyImage: ({ node, children }) => ({
			component: BodyImage,
			childNodes: children,
			props: {
				url: urlFor(node).width(400).format('webp').url(),
				alt: node.alt
			}
		}),
		spell: ({ node: { name, level, tier, body, image }, children }) => ({
			component: Spell,
			childNodes: children,
			props: {
				name: name,
				level: level,
				tier: tier,
				body: body,
				url: urlFor(image.asset).width(150).auto('format').url(),
				alt: image.alt
			}
		}),
		textSection: ({ node, children }) => ({
			component: TextSection,
			childNodes: children,
			props: {
				name: node.name,
				body: node.body
			}
		})
	}
};
