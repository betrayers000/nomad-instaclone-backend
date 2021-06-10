import { loadFilesSync, mergeResolvers, mergeTypeDefs, makeExecutableSchema } from "graphql-tools";


// ** 모든 폴더, * 모든 파일 
// laodFileSync 를 하면 해당 파일의 export default 를 가져온다.
const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`) // __dir 내의 모든 typeDefs.js 를 불러온다.
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.{mutations,queries}.js`) // __dir 내의 모든 queries.js, mutation.js 를 불러온다.

const typeDefs = mergeTypeDefs(loadedTypes); // 불러온 typeDefs 를 합친다.
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers }) // schema 를 생성한다.

export default schema