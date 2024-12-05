import {
    Home,
    Users,
    Calendar,
    BookOpen,
  } from "lucide-react";
  import Link from "next/link";
  import React from "react";

  
  export default function Sidebar({ selectedMenu, setSelectedMenu }: { selectedMenu: string, setSelectedMenu: React.Dispatch<React.SetStateAction<string>> }) {

    const links = [
      { name: "Show Contacts", icon: <Home className="h-4 w-4" />, href: "/"  },
      { name: "Create a Contact", icon: <Users className="h-4 w-4" />, href: "#"  },
      { name: "Update a Contact", icon: <Calendar className="h-4 w-4" />, href: "#" },
      { name: "Delete a Contact", icon: <BookOpen className="h-4 w-4" />, href: "#" },
    ];
    return (
      <aside >
        <div className="flex h-full max-h-screen flex-col gap-2">
          {/* Header Section */}
          <div className="flex h-20 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold text-2xl">
              <Calendar className="h-6 w-6" />
              <span className="">Contacts App</span>
            </Link>
           
          </div>
         
          <div className="flex-1">
            <nav className="grid items-start px-5 text-lg font-medium lg:px-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    selectedMenu === link.name
                      ? "text-primary bg-muted"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setSelectedMenu(link.name)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
  
          {/* Footer Section */}
        
        </div>
      </aside>
    );
  }
  