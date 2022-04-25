export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6266f57602fd001d31de82b7',
                  title: 'Sanity Studio',
                  name: 'e-4-coin-landing-pages-studio',
                  apiId: 'b04c35ad-e9ae-4cfd-a657-c7c3e638c196'
                },
                {
                  buildHookId: '6266f57639494210d9c9d638',
                  title: 'Landing pages Website',
                  name: 'e-4-coin-landing-pages',
                  apiId: '98fe6741-74c2-4327-b322-a16b49dd6320'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jschmucke/e4coin-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://e-4-coin-landing-pages.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
