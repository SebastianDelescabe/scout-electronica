import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import products from '../../assets/data/productData';
import './ProductsDetail.css'


export const ProductsDetail = () => {

    const {id} = useParams()

    const [productID, setProductID] = useState(false)

    useEffect(() => {
      const filterItem = products.find(product => product.id == id)
      setProductID(filterItem)
    }, [productID])
    

    if(id){
      return (
        <div className='product__detail'> 
          <div className='product__detail-header'>
            <img src={productID.image} alt="" />
          </div>
          <div className='porduct__detail-body'>

          </div>
          <span>{productID.title}<strong>SCOUT</strong></span>
          <button>Más información</button>
        </div>
      )
    }
}
