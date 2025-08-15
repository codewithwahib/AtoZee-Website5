// /schemas/auth.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'auth',
  title: 'Auth',
  type: 'document',
  fields: [
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (Rule) => Rule.required().min(6).warning('At least 6 characters'),
      // Note: Sanity doesn't have a native "password" input.
      // This will show as a normal text field unless you add a custom input component.
    }),
  ],
})
