import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'questionEn',
      title: 'Question (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'questionFr',
      title: 'Question (French)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answerEn',
      title: 'Answer (English)',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answerFr',
      title: 'Answer (French)',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      titleEn: 'questionEn',
      titleFr: 'questionFr',
    },
    prepare({titleEn, titleFr}) {
      return {
        title: titleEn,
        subtitle: `FR: ${titleFr}`,
      }
    },
  },
})
