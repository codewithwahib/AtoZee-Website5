import { defineType, defineField } from 'sanity'

export const news = defineType({
  name: 'news',
  title: 'News',  // Fixed typo: "Volatge" → "Voltage"
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'News',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishDate',  // New field
      title: 'Publish Date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
      initialValue: () => new Date().toISOString(),  // Defaults to current date/time
      validation: Rule => Rule.required(),
    }),
     defineField({
      name: 'images',
      title: 'News Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: Rule => Rule.min(1).required(),
    }),
  ],
})
