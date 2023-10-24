self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: steve.codec.xor.encode,
    decodeUrl: steve.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};