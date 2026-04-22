import {defineArrayMember, defineField, defineType} from 'sanity'
import button from '../components/button'

export default defineType({
  name: 'projectsShowcase',
  type: 'object',
  title: 'Projects Showcase',
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Projects Showcase',
        subtitle: subtitle || 'Portfolio projects',
      }
    },
  },
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow',
      description: 'Short label above the main section heading, e.g. "I want to share".',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'button',
      type: 'object',
      title: 'Section button',
      fields: [...button.fields],
    }),
    defineField({
      name: 'projects',
      type: 'array',
      title: 'Projects',
      of: [defineArrayMember({type: 'projectReference'})],
    }),
  ],
})
