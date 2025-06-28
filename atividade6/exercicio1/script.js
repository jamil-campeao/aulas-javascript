document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    //Funcao para adicionar uma nova tarefa

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            inclueNovaTarefa(taskText)
            taskInput.value = ''
        }
    });


    function inclueNovaTarefa(texto) {
        const listItem = document.createElement('li') //Crio um novo item na lista

        const taskSpan = document.createElement('span')

        taskSpan.textContent = texto
        taskSpan.addEventListener('click', () => {
            listItem.classList.toggle('completed')
        })

        const removeButton = document.createElement('button')
        removeButton.textContent = 'Remover'
        removeButton.classList.add('remove-btn')
        removeButton.addEventListener('click', () => {
            taskList.removeChild(listItem)
        })

        listItem.appendChild(taskSpan)
        listItem.appendChild(removeButton)
        taskList.appendChild(listItem)

        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault()
                addTaskBtn.click()
            }
        })


    }
})