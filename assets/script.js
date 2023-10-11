
const tasks = ["Ler um livro", "Caminhar", "Estudar assuntos da faculdade", "Estudar Programação", "Ficar 1h sem pc e celular", "Fazer Exercicios", "Comer uma fruta no café da manhã e depois do almoço", "Assistir um Podcast", "Beber 1 Litro de Agua", "Comer Salada e Vegetais no almoço", "Acordar mais cedo no dia seguinte"]

function generateTask(tasks) {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
}

const generateButton = document.getElementById("generateButton");

const taskResult = document.getElementById("taskResult");

generateButton.addEventListener("click", function() {
    const randomTask = generateTask(tasks);
    taskResult.textContent = "Tarefa aleatória: " + randomTask;
})