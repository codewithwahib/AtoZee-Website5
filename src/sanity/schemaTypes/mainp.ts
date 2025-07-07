// const homeProductSchema = {
//   name: 'homeproduct',
//   title: 'Home Product',
//   type: 'document',
//   fields: [
//     { name: 'name', title: 'Product Name', type: 'string' },
//     { 
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'name',
//         maxLength: 96,
//       },
//       validation: Rule => Rule.required()
//     },
//     { name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] },
//     {
//       name: 'images',
//       title: 'Images',
//       type: 'array',
//       of: [{ type: 'image', options: { hotspot: true } }],
//     },
//     {
//       name: 'logo',
//       title: 'Logo',
//       type: 'image',
//       options: { hotspot: true },
//     },
//     {
//       name: 'colorVariants',
//       title: 'Color Variants',
//       type: 'array',
//       of: [
//         {
//           type: 'object',
//           fields: [
//             { name: 'name', title: 'Color Name', type: 'string' },
//             { name: 'hex', title: 'Color Hex', type: 'string' },
//           ],
//         },
//       ],
//     },
//   ],
// };

// export default homeProductSchema;