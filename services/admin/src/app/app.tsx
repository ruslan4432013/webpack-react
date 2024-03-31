import { Outlet } from "react-router-dom";
import { UserCard } from "@packages/shared/src/ui/user-card";

export const App = () => {
  return (
    <div data-testId={'AppTestId'}>
      <h2>ADMIN MODULE</h2>
      <Outlet/>
      <UserCard username={'FROM ADMIN'}/>
    </div>
  )
}
