import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { BirdHouseLayout } from '@/organisms/layouts/BirdHouseLayout'
import { StatusCard } from '@/moleclues/StatusCard'
import {
  GetStatusPagePropsDocument,
  GetStatusPagePropsQuery,
} from '@gql/generated/query-types'
import { apolloClient } from '@gql/apollo-client'
import { setSwrHeader, sec, SetNonNullable } from 'lib/utils'

type StatusPageProps = SetNonNullable<GetStatusPagePropsQuery, 'status'>

export const getServerSideProps: GetServerSideProps<StatusPageProps> = async (
  context
) => {
  if (typeof context.query.id !== 'string') {
    return { notFound: true }
  }

  setSwrHeader(context, sec.fromMinutes(10), sec.fromDays(30))

  try {
    const props = await fetch(context.query.id)
    return { props }
  } catch {
    return { notFound: true }
  }
}

const fetch = async (statusId: string) => {
  const result = await apolloClient.query<GetStatusPagePropsQuery>({
    query: GetStatusPagePropsDocument,
    variables: { statusId: statusId, bannerGroupId: '1' },
  })
  const status = result.data.status
  if (!status) {
    throw new Error('status not found')
  }

  return { ...result.data, status }
}

const StatusPage: FC<StatusPageProps> = (props) => {
  return (
    <BirdHouseLayout>
      <>
        <Head>
          <title>{props.status.body}</title>
          <meta property="og:title" content={props.status.body} key="ogtitle" />
        </Head>
        <StatusCard
          {...props.status}
          author={props.status.author?.name ?? 'John Doe'}
          linkEnabled={false}
        />
      </>
    </BirdHouseLayout>
  )
}

export default StatusPage
