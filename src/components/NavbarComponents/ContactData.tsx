import React, { useState } from 'react';
import ContactForm from '../Contact/ContactForm';
import ContactList from '../Contact/ContactList';
import EditForm from '../Contact/EditForm';


const ContactData: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'list' | 'edit'>('form');
  const [editingContactId, setEditingContactId] = useState<string | null>(null);
  const [addContact, setAddContact] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setEditingContactId(id);
    setActiveTab('edit');
  };

  const handleSubmit = () => {
    setAddContact(null);
    setActiveTab('list');
  };

  return (
    <div className="w-full bg-yellow-100">
      <nav className="flex justify-around border-b border-gray-200">
        <button
          className={`p-2 lg:text-2xl md:text-md sm:text-sm  ${activeTab === 'form' ? 'text-blue-700 border-b-2 border-blue-600' : 'text-black'}`}
          onClick={() => setActiveTab('form')}
        >
          Contact Form
        </button>
        <button
          className={`p-2 lg:text-2xl md:text-md sm:text-sm ${activeTab === 'list' ? 'text-blue-700 border-b-2 border-blue-600' : 'text-black'}`}
          onClick={() => setActiveTab('list')}
        >
          Contact List
        </button>
        <button
          className={`p-2 lg:text-2xl md:text-md sm:text-sm ${activeTab === 'edit' ? 'text-blue-700 border-b-2 border-blue-600' : 'text-black'}`} 
          onClick={() => setActiveTab('edit')}
        >
          Edit Contact
        </button>
      </nav>
      <div className="">
        {activeTab === 'form' ? (
          <ContactForm id={addContact} onSubmit={handleSubmit} />
        ) : activeTab === 'list' ? (
          <ContactList onEdit={handleEdit} />
        ) : (
          <EditForm id={editingContactId || ''} onClose={() => setActiveTab('list')} /> 
        )}
      </div>
    </div>
  );
};

export default ContactData;
