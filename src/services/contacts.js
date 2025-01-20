import { contactsCollection } from '../db/models/contacts.js';
export const getAllContacts = async () => {
  const contacts = await contactsCollection.find();
  return contacts;
};
export const getContactById = async (contactId) => {
  const contact = await contactsCollection.findById(contactId);
  return contact;
};
export const createContact = async (payload) => {
  const contact = await contactsCollection.create(payload);
  return contact;
};
export const updateContact = async (contactId, payload, options = {}) => {
  const result = await contactsCollection.findOneAndUpdate(
    { id: contactId },
    payload,
    {
      new: true,
      ...options,
    },
  );
  return result;
};
export const deleteContact = async (contactId) => {
  const result = await contactsCollection.findOneAndDelete({ id: contactId });
  return result;
};
