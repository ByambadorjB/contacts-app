Contacts App
Installation and Setup
To get the Contacts App up and running, follow these two steps:

Install Dependencies:
Run the following command to install all required dependencies:

bash
Copy code
npm install
Run the Development Server:
Once the dependencies are installed, run the development server:

bash
Copy code
npm run dev
This will start the app at http://localhost:3000.

Deployed Version
You can also access the app directly via the deployed URL on Vercel:
https://contacts-app-nextjs-typescipt-react.vercel.app/


Features
The app consists of a sidebar menu with selectable and changeable options. At this stage, only the "Show Contacts" feature has been implemented. Here’s what it currently includes:

Fetching Contacts:
The app retrieves contacts (users) from the following API:
https://jsonplaceholder.typicode.com/users

"Show Contacts" Button:
Once you enter the "Show Contacts" page, you will see a button labeled "Show All Contacts".

When clicked, the button changes to "Hide Contacts".
A table with user information will be displayed, showing the following details:
ID
Name
Email
Phone
Website
Actions (Edit and Delete buttons – though not fully functional yet)
Edit Contact Dialog:
When you click the Edit button, a dialog will appear with the following fields:

Name
Email
Phone
Website
Clicking Save will display an alert showing the form submission, but the edit functionality is not fully implemented yet.

Future Development
Other Menus: The remaining menu items like "Create a Contact", "Update a Contact", and "Delete a Contact" will be implemented in future stages.



