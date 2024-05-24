import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from '../redux/features/contacts/contactsSlice';
import { RootState } from '../redux/app/store';

interface EditFormProps {
  id: string;
  onClose: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find((contact) => contact.id === id)
  );

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'active' | 'inactive'>('active');

  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setStatus(contact.status);
    }
  }, [contact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !status) {
      alert('All fields are required');
      return;
    }

    const updatedContact = { id, firstName, lastName, status };
    dispatch(updateContact(updatedContact));
    onClose();
  };

  return (
      <>
    {/* For Large Screens */}
    <div className='lg:block md:hidden hidden'style={{ height: "93vh" }}>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center h-full' >
        <div className="flex flex-col justify-around h-1/2 bg-white rounded-lg" style={{ border: "2px solid black", width: "90%" }}>
          <div>
            <label className="text-3xl px-5 font-semibold">First Name: </label>
            <input
              className="py-2 px-4 border-2 border-black w-2/3"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label className="text-3xl px-5 font-semibold">Last Name: </label>
            <input
              className="py-2 px-4 border-2 border-black w-2/3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
            />
          </div>
          <div className='flex items-center'>
            <label className='text-3xl px-5 font-semibold'>Status:</label>
            <div className="flex flex-col">
              <label className='text-3xl'>
                <input
                  className="mx-2 my-1"
                  type="radio"
                  value="active"
                  checked={status === 'active'}
                  onChange={() => setStatus('active')}
                />
                Active
              </label>
              <label className='text-3xl'>
                <input
                  className="mx-2 my-1"
                  type="radio"
                  value="inactive"
                  checked={status === 'inactive'}
                  onChange={() => setStatus('inactive')}
                />
                Inactive
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="text-3xl font-semibold my-4 px-52 py-10 bg-green-500 text-white rounded-md">Save Edited Contact</button>
      </form>
    </div>
    {/* For Medium Screens */}
    <div className='lg:hidden md:block hidden'style={{ height: "75vh" }}>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center h-full' >
        <div className="flex flex-col justify-around h-1/2 bg-white rounded-lg" style={{ border: "2px solid black", width: "95%" }}>
          <div>
            <label className="text-2xl px-5 font-semibold">First Name: </label>
            <input
              className="py-2 px-4 border-2 border-black w-2/3"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label className="text-2xl px-5 font-semibold">Last Name: </label>
            <input
              className="py-2 px-4 border-2 border-black w-2/3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
            />
          </div>
          <div className='flex items-center'>
            <label className='text-2xl px-5 font-semibold'>Status:</label>
            <div className="flex flex-col">
              <label className='text-3xl'>
                <input
                  className="mx-2 my-1"
                  type="radio"
                  value="active"
                  checked={status === 'active'}
                  onChange={() => setStatus('active')}
                />
                Active
              </label>
              <label className='text-3xl '>
                <input
                  className="mx-2 my-1"
                  type="radio"
                  value="inactive"
                  checked={status === 'inactive'}
                  onChange={() => setStatus('inactive')}
                />
                Inactive
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="my-4 px-8 py- bg-green-500 text-white rounded-md">Save Contact</button>
      </form>
    </div>
    {/* For Small screens */}
    <div className='lg:hidden md:hidden block'style={{ height: "75vh" }}>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center h-full' >
        <div className="flex flex-col justify-around h-1/2 bg-white rounded-lg" style={{ border: "2px solid black", width: "95%" }}>
          <div>
            <label className="ps-5 text-xl font-semibold">First Name: </label>
            <input
              className="py-1 px-2 border-2 border-black w-2/3"
              style={{width:"50%"}}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label className="ps-5 text-xl  font-semibold">Last Name: </label>
            <input
              className=" py-1 px-2 border-2 border-black w-2/3"
              style={{width:"51%"}}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
            />
          </div>
          <div className='flex items-center'>
            <label className='text-xl px-5 font-semibold'>Status:</label>
            <div className="flex flex-col">
              <label className='text-xl'>
                <input
                  className="mx-2 my-1"
                  type="radio"
                  value="active"
                  checked={status === 'active'}
                  onChange={() => setStatus('active')}
                />
                Active
              </label>
              <label className='text-xl '>
                <input
                  className="mx-2 my-1"
                  type="radio"
                  value="inactive"
                  checked={status === 'inactive'}
                  onChange={() => setStatus('inactive')}
                />
                Inactive
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="my-4 px-8 py-4 bg-green-500 text-white rounded-lg">Save Edited Contact</button>
      </form>
    </div>
    </>
  );
};

export default EditForm;
