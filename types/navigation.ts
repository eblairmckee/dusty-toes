export type RootStackParamList = {
  LoggedOut: undefined;
  LogIn: undefined;
  SignUp: undefined;
  Home: { userId: string };
  CreateEntry: undefined;
  EntryDetail: undefined;
  CreateCategory: undefined;
  CategoryDetail: undefined;
};

export type Routes = keyof RootStackParamList;
