import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import path from 'path'
import { getPackagesSync } from '@lerna/project'
import pkg from '../package.json'

const noElPrefixFile = /(utils|directives|hooks|locale)/
const getOutFile = (name, dir = 'lib') => {
  const compName = name.split('@missfresh/')[1]
  if (noElPrefixFile.test(name)) {
    return `${dir}/${compName}/index.js`
  }
  return `${dir}/mf-${compName}/index.js`
}

const deps = Object.keys(pkg.dependencies)
const inputs = getPackagesSync()
  .map(pkg => pkg.name)
  .filter(name => name.includes('@missfresh') && !name.includes('utils'))

export default inputs.map(name => ({
  input: path.resolve(
    __dirname,
    `../packages/${name.split('@missfresh/')[1]}/index.ts`,
  ),
  output: [
    {
      format: 'es',
      file: getOutFile(name, 'es'),
      paths(id) {
        if (/^@missfresh/.test(id)) {
          if (noElPrefixFile.test(id)) return id.replace('@missfresh', '..')
          return id.replace('@missfresh/', '../mf-')
        }
      },
    },
    {
      format: 'cjs',
      file: getOutFile(name, 'lib'),
      exports: 'named',
      paths(id) {
        if (/^@missfresh/.test(id)) {
          if (noElPrefixFile.test(id)) return id.replace('@missfresh', '..')
          return id.replace('@missfresh/', '../mf-')
        }
      },
    },
  ],
  plugins: [
    css(),
    vue({
      target: 'browser',
      css: false,
    }),
    nodeResolve(),
    esbuild(),
  ],
  external(id) {
    return (
      /^vue/.test(id) ||
      /^@missfresh/.test(id) ||
      deps.some(k => new RegExp('^' + k).test(id))
    )
  },
}))
