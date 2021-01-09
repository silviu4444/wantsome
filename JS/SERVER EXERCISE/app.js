const req = () => {
    const xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    xmlReq.onload = () => {
      const serverResponse = JSON.parse(xmlReq.response);
      console.log(serverResponse);
      // JSON.stringify(javaScriptObj)
      const header = document.getElementsByTagName('header')[0];
      const h1 = document.createElement('h1');
      h1.textContent = serverResponse.squadName;
      header.appendChild(h1);
      const pHeader = document.createElement('p');
      pHeader.textContent = serverResponse.homeTown;
      header.appendChild(pHeader);
      const section = document.getElementsByTagName('section')[0];
      const articleOne = document.createElement('article');
      const h2ArticleOne = document.createElement('h2');
      h2ArticleOne.textContent = serverResponse.members[0].name;
      articleOne.appendChild(h2ArticleOne);
      const pOneArticleOne = document.createElement('p');
      pOneArticleOne.textContent = 'Secret Identity: ' + serverResponse.members[0].secretIdentity;
      articleOne.appendChild(pOneArticleOne);
      section.appendChild(articleOne);
      const pTwoArticleOne = document.createElement('p');
      pTwoArticleOne.textContent = "Age: " + serverResponse.members[0].age;
      articleOne.appendChild(pTwoArticleOne);
      const pThreeArticleOne = document.createElement('p');
      pThreeArticleOne.textContent = 'Superpowers:';
      articleOne.appendChild(pThreeArticleOne);

      const superPowers1 = serverResponse.members[0].powers;

      superPowers1.forEach(element => {
          const li = document.createElement('li');
          li.textContent = element;
          articleOne.appendChild(li);
      });


      const articleTwo = document.createElement('article');
      const h2ArticleTwo = document.createElement('h2');
      h2ArticleTwo.textContent = serverResponse.members[1].name;
      articleTwo.appendChild(h2ArticleTwo);
      const pOneArticleTwo = document.createElement('p');
      pOneArticleTwo.textContent = 'Secret Identity: ' + serverResponse.members[1].secretIdentity;
      articleTwo.appendChild(pOneArticleTwo);
      section.appendChild(articleTwo);
      const pTwoArticleTwo = document.createElement('p');
      pTwoArticleTwo.textContent = "Age: " + serverResponse.members[1].age;
      articleTwo.appendChild(pTwoArticleTwo);
      const pThreeArticleTwo = document.createElement('p');
      pThreeArticleTwo.textContent = 'Superpowers:';
      articleTwo.appendChild(pThreeArticleTwo);

      const superPowers2 = serverResponse.members[1].powers;

      superPowers2.forEach(element => {
          const li = document.createElement('li');
          li.textContent = element;
          articleTwo.appendChild(li);
      });



      const articleThree = document.createElement('article');
      const h2ArticleThree = document.createElement('h2');
      h2ArticleThree.textContent = serverResponse.members[2].name;
      articleThree.appendChild(h2ArticleThree);
      const pOneArticleThree = document.createElement('p');
      pOneArticleThree.textContent = 'Secret Identity: ' + serverResponse.members[2].secretIdentity;
      articleThree.appendChild(pOneArticleThree);
      section.appendChild(articleThree);
      const pTwoArticleThree = document.createElement('p');
      pTwoArticleThree.textContent = "Age: " + serverResponse.members[2].age;
      articleThree.appendChild(pTwoArticleThree);
      const pThreeArticleThree = document.createElement('p');
      pThreeArticleThree.textContent = 'Superpowers:';
      articleThree.appendChild(pThreeArticleThree);

      const superPowers3 = serverResponse.members[2].powers;

      superPowers3.forEach(element => {
          const li = document.createElement('li');
          li.textContent = element;
          articleThree.appendChild(li);
      });
    };
    xmlReq.send();
  };
  
  req();