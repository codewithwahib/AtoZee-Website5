// src/sanity/lib/sanityClient.ts

import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // for writes only
})

export const sanityClientSecond = createClient({
  projectId: process.env.NEXT_PUBLIC_SECOND_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SECOND_SANITY_DATASET!,
  apiVersion: '2023-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // for job applications read
})
