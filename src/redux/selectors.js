export const selectContacts = state => state.contacts.contacts.items;
export const selectError = state => state.contacts.contacts.error;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectDeletedId = state => state.contacts.contacts.deletedId;
export const selectFilter = state => state.filter.filter;
