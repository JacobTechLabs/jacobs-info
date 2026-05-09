import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schema} from './src/sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yoursanityprojectid',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Blog Studio',

  plugins: [deskTool()],

  schema: {
    types: schema.types,
  },
})
