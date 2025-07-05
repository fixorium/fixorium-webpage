const fixoriumWalletApi = new FixoriumWalletApi();
const getBalanceBtn = document.getElementById('get-balance-btn');
const balanceContainer = document.getElementById('balance-container');
const deployTokenForm = document.getElementById('deploy-token-form');
const tokenDeploymentContainer = document.getElementById('token-deployment-container');

getBalanceBtn.addEventListener('click', () => {
    fixoriumWalletApi.getBalance().then((balance) => {
        balanceContainer.innerText = `Wallet balance: ${balance}`;
    }).catch((error) => {
        console.error(error);
    });
});

deployTokenForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const tokenName = document.getElementById('token-name').value;
    const tokenSymbol = document.getElementById('token-symbol').value;
    fixoriumWalletApi.deployToken(tokenName, tokenSymbol).then((tokenAddress) => {
        tokenDeploymentContainer.innerText = `Token deployed at address: ${tokenAddress}`;
    }).catch((error) => {
        console.error(error);
    });
});
