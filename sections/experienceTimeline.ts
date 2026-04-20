import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'experienceTimeline',
  type: 'object',
  title: 'Experience Timeline',
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
      media: 'entries.0.logo',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Experience Timeline',
        subtitle: subtitle || 'Career history',
        media,
      }
    },
  },
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow',
      description: 'Short label above the heading, e.g. "My".',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'entries',
      type: 'array',
      title: 'Timeline entries',
      of: [
        defineArrayMember({
          name: 'entry',
          type: 'object',
          title: 'Timeline entry',
          preview: {
            select: {
              title: 'company',
              subtitle: 'period',
              media: 'logo',
            },
          },
          fields: [
            defineField({
              name: 'period',
              type: 'string',
              title: 'Period',
              description: 'e.g. "2023", "2021-2024".',
            }),
            defineField({
              name: 'company',
              type: 'string',
              title: 'Company / Project',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'role',
              type: 'string',
              title: 'Role',
            }),
            defineField({
              name: 'description',
              type: 'array',
              title: 'Description',
              of: [defineArrayMember({type: 'block'})],
            }),
            defineField({
              name: 'technologies',
              type: 'array',
              title: 'Technologies',
              of: [defineArrayMember({type: 'string'})],
              options: {
                layout: 'tags',
              },
            }),
            defineField({
              name: 'logo',
              type: 'image',
              title: 'Logo / thumbnail',
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
