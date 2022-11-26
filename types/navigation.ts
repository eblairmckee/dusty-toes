export type RootStackParamList = {
  LoggedOut: undefined;
  LogIn: undefined;
  SignUp: undefined;
  Home: { userId: string };
  Checkin: undefined;
  Edit: undefined;
  EditCheckin: { itemId: string };
  Goal: undefined;
};

export type Routes = keyof RootStackParamList;
