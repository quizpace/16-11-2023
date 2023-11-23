const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('project.db')

db.run(`CREATE TABLE IF NOT EXISTS COMPANY(
    ID INT PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    AGE INT NOT NULL,
    ADDRESS CHAR(50),
    SALARY REAL);`, error => {
        if (error)
            console.log('Error: ' + JSON.stringify(error));
        else
            console.log('table company ready');

        // continue here

        db.run(`
        INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
        VALUES (?, ?, ?, ?, ?);`,[1, 'Paul', 32, 'California', 20000 ], 
        error => {
            if (error)
                console.log('Error: ' + JSON.stringify(error));
            else
                console.log('1 row inserted');
    
            // continue here
        })

        /*
            INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
            VALUES (1, 'Paul', 32, 'California', 20000.00 );
            INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
            VALUES (2, 'Allen', 25, 'Texas', 15000.00 );
            INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
            VALUES (3, 'Teddy', 23, 'Norway', 20000.00 );
            INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
            VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00 );
            INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
            VALUES (5, 'David', 27, 'Texas', 85000.00 );
            INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
            VALUES (6, 'Kim', 22, 'South-Hall', 45000.00 );
        */
        /*
        -- GET     SELECT * FROM COMPANY;
        -- GET/ID  SELECT * FROM COMPANY WHERE ID = 7;

        -- PUT/ID
        -- UPDATE COMPANY SET NAME=, AGE=ADDRESS=,SALARY= WHERE ID = _7
        -- PATCH/ID
        -- UPDATE COMPANY SET NAME={IF IN BODY}, AGE={IF IN BODY}ADDRESS={IF IN BODY},SALARY={IF IN BODY}
        -- WHERE ID = _7
        
        -- DELETE/ID
        -- DELETE FROM COMPANY WHERE ID = 7
        */

    });
