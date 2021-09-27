import { Resolvers } from './generated/resolvers-types'
import { PrismaClient } from '@prisma/client'

export const resolvers: Resolvers = {
  Query: {
    status(_parent, args) {
      return getStatus(args?.id) ?? null
    },
    statuses() {
      return listStatuses()
    },
    banners(_parent, args) {
      return listBanners(args.groupId)
    },
  },
  Status: {
    author: (parent) => {
      return getAuthor(parent.authorId) ?? null
    },
  },
}

const prisma = new PrismaClient()

const listStatuses = async () =>
  await prisma.status.findMany({ orderBy: { createdAt: 'desc' } })

const getStatus = async (id: string) =>
  await prisma.status.findUnique({ where: { id: id } })

const getAuthor = async (id: string) =>
  await prisma.user.findUnique({ where: { id: id } })

const listBanners = async (groupId: string) =>
  await prisma.banner.findMany({
    where: { bannerGroupId: groupId },
  })
