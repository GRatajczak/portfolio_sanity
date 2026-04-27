import {defineArrayMember, defineField, defineType} from 'sanity'
import seo from '../components/seo'

export default defineType({
  name: 'project',
  title: 'Projects',
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
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Done', value: 'done'},
          {title: 'Going', value: 'going'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
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
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 3,
    }),
    defineField({
      name: 'projectUrl',
      type: 'url',
      title: 'Project URL',
      validation: (rule) => rule.uri({allowRelative: false, scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [defineArrayMember({type: 'technologyReference'})],
    }),
    
    defineField({
      name: 'images',
      type: 'array',
      title: 'Project images',
      of: [
        defineArrayMember({
          type: 'image',
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
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Sections repeater',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'section',
          title: 'Section',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'content',
              type: 'array',
              title: 'Content',
              of: [defineArrayMember({type: 'block'})],
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'content.0.children.0.text',
            },
            prepare({title, subtitle}) {
              return {
                title: title || 'Untitled section',
                subtitle: subtitle || 'No content yet',
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'textAndImage',
          title: 'Text and image',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
            }),
            defineField({
              name: 'content',
              type: 'array',
              title: 'Content',
              of: [defineArrayMember({type: 'block'})],
            }),
            defineField({
              name: 'image',
              type: 'image',
              title: 'Image',
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
              name: 'flip',
              type: 'boolean',
              title: 'Flip layout',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'content.0.children.0.text',
              media: 'image',
            },
            prepare({title, subtitle, media}) {
              return {
                title: title || 'Text and image',
                subtitle: subtitle || 'No content yet',
                media,
              }
            },
          },
        }),
        defineArrayMember({
          type: 'image',
          name: 'image',
          title: 'Image',
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
        defineArrayMember({type: 'richTextSection'}),
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
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'images.0',
    },
  },
})
