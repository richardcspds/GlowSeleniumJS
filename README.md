# GlowSeleniumJS
Automation framework for Glow based on JS

## To run
```bash
# clone repo
$ git clone https://github.com/richardcspds/GlowSeleniumJS.git
$ cd GlowSeleniumJS/

# Install requirements
$ npm install

# Run test
$ npm run test
```

## Open report server with Latest report
```bash
# run Allure server
$ npm run reports
```

## Run Headless
Go to wdio.conf.js file, look for  
```
// args: ["--headless", "--disable-gpu"] and uncomment it.
```

## Enable or disable Screenshots
Under ./utils/Decorators.js Comment or uncomment:
``
browser.takeScreenshot();
``
TODO: This will be a configuration as a shell command