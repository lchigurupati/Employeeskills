# EmployeeSkillTracking 

Step 1:  
checkcout the project and import to STS.


# Mongodb setup
Step 1:
for the first time you have to run the command:

go to mongodb installed loction : C:\Windows\System32\cmd.exe

open cmd from there and set path as: mongod --dbpath "E:\Work\MongoDB\Data"


Step 2: Open "MongoDB Compass Community" shortcut created on your deskop
click on Connect button
you can see available databases. 
click on create databases and give name as "Employee" and give collection name as "EmployeeCollection"
once employee records added thru REST service can be viewed after clicking "EmployeeCollection"

Step 3: Open new command prompt and enter mongo
>show dbs
>use Employee 
>db.EmployeeCollection.find().pretty() --> to view the records created from REST service.
