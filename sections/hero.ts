import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  preview: {
    select: {
      title: 'headline',
      subtitle: 'eyebrow',
      media: 'portraitImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Hero',
        subtitle: subtitle || 'Intro section',
        media,
      }
    },
  },
  fields: [
 
    defineField({
      name: 'headline',
      type: 'string',
      title: 'Headline',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheadline',
      type: 'array',
      title: 'Subheadline',
      of: [
        defineArrayMember({
          name: 'item',
          type: 'object',
          title: 'Subheadline item',
          preview: {
            select: {
              title: 'text',
            },
          },
          fields: [
            defineField({
              name: 'text',
              type: 'string',
              title: 'Text',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'portraitImage',
      type: 'image',
      title: 'Portrait image',
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
    defineField({
      name: 'mobileImage',
      type: 'image',
      title: 'Mobile image',
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
