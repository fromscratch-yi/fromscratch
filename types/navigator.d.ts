interface ContactProperty {
  email?: string[];
  name?: string[];
  tel?: string[];
}

interface ContactsManager {
  select: (properties: string[]) => Promise<ContactProperty[]>;
  add: (properties: ContactProperty) => Promise<void>;
}

interface Navigator {
  contacts?: ContactsManager;
}
