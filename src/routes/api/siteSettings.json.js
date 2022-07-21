import client from '$lib/sanityClient';

export async function GET() {
	const filter = `*[_type == "siteSettings"]`;
	const projection = `{...}`;
	const query = filter + projection;
	const [data] = await client.fetch(query);

	if (data) {
		return {
			body: { data }
		};
	}

	return {
		status: data.status,
		error: new Error(data.error)
	};
}
