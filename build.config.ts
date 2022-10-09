// build.config.ts
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    declaration: true, // generate .d.ts files
    failOnWarn: true,
})