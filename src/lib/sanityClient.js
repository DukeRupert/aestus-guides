import sanityClient from '@sanity/client';
import { sanityApi } from '$lib/constants';

const { projectId, dataset } = sanityApi;
const client = sanityClient({
	projectId,
	dataset,
	apiVersion: '2021-02-09', // use current UTC date - see "specifying API version"!
	useCdn: true
});

export default client;
