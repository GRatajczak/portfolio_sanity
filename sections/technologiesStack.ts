import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'technologiesStack',
  type: 'object',
  title: 'Technologies Stack',
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
      media: 'technologies.0.image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Technologies Stack',
        subtitle: subtitle || 'Technologies section',
        media,
      }
    },
  },
  fields: [
    defineField({
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [defineArrayMember({type: 'technologyReference'})],
      validation: (rule) => rule.min(1),
    }),
  ],
})
