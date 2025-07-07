import { defineType, defineField } from 'sanity'

export const typetestedpanels = defineType({
  name: 'typetestedpanels',
  title: 'Type Tested Panels',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
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
      name: 'images',
      title: 'Product Images',
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
    defineField({
      name: 'cardLogo',
      title: 'Top Left Card Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(), // Optional: remove this if not mandatory
    }),
  ],
})
