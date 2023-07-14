const form = document.querySelector('form'); 
const input = document.querySelector('#nova-tarefa');
const list = document.querySelector('ul');
const deleteAllButton = document.querySelector('#apagar-tudo');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = input.value;
    if (task !== '') {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        listItem.textContent = task;
        deleteButton.textContent = 'x';
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
        input.value = '';
    }
});

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const li = event.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
    }
});

deleteAllButton.addEventListener('click', () => { 
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  });


