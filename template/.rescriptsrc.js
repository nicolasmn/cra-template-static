const path = require('path')
const { appPath } = require('react-scripts/config/paths')

module.exports = config => {

  const isEnvDevelopment = config.mode === 'development'
  
  config.entry = {
    // default create-react-app bundle
    main: config.entry,
    // our custom bundle
    script: path.join(appPath, 'src/script.js')
  }

  // change the filename to be dynamically generated in development mode,
  // otherwise additionally generated bundles would all be named 
  // `bundle.js` and thus override each other
  if (isEnvDevelopment) {
    config.output.filename = 'static/js/[name].js'
  }

  // disable inlining the runtimeChunk because it would be stripped away
  // and thus break webpacks dynamic imports
  config.optimization.runtimeChunk = false

  return config
}
