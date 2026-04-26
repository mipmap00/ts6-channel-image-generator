const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    output: 'export',
    basePath: isProd ? '/ts6-channel-image-generator' : '',
    compiler: {
        styledComponents: true,
    }
}
