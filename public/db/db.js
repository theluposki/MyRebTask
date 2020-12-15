var db = new Dexie("tasks_database");

db.version(1).stores({
    tasks: '++id, task, done'
});

// CREATE
const save = async (obj) => {
   return await db.tasks.add(obj)
}
//READ
const find = async () => {
   return await db.tasks.toArray()
}
//UPDATE
const update = async (id, obj) => {
    await db.tasks.update(id , obj)             
}
//DELETE
const del = async (id) => {
    await db.tasks.delete(id)
}

          