import {defineArrayMember, defineField, defineType} from 'sanity'
import button from '../components/button'

export default defineType({
  name: 'aboutMe',
  type: 'object',
  title: 'About Me',
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
      media: 'images.0',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'About Me',
        subtitle: subtitle || 'Profile section',
        media,
      }
    },
  },
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow',
      description: 'Short label above the section heading, e.g. "A little".',
    }),
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
      name: 'button',
      type: 'object',
      title: 'Button',
      fields: [...button.fields],
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Image collage',
      of: [
        defineArrayMember({
          type: 'image',
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
      validation: (rule) => rule.max(3),
    }),
  ],
})
