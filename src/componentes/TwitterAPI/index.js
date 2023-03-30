function conectaAPI(itemBusca, setValue, setError, setIsLoading) {

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    let url = `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${itemBusca} lang:pt has:images&expansions=attachments.media_keys,author_id&media.fields=url&user.fields=name,username,profile_image_url`

    fetch(url, requestOptions)
        .then(async (response) => response.json())
        .then((res) => {
            // debugger
            if (res.meta.result_count > 0) {

                const arrayUsers = res.data.map((data, index) => {

                    if ('attachments' in data) {
                        return ({
                            id: data.author_id,
                            nome: res.includes.users.filter((user) => user.id === data.author_id)[0].name,
                            user: res.includes.users.filter((user) => user.id === data.author_id)[0].username,
                            ftPerfil: res.includes.users.filter((user) => user.id === data.author_id)[0].profile_image_url,
                            texto: data.text,
                            media: res.includes.media.filter((media) => data.attachments.media_keys[0] === media.media_key)[0].url
                        })
                    } else {
                        return ''
                    }


                }).filter((user, _, array) => user !== '');
                console.log(arrayUsers);
                setValue(arrayUsers);
            } else {
                throw new Error('Nenhum resultado foi encontrado para a busca')
            }
        })
        .catch((error) => setError(error.message))
        .finally(() => {
            setIsLoading(false)
        })
}

export default conectaAPI