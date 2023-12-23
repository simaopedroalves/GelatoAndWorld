  const toggleButton = document.getElementsByClassName('toggle-button')[0];
  const navbarLinks = document.getElementsByClassName('navbar-links')[0];

  toggleButton.addEventListener('click', () => {
     navbarLinks.classList.toggle('active');
  })


$(document).ready(function(){
     $("img").addClass("img-responsive");
     $(".litle-radius-1").css("border-radius","0 0 0 10px");
     $(".litle-radius-2").css("border-radius","0 0 10px 0");
     $(".post-blog").addClass("text-center");  
     $(".contacts-form").addClass("text-justify");
    
}) 

// VERIFICAR O NOME DA PESSOA 
const verifyName = () => {
  
  let name = document.getElementById('name');
  let labelName = document.getElementById('labelName');
  let regex = /^[a-z|\s]+$/gi;

  

  if (name.value.match(regex)) {
    name.style.borderColor = "green";
    labelName.textContent = "Name";
    labelName.style.color = "black";
    return true;
  } 
  else {
    name.style.borderColor = "red";
    labelName.textContent = "Invalid Name";
    labelName.style.color = "red";
    return false;
  } 

}

//     

// VERIFICAR O EMAIL DA PESSOA 

const verifyEmail = () => {

  let labelEmail = document.getElementById('labelEmail');
  let email = document.getElementById('email');
  let regex = /^([0-9]|[a-z]|.|_)+\b@\b[a-z]{2,6}\.[a-z]{2,3}$/g
  let submitBtn = document.getElementById('submit')

  if (email.value.match(regex)) {

    email.style.borderColor = "green";
    email.style.borderColor = "green";
    labelEmail.textContent = "Email";
    labelEmail.style.color = "black"
    
    return true;
  }
   else {

    email.style.borderColor = "red";
    labelEmail.textContent = "Invalid Email";
    labelEmail.style.color = "red";
    submitBtn.disabled;
    return false;
   }
}

//SUBJECT 

const assunto = () => {

  let labelSubject = document.getElementById('labelSubject');
  let subjectname= document.getElementById('subject');
  let regex = /\w{5,}/gi;
  

  if (subjectname.value.match(regex)) {

   subjectname.style.borderColor = "green";
   labelSubject.textContent = "Subject"
   return true;
  }
  
  else {
    subjectname.style.borderColor = "red";
    return false;
  }

}

// SCROLL BEHAVIOR BLOG SECTION

const scrollContainer = document.querySelector('.blog')
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

//CURSOR SOBRE O DIV FAZ SCROLL COM A RODA DO RATO

// scrollContainer.addEventListener('wheel', (scroll) => {
//   scroll.preventDefault();
//   scrollContainer.scrollLeft += scroll.deltaY;
//   scrollContainer.style.scrollBehavior = 'auto'; 
// });
//BOTÃO PARA NEXT DIV
// nextBtn.addEventListener('click', () => {
//   scrollContainer.scrollLeft += 3000;
//   scrollContainer.style.scrollBehavior = 'smooth';
// })
//BOTÃO PARA BACK DIV
// backBtn.addEventListener('click', () => {
//   scrollContainer.scrollLeft -= 3000;
//   scrollContainer.style.scrollBehavior = 'smooth';
// })

const greece = document.getElementById('greece')  //1ª
const momGreece =  document.querySelector('.testUm')  //2ª
const sonGreece = document.querySelector('.greece-son') //3ª
const body = document.querySelector('.body')
const travel = document.querySelector('.travel')
const instagram = document.querySelector('.instagram')
const goBackBtn = document.querySelector('.goBack')
const footer = document.querySelector('.footer')


// greece.addEventListener('click', () => {

//   if (momGreece.style.display = 'none') {
      
//         momGreece.style.display = 'grid'
//         travel.style.display = 'none'
//         instagram.style.display = 'none'
//         footer.style.display = 'none'

//     } else {
//       momGreece.style.display = 'none'
//     }
// });


// goBackBtn.addEventListener('click', () => {
//   if (momGreece.style.display = 'grid') {
//     momGreece.style.display = 'none'
//     travel.style.display = 'grid'
//     instagram.style.display = ''
//   } else {
//   momGreece.style.display = 'grid'
//   }
// })


const fullWidthImage = document. querySelector('.repeated-img')
const lastImageFullWidth = document. querySelector('.lastImageFullWidth')
const greeceCityOneBtn = document.getElementById('greeceCityOneBtn')
const greeceCityOneText = document.querySelector('.greeceCityOneText')

// greeceCityOneBtn.addEventListener('click', () => {

//   greeceCityOneText.style.display = 'grid'
//   momGreece.style.display = 'none'
//   fullWidthImage.style.display = 'none'
//   lastImageFullWidth.style.display = 'none'

// })

const backGreeceCitys = document.querySelector('[data-backGreeceCitys]');

// backGreeceCitys.addEventListener('click', () => {
  
//   fullWidthImage.style.display = ''
//   lastImageFullWidth.style.display = ''
//   momGreece.style.display = 'grid'
//   greeceCityOneText.style.display = 'none'

// })

// ======================  SEARCH BAR =========================

const bar = document.querySelector('#site-search')
const item = document.querySelectorAll('.searchBar')
const iceCream = document.querySelector('#iceCream')
const container = document.querySelectorAll('.container')
// const test = document.querySelectorAll('section')     

//  test.forEach(el => {
//    el.classList.add('container')
//  })


// iceCream.addEventListener('click', () => {

//   for (let i = 0; i <= container.length; i++) {
//       let search = container[i].getElementsByTagName('h2')[0]
//       let res = search.textContent.toLowerCase()
//       let barValue = bar.value.toLowerCase()

//     if (res.indexOf(barValue) > -1) {
//       //  container[i].style.display = 'grid';
//       //  container[i].style.color = 'red'
//     }
    
//     else {
//         container[i].style.display = 'none'
     
//     }

    
//   }
// })


// console.log(test);



