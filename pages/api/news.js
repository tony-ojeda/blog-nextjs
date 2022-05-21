export async function getNews() {
  const res = await fetch(`https://node-hnapi.herokuapp.com/news`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
