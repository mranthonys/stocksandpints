


const mainNav = document.querySelector('.main-nav');
const bear = document.querySelector('.bear');

// hamburger menu toggle
function toggleMainNav(){
    
    var x = document.getElementById("myMenu");
    console.log(x.style.display)
    
    x.classList.toggle('hidden');
        
    mainNav.classList.toggle('active')
}

mainNav.addEventListener('click', toggleMainNav);

// API
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily')
        .then(response => response.json())
        .then(data => generateData(data))

        function generateData(data) {
            console.log(data);
            const stocks = document.querySelector('.secondary');
            let tableContents = ''; 

            for (let [index, price] of data.prices.entries()){
                tableContents += `
                <tr>
                    <td>
                    ${index +1}
                    </td>
                    <td>
                        ${price}
                    </td>
                </tr>`;
            }
            
            const html = `
            <table>
            <tr>
                <th>Day(s)</th>
              <th>Bitcoin Prices</th>
            </tr>
            ${tableContents}
          </table>
            `;
            stocks.innerHTML = html;
            
        }

        fetch('https://api.openbrewerydb.org/breweries?by_state=kentucky')
            .then(res => res.json())
            .then(data => generateBeer(data))

        function generateBeer(data) {
            console.log(data);
            const beer = document.querySelector('.primary');
            let otherTable = '';

            for(let brewery of data) {
                otherTable += `
                <tr>
                <td>
                    ${brewery.name}
                </td>
            </tr>`;
            }
                const html = `
                <table>
                <tr>
                <th>Choose a Brewery</th>
                </tr>
                ${otherTable}
            </table>
                `;
                beer.innerHTML = html;


        }

        // post data with form
        const form = document.querySelector('.sixy');

        function postData(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const comment = document.getElementById('comment').value;

            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: name, comment: comment})
            }

            fetch('https://jsonplaceholder.typicode.com/comments', config)
                .then(response => response.json())
                .then(data => displayOutput(data))

                function displayOutput(data){
                    console.log(data);
                    const seven = document.querySelector('.seven');

                seven.innerHTML = `
                
                    <h1>Heres your DATA</h1>
                
                    <p>Stock Price: ${data.name}</p> 
                
                    <p>Brewery: ${data.comment}</p>
                    
                    <p>id: ${data.id}</p>

                    `;
                    
                }
        }
        form.addEventListener('submit', postData);

        // validate form using regex

        const stock = document.querySelector('.stocks');
        const brew = document.querySelector('.brew');

        function isValidStock(stock){
            console.log(stock);
            return /^[a-z]+ [0-9]$/.test(stock);

        }

        function isValidBrew(brew){
            return /^[a-z]+$/.test(brew);
        }

        function showOrHideTip(show, element) {
            const tips = document.getElementsByClassName('tip')
            const tip = element === 'stocks' ? tips[0] : tips[1];
            console.log(tip);
            if (show) {
              tip.style.display = "inherit";

            } else {
              tip.style.display = "none";
            }
            
          }
        function createListener(validator, toolTip) {
            console.log('im typing')
            return e => {
                const text = e.target.value;
                const valid = validator(text);
                console.log(valid);
                const showTip = text !== "" && !valid;
                console.log(showTip);
                showOrHideTip(showTip, toolTip);
            };
        }

        stock.addEventListener('input', createListener(isValidStock, 'stocks'));
        brew.addEventListener('input', createListener(isValidBrew, 'brew'));

        // Parsing my Json File
        fetch('data.json')
            .then(response => response.json())
            .then(data => displayArray(data))

            function displayArray(data) {
    const main = document.querySelector('main')
    let html = '';

        for ( let i = 0; i < skills.length; i++ ) {
            let skill = skills[i];
            html += `
                <img src="${skill.img}" class="arrayImg">
                <p class="arrayName">${skill.name}</p>
                <p class="arrayFeatured">${skill.featured}</p>
                <p class="arrayExperience">${skill.experience}</p>
                
            `;
        }
    main.insertAdjacentHTML('beforeend', html);   
}


