'use client'

import { useQuery } from "@tanstack/react-query";
import Sidebar from "@/components/ui/sidebar";
import { ContactList } from "../components/ContactList";
import { fetchContacts } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EditContactDialog } from "@/components/EditDialog";


// Define the Contact interface
interface Contact {
  name: string;
  email: string;
  phone: string;
  website: string;
}

export default function Home() {
  const { data, isLoading, error} = useQuery({
    queryKey: ["contacts"],
    queryFn: fetchContacts,
  });

  const [selectedMenu, setSelectedMenu] = useState("Show Contacts");
  const [showContacts, setShowContacts] = useState(false);

  const handleSave = (updatedContact: Contact) => {
    console.log("Saved Contact:", updatedContact);
    // Handle the save logic, like making an API call to save the contact
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<any>(null); // State to store the selected contact
  
  const handleDialogClose = () => {
    setIsDialogOpen(false); // Close the dialog
  };

  // Handle edit button click to select the contact
  const handleEditClick = (contact: Contact) => {
    setSelectedContact(contact); // Set the selected contact
    setIsDialogOpen(true); // Open the dialog
  };


  if(isLoading) return <p>Loading ....</p>
  if(error) return <p>Error loading contacts</p>
  
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar Section */}
      <aside className="bg-blue-100 border-r shadow-md">
        <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      </aside>
      <main className="p-6 bg-blue-50">
        {/* Conditional Rendering for Entire Main Section */}
        {selectedMenu === "Show Contacts" && (
          <section className="p-2 shadow rounded-md border">
            <header className="text-center mb-6">
              <h1 className="text-3xl font-bold mb-4 text-blue-700">Contacts Page</h1>
              {/* <ContactList contacts={data}/> */}
              <Button 
                onClick={() => setShowContacts((prev: boolean) => !prev)}
                className="px-10 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
              >
                {showContacts ? "Hide Contacts" : "Show All Contacts"}
              </Button>
            </header>
          </section>
        )}
        

         {/* Conditional Rendering of Contact List */}

        {showContacts && (
          <section className=" p-2 shadow rounded-md border">
             <ContactList contacts={data}
             onEdit={handleEditClick} // Pass the onEdit function to ContactList
             />

             {/*Show the edit dialog if a contact is selected*/}
             {selectedContact && isDialogOpen && (
              <EditContactDialog
                contact={selectedContact} // Pass the selected contact to the dialog
                onSave={handleSave}
                onClose={handleDialogClose}
                isOpen={isDialogOpen}
              />
             )}
          </section>
        )}

        {selectedMenu === "Create a Contact" && (
          <header className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-4 text-blue-700">Create a Contact</h1>
            {/* Add your form or content for creating a contact */}
          </header>
        )}

        {selectedMenu === "Update a Contact" && (
          <header className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-4 text-blue-700">Update a Contact</h1>
            {/* Add your form or content for creating a contact */}
          </header>
        )}

        {selectedMenu === "Delete a Contact" && (
          <header className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-4 text-blue-700">Delete a Contact</h1>
            {/* Add your form or content for creating a contact */}
          </header>
        )}
      </main>
      
    </div>
  );
}


