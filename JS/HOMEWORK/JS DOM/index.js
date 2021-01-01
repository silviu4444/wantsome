const books = [
  {title: 'The Power of Habit',
   author: 'Charles Duhigg',
   read: true,
   img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545854312i/12609433._UY630_SR1200,630_.jpg"
  },
  {title: 'Mindset: The New Psychology of Success',
  author: 'Carol S. Dweck',
  read: false,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYzJogrFi_9NYV95Ur8kkELBGj3tYgxfZycVVp7-6fz511_it9IHPQIEiTISH7n2Lgfk4jEAr&usqp=CAc"
  }];

// Creati o pagina web care are un h1 cu "Book List"
// adugati un script style unde sa tinem js-ul
//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
const ul = document.createElement('ul');
const h1 = document.createElement('h1');
h1.textContent = "Book List";
document.body.appendChild(ul);
ul.appendChild(h1);


books.forEach(element => {
  let li = document.createElement('li');
  li.innerHTML = element.title;
  li.style.marginBottom = '15px';
  li.style.fontSize = '30px';
  li.style.padding = '0 10px';
  ul.appendChild(li);
  let img = document.createElement('img');
  img.style.marginBottom = '15px';
  img.setAttribute('src', element.img);
  img.classList.add('resize')
  ul.appendChild(img);
  if(element.read === true) {
   li.classList.add("isRead")
  } else {
    li.classList.add("isNotRead")
  }
})


//BONUS: folositi ul si li pentru a face display la carti
//BONUS: adaugati o proprietate pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
//BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.