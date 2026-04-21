import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'highlights',
  type: 'object',
  title: 'Highlights',
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Highlights',
        subtitle: subtitle || 'Numbers and achievements',
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
      name: 'items',
      type: 'array',
      title: 'Highlight items',
      of: [
        defineArrayMember({
          name: 'item',
          type: 'object',
          title: 'Highlight item',
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
          },
          fields: [
            defineField({
              name: 'value',
              type: 'string',
              title: 'Value',
              description: 'e.g. "20+", "5 years", "120k".',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'label',
              type: 'string',
              title: 'Label',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              type: 'text',
              title: 'Description',
              rows: 3,
            }),
          ],
        }),
      ],
      validation: (rule) => rule.min(1),
    }),
  ],
})
