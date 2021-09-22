import styled from 'styled-components'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { fetchStudentsByAttributes } from '../graphql-querys/students-querys'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/dist/client/router'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home(props) {
  const { data, error, loading, networkStatus } = props

  const router = useRouter()
  const { query: queryparams } = router

  const { field, searchTerms } = queryparams

  const [query, setquery] = useState({
    field: 'name',
    searchTerms: searchTerms || '',
  })

  const handleTermsChange = (event) => {
    setquery((prevState) => ({ ...prevState, searchTerms: event.target.value }))
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      const { field, searchTerms } = query
      field === 'name' && searchTerms === ''
        ? router.push('/')
        : router.push(`/?field=${query.field}&searchTerms=${query.searchTerms}`)
    }, 500)

    return () => clearTimeout(handler)
  }, [query])
  return (
    <>
      <Head>
        <title>Student lists</title>
      </Head>
      <Header>
        <input
          type="text"
          placeholder="search"
          value={query.searchTerms}
          onChange={handleTermsChange}
        />
      </Header>
      <Title>{props.data.students.map((student) => student.name)}</Title>
      <button>zas</button>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { field, searchTerms } = ctx.query
  return await fetchStudentsByAttributes({ field, searchTerms })
}
