// interacting with the browser 
// document object model 
// add change and delete 
// make a cool pop-up effect in the web page 
// these paragraph within div then it get the value 
// =============== QuerySELECTOR AND QUERYSELECTORALL ================
const para = document.querySelector('p')
console.log(para)
// we select the class main which is in paragraph and get the value 
const button = document.querySelector('.main')
console.log(button)
// for each paragraph we get the value 
const allPara = document.querySelectorAll('p')
allPara.forEach(para =>{
    console.log(para)
})
console.log(allPara[1])

// =============== ID CLASSNAME TAGNAME  ================


// get an element by id 
const main = document.getElementById('main-heading');
console.log(main)
// get an element by className 
const getClass = document.getElementsByClassName('main');
console.log(getClass)
console.log(getClass[1])
// getClass.forEach(para =>{
//     console.log(para)
// }) error and does not work 

// html collector $ node list 
// in html collector we did not get the for each value but instead of node list which 
// which is use in the querySelectorAll we get the forEach value 

// get an element by tagName 
const getTag = document.getElementsByTagName('p')
console.log(getTag)
// html collector (className and tagName ) we need to convert it into the array then use forEach 

// ===================== innertext and innerHTML ================
const getInnerHtml = document.querySelector('p')
// without square bracket call properties and with the methods 

console.log(getInnerHtml.innerText)
getInnerHtml.innerText = 'hello to the world'
getInnerHtml.innerText += '  concatination is working '
const content = document.querySelector('.new');
console.log(content.innerHTML)
content.innerHTML = '<h2>fatima</h2>';
content.innerHTML += '<h1>hello innerHTML</h1>';

const people = ['fatima', 'noor', 'hyesoo'];
people.forEach(person =>{
    content.innerHTML += `<h1>${person}</h1>`;
})

// ================== get and update the element ==================

const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
link.setAttribute ('href', 'https://humidpeach.com/');
link.innerText = 'humid peach website'
const value = document.querySelector('h2');
console.log(value.getAttribute('class'));
value.setAttribute('class', 'heading2');
value.setAttribute('style', 'color:green;');

const heading3 = document.querySelector('h3');
console.log(heading3.style)
console.log(heading3.style.color)
heading3.style.backgroundColor = 'black'
heading3.style.margin = '30px'
heading3.style.fontSize = '50px'


const heading6 = document.querySelector('h5');
console.log(heading6.classList)
heading6.classList.add('classify')
heading6.classList.remove('classify')
heading6.classList.add('success')

const heading4 = document.querySelectorAll('h4');
heading4.forEach(heading =>{
    if(heading.innerText.includes('error1')){
        heading.classList.add('error1')
    }
    if(heading.innerText.includes('success')){
        heading.classList.add('success')
    }
//    console.log(heading.innerText)
//    console.log(heading.textContent)

})
const title = document.querySelector('.title');
title.classList.toggle('test')
title.classList.toggle('test')
// if we toggle again with the same class name it remove the class which we toggle at first

//  so we get the domtokenList 
// heading3.setAttribute('style', 'margin: 50px;');
