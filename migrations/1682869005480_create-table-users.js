/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('users',{
        id: {
            type: 'VARCHAR(40)',
            primaryKey: true,
        },
        username: {
            type:'VARCHAR(40)',
            unique: true,
            notNull: true,
        },
        password: {
            type: 'TEXT',
            notNull: true,
        },
        fullname: {
            type: 'TEXT',
            notNull: true,
        }
    })
};

exports.down = (pgm) => {
    pgm.dropTable ('users');
};
