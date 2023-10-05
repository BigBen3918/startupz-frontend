/* eslint-disable @typescript-eslint/no-explicit-any */
function Card(props: any) {
    const { data } = props;

    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-4">
            <div className="card">
                <h3 style={{ color: `${data.color}` }}>{data.title}</h3>
                <p>{data.content}</p>
                <img src={data.image} alt={data.tile} />
                <button className="btn btn-outline-primary">More</button>
            </div>
        </div>
    );
}

export default Card;
