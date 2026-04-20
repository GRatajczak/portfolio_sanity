import {defineArrayMember, defineField, defineType} from 'sanity'
import seo from '../components/seo'

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO',
      fields: [...seo.fields],
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({type: 'hero'}),
        defineArrayMember({type: 'technologiesStack'}),
        defineArrayMember({type: 'aboutMe'}),
        defineArrayMember({type: 'experienceTimeline'}),
        defineArrayMember({type: 'technologiesOverview'}),
        defineArrayMember({type: 'currentFocus'}),
        defineArrayMember({type: 'projectsShowcase'}),
        defineArrayMember({type: 'certificatesGallery'}),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
