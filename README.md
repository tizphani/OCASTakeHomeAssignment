After some struggle was able to resolve the submodule problems. 
########
P.S. The UI folder has been added as a submodule. This could have been a side effect of using ng-cli to generate the project.
# ACME Employee Activities

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8 and ASP.NET Core 3.1.2.


### API 

Visual Studio 2019 Professional Edition (trial version) was used to develop the API solution.

Entity Framework 3.1.5 was used as the ORM.

The root directory contains two scripts for creation of the database and the table.


## UI
UI was developed using Visual Studio Code. RxJS 6.5.4 was used.
Package.json under AcmeEmployeeActivitiesUI\employee-activities lays out the details of the dependencies.

#Challenges faced
I would have loved to complete the unit tests too but had to give up due the paucity of time. I spent considerable amount of time trying to write unit tests for the API Controller but had to give up
as it was proving to be too cumbersome. Entity Framework does not expose an interface to DBContext. Even if I Mock the DBContext, the challenge was to mock the DBSet class. I tried doing that too but
there were too many too code changes as laid out by the Microsoft documentation - https://docs.microsoft.com/en-us/ef/ef6/fundamentals/testing/mocking. I had to abandon that exercise after spending 
more than couple of hours.

Another problem I faced was setting up my dev environment. With a slow home laptop downloading SQL Server Studio and VS 2019 took out a lot of time from me.

One more technical challenge I faced was with CORS. I ended up configuring AllowAnyHeader, AllowAnyMethod and AllowAnyOrigin.

## Validations and features.

Following UI validations were added - FirstName, LastName, Email Activity cannot be null and should be between 3 and 250.
												
There are two buttons in the home page - Submit, Reset.

Submit button will be enabled only if the validations pass. Reset will be always enabled.

Once the user submits the form a POST method is called. If there is an error a panel at the bottom will inform the user about the error. The panel will disappear if the user clicks Reset button.

If the submission is successful the user is routed to the Activity details page which lists all the activities of all the employees in a table. A back button at the bottom of the activities page
will navigate the user to the home/default page. 

By default the user will be routed to the home page i.e. employee-activities entry page. User can individually navigate to the details page by appending activitydetails to the initial URL.

If the URL is invalid a custom 404 page is shown with a link to route the user to the home page.


## Thank you
Thank you for giving me the opportunity. Please reach out to me if there are any problems with the code base - iamphani@gmail.com



