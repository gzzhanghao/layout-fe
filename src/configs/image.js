import Text from '../fields/Text'

export default  {
  name: 'Image',
  key: 'image',
  available: 'image',
  fields: {
    url: Text()
  },
  apply(config, { prop }) {
    prop.src = config.url
  }
}
