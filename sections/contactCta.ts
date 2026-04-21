import {defineArrayMember, defineField, defineType} from 'sanity'
import button from '../components/button'

export default defineType({
  name: 'contactCta',
  type: 'object',
  title: 'Contact CTA',
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
      media: 'backgroundImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Contact CTA',
        subtitle: subtitle || 'Call to action section',
        media,
      }
    },
  },
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow',
      description: 'Short label above the section heading.',
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
      name: 'primaryButton',
      type: 'object',
      title: 'Primary button',
      fields: [...button.fields],
    }),
    defineField({
      name: 'secondaryButton',
      type: 'object',
      title: 'Secondary button',
      fields: [...button.fields],
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
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
})
