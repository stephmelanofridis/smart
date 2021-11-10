export const GRAPHQL_API = '/graphql';
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
  ;

export const QUERY_CATEGORIES = `
  {
    categories {
      _id
      title
    }
  }
`;