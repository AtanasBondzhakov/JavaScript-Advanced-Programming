class HomeRenovation {
    constructor(budget) {
        this.budget = Number(budget);
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        }

        const newTask = {
            description,
            cost,
            priority,
        }

        this.tasks.push(newTask);
        this.budget -= cost;

        return `The task '${description}' has been successfully added to the renovation plan.`;
    };

    markTaskAsCompleted(description) {
        const task = this.tasks.find(task => task.description === description);

        if (!task) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }

        this.tasks = this.tasks.filter(task => task.description !== description);
        this.completedTasks.push(task);

        return `The task '${description}' has been successfully completed.`;
    };

    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return 'The priority cannot be zero or negative.';
        }

        const qualifiedTasks = this.tasks.filter(task => task.priority >= minimalPriority);

        if (qualifiedTasks.length === 0) {
            return `No tasks found with priority ${minimalPriority} or higher.`;
        }

        return `You have ${qualifiedTasks.length} tasks to prioritize.`;
    };

    renovationSummary() {
        if (this.completedTasks.length === 0) {
            throw new Error('No tasks have been completed yet!');
        }

        let tasksInfoResult = [];

        this.tasks.forEach(task => {
            tasksInfoResult.push(`${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`);
        });

        let result = `Budget left $${this.budget}.
You have completed ${this.completedTasks.length} tasks.
Pending tasks in the renovation plan:
${tasksInfoResult.join('\n')}`;

        return result;
    };
}