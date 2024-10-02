const textInput = document.getElementById('item-input');
const addBtn = document.getElementById('item-add');
const popBtn = document.getElementById('item-pop');
const counter = document.querySelector('p>span');
const list = document.querySelector('.items>ul');
const colorDiv = document.getElementById('color-div')
const themeLight = document.getElementById('light-theme');
const themeDark = document.getElementById('dark-theme');

function addItem(item) {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
}

function popItem() {
    if (list.children.length !== 0) {
        list.removeChild(list.lastElementChild);
    }
    else {
        alert("No Items!");
    }
}

addBtn.addEventListener('click', e => addItem(textInput.value));
popBtn.addEventListener('click', popItem);
// popBtn.removeEventListener('click', popItem);

textInput.addEventListener('input', e => {
    counter.textContent = e.target.value.length;
});

colorDiv.addEventListener('mouseenter', e => {
    colorDiv.style.backgroundColor = `#${Math.random().toString(16).slice(-6)}`;
})

themeLight.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'light');
});

themeDark.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
});
