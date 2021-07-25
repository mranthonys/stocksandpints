


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
            return /^[a-z]+[0-9]$/.test(stock);

        }

        function isValidBrew(brew){
            return /^[a-z]+$/.test(brew);
        }

        function showOrHideTip(show, element) {
            const tip = document.querySelector('.tip')
            if (show) {
              tip.style.display = "inherit";
            } else {
              tip.style.display = "none";
            }
          }
        function createListener(validator) {
            return e => {
                const text = e.target.value;
                const valid = validator(text);
                const showTip = text !== "" && !valid;
                const toolTip = e.target.nextelementSibling;
                showOrHideTip(showTip, toolTip);
            };
        }

        stock.addEventListener('input', createListener(isValidStock));
        brew.addEventListener('input', createListener(isValidBrew));



        












const skills = [

{
    name: 'Javascript',
    featured: 'OnClick, Arrays and ClickandChange',
    experience: '5 Months',
    img: 'https://image.flaticon.com/icons/png/128/919/919828.png'
}, 

{
    name: 'CSS',
    featured: 'Flexbox, Media Queries and :Nth-Chlid',
    experience: '5 months',
    img: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://www.highlander.co.uk/wp-content/uploads/2020/09/CSS3Logo-100x100.jpg'
},

{
    name: 'HTML',
    featured: 'Proper Communication with JS',
    experience: '5 months',
    img: 'https://www.dev-metal.com/wp-content/uploads/2014/04/html5-1-100x100.jpg'
},

{
    name: 'Git/Github',
    featured: 'Basic professional Knowledge of Git',
    experience: '5 months',
    img: 'https://img.icons8.com/ios-filled/2x/github.png'
}

];

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
