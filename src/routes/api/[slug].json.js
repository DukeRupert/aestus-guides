import client from '$lib/sanityClient';

export async function get({ params }) {
	const { slug } = params;
	const filter = `*[_type == "guide" && slug.current == "${slug}"]`;
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
