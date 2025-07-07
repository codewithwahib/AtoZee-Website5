import { type SchemaTypeDefinition } from 'sanity';

export const hero4: SchemaTypeDefinition = {
  name: 'hero-04',
  title: 'Hero-04',
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