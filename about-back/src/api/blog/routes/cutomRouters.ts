export default {
    routes: [
        {
            method: 'GET',
            path: '/findBlog',
            handler: 'api::blog.blog.findByThemes',
            config: {
                policies: [],
            }
        }
    ]
}