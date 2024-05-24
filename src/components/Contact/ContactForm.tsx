import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/features/contacts/contactsSlice';

interface ContactFormProps {
  id: string | null;
  onSubmit: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ id, onSubmit }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'active' | 'inactive'>('active');
  const [errors, setErrors] = useState({ firstName: '', lastName: '' });

  useEffect(() => {
    setFirstName('');
    setLastName('');
    setStatus('active');
  }, [id]);

  const validate = () => {
    const newErrors = { firstName: '', lastName: '' };
    let isValid = true;

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const newContact = { id: id || Date.now().toString(), firstName, lastName, status };
      dispatch(addContact(newContact));
      onSubmit();
      setFirstName('');
      setLastName('');
      setStatus('active');
    }
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
            {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
          </div>
          <div>
            <label className="text-3xl px-5 font-semibold">Last Name: </label>
            <input
              className="py-2 px-4 border-2 border-black w-2/3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
            />
            {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
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
        <button type="submit" className="text-3xl font-semibold my-4 px-52 py-10 bg-green-500 text-white rounded-md">Save Contact</button>
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
            {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
          </div>
          <div>
            <label className="text-2xl px-5 font-semibold">Last Name: </label>
            <input
              className="py-2 px-4 border-2 border-black w-2/3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
            />
            {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
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
            {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
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
            {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
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
        <button type="submit" className="my-4 px-8 py-4 bg-green-500 text-white rounded-lg">Save Contact</button>
      </form>
    </div>
    </>
  );
};

export default ContactForm;
