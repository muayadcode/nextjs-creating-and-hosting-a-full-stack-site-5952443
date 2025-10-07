import { NextRequest } from "next/server";
import { products } from "@/app/product-data";

/// type interface
type shoppingCart = Record <string, string []> ;


const carts: shoppingCart = {
  '1': ['123', '234'],
  '2': ['345', '456'],
  '3': ['234'], 

}

type Params = {
  id: string;
}


export async function GET (request: NextRequest, {params}: {params: Params}){

  const userId = params.id;
  const productIds = carts [userId];

  if (productIds === undefined){
    return new Response (JSON.stringify ([]),{
    status : 200, 
    headers:{
      'Content-Type': 'application/json'
    }

    })
  }
  const cartProducts = productIds.map(id => products.find (p => p.id === id));

  return new Response (JSON.stringify(cartProducts), {
    status : 200, 
    headers:{
      'Content-Type': 'application/json'
    }

  })

}

type CartBody = {
  productId: string;
}


export async function POST (request: NextRequest, {params}: {params: Params}){
  const userId = params.id;
  const body: CartBody = await request.json();
  const productId = body.productId;

  carts[userId] = carts[userId] ? carts[userId].concat(productId) : [productId]
  const carProducts = carts[userId].map(id => products.find (p => p.id === id));


  return new Response (JSON.stringify (carProducts),{
    status: 201,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function DELETE (request: NextRequest, {params}: {params: Params}){
  const userId = params.id;
  const body: CartBody = await request.json();
  const productId = body.productId;

  
  carts[userId] = carts[userId]? carts[userId].filter(id => id !== productId) : [];
  const carProducts = carts[userId].map(id => products.find (p => p.id === id));
  
  return new Response (JSON.stringify (carProducts),{
    status: 202,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}