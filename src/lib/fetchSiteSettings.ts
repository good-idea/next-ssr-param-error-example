import { SiteSettings } from '../types'

export const fetchSiteSettings = async (): Promise<SiteSettings> => {
  return {
    header: {
      text: 'My Great Website',
    },
  }
}
