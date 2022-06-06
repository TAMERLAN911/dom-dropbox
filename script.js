const h1 = document.createElement('h1');
h1.textContent = 'Работа с DOM'
document.body.prependChild('h1');

const a = document.createElement('a');
a.href = 'http://https://ru.wikipedia.org/wiki/Document_Object_Model'
a.textContent = 'DOM'
const main = document.getElementById('main');
main.appendChild(a);


const backgroundColor = (color) => {
    document.body.style.backgroundColor = color
}
backgroundColor = 'blue'

const addLi = (text) => {
    const li = document.createElement('li')
    const list = document.getElementById('list')
    li.textContent = text
    li.appendChild(li)
}
addLi('shmunk')

const removeCopyright = (id) => {
    const el = document.getElementById(id);
    el.remove();
  };
  removeCopyright('copyright')
