const postService = {
    load: function (id) {
        return fetch(`http://localhost:9000/api/trip${id ? `/${id}` : ''}`, {
                    method: 'GET',
                        headers: {
                          'Content-type': 'application/json',
                          'Accept': 'application/json'
                        },
                        credentials: 'include'
                }).then(res => res.json())


        // return fetch(`http://localhost:9000/api/trip${id ? `/${id}` : ''}`,{
        //     method: 'GET',
        //         headers: {
        //           'Content-type': 'application/json',
        //           'Accept': 'application/json'
        //         },
        //         credentials: 'include'
        // }).then(res => res.json())
    },
    create: function (data) {
        return fetch(`http://localhost:9000/api/trip/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }).then(res => res.json());
    }
};

export default postService;