import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'button',
  type: 'object',
  title: 'Button',
  fields: [
    defineField({
      title: 'Button text',
      name: 'buttonText',
      type: 'string',
    }),
    defineField({
      title: 'Is external link',
      name: 'isExternalLink',
      type: 'boolean',
      initialValue: false,
      description: 'If you want to open a new tab when clicking the button, please check this box',
    }),
    defineField({
      title: 'Is download',
      name: 'isDownload',
      type: 'boolean',
      initialValue: false,
      description: 'If you want to download a file when clicking the button, please check this box',
    }),
    defineField({
      title: 'Button link',
      name: 'buttonLink',
      type: 'string',
      description:
        'If want set this button as a link, please provide the link here. Example: about-us or https://example.com/about-us',
    }),
  ],
})
