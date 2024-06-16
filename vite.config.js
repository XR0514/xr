import { defineConfig } from 'vite';
import path, {join} from "path";

export default defineConfig({
    publicDir : "public",
    base : "xr",
    server : {
        open : true,
        define: {
            __APP_VERSION__: JSON.stringify('v1.0.0'),
        }

    },
    build : {
        outDir : "build",
        assetsDir : "assets",
        assetsInlineLimit : 10 * 1024,
        sourcemap : true,
        emptyOutDir : true, 
        rollupOptions : {
            input : {
                index : join(__dirname, "./index.html"),
                details : join(__dirname, "./details.html"),
                search : join(__dirname, "./search.html")
            },
            output : {
                entryFileNames : 'js/entry-[name]-[hash:8].js',
                chunkFileNames : 'js/entry-[name]-[hash:8].js',
                assetFileNames : chunkInfo => {
                    const imageReg = /(png|jpe?g|gif|svg|webp)$/;
                    const [, ext] = path.basename(chunkInfo.name).split(".");
                    if(ext === 'css'){
                        return `css/[name]-[hash:8].${ext}`
                    }else if(imageReg.test(ext)){
                        return `images/[name]-[hash:8].${ext}`
                    }
                    return `assets/[name]-[hash:8].${ext}`
                }
            }

        }
    }
})