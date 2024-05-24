import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/app/store';
import { deleteContact } from '../redux/features/contacts/contactsSlice';

interface ContactListProps {
  onEdit: (id: string) => void;
}

const ContactList: React.FC<ContactListProps> = ({ onEdit }) => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="flex  flex-wrap  mx-auto ">
      {contacts.map((contact, index) => (
        <div key={contact.id} className="w-full md:w-1/4 lg:w-1/6 p-4 flex flex-col justify-start ">
          <div className='w-full h-full bg-white border border-gray-800 px-5 flex flex-col text-start justify-start'>
            <div className="font-semibold text-black-600">{index + 1}.</div>
            <div className="lg:text-lg md:text-md sm:text-sm font-semibold">First Name: {contact.firstName}</div>
            <div className="lg:text-lg md:text-md sm:text-sm font-semibold">Last Name: {contact.lastName}</div>
            <div className="lg:text-lg md:text-md sm:text-sm font-semibold">Status: {contact.status === 'active' ? 'Active' : 'Inactive'}</div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <button onClick={() => onEdit(contact.id)} className="bg-green-500 text-white px-2 py-2 rounded-md w-32">Edit</button>
            <button onClick={() => handleDelete(contact.id)} className="bg-red-500 text-white px-2 py-2 rounded-md w-32 mt-2">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
