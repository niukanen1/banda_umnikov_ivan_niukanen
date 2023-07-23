export default async function fetchSingleCafe(id: number) { 
    const result = await fetch("https://bandaumnikov.ru/api/test/site/get-view?id=" + id);
    return (await result.json())?.data as cafe
}