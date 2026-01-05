export default async function About() {

  try {
    const fetchResp = await fetch('https://www.google.com.hk/')
    const data = await fetchResp.text()
    return <div>{data}</div>;
  }catch(error) {
    return <div>Error: fetch error</div>;
  }
}