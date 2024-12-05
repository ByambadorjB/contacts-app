
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EditContactDialog } from "./EditDialog";




interface ContactCardProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface ContactListProps {
  contacts: ContactCardProps[];
  onEdit: (contact: ContactCardProps) => void; // Function to handle editing a contact
}

export const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<ContactCardProps | null>(null);

  const handleEditClick = (contact: ContactCardProps) => {
    setSelectedContact(contact);
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    // Save the edited contact
    alert(`Updated contact: ${JSON.stringify(selectedContact)}`);
    setIsDialogOpen(false); // Close dialog
  };

  const handleClose = () => {
    setIsDialogOpen(false); // Close dialog when Cancel or Close button is clicked
  };

  return (
    <div >
        <div className="overflow-y-auto max-h-96 border rounded-md">
            <div className="sticky top-0 bg-white border-b z-10">
                <Table  className="table-auto w-full border-collapse">
                    <TableHeader  >
                    <TableRow>
                        <TableHead className=" w-[100px]">ID</TableHead>
                        <TableHead className="text-right">Name</TableHead>
                        <TableHead className="text-right">Email</TableHead>
                        <TableHead className="text-right ">Phone</TableHead>
                        <TableHead className="text-right ">Website</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                    </TableHeader>
                </Table>
            </div>
            {/* Scrollable Table Body */}
            <div className="">
                <Table className="">
                    <TableBody>
                        {contacts.map((contact) => (
                        <TableRow key={contact.id}>
                            <TableCell className="leading-tight">{contact.id}</TableCell>
                            <TableCell className="text-right p-1">{contact.name}</TableCell>
                            <TableCell className="text-right p-1">{contact.email}</TableCell>
                            <TableCell className="text-right p-1">{contact.phone}</TableCell>
                            <TableCell className="text-right p-1">{contact.website}</TableCell>
                            <TableCell className="text-right p-1">
                                <Button
                                variant="outline"
                                className="mr-2 text-sm py-1 px-2"
                                onClick={() => handleEditClick(contact)}
                                >
                                Edit
                                </Button>
                                <Button variant="destructive"
                                className="text-sm py-1 px-2"
                                >Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                    
                </Table>
            </div>
            
        </div>
        <div className="">
            <Table className="">
                <TableCaption>A list of Contacts</TableCaption>
            </Table>
        </div>

        {selectedContact && (
            <EditContactDialog 
            contact={selectedContact}
            onSave={handleSave}
            onClose={handleClose}
            isOpen={isDialogOpen} // Control dialog visibility
            />
        )}
      
    </div>
  );
};

