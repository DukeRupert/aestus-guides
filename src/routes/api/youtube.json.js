import { dev } from '$app/env';

const key = dev ? import.meta.env.VITE_GOOGLE_API_KEY : process.env.GOOGLE_API_KEY;

export async function POST({ request }) {
	const body = await request.json();

	console.log('fetching');

	const { playlistId } = body;

	const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${key}`;

	const response = await fetch(url);

	const data = await response.json();
	console.log(`Data receieved from youtube : ${JSON.stringify(data)}`);

	if (data) {
		return {
			body: data
		};
	}

	return {
		status: data.status,
		error: new Error(data.error)
	};
}
