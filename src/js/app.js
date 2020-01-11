import { detectBrowser } from './_helpers';
import Photo from './Photo';
class Application {
    constructor() {
        Application.init();
    }

    static initializePlugins() {
        // INIT YOUR PLUGINS

    };

    static initializeModules() {
        const p = new Photo();
    };

    static detectBrowser() {
        document.body.setAttribute('data-browser', detectBrowser());
    }

    static init() {
        this.detectBrowser();
        this.initializePlugins();
        this.initializeModules();
    }
};

const App = new Application();