import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  type: 'object',
  title: 'SEO',
  fields: [
    defineField({
      name: 'metaTitle',
      type: 'string',
      title: 'Meta Title',
    }),
    defineField({
      name: 'metaDescription',
      type: 'string',
      title: 'Meta Description',
    }),
    defineField({
      name: 'keywords',
      type: 'string',
      title: 'Keywords',
    }),
    defineField({
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
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
