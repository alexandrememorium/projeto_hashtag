async function conectaAPI(url) {

    let twitterHeaders = new Headers();
    twitterHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX");

    let requestOptions = {
        method: 'GET',
        headers: twitterHeaders
    };

    const promise = await fetch(url, requestOptions).then((data) => data.json());
    
    if (promise.meta.result_count > 0) {
        
        const verifica = {
            users: await promise.data.map((data) => {
                if ('attachments' in data) {
                    return {
                        id: data.author_id,
                        nome: promise.includes.users.filter((user) => user.id === data.author_id)[0].name,
                        user: promise.includes.users.filter((user) => user.id === data.author_id)[0].username,
                        ftPerfil: promise.includes.users.filter((user) => user.id === data.author_id)[0].profile_image_url,
                        texto: data.text,
                        media: promise.includes.media.filter((media) => {
                            if (data.attachments.media_keys[0] === media.media_key) {
                                return true
                            } else {
                                return false
                            }
                        })[0].url
                    }
                } else {
                    return ''
                }
            }).filter(data => data !== ''),
            token: promise.meta.next_token
        };

        return verifica
    } else {
        throw new Error('Nenhum resultado encontrado para sua busca');
    }
}

export default conectaAPI