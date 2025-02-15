const LOCAL_STORAGE_KEYS = {
    MESSAGES: 'chat_messages',
    SESSIONS: 'chat_sessions',
    USER_PREFERENCES: 'user_preferences'
  };
  
  export const localStorageService = {
    // Message handling
    saveMessages: (messages) => {
      localStorage.setItem(LOCAL_STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
    },
  
    getMessages: () => {
      const messages = localStorage.getItem(LOCAL_STORAGE_KEYS.MESSAGES);
      return messages ? JSON.parse(messages) : [];
    },
  
    // Session handling
    saveSessions: (sessions) => {
      localStorage.setItem(LOCAL_STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));
    },
  
    getSessions: () => {
      const sessions = localStorage.getItem(LOCAL_STORAGE_KEYS.SESSIONS);
      return sessions ? JSON.parse(sessions) : [];
    },
  
    // User preferences
    savePreferences: (preferences) => {
      localStorage.setItem(LOCAL_STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences));
    },
  
    getPreferences: () => {
      const preferences = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_PREFERENCES);
      return preferences ? JSON.parse(preferences) : {};
    },
  
    // Clear all data
    clearAll: () => {
      localStorage.clear();
    }
  };