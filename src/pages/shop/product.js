

export const Product =(props) => {

    const {id , productName , productImage , price } = props.data ;

    return(

        <div className="col-3">

            <img src={productImage} className="w-100" />
            <h4>{productName}</h4>
            <p>price : {price}$</p>
            <button className="btn btn-info btn-sm">+</button>
            <span className="mx-2">0</span>
            <button className="btn btn-info btn-sm">-</button>
        </div>
    )
}