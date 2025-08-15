// src/sanity/schemaTypes/ad.ts
import { Rule } from '@sanity/types'

const advertisementSchema = {
  name: 'advertisement',
  title: 'Advertisement',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Ad Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'altText',
      title: 'Alternative Text',
      type: 'string',
      description: 'Important for SEO and accessibility',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'targetUrl',
      title: 'Target URL',
      type: 'url',
      description: 'Where the ad should link to',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to enable/disable this ad',
      initialValue: true,
    },
  ],
}

export default advertisementSchema