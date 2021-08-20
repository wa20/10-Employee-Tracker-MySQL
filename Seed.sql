USE employee_DB;

INSERT INTO Department (department)
VALUES ('HR'),('Legal'),('Sales'),('Marketing'),('IT');


INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES  
-- HR
        ('Micky', 'Mouse', 1, 5),
        ('Betty', 'Boop',1 ,5), 
        ('Clark', 'Kent', 2 ,5 ),
        ('Kermit', 'Frog', 2,5 ),
        ('Eric', 'Cartman', 3, 5),  
-- Legal
        ('Lucy', 'Ricardo', 4, 9),
        ('Charlie', 'Brown', 4 , 9),
        ('Rocky', 'Balboa', 4, 9), 
        ('Cersi', 'Lanister', 5, 9),
-- Sales    
        ('Kyle', 'Broflovski', 6, 16),  
        ('Dora', 'Explorer',6 , 16), 
        ('Natasha', 'Romanoff',6 ,16), 
        ('Fred', 'Flinstone',6 ,16 ), 
        ('Miss', 'Piggy',7 , 16), 
        ('Sansa', 'Stark', 7,16), 
        ('Jon', 'Snow', 8,17),
        ('Bruce', 'Wayne', 9, 16),
-- Marketing 
        ('John', 'Mclane', 10, 23), 
        ('Buffy', 'Summers',10 ,23 ),        
        ('Jay', 'Gatsby',10 ,23 ), 
        ('Mary', 'Poppins',11 ,23 ), 
        ('Willy', 'Wonka',11 ,23 ), 
        ('Donald', 'Trump', 12, 23),
-- Tech
        ('Scooby', 'Doo',13 ,29), 
        ('Stan', 'Marsh',13 ,29), 
        ('Sam', 'Willson', 13, 29), 
        ('Peter', 'Parker', 14,29),
        ('Lisa', 'Simpson', 14, 29),
        ('Carol', 'Danvers', 15, 30),  
        ("T'Challa", 'Udaka', 16, 30);

     
        
        


INSERT INTO Role (title, salary, department_id)
VALUES ('HR Executive',28000,1),
        ('HR Manager',39000 ,1), 
        ('HR Director',55000 ,1),

        ('legal Executive',35000 ,2),
        ('Head of Legal',70000 ,2),

        ('Sales Executive',35000 ,3),
        ('Account Manager',48000 ,3),
        ('Account Director',70000 ,3),
        ('Head of Sales',100000 ,3),

        ('Marketing Exectuive',28000 ,4),
        ('Marketing Manager', 40000 ,4),
        ('Marketing Director',65000 ,4),

        ('Juinor Developer',35000 ,5),
        ('Senior Developer',50000 ,5),
        ('Tech Director',80000,5 ),
        ('Head of Tech',120000 ,5);
       
      






