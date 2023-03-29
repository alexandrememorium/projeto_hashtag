function conectaAPI(url, setValue, setIsLoading) {

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    fetch(url, requestOptions)
        .then(async (response) => {

            const res = await response.json();
            console.log(res)
            const arrayUsers = res.datas.map((data, index) => {
                
                if ('attachments' in data) {
                    const usuario = {
                        id: data.author_id,
                        nome: res.includes.users.filter((user) => user.id === data.author_id)[0].name,
                        user: res.includes.users.filter((user) => user.id === data.author_id)[0].username,
                        ftPerfil: res.includes.users.filter((user) => user.id === data.author_id)[0].profile_image_url,
                        texto: data.text,
                        media: res.includes.media.filter((media) => data.attachments.media_keys[0] === media.media_key)[0].url
                    }
                    
                    return usuario
                }
                
            })
            
            setValue(arrayUsers.filter((user, _, array) => user !== undefined));
        })
        .finally(() => {
            setIsLoading(false)
        })
}

export default conectaAPI