import './trendingCurrency.css'
function TrendingCurrency({cryptoName,img}) {

    return (
        <div className="trendingCurrency__container">
            <img src={img} alt="crypto_logo"/>
                <h4>{cryptoName}</h4>
        </div>
    );
}

export default TrendingCurrency;
