/// <reference types="@sveltejs/kit" />
export interface guide {
	body: any[];
	categories: [{ title: string; description: string }];
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
	tier: string;
	image?: {
		url: string;
		alt: string;
	};
	list?: { title: string; body: string }[];
	body: (string | Array<string> | Object)[];
	quote?: string;
}
