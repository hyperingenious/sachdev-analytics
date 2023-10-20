import SignIn from "../components/ui/SignIn";
import { login } from "../services/supabase/auth";

function Authentication() {
  async function handleSubmit(e, { email, password }) {
    e.preventDefault();
    if (!email || !password) return;
    login();
  }
  return <SignIn handleSubmit={handleSubmit} />;
}
export default Authentication;
