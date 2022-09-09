export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '631a99e801e72946684c0f8c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-netlify-demo-studio',
                  apiId: '9a3e7d3c-8e12-4824-9365-090c2ae10d10'
                },
                {
                  buildHookId: '631a99e8231fa94208c0f115',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-netlify-demo',
                  apiId: '89d0f9a5-edea-45e1-8329-2a4d816c454d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ckvgemmy/sanity-kitchen-sink-netlify-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-netlify-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
