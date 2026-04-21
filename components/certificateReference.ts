import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'certificateReference',
  type: 'object',
  title: 'Certificate Reference',
  preview: {
    select: {
      title: 'certificate._ref',
    },
    prepare({title}) {
      return {
        title: title ? `Linked certificate: ${title}` : 'No certificate selected',
      }
    },
  },
  fields: [
    defineField({
      name: 'certificate',
      type: 'reference',
      title: 'Certificate',
      to: [{type: 'certificate'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
