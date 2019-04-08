const app = new Vue({
    el: '#app',

    data: {
        title1: 'Nueva Tarea',
        title2: 'Lista de Tareas',
        task: [],
        newTask: '',
        date: '',
    },

    methods: {
        addTask: function(){
            console.log('Name: '+this.newTask);
            this.task.push({
                name: this.newTask,
                date: this.date,
                status: false
            });
            localStorage.setItem('task-vue', JSON.stringify(this.task));
            this.newTask = '';
            this.date = '';
            //location.reload();
        },

        changeStatus: function(index){
            this.task[index].status = true;
            localStorage.setItem('task-vue', JSON.stringify(this.task));
        },

        delTask: function(index){
            this.task.splice(index, 1);
            localStorage.setItem('task-vue', JSON.stringify(this.task));
        },
    },

    created:function(){
        let dataDB = JSON.parse(localStorage.getItem('task-vue')).sort( (a,b) => a.date > b.date ? 1 : -1);
        if(dataDB === null){
            this.task = [];
        } else {
            this.task = dataDB;
        }
    },
    
});