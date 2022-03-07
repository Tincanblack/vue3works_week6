const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath:
		process.env.NODE_ENV === "production" ? "/vue3works_week6/" : "/",
});
