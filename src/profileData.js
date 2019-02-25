import ContentDisplay from './components/content/ContentDisplay';


const profileData = {
    projects: [
        {
            name: 'insta-clone',
            component: ContentDisplay.InstaClone,
            link: 'https://jacob-angulo-insta-clone.netlify.com/?username=&password=',
            repo: 'https://github.com/jacobAngulo/insta--clone'
        },
        {
            name: 'oer-bookr',
            component: ContentDisplay.OerBookr,
            link: 'https://oer-bookr.netlify.com/',
            repo: 'https://github.com/oer-bookr/oer-bookr-launch-page-jacob-angulo-web17/tree/jacob-angulo'
        },
        {
            name: 'todo-app',
            component: ContentDisplay.TodoApp,
            link: 'https://todo-app-2.netlify.com/',
            repo: 'https://github.com/jacobAngulo/todo-app-2'
        }
    ]
}

export default profileData