import {defineField, defineType} from 'sanity'
import header from '../components/header'
import footer from '../components/footer'

export default defineType({
  name: 'global',
  title: 'Globals',
  type: 'document',
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Globals',
      }
    },
  },
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'header',
      type: 'object',
      title: 'Header',
      fields: [...header.fields],
    }),
    defineField({
      name: 'footer',
      type: 'object',
      title: 'Footer',
      fields: [...footer.fields],
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'string',
    }),
  ],
})
