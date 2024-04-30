export async function getQuestions(){
    const url = "https://opentdb.com/api.php?amount=10&category=11&type=multiple"
    const resp = await fetch(url)
    if (!resp.ok){
        throw {
            message: "Failed to gather questions",
            statusText: resp.statusText,
            status: resp.status
        }
    }
    const data = await resp.json()
    return data
}