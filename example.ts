// Page Load Hierarchy

// Page Envelope
class PageEnvelope {
    externalInputController: ExternalInputController;
    pageModuleLoader: PageModuleLoader;

    constructor() {
        this.externalInputController = new ExternalInputController();
        this.pageModuleLoader = new PageModuleLoader();
    }
}

// External Input Controller
class ExternalInputController {
    authorizationController: AuthorizationController;

    constructor() {
        this.authorizationController = new AuthorizationController();
    }
}

// Authorization Controller
class AuthorizationController {
    constructor() {
        // Check authorization logic here
    }
}

// Page Module Loader
class PageModuleLoader {
    featureLoader: FeatureLoader;
    modules: ModuleEnvelope[] = [];

    constructor() {
        this.featureLoader = new FeatureLoader();
    }

    addModule(module: ModuleEnvelope) {
        this.modules.push(module);
    }
}

// Feature Loader
class FeatureLoader {
    enabledFeatures: string[] = [];

    loadFeatures(role: string) {
        // Load and activate features based on the role
        // Populate this.enabledFeatures with active features
    }
}

// Module Envelope
class ModuleEnvelope {
    accessRoles: string[];
    features: string[];

    constructor(moduleProperties: { accessRoles: string[]; features: string[] }) {
        this.accessRoles = moduleProperties.accessRoles;
        this.features = moduleProperties.features;
    }
}

// Sample Module Declaration
const moduleProperties = {
    accessRoles: ['Admin', 'User'],
    features: ['f1', 'f2', 'f3'],
};

// Instantiate Page and Modules
const page = new PageEnvelope();
const module1 = new ModuleEnvelope(moduleProperties);
const module2 = new ModuleEnvelope(moduleProperties);

// Add Modules to Page Module Loader
page.pageModuleLoader.addModule(module1);
page.pageModuleLoader.addModule(module2);

// Load Features for a Role if needed in code. You should have UI with Feature Management instead and use it to drive which features to enable from database or similar
const role = 'Admin';
page.pageModuleLoader.featureLoader.loadFeatures(role);
