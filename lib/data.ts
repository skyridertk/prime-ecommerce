import { ClientConfig, Pool } from 'pg'

let clientConfig: ClientConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'fulltextdb',
    password: '6914',
    port: 5432,
}

const pool = new Pool(clientConfig)

const getProductSearch = async (searchString: string) => {
    let resp = await pool.query(`
    SELECT *, ts_rank_cd(fts_doc_en, query) as RANK
    FROM movies, websearch_to_tsquery('english', '${searchString}') query
    WHERE query @@fts_doc_en
    LIMIT 10;
    `)
    return resp.rows
}

console.log(getProductSearch('of the age -harry').then((res) => console.log(res)))