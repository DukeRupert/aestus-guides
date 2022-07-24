import { dev } from '$app/env';

const key = dev ? import.meta.env.VITE_GOOGLE_API_KEY : process.env.GOOGLE_API_KEY;

export async function GET() {
	const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCs0WWs6-v6R1nQFZIW3iwSQ&key=${key}`;

	const response = await fetch(url);

	const data = await response.json();

	console.log(data);

	if (data) {
		return {
			body: data
		};
	}

	return {
		status: response.status,
		error: new Error(response.error)
	};
}
