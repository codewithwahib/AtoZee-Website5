import { type SchemaTypeDefinition } from 'sanity';

export const abouthome1: SchemaTypeDefinition = {
  name: 'abouthome1',
  title: 'About Home 1',
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