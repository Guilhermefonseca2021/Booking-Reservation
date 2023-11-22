import "./searchitem.css";

export default function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="http://1.bp.blogspot.com/-zHgOmp9WxRA/TzVYqDHl75I/AAAAAAAAPo4/c1wJSwF0fa0/s640/salvador-barra-aerea.jpg"
        alt=""
        className="searchImg"
      />
      <div className="searchDesc">
        <h1 className="searchTitle">Tower Street Apartments</h1>
        <span className="searchDistance">500m from center</span>
        <span className="searchTaxiOp">Free airport taxi</span>
        <span className="searchSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="searchFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="searchCancelOp">Free cancellation </span>
        <span className="searchCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="searchDetails">
        <div className="searchRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchDetailTexts">
          <span className="searchPrice">$112</span>
          <span className="searchTaxOp">Includes taxes and fees</span>
          <button className="searchCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
}
