import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import AuthenticationHeader from 'components/login/AuthenticationHeader';
import FormItem from 'components/login/FormItem';
import { useLogin } from 'utils/login';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/stylesheets/global.css';
import 'assets/stylesheets/authentication.css';

function Login() {
  useEffect(() => { document.title = 'Login'; }, []);
  const login = useLogin();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const body = await response.json();
      login(body);
    } else {
      toast.error('Invalid username or password');
    }
  }

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center background-auth">
      <main className="container-fluid px-0 py-4">
        <div id="container" className="mx-auto px-4 px-sm-5 rounded-4">
          <AuthenticationHeader text="Welcome Back!" />
          <div className="px-4 px-sm-5 py-4">
            <form onSubmit={handleSubmit}>
              <FormItem label="Username" type="text" name="username" value={formData.username} onChange={handleInputChange} />
              <FormItem label="Password" type="password" name="password" value={formData.password} onChange={handleInputChange} />
              <button type="submit" className="miz-button w-100 mt-4 mb-3">Login</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
