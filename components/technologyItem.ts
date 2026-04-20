import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'technology',
  type: 'document',
  title: 'Technologies',
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'svg',
    },
    prepare({title, media, subtitle}) {
      return {
        title: title || 'Technology',
        subtitle: media ? 'Image icon' : subtitle ? 'SVG icon' : 'No icon selected',
        media,
      }
    },
  },
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Technology name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'svg',
      type: 'text',
      title: 'SVG markup',
      rows: 6,
      description: 'Paste inline SVG markup here if you want to render the icon from SVG code.',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {image?: unknown} | undefined
          if (value || parent?.image) return true
          return 'Provide either SVG markup or an image.'
        }),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image icon',
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
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {svg?: unknown} | undefined
          if (value || parent?.svg) return true
          return 'Provide either an image or SVG markup.'
        }),
    }),
  ],
})
