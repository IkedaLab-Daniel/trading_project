import secure from '../assets/secure.svg'
import analytic from '../assets/analytic.svg'
import ui from '../assets/ui.svg'
import transaction from '../assets/transaction.svg'
function WebInfoSection(){
    
    return(
        <>
            <section id="web-info">
                <div className="element">
                    <img src={secure} alt="" />
                    <p className='title'>Secure</p>
                    <p className='description'>Given the sensitive nature of trading and the high value of financial assets, this site prioritizes security. This includes features like two-factor authentication (2FA), encryption, and secure payment gateways.</p>
                </div>
                <div className="element">
                    <img src={analytic} alt="" />
                    <p className='title'>Analytic Tools</p>
                    <p className='description'>WeCoin relies on having access to real-time market data. WeCoin provide up-to-the-second data on market prices, volume, trends, and other crucial metrics. Advanced analytics tools, like charting options and technical indicators.</p>
                </div>
                <div className="element">
                    <img src={ui} alt="" />
                    <p className='title'>Friendly UI</p>
                    <p className='description'>This site have an intuitive and clean interface. Users, especially beginners, need to be able to navigate easily, find necessary information, and perform transactions without confusion.</p>
                </div>
                <div className="element">
                    <img src={transaction} alt="" />
                    <p className='title'>Fast Transactions</p>
                    <p className='description'>Speed is critical in trading, where price fluctuations happen in milliseconds. WeCoin offer fast transaction processing to ensure that buy and sell orders are executed at the desired price points.</p>
                </div>
            </section>
        </>
    )
}

export default WebInfoSection