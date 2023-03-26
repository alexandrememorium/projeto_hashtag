// import { TwitterApi, TwitterV2IncludesHelper  } from "twitter-api-v2";

// const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX')


// const readOnlyClient = twitterClient.readOnly;

// // const jsTweets = await readOnlyClient.v2.search('#natureza', {
// //     expansions: 'attachments.media_keys',
// //     'media.fields': 'preview_image_url'
// // });
// // console.log(jsTweets.data.data[1].attachments)

// const result = await readOnlyClient.v2.get('tweets/search/recent', { query: '#natureza', max_results: 10});
// console.log(result)

import { useEffect, useState } from "react";

function useFetch(texto) {

    const [isLoading, setIsLoading] = useState(true)
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX");

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${texto}&expansions=attachments.media_keys,author_id&media.fields=url&user.fields=profile_image_url,username,name&max_results=10`, requestOptions)
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
        //.then(result => console.log(result.includes.media[0].url))
    }, [texto])

    return { isLoading , value, error }
}

export default useFetch