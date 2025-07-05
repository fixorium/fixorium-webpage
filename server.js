const express = require('express');
const app = express();
const api = require('./api');

app.use(express.json());

app.get('/api/blockchain/data', api.getBlockchainData);
app.get('/api/wallet/balance', api.getWalletBalance);
app.post('/api/token/deploy', api.deployToken);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
