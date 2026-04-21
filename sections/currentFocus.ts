import {defineArrayMember, defineField, defineType} from 'sanity'
import button from '../components/button'

export default defineType({
  name: 'currentFocus',
  type: 'object',
  title: 'What I doing now?',
  preview: {
    select: {
      title: 'heading',
      subtitle: 'project.project.title',
      media: 'project.project.images.0',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'What I doing now?',
        subtitle: subtitle || 'Current project section',
        media,
      }
    },
  },
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'project',
      type: 'object',
      title: 'Featured project',
      fields: [
        defineField({
          name: 'project',
          type: 'reference',
          title: 'Project',
          description: 'Select one project from added Projects documents.',
          to: [{type: 'project'}],
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'button',
          type: 'object',
          title: 'Button',
          fields: [...button.fields],
        }),
      ],
    }),
  ],
})
