import {defineArrayMember, defineField, defineType} from 'sanity'
import seo from '../components/seo'

export default defineType({
  name: 'articles',
  title: 'Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
      type: 'string',
    }),
    defineField({
      name: 'readTime',
      title: 'Read time',
      type: 'number',
      description: 'Estimated read time in minutes',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Categories',
      name: 'articlesTags',
      type: 'array',
      validation: (rule) => rule.max(2).required(),
      of: [
        defineArrayMember({
          type: 'reference',
          title: 'Categories',
          description: 'Pick a category from the dropdown list below',
          to: [{type: 'categories'}],
        }),
      ],
    }),
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO',
      fields: [...seo.fields],
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      validation: (rule) => rule.required(),
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
