import client from '$lib/sanityClient';

export async function get() {
	const filter = `*[_type=="category" && title=="Pathfinder: Wrath of the Righteous"]{_id,"guides": *[_type=="guide" && references(^._id)]| order(_createdAt desc)`;
	const projection = `{
			..., body[]{
				..., image{
					..., asset->
				}
			}
		}}`;
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
