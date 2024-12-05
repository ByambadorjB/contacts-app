import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface EditContactDialogProps {
  contact: {
    name: string;
    email: string;
    phone: string;
    website: string;
  };
  onSave: (updatedContact:{ name: string; email: string; phone: string; website: string }) => void;
  onClose: () => void; // Add the onClose function
  isOpen: boolean; // Receiving the open state as a prop
}

export const EditContactDialog: React.FC<EditContactDialogProps> = ({
    contact,
    onSave,
    onClose,
    isOpen,
  }) => {
    const [updatedContact, setUpdatedContact] = useState(contact);
  
    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Contact</DialogTitle>
            <DialogDescription>Make changes to the contact details and save them.</DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSave(updatedContact);
            }}
          >
            <div className="mb-4">
              <label className="block text-sm font-medium">Name</label>
              <Input
                value={updatedContact.name}
                onChange={(e) =>
                  setUpdatedContact({ ...updatedContact, name: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <Input
                value={updatedContact.email}
                onChange={(e) =>
                  setUpdatedContact({ ...updatedContact, email: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Phone</label>
              <Input
                value={updatedContact.phone}
                onChange={(e) =>
                  setUpdatedContact({ ...updatedContact, phone: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Website</label>
              <Input
                value={updatedContact.website}
                onChange={(e) =>
                  setUpdatedContact({
                    ...updatedContact,
                    website: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" type="button" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    );
  };
  