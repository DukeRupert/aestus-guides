import client from '$lib/sanityClient';

export async function GET() {
	const filter = `*[_type == "guide" && defined(slug)] | order(_createdAt desc)`;
	const projection = `{
			..., body[]{
				..., image{
					..., asset->
				}
			}
		}`;
	const query = filter + projection;
	const data = await client.fetch(query);

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
