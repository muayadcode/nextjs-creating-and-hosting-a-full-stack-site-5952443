import { products } from "@/app/product-data"

export default function ProdcutDetailPage({ params }:{params:{id: string}}){

  const product = products.find( p => p.id === params.id)
  if (!product) {
    return <h1>Product not found</h1>
    }
    return(
      <>
      <h1>{product.name}</h1>
      <h3>${product.price}</h3>
      <p>{product.description}</p>
      </>

    ) 
}