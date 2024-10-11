import Card from "./Card"
function Page1(){
    const cryptos = [
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg', name: 'BTC', price: 61918.61, percentage: 1.85, currency: 'USDT' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Ethereum_logo.svg', name: 'ETH', price: 2436.84, percentage: 1.39, currency: 'USDT' },
    { icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.png?v=035', name: 'XRP', price: 0.5378, percentage: 0.41, currency: 'USDT' },
    { icon: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=035', name: 'LTC', price: 65.33, percentage: 1.41, currency: 'USDT' }
    ];

    return (
        <main>
            <div className="crypto-cards">
                {cryptos.map((crypto, index) => (
                <Card
                    key={index}
                    icon={crypto.icon}
                    name={crypto.name}
                    price={crypto.price}
                    percentage={crypto.percentage}
                    currency={crypto.currency}
                />
                ))}
            </div>
        </main>
        
    );
}
export default Page1