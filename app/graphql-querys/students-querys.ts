import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/',
  cache: new InMemoryCache()
});

const fieldfilter = (field?: string | string[]) => {
  const isFieldValid = ['cpf', 'name', 'email'].some((term)=> term === field)
  return isFieldValid? field: ''
}
type StudantsQueryProps = { field?: string | string[], searchTerms?: string | string[]}



export const fetchStudentsByAttributes = async ({field, searchTerms}: StudantsQueryProps) => {
  

  try{  
    const { data, error, loading,networkStatus } = await client.query({
      query: gql`
      {
        students(field: "${fieldfilter(field)}" , searchTerms: "${searchTerms? searchTerms: ''}") {          
          name
          cpf
          email
        }
      }
      `
    });
    return {
      props: {
        data,
        error:error || null,
        loading,networkStatus
      }
    }
   }catch (error) {
     console.log(error)
     console.log(error)
      return {
        props:{
          error: error?.graphQLErrors.length? error?.graphQLErrors[0].message : null
        }
      }
    }
}