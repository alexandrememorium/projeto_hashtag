function conectaAPI(texto, setValue, setError, setIsLoading) {
        
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX");

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${texto} has:images&expansions=attachments.media_keys,author_id,referenced_tweets.id,entities.mentions.username&media.fields=url&tweet.fields=text&user.fields=name,username,profile_image_url`, requestOptions)
            .then(async (response) => {
                const json = await response.json();
                setValue(json)
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false)
            })
}

export default conectaAPI