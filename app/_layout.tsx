import { createDrawerNavigator } from '@react-navigation/drawer';
import Index from '@/app/index';
import ToDoCreate from "@/app/todo"
import { Provider } from "react-redux";
import store from "../redux/store";

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Drawer.Navigator>
        <Drawer.Screen name="index" component={Index} options={{title: 'Home'}}/>
        <Drawer.Screen name="todo" component={ToDoCreate} options={{title: 'To Do'}} />
      </Drawer.Navigator>
    </Provider>
  );

}