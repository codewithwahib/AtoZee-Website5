import { type SchemaTypeDefinition } from 'sanity';

export const abouthome2: SchemaTypeDefinition = {
  name: 'abouthome2',
  title: 'About Home 2',
  type: 'document',
  fields: [
    {
      name: 'image', // Changed to singular 'image' since it's a single image
      title: 'Image',
      type: 'image', // Single image type
      options: { hotspot: true }, // Enables hotspot for image cropping
    },
  ],
};