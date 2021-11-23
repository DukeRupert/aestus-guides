/// <reference types="@sveltejs/kit" />
export interface guide {
	body: any[];
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
export interface bgClass {
	title: string;
	link?: string;
	tier?: string;
	image?: {
		url: string;
		alt: string;
	};
	list?: { title: string; body: string }[];
	body: (string | string[] | { url: string; alt: string })[];
	quote?: string;
}
