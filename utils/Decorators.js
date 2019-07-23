import AllureReporter from "@wdio/allure-reporter";

export function element(browser) {
    return function wrapper(target, property, descriptor) {
        let originalFunc = descriptor.value;
        descriptor.value = function(...args) {
            let _locator = originalFunc.call(this);
            browser.waitUntil(() => {
                return $(_locator).waitForExist();
            });
            $(_locator).scrollIntoView();
            return $(_locator);
        };
        return descriptor;
    };
}

export function readonly(target, property, descriptor) {
    descriptor.writable = false;
    return descriptor;
}