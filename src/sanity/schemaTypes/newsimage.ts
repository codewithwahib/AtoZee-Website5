import { defineField, defineType } from 'sanity';

export const newsimage = defineType({
  name: 'newsimage',
  title: 'News Images',  // Changed title to plural
  type: 'document',
  fields: [
    defineField({
      name: 'images',    // Changed from 'image' to 'images'
      title: 'Images',   // Changed to plural
      type: 'array',     // Changed to array type
      of: [{
        type: 'image',   // Array contains image objects
        options: {
          hotspot: true, // Keep hotspot functionality
        }
      }],
      validation: (Rule) => Rule.required().min(1), // Requires at least 1 image
    }),
  ],
});