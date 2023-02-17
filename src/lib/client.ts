import { HomeData, PostData } from '@/types'

import { posts } from '../data'

export const client = {
  getHomepage: async (): Promise<HomeData> => {
    return { body: 'Text for the home page' }
  },
  getPost: async (slug: string): Promise<PostData> => {
    return posts[slug]
  },
}
