import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: 'active' | 'inactive';
}

interface ContactsState {
  contacts: Contact[];
}

const loadState = (): ContactsState => {
  try {
    const serializedState = localStorage.getItem('contacts');
    if (serializedState === null) {
      return { contacts: [] };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state', err);
    return { contacts: [] };
  }
};

const saveState = (state: ContactsState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('contacts', serializedState);
  } catch (err) {
    console.error('Error saving state', err);
  }
};

const initialState: ContactsState = loadState();

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
      saveState(state);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
        saveState(state);
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      saveState(state);
    },
  },
});

export const { addContact, updateContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
