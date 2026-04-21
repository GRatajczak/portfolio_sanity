import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'subhero',
  type: 'object',
  title: 'Subhero',
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Subhero',
        subtitle: subtitle || 'Section heading block',
      }
    },
  },
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow',
      description: 'Optional short label above the heading.',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      description: 'Main heading, e.g. "About me".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlightLine',
      type: 'boolean',
      title: 'Show highlight line under heading',
      initialValue: true,
    }),
  ],
})
