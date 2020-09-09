export const getCategorySearchParameters = (context, sort) => {
  const { path, query } = context.root.$route;
  const slug = path.replace(/^\/c\//, '');

  return { slug, sort: sort };
};
