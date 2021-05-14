USE employee_DB;

INSERT INTO Department (name)
VALUES ('HR'),('Legal'),('Sales'),('Marketing'),('IT');

INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES (''), (''), (''), (''), (''), (''), ('');

INSERT INTO Role (title, salary, department_id)
VALUES ('HR Executive',28000,1), 
        ('HR Executive',28000 ,1),
        ('HR Manager',39000 ,1),
        ('HR Director',55000 ,1),
        ('legal Executive',35000 ,2),
        ('legal Executive',35000 ,2),
        ('Head of Legal',70000 ,2),
        ('Sales Executive',35000 ,3),
        ('Sales Exective',35000 ,3), 
        ('Account Manager',48000 ,3), 
        ('Acount Manager',48000 ,3),
        ('Account Director',70000 ,3),
        ('Head of Sales',100000 ,3),
        ('Marketing Executive',28000 ,4),
        ('Marketing Exectuive',28000 ,4),
        ('Marketing Manager', 40000 ,4),
        ('Marketing Director',65000 ,4),
        ('Junior Developer',35000 ,5),
        ('Juinor Developer',35000 ,5),
        ('Senior Developer',50000 ,5),
        ('Senior Developer',50000 ,5),
        ('Head of Tech',90000 ,5);
      






