USE employee_DB;

INSERT INTO employee_DB.department; INSERT INTO Department (name)
VALUES ('HR'),('Legal'),('Sales'),('Marketing'),('IT');


SELECT * FROM employee_DB.employee;INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES  
-- HR
        ('Micky', 'Mouse', 1, 3),
        ('Betty', 'Boop',1 ,3), 
        ('Clark', 'Kent', 2 ,3 ),
        ('Kermit', 'Frog', 2,3 ),
        ('Eric', 'Cartman', 3, NULL),  
-- Legal
        ('Lucy', 'Ricardo', 4, 5 ),
        ('Charlie', 'Brown', 4 , 5 ),
        ('Rocky', 'Balboa', 4, 5), 
        ('Cersi', 'Lanister', 5, NULL), 
-- Sales    
        ('Kyle', 'Broflovski', 6, 8),  
        ('Dora', 'Explorer',6 , 8), 
        ('Natasha', 'Romanoff',6 ,8), 
        ('Fred', 'Flinstone',6 ,8 ), 
        ('Miss', 'Piggy',7 , 8), 
        ('Sansa', 'Stark', 7,8), 
        ('Jon', 'Snow', 8,9), 
        ('Bruce', 'Wayne', 9, NULL ), 
-- Marketing 
        ('John', 'Mclane', 10, 12), 
        ('Buffy', 'Summers',10 ,12 ),        
        ('Jay', 'Gatsby',10 ,12 ), 
        ('Mary', 'Poppins',11 ,12 ), 
        ('Willy', 'Wonka',11 ,12 ), 
        ('Donald', 'Trump', 12, NULL), 
-- Tech
        ('Scooby', 'Doo',13 ,15 ), 
        ('Stan', 'Marsh',13 ,15 ), 
        ('Sam', 'Willson', 13, 15), 
        ('Peter', 'Parker', 14,15 ),
        ('Lisa', 'Simpson', 14, 15),
        ('Carol', 'Danvers', 15, 16),  
        ("T'Challa", 'Udaka', 16, NULL);
        
        


INSERT INTO employee_DB.role; INSERT INTO Role (title, salary, department_id)
VALUES ('HR Executive',28000,1),  --1
        ('HR Manager',39000 ,1),  --2
        ('HR Director',55000 ,1), --3

        ('legal Executive',35000 ,2), --4
        ('Head of Legal',70000 ,2), --5

        ('Sales Executive',35000 ,3), --6
        ('Account Manager',48000 ,3),  --7
        ('Account Director',70000 ,3), --8
        ('Head of Sales',100000 ,3), --9

        ('Marketing Exectuive',28000 ,4), --10
        ('Marketing Manager', 40000 ,4), --11
        ('Marketing Director',65000 ,4), --12

        ('Juinor Developer',35000 ,5), --13
        ('Senior Developer',50000 ,5), --14
        ('Tech Director',80000,5 ) --15
        ('Head of Tech',120000 ,5); --16
       
      






