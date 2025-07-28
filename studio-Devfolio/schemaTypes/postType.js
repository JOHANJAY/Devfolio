import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'repoLink',
      type: 'url',
      validation: (rule) => rule.uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'demoLink',
      type: 'url',
      validation: (rule) => rule.uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'language',
      type: 'string',
    }),
    
    defineField({
      name: 'tags',
      type: 'array',
      of:[{type: 'string'}]
    }),
    
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
