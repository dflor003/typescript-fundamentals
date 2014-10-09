var app;
(function (app) {
    (function (localization) {
        

        var Localizer = (function () {
            function Localizer() {
            }
            Localizer.prototype.init = function () {
                var language = window.GlobalVars.userLanguage;
                // Some logic to fetch translations for language
                // ...
            };
            return Localizer;
        })();
    })(app.localization || (app.localization = {}));
    var localization = app.localization;
})(app || (app = {}));
//# sourceMappingURL=2-extensions.js.map
