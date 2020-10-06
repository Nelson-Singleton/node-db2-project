//record changes to the database shcema
//check schemabuilder section on knex.org

//the up() function describes the changes to apply to the database whenthe migration runs
exports.up = function(knex) {
    return knex.schema.createTable('menu_items', tbl => {
        tbl.increments(); //primary key or id, integer, autoincremented
        //index makes searching by this column faster
        tbl.string('name', 512).notNullable().unique().index();

        tbl.decimal('price', 8, 2)
        
        //Relational Databases store booleans as 1 and 0
        tbl.boolean('available').defaultTo(false)
    })
};

//the down() function describes how to undo the changes
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('menu_items');
};
