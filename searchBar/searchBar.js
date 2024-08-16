
const item = document.querySelectorAll('.searchBar')
const iceCream = document.querySelector('#iceCream')
const container = document.querySelectorAll('.container')
const test = document.querySelectorAll('section')
const typedWord = document.querySelector('.typed-words')


document.addEventListener('DOMContentLoaded', () => {
    let value = JSON.parse(localStorage.getItem('searchResultStorage'));
    typedWord.textContent = `"${value}"` 
    // let relatedContent = document.querySelector('.related-content');
    let itemLowerCase = item.value;
    console.log(itemLowerCase);

})

const bar = document.querySelector('#site-search')

bar.addEventListener('input', () => {
    let word = [];
    word.push(bar.value)
    localStorage.setItem('searchResultStorage', JSON.stringify(word));
})


