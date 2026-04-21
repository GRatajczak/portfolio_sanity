import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {documentInternationalization} from '@sanity/document-internationalization'
import {schemaTypes} from './schemaTypes'

const localizedSchemaTypes = ['page', 'global', 'project', 'certificate', 'technology', 'articles', 'categories']

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: '11djiifo',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      schemaTypes: localizedSchemaTypes,
      supportedLanguages: (client) =>
        client.fetch(`*[_type == "locale"]{ "id": tag, "title": name }`),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
