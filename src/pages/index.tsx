import React, { FC } from 'react'
import { StatusCard } from '@/moleclues/StatusCard'
import { BirdHouseLayout } from '@/organisms/layouts/BirdHouseLayout'
import { Backdrop, Box, CircularProgress, Typography } from '@material-ui/core'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import * as functions from 'firebase-functions'
import { useGetHomePagePropsQuery } from '@gql/generated/query-types'

type HomePageProps = {
  statuses: Status[]
}

type Status = {
  id: string
  body: string
  author: string
  createdAt: string
}

const isStatuses = (data: unknown): data is Status[] => {
  return true
}

export const getServerSideProps: GetServerSideProps<HomePageProps> =
  async () => {
    const apiRoot =
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_API_ROOT
        : functions.config().api.root
    const url = `${apiRoot}/api/status`
    const res = await fetch(url)
    const statusesData = (await res.json()) as unknown
    if (!isStatuses(statusesData)) {
      return { notFound: true }
    }
    console.log(apiRoot)
    return { props: { statuses: statusesData } }
  }

const HomePage: FC = () => {
  const { data, loading, error } = useGetHomePagePropsQuery({
    variables: { bannerGroupId: '1' },
  })

  if (loading) {
    return (
      <Backdrop open={true}>
        <CircularProgress />
      </Backdrop>
    )
  }

  return (
    <BirdHouseLayout currentRouteName="home">
      <>
        <Head>
          <title>最新ステータス</title>
          <meta property="og:title" content="最新ステータス" key="ogtitle" />
        </Head>
        {error || !data ? (
          <Typography>エラーが発生しました</Typography>
        ) : (
          data.statuses.map((s) => (
            <Box key={s?.id} pb={2}>
              <StatusCard {...s} author={s?.author?.name ?? 'John Doe'} />
            </Box>
          ))
        )}
      </>
    </BirdHouseLayout>
  )
}

export default HomePage
