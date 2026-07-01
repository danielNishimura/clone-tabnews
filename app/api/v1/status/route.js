import database from "../../../../infra/database.js";

export async function GET(request) {
    const result = await database.query("SELECT 1 + 1 as sum;");
    console.log(result.rows);
    
    return Response.json({
        message: "alunos do curso.dev são pessoas acima da média",
        database: database ? "conectado" : "desconectado"
    }, {
        status: 200
    });
}
