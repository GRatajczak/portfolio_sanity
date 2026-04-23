import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutBanner',
  type: 'object',
  title: 'About banner',
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'About banner',
        subtitle: subtitle || 'Text block on top of image',
        media,
      }
    },
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'About me',
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [defineArrayMember({type: 'block'})],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
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
      validation: (rule) => rule.required(),
    }),
  ],
})
