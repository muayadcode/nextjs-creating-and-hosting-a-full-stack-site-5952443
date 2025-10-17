export default async function FetchTest () {

  const response =  await fetch('https://legendary-sniffle-5p99qxwj4rrh446j-3000.app.github.dev//api/hello');
  const data = await response.json();

  return <h1>{data.message}</h1>
}