import { type SchemaTypeDefinition } from 'sanity';

export const hero3: SchemaTypeDefinition = {
  name: 'hero-03',
  title: 'Hero-03',
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