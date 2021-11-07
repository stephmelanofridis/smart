export const GRAPHQL_API = 'http://localhost:3001/graphql';
export const GET_PRODUCTS_QUERY = `  {
    products {
      _id
      title
      description
      image
      price
      inStock
      category {
        title
      }
    }
  }`