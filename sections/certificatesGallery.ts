import {defineArrayMember, defineField, defineType} from 'sanity'
import button from '../components/button'

export default defineType({
  name: 'certificatesGallery',
  type: 'object',
  title: 'Certificates Gallery',
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
      media: 'certificates.0.certificate.image',
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
      name: 'button',
      type: 'object',
      title: 'Section button',
      fields: [...button.fields],
    }),
    defineField({
      name: 'certificates',
      type: 'array',
      title: 'Certificates',
      description: 'Select certificates to display in this section.',
      of: [defineArrayMember({type: 'certificateReference'})],
    }),
  ],
})
