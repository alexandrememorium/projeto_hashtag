class ConectaAPI {

    static resultado = [];

    static async conexãoComAPI(itemBusca, url = `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${itemBusca} lang:pt has:images&expansions=attachments.media_keys,author_id,referenced_tweets.id,geo.place_id&media.fields=url&place.fields=country_code&user.fields=name,username,profile_image_url`) {
        
        let twitterHeaders = new Headers();
        twitterHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX");
        let requestOptions = {
            method: 'GET',
            headers: twitterHeaders
        };
        const promise = await fetch(url, requestOptions).then((data) => data.json());
        
        return promise
    }

    static async tweetsCartao(itemBusca, url) {

        const promise = await this.conexãoComAPI(itemBusca, url);

        if (promise.meta.result_count > 0) {
            const tweetsTexto = await promise.data.map((data) => {
                return {
                    id: data.author_id,
                    nome: promise.includes.users.filter((user) => user.id === data.author_id)[0].name,
                    user: promise.includes.users.filter((user) => user.id === data.author_id)[0].username,
                    ftPerfil: promise.includes.users.filter((user) => user.id === data.author_id)[0].profile_image_url,
                    texto: data.text
                }
            });
            const token = promise.meta.next_token
            return { tweetsTexto, token }
        } else {
            throw new Error('Nenhum resultado encontrado para sua busca');
        }
    }

    static async tweetsCarrossel(itemBusca, url) {

        const promise = await this.conexãoComAPI(itemBusca, url);

        if (promise.meta.result_count > 0) {

            while (this.resultado.length < 10) {
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
                this.resultado.push(...verifica.users);
                ConectaAPI.tweetsCarrossel(itemBusca, `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${itemBusca} lang:pt has:images&expansions=attachments.media_keys,author_id,referenced_tweets.id,geo.place_id&media.fields=url&place.fields=country_code&user.fields=name,username,profile_image_url&next_token=${verifica.token}`)
            }
            return this.resultado
        } else {
            throw new Error('Nenhum resultado encontrado para sua busca');
        }
    }
}

export default ConectaAPI;