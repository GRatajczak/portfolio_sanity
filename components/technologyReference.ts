import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'technologyReference',
  type: 'object',
  title: 'Technology Reference',
  preview: {
    select: {
      subtitle: 'technology._ref',
    },
    prepare({subtitle}) {
      return {
        title: 'Technology reference',
        subtitle: subtitle ? `Linked technology: ${subtitle}` : 'No technology selected',
      }
    },
  },
  fields: [
    defineField({
      name: 'technology',
      type: 'reference',
      title: 'Technology',
      to: [{type: 'technology'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
