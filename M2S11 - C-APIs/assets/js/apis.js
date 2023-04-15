$(document).ready(function () {
    //ambito de las variables:
    //1. global
    //2. local

    var numero = 1

    $('#uno').click(function () {
        const bandera = true
        alert(numero, bandera)
    })

    $('#dos').click(function () {
        const numero = 3
        //acá no conoce bandera
        //alert(numero, bandera)
        alert(numero)
    })
    //acá no conoce bandera
    //console.log(bandera)

    $("#get-posts").click(function () {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        fetch(url)
            .then(response => response.json()) //no se puede encerrar porque es una nueva promesa
            .then(json => {
                console.log('***', json)
                console.log(typeof json)
                console.log(json.length)
                console.log(json[0])
                console.log(json[0].title)

                for (let index = 0; index < 10; index++) {
                    const todo = json[index]
                    console.log(todo)
                }

                const todosCompleted = json.filter((todo) => todo.completed === false) //busca mas de 1 elemento
                console.log(todosCompleted.length)

                const todo10 = json.find((todo) => todo.id === 10) //busca solo 1 coincidencia
                console.log(todo10)

            })
    })


    $("#get-post").click(function () {
        const url = 'https://jsonplaceholder.typicode.com/posts/8'
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log({ json })
                console.log({ body: json.body })
            })
    })

    $("#create-post").click(function () {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url, {
            method: "POST", //GET, PUT, DELETE, PATCH
            body: JSON.stringify({
                title: 'Soy un titulo',
                body: 'Soy un text',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
        .then(response => response.json())
        .then(json => console.log(json));      
    })

    $("#get-users").click(function () {
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(response => response.json())
            .then(users => {
                console.log({ users })
                const list = $('#usersList')
                let usersList = ''
                for (let index = 0; index < users.length; index++) {
                    const user = users[index];
                    usersList = usersList + `<li>${user.name} ${user.email} ${user.username}</li>`
                }
                list.append(usersList)
            })
    })

})