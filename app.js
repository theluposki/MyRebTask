const vm = new Vue({
    el:'#app',
    data(){
      return {
          titulo: 'MyReb Task.io',
          task: '',
          list: [{ id: 0, task: '', done: false }],
      }
    },
    async created(){
        await this.getAll()
    },
    methods: {
        async doneTask(item){
             if(item.done){
                await update(item.id, { done: false })
                await this.getAll()
             } else {
                await update(item.id, { done: true })
                await this.getAll()
             }
        },
        async getAll(){
            this.list = await find()
        },
        async addTask(){
            let obj = {
                task: this.task,
                done: false,
            }
            await save(obj)
            await this.getAll()
            this.task = ''
        },
        async deleteTask(id){
            await del(id)
            await this.getAll()
        }
    }
})
