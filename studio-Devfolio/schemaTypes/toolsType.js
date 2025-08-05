import {defineType, defineField} from 'sanity'

// Reusable tool object type
export const toolObject = defineType({
  name: 'toolObject',
  title: 'Tool',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'icon',
      type: 'image',
      title: 'Icon',
    }),
  ],
})

export const toolsType = defineType({
  name: 'tools',
  title: 'Tools',
  type: 'document',
  fields: [
    {
      name: 'frontend',
      title: 'Frontend',
      type: 'array',
      of: [{type: 'toolObject'}],
    },
    {
      name: 'backend',
      title: 'Backend',
      type: 'array',
      of: [{type: 'toolObject'}],
    },
    {
      name: 'devtools',
      title: 'Dev Tools',
      type: 'array',
      of: [{type: 'toolObject'}],
    },
  ],
})
