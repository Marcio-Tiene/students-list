import styled from 'styled-components'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { GetServerSideProps } from 'next';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};

`
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql/',
    cache: new InMemoryCache()
  });
export default function Home(props) {
  
  return <><Title>{props.data.students.map(student=> student.name)}</Title>
  <button>zas</button></>
}

export const getServerSideProps : GetServerSideProps = async () => {
  
  
  try{  
    const { data, error, loading,networkStatus } = await client.query({
      query: gql`
      {
        students(field: "name", searchTerms: "") {          
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
      return {
        props:{
          error: error.graphQLErrors[0].message
        }
      }
    }

 
  
 
  
}
