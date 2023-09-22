import "./MarketCard.css";

const MarketCard = ({ market, showDetails }) => {
    const marketLink = market.market_link ? market.market_link.url : null;
    return (
        <div className="market-card cursor-pointer hover:shadow hover:shadow-green" onClick={showDetails}>
            <div className="market-card__top-half">
                <div className="market-card__date"> {market.operation_season} </div>
                <div className="market-card__title">{market.market_name} </div>
            </div>
            <div className="market-card__bottom-half">
                <div><strong>County:</strong> {market.county} </div>
                <div><strong>City:</strong> {market.city}</div>
                <div><strong>Zip Code:</strong> {market.zip}</div>
                <div><strong>Website:</strong> {marketLink ? <a href={marketLink} >Website</a> : 'N/A'}</div>
            </div>
        </div>
    )
}

export default MarketCard;