import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'certificatesGallery',
  type: 'object',
  title: 'Certificates Gallery',
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
      media: 'certificates.0.image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Certificates Gallery',
        subtitle: subtitle || 'Certificates section',
        media,
      }
    },
  },
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow',
      description: 'Short label above the main heading, e.g. "A little".',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'certificates',
      type: 'array',
      title: 'Certificates',
      of: [
        defineArrayMember({
          name: 'certificate',
          type: 'object',
          title: 'Certificate',
          preview: {
            select: {
              title: 'title',
              subtitle: 'issuer',
              media: 'image',
            },
          },
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
            }),
            defineField({
              name: 'issuer',
              type: 'string',
              title: 'Issuer',
            }),
            defineField({
              name: 'image',
              type: 'image',
              title: 'Certificate image',
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
        }),
      ],
    }),
  ],
})
