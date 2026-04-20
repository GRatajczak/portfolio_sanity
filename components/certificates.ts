import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'certificates',
  type: 'object',
  title: 'Certificates',
  fields: [
    defineField({
      title: 'Certificates',
      name: 'certificatesArray',
      type: 'array',
      of: [defineArrayMember({type: 'image'})],
    }),
  ],
})
