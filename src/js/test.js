const div = document.createElement('div');
const fragment = document.createDocumentFragment('fragment');

div.textContent = 'DDDDDDDIIIIIIIIIIVVVVVVVV';
div.classList = 'text-orange-400';

fragment.appendChild(div);
document.body.appendChild(fragment);