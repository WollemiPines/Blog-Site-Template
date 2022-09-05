module.exports =
{
    "devlopment":{
        "username":PROCESS.ENV.MYSQL_USER,
        "password": PROCESS.ENV.MYSQL_,
        "database": PROCESS.ENV.MYSQL_DBNAME,
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test":{
        "username":"root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production":{
   "use_env_variable":"JAWSDB_URL",
   "dialect":"mysql"
    },
    
    


}