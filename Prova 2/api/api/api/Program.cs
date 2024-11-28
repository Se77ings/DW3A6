using api.Data;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddDbContext<DataContext>(options => options.UseSqlServer("name=ConnectionStrings:Development"));
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseHttpsRedirection();

app.MapGet("/", async (DataContext db) =>
{
    try
    {
        return Results.Ok(await db.Tarefas.OrderBy(p => p.Prioridade).ToListAsync());
    }
    catch
    {
        return Results.BadRequest("Erro ao buscar as tarefas");

    };
});

app.MapPost("/add", async (DataContext db, [FromBody] Tarefa tarefa) =>
{
    try
    {
        await db.Tarefas.AddAsync(tarefa);
        await db.SaveChangesAsync();
        return Results.Ok("Tarefa Salva com sucesso");
    }
    catch
    {
        return Results.BadRequest("Não foi possível salvar");
    }

});


app.MapPut("{id}", async (DataContext db, int id, [FromBody] Tarefa tarefa) =>
{
    try
    {
        if (id <= 0 || id != tarefa.Id)
            return Results.BadRequest("Curso inválido");

        if (!await db.Tarefas.AnyAsync(p => p.Id == id))
            return Results.NotFound("Curso não encontrado");

        db.Tarefas.Update(tarefa);
        await db.SaveChangesAsync();

        return Results.Ok("Curso atualizado com sucesso");
    }
    catch
    {
        return Results.BadRequest("Erro ao buscar os cursos");
    }
});


app.MapDelete("/{id}", async (DataContext db, int id) =>
{
    try
    {
        if (id <= 0)
            return Results.BadRequest("Curso inválido");

        Tarefa? curso = await db.Tarefas.FindAsync(id);
        if (curso == null)
            return Results.NotFound("Curso não encontrado");

        db.Tarefas.Remove(curso);
        await db.SaveChangesAsync();

        return Results.Ok("Curso removido com sucesso");
    }
    catch
    {
        return Results.BadRequest("Erro ao buscar os cursos");
    }
});


app.Run();
