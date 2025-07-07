import { type SchemaTypeDefinition } from 'sanity';

export const hero2: SchemaTypeDefinition = {
  name: 'hero-02',
  title: 'Hero-02',
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