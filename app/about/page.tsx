export default async function About() {

  try {
    const fetchResp = await fetch('https://chatgpt.com/cdn-cgi/trace')
    const data = await fetchResp.text()
    return <div>{data}</div>;
  }catch(error) {
    return <div>Error: fetch error</div>;
  }
}