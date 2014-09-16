eval("//# sourceURL=assets/ember-cli/loader.js");

;eval("define(\"frontend/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: \'frontend\', // TODO: loaded via config\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, \'frontend\');\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=frontend/app.js");

;eval("define(\"frontend/config/environment\", \n  [\"exports\"],\n  function(__exports__) {\n    \"use strict\";\n    __exports__[\"default\"] = {\"environment\":\"development\",\"baseURL\":\"/\",\"locationType\":\"auto\",\"EmberENV\":{\"FEATURES\":{}},\"APP\":{\"LOG_ACTIVE_GENERATION\":true,\"LOG_VIEW_LOOKUPS\":true}};\n  });//# sourceURL=frontend/config/environment.js");

;eval("define(\"frontend/config/environments/development\", \n  [\"exports\"],\n  function(__exports__) {\n    \"use strict\";\n    __exports__[\"default\"] = {\"environment\":\"development\",\"baseURL\":\"/\",\"locationType\":\"auto\",\"EmberENV\":{\"FEATURES\":{}},\"APP\":{\"LOG_ACTIVE_GENERATION\":true,\"LOG_VIEW_LOOKUPS\":true}};\n  });//# sourceURL=frontend/config/environments/development.js");

;eval("define(\"frontend/config/environments/test\", \n  [\"exports\"],\n  function(__exports__) {\n    \"use strict\";\n    __exports__[\"default\"] = {\"environment\":\"test\",\"baseURL\":\"/\",\"locationType\":\"auto\",\"EmberENV\":{\"FEATURES\":{}},\"APP\":{}};\n  });//# sourceURL=frontend/config/environments/test.js");

;eval("define(\"frontend/router\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: FrontendENV.locationType\n    });\n\n    Router.map(function() {\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=frontend/router.js");

;eval("define(\"frontend/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data\n    /**/) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      data.buffer.push(\"<h2 id=\'title\'>Welcome to Ember.js</h2>\\n\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=frontend/templates/application.js");

;eval("define(\"frontend/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=frontend/tests/app.jshint.js");

;eval("define(\"frontend/tests/frontend/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - frontend/tests/helpers\');\n    test(\'frontend/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'frontend/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=frontend/tests/frontend/tests/helpers/resolver.jshint.js");

;eval("define(\"frontend/tests/frontend/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - frontend/tests/helpers\');\n    test(\'frontend/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'frontend/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=frontend/tests/frontend/tests/helpers/start-app.jshint.js");

;eval("define(\"frontend/tests/frontend/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - frontend/tests\');\n    test(\'frontend/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'frontend/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=frontend/tests/frontend/tests/test-helper.jshint.js");

;eval("define(\"frontend/tests/helpers/resolver\", \n  [\"ember/resolver\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: \'frontend\'\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=frontend/tests/helpers/resolver.js");

;eval("define(\"frontend/tests/helpers/start-app\", \n  [\"ember\",\"frontend/app\",\"frontend/router\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({\n        // useful Test defaults\n        rootElement: \'#ember-testing\',\n        LOG_ACTIVE_GENERATION: false,\n        LOG_VIEW_LOOKUPS: false\n      }, attrs); // but you can override;\n\n      Router.reopen({\n        location: \'none\'\n      });\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\n\n      return App;\n    }\n  });//# sourceURL=frontend/tests/helpers/start-app.js");

;eval("define(\"frontend/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=frontend/tests/router.jshint.js");

;eval("define(\"frontend/tests/test-helper\", \n  [\"frontend/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    if (QUnit.urlParams.nocontainer) {\n      document.getElementById(\'ember-testing-container\').style.visibility = \'hidden\';\n    } else {\n      document.getElementById(\'ember-testing-container\').style.visibility = \'visible\';\n    }\n  });//# sourceURL=frontend/tests/test-helper.js");
