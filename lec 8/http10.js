const http = require('http');


const numShares = 100;
const purchasePrice = 50;
const sellPrice = 60;


const totalCost = numShares * purchasePrice;
const totalRevenue = numShares * sellPrice;
const profitOrLoss = totalRevenue - totalCost;
const isProfit = profitOrLoss >= 0;


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    let color = isProfit ? 'green' : 'red';
    let type = isProfit ? 'Profit' : 'Loss';

   
    res.write(`
        <div style="font-family: Arial; padding: 20px;">
            <h2>Investment Summary</h2>
            <p>Shares: ${numShares}</p>
            <p>Buy Price: ${purchasePrice}</p>
            <p>Sell Price: ${sellPrice}</p>
            <hr>
            <h1 style="color: ${color};">
                ${type}: ${Math.abs(profitOrLoss)}
            </h1>
        </div>
    `);
    res.end();
});

// Port configuration
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
