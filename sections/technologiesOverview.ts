import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'technologiesOverview',
  type: 'object',
  title: 'Technologies Overview',
  preview: {
    select: {
      title: 'heading',
      subtitle: 'groups.0.label',
      media: 'groups.0.technologies.0.image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Technologies Overview',
        subtitle: subtitle || 'Tech stack groups',
        media,
      }
    },
  },
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'groups',
      type: 'array',
      title: 'Technology groups',
      of: [
        defineArrayMember({
          name: 'group',
          type: 'object',
          title: 'Group',
          preview: {
            select: {
              title: 'label',
              subtitle: 'technologies.0.name',
              media: 'technologies.0.logo',
            },
          },
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              title: 'Group label',
              description: 'e.g. "I know and use", "I used to use", "I know".',
            }),
            defineField({
              name: 'technologies',
              type: 'array',
              title: 'Technologies',
              of: [defineArrayMember({type: 'technologyReference'})],
            }),
          ],
        }),
      ],
    }),
  ],
})
