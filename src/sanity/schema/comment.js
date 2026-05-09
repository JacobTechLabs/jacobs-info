export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{type: 'post'}],
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{type: 'user'}],
    },
  ],
  preview: {
    select: {
      title: 'desc',
      author: 'user.name',
    },
    prepare(selection) {
      const {title, author} = selection
      return {
        title: title,
        subtitle: `by ${author}`,
      }
    },
  },
}
