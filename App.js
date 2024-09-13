
let str = 'Hello from React';
let str1 = [];
for (let index = 0; index < 10; index++) {
    let text = 'I am child ' + (index+1);
    let tag = React.createElement('h3', { id: 'testing' }, text);
    str1.push(tag);
 };
let content;
content = [[React.createElement('h1', { id: 'testing' }, 'I am Father 1'), ...str1], [React.createElement('h1', { id: 'testing' }, 'I am Father 2'), ...str1]];
const Heading = React.createElement('div', {id:'testing'},content);
const root = ReactDOM.createRoot(document.getElementById('root'));
// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// console.log('Here',Heading);
root.render(Heading);
ReactDOM.render(Heading, document.getElementById('root1'));