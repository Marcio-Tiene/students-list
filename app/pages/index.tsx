import styled from 'styled-components'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { fetchStudentsByAttributes } from '../graphql-querys/students-querys'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/dist/client/router'
import SelectComboBox from '../components/SelectCombo'
import Main from '../components/Main'
import ProfileCards from '../components/ProfileCards'
import Image from 'next/image'
import studentsAppIcon from '../public/ms-icon-310x310.png'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home(props) {
  const { data } = props
  const { students } = data

  const router = useRouter()

  const [query, setquery] = useState({
    field: 'name',
    searchTerms: '',
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
        <Image
          src={studentsAppIcon}
          alt="students icon"
          width="50px"
          height="50px"
        />
        <h1>
          Students List<pre>.</pre>
        </h1>
        <SelectComboBox
          value={query.field}
          setValue={(value) => {
            setquery((prevState) => ({ ...prevState, field: value }))
          }}
        />
        <input
          type="text"
          placeholder="search"
          value={query.searchTerms}
          onChange={handleTermsChange}
        />
      </Header>
      <Main>
        {students.map((student) => (
          <ProfileCards
            key={`${student.cpf}_${student.email}`}
            cpf={student.cpf}
            name={student.name}
            email={student.email}
          />
        ))}
      </Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { field, searchTerms } = ctx.query
  return await fetchStudentsByAttributes({ field, searchTerms })
}
