"use strict";
var router_1 = require('@angular/router');
var user_component_1 = require('./user/user.component');
var about_component_1 = require('./about/about.component');
var appRoutes = [
    {
        path: '',
        component: user_component_1.UserComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map