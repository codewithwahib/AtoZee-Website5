// import { defineType, defineField } from 'sanity'

// export const lowvoltageswitchgearpanelsdistributionboards = defineType({
//   name: 'lowvoltageswitchgearpanelsdistributionboards',
//   title: 'Low Volatge Switchgear Distribution Boards',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'name',
//       title: 'Product Name',
//       type: 'string',
//       validation: Rule => Rule.required(),
//     }),
//     defineField({
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'name', // auto-generate slug from name
//         maxLength: 96,
//       },
//       validation: Rule => Rule.required(),
//     }),
//     defineField({
//       name: 'description',
//       title: 'Description',
//       type: 'blockContent', // rich text field
//       validation: Rule => Rule.required(),
//     }),
//     defineField({
//       name: 'images',
//       title: 'Product Images',
//       type: 'array',
//       of: [
//         {
//           type: 'image',
//           options: {
//             hotspot: true,
//           },
//         },
//       ],
//       validation: Rule => Rule.min(1).required(),
//     }),
//   ],
// })
