export interface SiteSettings {
  header: {
    text: string
  }
}

export interface SharedPageProps {
  siteSettings: SiteSettings
}

export interface HomeData {
  body: string
}

export interface PostData {
  title: string
  body: string
}
