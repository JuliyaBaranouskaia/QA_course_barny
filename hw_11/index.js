async function getTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        if (!response.ok) {
            throw new Error('response error')
        }
        const todos = await response.json()
        return todos
    } catch (error) {
        console.error('error', error)
    }
}

function printTodos(todos) {
    if (!todos || todos.length === 0) {
        console.log('no data')
        return
    }

    todos.forEach(todo => {
        console.log(`id: ${todo.id}, title: ${todo.title}`)
    })
}

async function returnDataForTask() {
    const todos = await getTodos()
    printTodos(todos)
}

returnDataForTask()