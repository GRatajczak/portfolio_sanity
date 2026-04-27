import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'richTextSection',
  type: 'object',
  title: 'Rich text section',
  preview: {
    select: {
      title: 'content.0.children.0.text',
    },
    prepare({title}) {
      return {
        title: title || 'Rich text section',
        subtitle: 'Text content only',
      }
    },
  },
  fields: [
    defineField({
      name: 'narrow',
      type: 'boolean',
      title: 'Narrow',
      initialValue: true,
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [defineArrayMember({type: 'block'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
})
