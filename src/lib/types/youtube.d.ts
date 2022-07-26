export interface Videos {
	kind: string;
	etag: string;
	nextPageToken?: string;
	prevPageToken?: string;
	regionCode: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: 5;
	};
	items: Snippet[];
}

export interface PlaylistResponse {
	kind: string;
	etag: string;
	nextPageToken?: string;
	prevPageToken?: string;
	items: Item[];
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
}

export interface Item {
	kind: string;
	etag: string;
	id: string;
	snippet: Snippet;
}

export interface Snippet {
	publishedAt: string;
	channelId: string;
	title: string;
	description: string;
	thumbnails: {
		default: {
			url: string;
			width: 120;
			height: 90;
		};
		medium: {
			url: string;
			width: 320;
			height: 180;
		};
		high: {
			url: string;
			width: 480;
			height: 360;
		};
		standard: {
			url: string;
			width: 640;
			height: 480;
		};
	};
	channelTitle: string;
	playlistId: string;
	position: 0;
	resourceId: {
		kind: string;
		videoId: string;
	};
	videoOwnerChannelTitle: string;
	videoOwnerChannelId: string;
}
