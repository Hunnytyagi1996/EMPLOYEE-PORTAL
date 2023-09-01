# EMPLOYEE-PORTAL-APP (CRUD Operation)

In this employee portal app we are performing the CRUD(Create,Read,Update,Delete) operation with employee data.  This operation would involve adding new employee profiles to the LocalStorage. This could include entering details such as the employee's name, designation, technology, company and other relevant information. 

UI Overview-
![Screenshot (9)](https://github.com/Hunnytyagi1996/EMPLOYEE-PORTAL-APP/assets/48430498/ca53895b-5721-4bd4-beb1-da19247dc744)

Functionality:
so first I create a  form to get data from an employee by using ngForm and  i have used some angular concept like Template-Driven Forms, ngModel for  two way data binding, Validation for form fields, DropDown and Typescript.

1. Create: When an employee fill all the form fields and submit form field data when a save button is clicked internally we are calling onSave() method that is responsible to create 
           record in Employee List(LocalStorage). 
2. Read  : To achieve read functionality  I have used get method to read data from LocalStorage.  The read operation would be used to display details of employees, their profiles.
3. Update: In Update operation employee can edit the relevant fields in their profile and after updation it push data  back to the LocalStorage.Updating allows for modifying existing 
           data  in the system.
4. Delete :Delete operation might be used when an employee leaves the company or if duplicate records are identified.       

Project Technologies - 
1. Angular
2. Typescript
3. HTML
4. CSS
5. Bootstrap
6. Javascript

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 





## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
