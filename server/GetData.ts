// "use server"


const GetData = async (url : string) => {
  
  
    const res = await fetch(url ,{ cache: 'no-store' });
    

    if(!res.ok) throw new Error("failed to fetch!")

    const resultFetch = await res.json()

  return resultFetch
}

export default GetData