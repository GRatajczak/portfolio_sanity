import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectReference',
  type: 'object',
  title: 'Project Reference',
  preview: {
    select: {
      title: 'overrideLabel',
      subtitle: 'project._ref',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Project reference',
        subtitle: subtitle ? `Linked project: ${subtitle}` : 'No project selected',
      }
    },
  },
  fields: [
    defineField({
      name: 'project',
      type: 'reference',
      title: 'Project',
      to: [{type: 'project'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overrideLabel',
      type: 'string',
      title: 'Override label',
      description: 'Optional label used only inside this showcase item.',
    }),
  ],
})
