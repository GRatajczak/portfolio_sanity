import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'header',
  type: 'object',
  title: 'Header',
  fields: [
    defineField({
      title: 'Menu items',
      name: 'menuItems',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          title: 'Child page',
          description: 'Pick a page from the dropdown list below',
          to: [{type: 'page'}],
        }),
      ],
    }),
  ],
})
