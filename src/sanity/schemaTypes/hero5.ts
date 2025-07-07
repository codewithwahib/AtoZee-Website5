import { type SchemaTypeDefinition } from 'sanity';

export const hero5: SchemaTypeDefinition = {
  name: 'hero-05',
  title: 'Hero-05',
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