/**
 * blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog.blog', ({strapi}) => ({
    async findByThemes(ctx) {
        try {
            const { themes, page = 1, limit = 10 } = ctx.request.query;

            const themeFormat: Array<string> = JSON.parse((themes as string).replace(/'/g, '"'));

            if (!Array.isArray(themeFormat)) {
                throw new Error();
            }

            const blogs = await strapi.entityService.findMany('api::blog.blog', {
                populate: {
                    section: {
                        on: {
                            'components.image-block': {
                                populate: "*"
                            },
                            'components.text-block': {
                                populate: "*"
                            }
                        }
                    },
                    theme: true,
                    createdBy: true,
                    updatedBy: true
                },
                filters: {
                    theme: {
                        name: {
                            $in: JSON.parse((themes as string).replace(/'/g, '"'))
                        }
                    },
                },
                pagination: {
                    page: +page,
                    pageSize: +limit,
                }
            });

            ctx.status = 200;
            return blogs;
        } catch {
            ctx.body = {
                error: 'Не удалось получить блоги'
            };
            ctx.status = 404;
        }
    }
}));
