import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    template: '%s | Fantasy Survivor Pools', // need to determine best way to make dynamic for page title?
    default: 'Fantasy Survivor Pools', // a default is required when creating a template
  },
  description:
    'The best free web app for fantasy football survivor pool managers and players.',
  applicationName: 'Fantasy Football Survivor Pools',
  referrer: 'origin-when-cross-origin',
  keywords: ['fantasy football survivor pool', 'fantasy football', 'survivor pool'],
  creator: 'RooneyIT Solutions, LLC',
}
