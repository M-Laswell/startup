

  
  function displayQuote(data) {
    const random = Math.floor(Math.random() * 1000)
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#quote');
  
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('quote');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');
  
        quoteEl.textContent = data[random].text;
        authorEl.textContent = data[random].author;
        console.log(data);
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
      });
  }

  displayQuote();