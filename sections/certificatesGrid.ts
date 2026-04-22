import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'certificatesGrid',
  type: 'object',
  title: 'Certificates Grid',
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
      media: 'certificates.0.certificate.image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Certificates Grid',
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
    }),
    defineField({
      name: 'certificates',
      type: 'array',
      title: 'Certificates',
      description: 'Select certificate references from the certificates page.',
      of: [defineArrayMember({type: 'certificateReference'})],
    }),
  ],
})
