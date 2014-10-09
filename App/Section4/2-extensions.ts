module app.localization {
    
    // Expected to be "burned onto page by server-side"
    export interface IGlobalVars {
        userLanguage: string;
        userId: number;
        rootPath: string;
    }

    class Localizer {
        init(): void {
            var language = window.GlobalVars.userLanguage; // Does not compile =/
            // Some logic to fetch translations for language
            // ...
        }
    }
}