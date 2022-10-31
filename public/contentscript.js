/**
 * Utility function to add CSS in multiple passes.
 * @param {string} styleString
 */
 function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }
  
  addStyle(`
      .summary {
          background-color: #2156c1;
          border-radius: 10px;
          color: white;
          font-weight: bold;
          right: 30px;
          padding: 10px;
          font-size: 1rem;
          float: right;
          cursor: pointer;
          transition: background-color 0.25s ease;
      }
  
      .summary:hover {
          background-color: #6482f5; 
      }
  `);
  
  let element = document.createElement('span');
  element.classList.add('summary');
  const btb = document.querySelector("[class*='btb']"); // supossing there's only one Budget-to-Beat element
  const amount = Number(btb.innerText.replace(' €', ''));
  const injectedText = document.createTextNode(`Budget-to-Beat: ${amount} €`);
  
  element.appendChild(injectedText);
  
  const parentElement = document.querySelector(
    '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > h1',
  );
  parentElement.appendChild(element);
  
  element.addEventListener('click', () => {
    console.log('the budget button has been clicked!');
  });
  