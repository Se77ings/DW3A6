namespace api.Models
{
    public class Tarefa
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public int Prioridade { get; set; }

        public int Realizado {  get; set; }
    }
}
