export default async function (uri) {
  const {
    public: { baseUrl },
  } = useRuntimeConfig()
  return await $fetch(`${baseUrl}${uri}`, {
    method: 'GET',
  })
    .then((res) => res)
    .catch((error) => console.error(error))
}
