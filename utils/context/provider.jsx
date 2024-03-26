import AppContext from './context';

/**
 * Context provider for general purpose app shared state.
 *
 * You can use this context to store any kind of shared state
 * you need throughout the app.
 */
const AppProvider = ({ children }) => {
  // 1. To add a new state to the context, first init a new state hook here.
  // const auth = useAuthState(); // Example hook

  // 2. Then add the new state as a new property to this object and that's all.
  // Your state will be available in every component of the app.
  const state = {};

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
