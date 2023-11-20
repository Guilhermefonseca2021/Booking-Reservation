import "./featured.css";

export default function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
            className="featuredImg"
          src="https://img.freepik.com/premium-photo/tambau-beach-joao-pessoa-paraiba-brazil-november-18-2007_491130-283.jpg?w=600"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Joao Pessoa - PB</h1>
          <h1>127 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
            className="featuredImg"
          src="http://1.bp.blogspot.com/-zHgOmp9WxRA/TzVYqDHl75I/AAAAAAAAPo4/c1wJSwF0fa0/s640/salvador-barra-aerea.jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Salvador </h1>
          <h1>87 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
            className="featuredImg"
          src="https://1.bp.blogspot.com/-F4RwVyMel00/T9H6LD8lg5I/AAAAAAAAZTE/nisZzDXlbIM/s620/Pontes-do-Recife.jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Recife - PB</h1>
          <h1>117 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
            className="featuredImg"
          src="https://3.bp.blogspot.com/-yL6fenQxoec/U4xRdma5RLI/AAAAAAAA_tU/wzoE0iU6w_I/s640/Vitoria-da-Conquista-3.jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Vitoria - BA</h1>
          <h1>114 properties</h1>
        </div>
      </div>
    </div>
  );
}
