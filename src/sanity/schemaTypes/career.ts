import { defineType } from 'sanity'

export const career = defineType({
  name: 'career',
  title: 'Career / Job Opening',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: Rule => Rule.required().min(3).max(100)
    },
    {
      name: 'department',
      title: 'Department',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(50)
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(50)
    },
    {
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(30)
    },
    {
      name: 'experienceLevel',
      title: 'Experience Level',
      type: 'string',
      validation: Rule => Rule.min(2).max(30)
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'postedDate',
      title: 'Posted Date',
      type: 'date',
      initialValue: (new Date()).toISOString().split('T')[0],
      validation: Rule => Rule.required()
    },
    {
      name: 'applicationDeadline',
      title: 'Application Deadline',
      type: 'date',
      validation: Rule => Rule.min(Rule.valueOfField('postedDate'))
    }
  ],
  preview: {
    select: {
      title: 'title',
      department: 'department',
      type: 'type',
      postedDate: 'postedDate'
    },
    prepare(selection) {
      const { title, department, type, postedDate } = selection
      const date = postedDate ? new Date(postedDate).toLocaleDateString() : 'No date'
      return {
        title: title,
        subtitle: `${department || 'No department'} • ${type || 'No type'} • Posted: ${date}`
      }
    }
  }
})