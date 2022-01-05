import { createRouter, createWebHashHistory } from 'vue-router';
import routes from 'virtual:generated-pages';

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const title = to.path.split('/')[to.path.split('/').length - 1];
	document.title = title && title.length !== 0 ? `${title} - discord.js` : 'discord.js';
	next();
});

export default router;
