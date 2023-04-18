# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Calling super in a Ruby class will make it a child of the class passed into the super call. That means that it will inherit any of that class' traits, such as it's initialize method, class methods, and variables. These can be overrided by the child class to make them either more specific or have a different purpose, but usually you only want a class to inherit from another if the child is a sub-type of the parent class.

Researched answer: Super can also be used to make a class a child of a class that is itself already inheriting from another class. This allows for very specific classes inherited down to specific purposes.

2. What is a gem?

Your answer: A gem is a code package for Ruby. This means they are basically code snippits that you can import to use pre-defined methods. These methods can be simple or complex, but usually are packaged around a specific task.

Researched answer: Ruby gems are code packages that contain libraries or applications for use in Ruby projects. They are installed in each project individually so you will need to import them whenever needed.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is one in which each table can be connected to another through the use of primary and foreign keys. There are other types of databases, but I do not know much about them.

Researched answer: A relational database uses a common data form(a key), to connect multiple database tables together. One table will use another table's primary key as its own foreign key, and this foreign key will be a data column. There are other types of databases that don't use this structure, such as object-oriented databases which hold data in the form of logical objects, Hierarchical databases that use a tree structure with data nodes connected through branches, and many other types that each form connections between data in unique ways. Each database type might be good for one type of data, but inefficient for others.

4. What are primary keys? Why are they important?

Your answer: Primary keys are unique identifiers given to each row in a data table in relational databases. They are used to differentiate between rows for connection to other tables.

Researched answer: Primary keys need to be unique, so they are basically ID's. Certain data tables may already have a column that is unique and therfore be a primary key, though some will need uniquely made columns to become primary keys. They are then related to other tables as foreign keys, which can be repeated, used for many rows. This would be a one to many relationship.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: the HTTP verbs are POST, going with Create, GET with Read, PUT and PATCH with Update, and DELETE with itself.

Researched answer: POST creates data in a database, GET retrieves data in some form, PUT and PATCH affect data that is already in a database, and DELETE will remove data.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: Checking a model to determine if it in practice executes all of the tasks that it was designed to perform.

2. RESTful routes: The process of ensuring that routing in a project fits CRUD standards for reusable routes.

3. ERB: ERB is embedded Ruby, and is a feature of Ruby that allows Ruby to be embedded in text files like HTML,.

4. Params: Rails params are used to access query data.

5. API: An API is a Application Programming Interface, which allow you to interact with another program or database.
