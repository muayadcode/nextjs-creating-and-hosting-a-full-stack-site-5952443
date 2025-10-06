import { products } from "@/app/product-data"
import NotFoundPage from "@/app/not-found"
export default function ProdcutDetailPage({ params }:{params:{id: string}}){

  const product = products.find( p => p.id === params.id)
  if (!product) {
    return <NotFoundPage/>
    }
    return(
      <>
      <h1>{product.name}</h1>
      <h3>${product.price}</h3>
      <p>{product.description}</p>
      </>

    ) 
}