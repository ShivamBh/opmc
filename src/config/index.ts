export default {
  env: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  dbPostgres: process.env.DATABASE_URL,
  openaiApiKey: process.env.OPENAPI_API_KEY,
  openaiOrgId: process.env.OPENAPI_API_KEY
}