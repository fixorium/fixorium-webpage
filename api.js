 const fixoriumBlockchainApi = new FixoriumBlockchainApi();
const fixoriumWalletApi = new FixoriumWalletApi();

exports.getBlockchainData = (req, res) => {
    fixoriumBlockchainApi.getBlockchainData().then((data) => {
        res.json(data);
    }).catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve blockchain data' });
    });
};

exports.getWalletBalance = (req, res) => {
    fixoriumWalletApi.getBalance().then((balance) => {
        res.json({ balance });
    }).catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve wallet balance' });
    });
};

exports.deployToken = (req, res) => {
    const tokenName = req.body.tokenName;
    const tokenSymbol = req.body.tokenSymbol;
    fixoriumWalletApi.deployToken(tokenName, tokenSymbol).then((tokenAddress) => {
        res.json({ tokenAddress });
    }).catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to deploy token' });
    });
};
