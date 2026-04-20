import {defineArrayMember, defineField, defineType} from 'sanity'
import button from '../components/button'

export default defineType({
  name: 'currentFocus',
  type: 'object',
  title: 'Current Focus',
  preview: {
    select: {
      title: 'heading',
      subtitle: 'project.title',
      media: 'project.image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Current Focus',
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
          name: 'category',
          type: 'string',
          title: 'Category',
        }),
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Project description',
          rows: 3,
        }),
        defineField({
          name: 'technologies',
          type: 'array',
          title: 'Technologies',
          of: [defineArrayMember({type: 'string'})],
          options: {
            layout: 'tags',
          },
        }),
        defineField({
          name: 'button',
          type: 'object',
          title: 'Button',
          fields: [...button.fields],
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Project image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }),
          ],
        }),
      ],
    }),
  ],
})
