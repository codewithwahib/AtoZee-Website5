// src/sanity/schemaTypes/application.ts
import { Rule, defineType } from 'sanity'

const jobApplicationSchema = defineType({
  name: 'jobApplication',
  type: 'document',
  title: 'Job Applications',
  fields: [
    { 
      name: 'name', 
      type: 'string', 
      title: 'Name',
      validation: (Rule: Rule) => Rule.required() 
    },
    { 
      name: 'email', 
      type: 'string', 
      title: 'Email',
      validation: (Rule: Rule) => Rule.required().email() 
    },
    { 
      name: 'phone', 
      type: 'string', 
      title: 'Phone',
      validation: (Rule: Rule) => Rule.required() 
    },
    { 
      name: 'company', 
      type: 'string', 
      title: 'Company',
      validation: (Rule: Rule) => Rule.required() 
    },
    { 
      name: 'city', 
      type: 'string', 
      title: 'City',
      validation: (Rule: Rule) => Rule.required() 
    },
    { 
      name: 'jobTitle', 
      type: 'string', 
      title: 'Job Title',
      validation: (Rule: Rule) => Rule.required() 
    },
    { 
      name: 'comments', 
      type: 'text', 
      title: 'Comments' 
    },
    {
      name: 'resume',
      type: 'file',
      title: 'Resume',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        accept: '.pdf,.doc,.docx'
      }
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'jobTitle',
      media: 'resume'
    }
  }
})

export default jobApplicationSchema