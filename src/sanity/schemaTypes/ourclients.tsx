import { defineType } from 'sanity'

export const pureImage = defineType({
  name: 'pureImage',
  title: 'Image (No Metadata)',
  type: 'image',
  options: {
    hotspot: true // Enable cropping if needed
  },
  // No additional fields (no alt text, caption, etc.)
  fields: [] // Explicitly empty
})