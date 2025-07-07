import { defineType, defineField } from 'sanity'

export const ad = defineType({
  name: 'ad',
  title: 'Ad',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Product Link',
      type: 'object',
      fields: [
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
          validation: Rule => Rule.uri({
            scheme: ['http', 'https', 'mailto', 'tel'],
          }),
        }),
        defineField({
          name: 'openInNewTab',
          title: 'Open in New Tab?',
          type: 'boolean',
          initialValue: false,
        }),
      ],
    }),
  ],
})