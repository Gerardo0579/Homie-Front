import { GithubIcon } from '../../Icons/GithubIcon'

interface FooterItemsProps {
  Content: JSX.Element | string
  siteUrl: string
  Key: string
}

export const FooterItems: FooterItemsProps[] = [
  {
    Content: <GithubIcon text={'© 2022 GitHub, Inc.'} />,
    siteUrl:
      'https://docs.github.com/en/github/site-policy/github-terms-of-service',
    Key: 'Github'
  },
  {
    Content: 'Terms',
    siteUrl:
      'https://docs.github.com/en/github/site-policy/github-terms-of-service',
    Key: 'Terms'
  },
  {
    Content: 'Privacy',
    siteUrl:
      'https://docs.github.com/en/github/site-policy/github-privacy-statement',
    Key: 'Privacy'
  },
  {
    Content: 'Security',
    siteUrl: 'https://github.com/security',
    Key: 'Security'
  },
  {
    Content: 'Status',
    siteUrl: 'https://www.githubstatus.com/',
    Key: 'Status'
  },
  { Content: 'Docs', siteUrl: 'https://docs.github.com', Key: 'Docs' },
  {
    Content: 'Contact GitHub',
    siteUrl: 'https://support.github.com?tags=dotcom-footer',
    Key: 'Contact GitHub'
  },
  { Content: 'Pricing', siteUrl: 'https://github.com/pricing', Key: 'Pricing' },
  { Content: 'API', siteUrl: 'https://docs.github.com', Key: 'API' },
  {
    Content: 'Training',
    siteUrl: 'https://services.github.com',
    Key: 'Training'
  },
  { Content: 'Blog', siteUrl: 'https://github.blog', Key: 'Blog' },
  { Content: 'About', siteUrl: 'https://github.com/about', Key: 'About' }
]
