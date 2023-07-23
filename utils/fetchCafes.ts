export default async function fetchCafes() { 
    const result = (await fetch("https://bandaumnikov.ru/api/test/site/get-index"))
    const cafes = (await result.json())?.data as  cafe[]

    cafes.sort((a, _) => { 
        if (a.photo.length > 1)  return -1
        if (a.photo.length == 0) return 1
        else return 0
    });

    return cafes

}


